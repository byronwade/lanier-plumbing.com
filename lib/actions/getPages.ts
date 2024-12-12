"use cache";

import { getPayloadClient } from "../payload";
import type { Page } from "../../payload-types";
import { getSettings } from "./getSettings";

interface GetPagesOptions {
	page?: number;
	limit?: number;
	sort?: string;
}

// Helper function to check if a page is the home page
export async function isHomePage(pageId: string) {
	try {
		const settings = await getSettings();
		return settings?.homePage?.id === pageId;
	} catch (error) {
		console.error("Error checking if page is home:", error);
		return false;
	}
}

// Get page by ID
async function getPageById(id: string) {
	try {
		const payload = await getPayloadClient();
		const page = await payload.findByID({
			collection: "pages",
			id,
			depth: 2,
			draft: false,
		});
		return page as Page;
	} catch (error) {
		console.error("Error fetching page by ID:", error);
		return null;
	}
}

export async function getPageBySlug(slug: string) {
	try {
		console.log("Fetching page by slug:", slug);

		// If it's the root path, get the home page from settings
		if (!slug || slug === "/") {
			const settings = await getSettings();
			if (!settings?.homePage?.id) {
				console.error("No home page set in settings");
				return null;
			}

			return getPageById(settings.homePage.id);
		}

		// For all other pages, search by slug
		const payload = await getPayloadClient();
		const pages = await payload.find({
			collection: "pages",
			where: {
				slug: {
					equals: slug,
				},
			},
			depth: 2,
			draft: false,
			limit: 1,
		});

		if (!pages.docs[0]) {
			return null;
		}

		// Cache the result by ID for future use
		return getPageById(pages.docs[0].id);
	} catch (error) {
		console.error("Error in getPageBySlug:", error);
		return null;
	}
}

export async function getAllPages({ page = 1, limit = 10, sort = "-createdAt" }: GetPagesOptions = {}) {
	try {
		console.log("Fetching all pages", { page, limit, sort });
		const payload = await getPayloadClient();

		// Get settings to identify home page
		const settings = await getSettings();
		const homePageId = settings?.homePage?.id;

		// Get all pages except home page
		const pages = await payload.find({
			collection: "pages",
			where:
				homePageId ?
					{
						id: {
							not_equals: homePageId,
						},
					}
				:	{},
			depth: 1,
			draft: false,
			page,
			limit,
			sort,
		});

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
