"use server";

import { Suspense } from "react";
import { LoadingSkeleton } from "@/components/skeletons/LoadingSkeleton";
import { getPageBySlug } from "@/lib/actions/getPages";
import { notFound } from "next/navigation";
import { getSettings } from "@/lib/actions/getSettings";
import type { Metadata } from "next";
import type { Page } from "@/payload-types";
import PageContent from "@/components/PageContent";

interface PageProps {
	params: {
		slug?: string[];
	};
}

// Helper function to get page data
async function getPageData(slug: string | null): Promise<Page | null> {
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
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const nextjs15 = await params;
	const slug = nextjs15.slug ? nextjs15.slug.join("/") : null;
	const page = await getPageData(slug);

	if (!page) {
		notFound();
	}

	const ogImage = page.pageMeta?.image && "url" in page.pageMeta.image ? [{ url: page.pageMeta.image.url }] : [];

	return {
		title: page.pageMeta?.title || page.title,
		description: page.pageMeta?.description,
		openGraph: {
			title: page.pageMeta?.title || page.title,
			description: page.pageMeta?.description,
			images: ogImage,
		},
	};
}

export default async function Page({ params }: PageProps) {
	const nextjs15 = await params;
	const slug = nextjs15.slug ? nextjs15.slug.join("/") : null;
	const data = await getPageData(slug);

	if (!data) {
		notFound();
	}

	return (
		<Suspense fallback={<LoadingSkeleton />}>
			<PageContent key={data.id} data={data} />
		</Suspense>
	);
}
