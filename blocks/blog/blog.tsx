"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/actions/getPosts";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Page } from "@/payload-types";
import * as React from "react";

type LayoutType = NonNullable<Page["layout"]>;
type BaseBlock = Extract<LayoutType[number], { blockType: string }>;

interface Media {
	id: string;
	url: string;
	alt: string;
	filename: string;
}

interface Post {
	id: string;
	title: string;
	slug: string;
	content: {
		root: {
			children: Array<{ text: string }>;
		};
	};
	createdAt: string;
	image?: Media;
}

interface ExtendedPost {
	id: string;
	title: string;
	slug: string;
	excerpt?: string;
	createdAt: string;
	featuredImage?: Media;
}

interface PostsResponse {
	docs: Post[];
	totalDocs: number;
	totalPages: number;
	page: number;
	hasNextPage: boolean;
	hasPrevPage: boolean;
}

interface BlogBlock extends Omit<BaseBlock, "blockType"> {
	blockType: "blog";
	header: {
		title: string;
		subtitle: string;
	};
	featuredPost?: string | { id: string };
	postsPerPage: number;
	showPagination: boolean;
}

// Create a client
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000, // 1 minute
			refetchOnWindowFocus: false,
		},
	},
});

function BlogContent(props: BlogBlock) {
	const { header, postsPerPage = 9, showPagination = true } = props;
	const [page, setPage] = useState(1);
	const [sort, setSort] = useState<"asc" | "desc">("desc");

	// Fetch posts with React Query
	const { data: postsData } = useQuery({
		queryKey: ["posts"],
		queryFn: getPosts,
		staleTime: 1000 * 60 * 5, // 5 minutes
	});

	const posts = postsData?.docs || [];

	const handlePageChange = (newPage: number) => {
		setPage(newPage);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<section className="py-16 bg-white">
			{/* Header */}
			<div className="mb-8 text-center">
				<h2 className="mb-2 text-3xl font-bold tracking-tight">{header.title}</h2>
				<p className="text-muted-foreground">{header.subtitle}</p>
			</div>

			{/* Featured Post */}
			{postsData?.featuredPost && (
				<div className="mb-12">
					<h3 className="mb-6 text-2xl font-semibold">Featured Post</h3>
					<Link href={`/expert-plumbing-tips/${postsData.featuredPost.slug}`} className="block">
						<div className="overflow-hidden transition-all border rounded-lg hover:shadow-lg bg-card text-card-foreground">
							<div className="p-0">
								<div className="grid gap-6 md:grid-cols-2">
									{postsData.featuredPost.featuredImage?.url && (
										<div className="relative aspect-[16/9] md:aspect-[4/3]">
											<Image src={postsData.featuredPost.featuredImage.url} alt={postsData.featuredPost.featuredImage.alt || postsData.featuredPost.title} fill className="object-cover" />
										</div>
									)}
									<div className="p-6">
										<h4 className="mb-4 text-2xl font-bold">{postsData.featuredPost.title}</h4>
										{postsData.featuredPost.excerpt && <p className="mb-4 text-muted-foreground">{postsData.featuredPost.excerpt}</p>}
										<div className="text-sm text-muted-foreground">
											{new Date(postsData.featuredPost.createdAt).toLocaleDateString("en-US", {
												day: "numeric",
												month: "short",
												year: "numeric",
											})}
										</div>
									</div>
								</div>
							</div>
						</div>
					</Link>
				</div>
			)}

			{/* Sort */}
			<div className="flex items-center justify-end mb-8">
				<select value={sort} onChange={(e) => setSort(e.target.value as "asc" | "desc")} className="h-9 w-[180px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring">
					<option value="desc">Newest first</option>
					<option value="asc">Oldest first</option>
				</select>
			</div>

			{/* Posts Grid */}
			<div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
				{posts.map((post) => (
					<Link key={post.id} href={`/expert-plumbing-tips/${post.slug}`} className="block">
						<div className="overflow-hidden transition-all border rounded-lg hover:shadow-lg bg-card text-card-foreground">
							<div className="p-0">
								{post.featuredImage?.url && (
									<div className="relative aspect-[16/9]">
										<Image src={post.featuredImage.url} alt={post.featuredImage.alt || post.title} fill className="object-cover" />
									</div>
								)}
								<div className="p-4">
									<h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
									{post.excerpt && <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>}
									<div className="text-sm text-muted-foreground">
										{new Date(post.createdAt).toLocaleDateString("en-US", {
											day: "numeric",
											month: "short",
											year: "numeric",
										})}
									</div>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>

			{/* Pagination */}
			{showPagination && postsData?.totalPages > 1 && (
				<div className="flex items-center justify-center gap-2">
					<Button variant="outline" size="icon" onClick={() => handlePageChange(page - 1)} disabled={!postsData.hasPrevPage}>
						<ChevronLeft className="w-4 h-4" />
						<span className="sr-only">Previous page</span>
					</Button>
					{Array.from({ length: postsData.totalPages }, (_, i) => (
						<Button key={i + 1} variant={page === i + 1 ? "default" : "outline"} size="sm" onClick={() => handlePageChange(i + 1)}>
							{i + 1}
						</Button>
					))}
					<Button variant="outline" size="icon" onClick={() => handlePageChange(page + 1)} disabled={!postsData.hasNextPage}>
						<ChevronRight className="w-4 h-4" />
						<span className="sr-only">Next page</span>
					</Button>
				</div>
			)}
		</section>
	);
}

// Wrap the component with QueryClientProvider
export default function Blog(props: BlogBlock) {
	return (
		<QueryClientProvider client={queryClient}>
			<BlogContent {...props} />
		</QueryClientProvider>
	);
}
