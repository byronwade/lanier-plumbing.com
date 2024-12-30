"use server";

import { Suspense } from "react";
import { LoadingSkeleton } from "@/components/skeletons/LoadingSkeleton";
import { getPageBySlug } from "@/lib/actions/getPages";
import { getSettings } from "@/lib/actions/getSettings";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import { unstable_cache } from "next/cache";
import { getMetadata } from "@/lib/config/seo";

interface PageProps {
	params: {
		slug?: string[];
	};
}

// Cache the page data fetch
const getCachedPageData = unstable_cache(
	async (slug: string | null) => {
		try {
			if (!slug) {
				const settings = await getSettings();
				if (!settings?.homePage) return null;

				// If homePage is a number, use it as the ID
				const homePageId = typeof settings.homePage === "number" ? settings.homePage : settings.homePage.id;
				if (!homePageId) return null;

				return await getPageBySlug("/");
			}
			return await getPageBySlug(slug);
		} catch (error) {
			console.error("Error fetching page data:", error);
			return null;
		}
	},
	["dynamic-page"],
	{
		revalidate: 30,
		tags: ["pages"],
	}
);

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const slug = params.slug ? params.slug.join("/") : null;
	const page = await getCachedPageData(slug);

	if (!page) {
		notFound();
	}

	const title = page.pageMeta?.title || page.title;
	return getMetadata({
		title,
		description: page.pageMeta?.description,
		openGraph: {
			title,
			description: page.pageMeta?.description,
			images: page.pageMeta?.image ? [{ url: page.pageMeta.image.url }] : undefined,
		},
	});
}

// Dynamic page component
export default async function DynamicPage({ params }: PageProps) {
	const slug = params.slug ? params.slug.join("/") : null;
	const data = await getCachedPageData(slug);

	if (!data) {
		notFound();
	}

	return (
		<Suspense fallback={<LoadingSkeleton />}>
			<PageContent key={data.id} data={data} />
		</Suspense>
	);
}
