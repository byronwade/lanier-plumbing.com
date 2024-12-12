"use cache";

import { Suspense } from "react";
import { LoadingSkeleton } from "@/components/skeletons/LoadingSkeleton";
import dynamic from "next/dynamic";
import { getPageBySlug } from "@/lib/actions/getPages";
import { notFound } from "next/navigation";
import { getSettings } from "@/lib/actions/getSettings";
import type { Metadata } from "next";
import type { Page } from "@/payload-types";

interface PageProps {
	params: Promise<{
		slug?: string[];
	}>;
}

// Dynamic imports for blocks
const Hero = dynamic(() => import("@/blocks/hero/hero"), {
	loading: () => <LoadingSkeleton />,
});

// Dynamic import for Lexical renderer
const LexicalRenderer = dynamic(() => import("@/components/LexicalRenderer"), {
	loading: () => <LoadingSkeleton />,
});

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const nextjs15 = await params;
	const settings = await getSettings();

	// Handle root path - redirect to home page
	if (!nextjs15?.slug || nextjs15.slug.length === 0) {
		if (!settings?.homePage?.id) {
			notFound();
		}
		const homePage = await getPageBySlug("/");
		if (!homePage) {
			notFound();
		}
		return {
			title: homePage.pageMeta?.title || homePage.title,
			description: homePage.pageMeta?.description,
			openGraph: {
				images: homePage.pageMeta?.image ? [homePage.pageMeta.image] : [],
			},
		};
	}

	const slug = nextjs15.slug.join("/");
	const page = await getPageBySlug(slug);

	if (!page) {
		notFound();
	}

	return {
		title: page.pageMeta?.title || page.title,
		description: page.pageMeta?.description,
		openGraph: {
			images: page.pageMeta?.image ? [page.pageMeta.image] : [],
		},
	};
}

export default async function Page({ params }: PageProps) {
	const nextjs15 = await params;
	const settings = await getSettings();

	// Handle root path - should be handled by app/page.tsx
	if (!nextjs15?.slug || nextjs15.slug.length === 0) {
		if (!settings?.homePage?.id) {
			notFound();
		}
		const homePage = await getPageBySlug("/") as Page;
		if (!homePage) {
			notFound();
		}
		return homePage;
	}

	const slug = nextjs15.slug.join("/");
	const data = await getPageBySlug(slug) as Page;

	if (!data) {
		notFound();
	}

	return (
		<Suspense fallback={<LoadingSkeleton />}>
			{/* Layout Blocks */}
			{data.layout?.length > 0 && (
				<div className="w-full">
					{data.layout.map((block, index) => {
						switch (block.blockType) {
							case "hero":
								return <Hero key={index} {...block} />;
							default:
								return null;
						}
					})}
				</div>
			)}

			{/* Rich Text Content */}
			{data.content && (
				<div className="container px-4 py-12 mx-auto">
					<div className="prose prose-lg max-w-none">
						<LexicalRenderer content={data.content} />
					</div>
				</div>
			)}

			{/* Show message if no content or layout */}
			{!data.layout?.length && !data.content && (
				<div className="container px-4 py-12 mx-auto">
					<div className="text-center text-gray-600">
						{data.title ? `${data.title} has no content yet.` : "This page has no content yet."}
					</div>
				</div>
			)}
		</Suspense>
	);
}
