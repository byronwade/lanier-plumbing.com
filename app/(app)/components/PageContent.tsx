"use client";

import { Suspense } from "react";
import { LoadingSkeleton } from "@/components/skeletons/LoadingSkeleton";
import dynamic from "next/dynamic";
import type { Page } from "@/payload-types";
import { ErrorBoundary } from "react-error-boundary";

// Dynamic imports for blocks with no SSR to avoid hydration issues
const Hero = dynamic(() => import("@/blocks/hero/hero"), {
	loading: () => <LoadingSkeleton />,
	ssr: false,
});

const CostSaving = dynamic(() => import("@/blocks/cost-saving/cost-saving"), {
	loading: () => <LoadingSkeleton />,
	ssr: false,
});

// Dynamic import for Lexical renderer
const LexicalRenderer = dynamic(() => import("@/components/LexicalRenderer"), {
	loading: () => <LoadingSkeleton />,
});

interface PageContentProps {
	data: Page;
}

function ErrorFallback({ error }: { error: Error }) {
	return (
		<div className="container px-4 py-12 mx-auto">
			<div className="text-center text-gray-600">
				<h2 className="mb-2 text-xl font-semibold">Something went wrong</h2>
				<p className="text-sm text-gray-500">{error.message}</p>
			</div>
		</div>
	);
}

function PageBlocks({ layout }: { layout: NonNullable<Page["layout"]> }) {
	return (
		<div>
			{layout.map((block, index) => {
				if (!block?.blockType) return null;

				const blockKey = `${block.blockType}-${block.id || index}`;
				console.log("Rendering block:", block.blockType); // Debug log

				switch (block.blockType) {
					case "hero":
						return (
							<ErrorBoundary key={blockKey} FallbackComponent={ErrorFallback}>
								<Suspense fallback={<LoadingSkeleton />}>
									<Hero {...block} />
								</Suspense>
							</ErrorBoundary>
						);
					case "costSaving":
						console.log("Rendering costSaving block:", block); // Debug log
						return (
							<ErrorBoundary key={blockKey} FallbackComponent={ErrorFallback}>
								<Suspense fallback={<LoadingSkeleton />}>
									<CostSaving {...block} />
								</Suspense>
							</ErrorBoundary>
						);
					default:
						if (process.env.NODE_ENV === "development") {
							console.warn(`Unknown block type: ${block.blockType}`);
						}
						return null;
				}
			})}
		</div>
	);
}

export default function PageContent({ data }: PageContentProps) {
	const layout = Array.isArray(data.layout) ? data.layout : [];
	const hasLayout = layout.length > 0;
	const hasContent = Boolean(data.content);

	console.log("Page layout:", layout); // Debug log

	return (
		<div>
			{/* Layout Blocks */}
			{hasLayout && <PageBlocks key={`blocks-${data.id}`} layout={layout} />}

			{/* Rich Text Content */}
			{hasContent && data.content && (
				<ErrorBoundary key={`content-${data.id}`} FallbackComponent={ErrorFallback}>
					<div className="container px-4 py-12 mx-auto">
						<div className="prose prose-lg max-w-none">
							<LexicalRenderer content={data.content} />
						</div>
					</div>
				</ErrorBoundary>
			)}

			{/* Show message if no content or layout */}
			{!hasLayout && !hasContent && (
				<div key={`empty-${data.id}`} className="container px-4 py-12 mx-auto">
					<div className="text-center text-gray-600">
						{data.title ? `${data.title} has no content yet.` : "This page has no content yet."}
					</div>
				</div>
			)}
		</div>
	);
}
