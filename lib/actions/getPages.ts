"use server";

import { getPayloadClient } from "../payload";
import type { Page } from "../../payload-types";
import { getSettings } from "./getSettings";
import { unstable_cache } from "next/cache";

// Cache page queries
const getCachedPageBySlug = unstable_cache(
	async (slug: string) => {
		const payload = await getPayloadClient();
		const pages = await payload.find({
			collection: "pages",
			where: {
				slug: {
					equals: slug,
				},
			},
			depth: 2,
			draft: true,
			limit: 1,
		});
		return pages.docs[0] as Page | null;
	},
	["pages-by-slug"],
	{
		revalidate: 60,
		tags: ["pages"],
	}
);

const getCachedPageById = unstable_cache(
	async (id: string | number) => {
		const payload = await getPayloadClient();
		const page = await payload.findByID({
			collection: "pages",
			id: id.toString(),
			depth: 2,
			draft: true,
		});
		return page as Page;
	},
	["pages-by-id"],
	{
		revalidate: 60,
		tags: ["pages"],
	}
);

// Helper function to check if a page is the home page
export async function isHomePage(pageId: string) {
	try {
		const settings = await getSettings();
		return settings?.homePage?.id?.toString() === pageId;
	} catch (error) {
		console.error("Error checking if page is home:", error);
		return false;
	}
}

// Get page by ID with caching
async function getPageById(id: string | number) {
	try {
		return await getCachedPageById(id);
	} catch (error) {
		console.error("Error fetching page by ID:", error);
		return null;
	}
}

export async function getPageBySlug(slug: string) {
	try {
		// If it's the root path, get the home page from settings
		if (!slug || slug === "/") {
			const settings = await getSettings();
			if (!settings?.homePage?.id) {
				console.error("No home page set in settings");
				return null;
			}
			return await getPageById(settings.homePage.id);
		}

		// For all other pages, use cached query
		const page = await getCachedPageBySlug(slug);
		if (!page) return null;

		return page;
	} catch (error) {
		console.error("Error in getPageBySlug:", error);
		return null;
	}
}

// Cache all pages query
const getCachedAllPages = unstable_cache(
	async ({ page = 1, limit = 10, sort = "-createdAt", homePageId }: { page: number; limit: number; sort: string; homePageId?: string | number }) => {
		const payload = await getPayloadClient();
		return await payload.find({
			collection: "pages",
			where:
				homePageId ?
					{
						id: {
							not_equals: homePageId.toString(),
						},
					}
				:	{},
			depth: 1,
			draft: true,
			page,
			limit,
			sort,
		});
	},
	["all-pages"],
	{
		revalidate: 60,
		tags: ["pages"],
	}
);

export async function getAllPages({ page = 1, limit = 10, sort = "-createdAt" } = {}) {
	try {
		// Get settings to identify home page
		const settings = await getSettings();
		const homePageId = settings?.homePage?.id;

		// Get all pages except home page using cached query
		const pages = await getCachedAllPages({ page, limit, sort, homePageId });

		return {
			docs: pages.docs as Page[],
			totalDocs: pages.totalDocs,
			page: pages.page,
			totalPages: pages.totalPages,
			hasNextPage: pages.hasNextPage,
			hasPrevPage: pages.hasPrevPage,
			nextPage: pages.nextPage,
			prevPage: pages.prevPage,
		};
	} catch (error) {
		console.error("Error in getAllPages:", error);
		return {
			docs: [],
			totalDocs: 0,
			page: 1,
			totalPages: 1,
			hasNextPage: false,
			hasPrevPage: false,
			nextPage: null,
			prevPage: null,
		};
	}
}
