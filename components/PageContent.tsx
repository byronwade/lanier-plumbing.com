"use client";

import { ErrorBoundary } from "react-error-boundary";
import dynamic from "next/dynamic";
import type { Page } from "@/payload-types";
import type { ElementType, ComponentType } from "react";
import { memo, Suspense } from "react";

// Dynamic import for RichText to avoid SSR issues
const LexicalRenderer = dynamic(() => import("@/components/LexicalRenderer").then((mod) => mod.default), {
	ssr: false,
	loading: () => <div className="bg-gray-100 rounded-lg animate-pulse h-96" />,
});

// Import all block components with suspense boundaries
const Hero = dynamic(() => import("@/blocks/hero/hero"), {
	loading: () => <BlockSkeleton />,
	ssr: true,
}) as ComponentType<any>;

const Facts = dynamic(() => import("@/blocks/facts/facts"), {
	loading: () => <BlockSkeleton />,
	ssr: true,
}) as ComponentType<any>;

const CostSaving = dynamic(() => import("@/blocks/cost-saving/cost-saving"), {
	loading: () => <BlockSkeleton />,
	ssr: true,
}) as ComponentType<any>;

const Services = dynamic(() => import("@/blocks/services/services"), {
	loading: () => <BlockSkeleton />,
	ssr: true,
}) as ComponentType<any>;

const FAQ = dynamic(() => import("@/blocks/faq/faq"), {
	loading: () => <BlockSkeleton />,
	ssr: true,
}) as ComponentType<any>;

const Testimonials = dynamic(() => import("@/blocks/testimonials/testimonials"), {
	loading: () => <BlockSkeleton />,
	ssr: true,
}) as ComponentType<any>;

const Contact = dynamic(() => import("@/blocks/contact/contact"), {
	loading: () => <BlockSkeleton />,
	ssr: true,
}) as ComponentType<any>;

const Blog = dynamic(() => import("@/blocks/blog/blog"), {
	loading: () => <BlockSkeleton />,
	ssr: true,
}) as ComponentType<any>;

const About = dynamic(() => import("@/blocks/about/about"), {
	loading: () => <BlockSkeleton />,
	ssr: true,
}) as ComponentType<any>;

interface PageContentProps {
	data: Page;
}

interface ErrorFallbackProps {
	error: Error;
	componentName?: string;
}

interface PageBlock {
	blockType: string;
	id?: string;
	[key: string]: any;
}

const BlockSkeleton = memo(function BlockSkeleton() {
	return <div className="w-full bg-gray-100 rounded-lg h-96 animate-pulse" />;
});

const ErrorFallback = memo(function ErrorFallback({ error, componentName }: ErrorFallbackProps) {
	return (
		<div role="alert" className="p-4 text-red-900 rounded-lg bg-red-50">
			<h2 className="mb-2 text-lg font-semibold">Error in {componentName || "component"}</h2>
			<p className="text-sm text-red-800">{error.message}</p>
		</div>
	);
});

// Define all possible block types
type BlockType = "hero" | "facts" | "costSaving" | "services" | "faq" | "testimonials" | "contact" | "blog" | "about";

// Map of block types to components
const blockComponents: Record<BlockType, ComponentType<any>> = {
	hero: Hero,
	facts: Facts,
	costSaving: CostSaving,
	services: Services,
	faq: FAQ,
	testimonials: Testimonials,
	contact: Contact,
	blog: Blog,
	about: About,
};

const PageBlocks = memo(function PageBlocks({ layout }: { layout: PageBlock[] }) {
	if (!layout?.length) return null;

	return (
		<>
			{layout.map((block: PageBlock, i: number) => {
				if (!block?.blockType) return null;

				const BlockComponent = blockComponents[block.blockType as BlockType];
				if (!BlockComponent) {
					console.warn(`No component found for block type: ${block.blockType}`);
					return null;
				}

				const blockKey = `${block.blockType}-${i}-${block.id || ""}`;

				return (
					<Suspense key={blockKey} fallback={<BlockSkeleton />}>
						<ErrorBoundary FallbackComponent={({ error }) => <ErrorFallback error={error} componentName={block.blockType} />}>
							<BlockComponent {...block} />
						</ErrorBoundary>
					</Suspense>
				);
			})}
		</>
	);
});

const RichTextContent = memo(function RichTextContent({ content }: { content: any }) {
	return (
		<div className="container px-4 py-12 mx-auto">
			<div className="prose prose-lg max-w-none">
				<LexicalRenderer content={content} />
			</div>
		</div>
	);
});

const EmptyContent = memo(function EmptyContent({ title }: { title?: string }) {
	return (
		<div className="container px-4 py-12 mx-auto">
			<div className="text-center text-gray-600">{title ? `${title} has no content yet.` : "This page has no content yet."}</div>
		</div>
	);
});

export default function PageContent({ data }: PageContentProps) {
	const layout = Array.isArray(data.layout) ? data.layout : [];
	const hasLayout = layout.length > 0;
	const hasContent = Boolean(data.content);

	return (
		<div>
			{/* Layout Blocks */}
			{hasLayout && <PageBlocks key={`blocks-${data.id}`} layout={layout} />}

			{/* Rich Text Content */}
			{hasContent && data.content && (
				<ErrorBoundary key={`content-${data.id}`} FallbackComponent={({ error }) => <ErrorFallback error={error} componentName="Rich Text Content" />}>
					<RichTextContent content={data.content} />
				</ErrorBoundary>
			)}

			{/* Show message if no content or layout */}
			{!hasLayout && !hasContent && <EmptyContent key={`empty-${data.id}`} title={data.title} />}
		</div>
	);
}
