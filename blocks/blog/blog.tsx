"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/actions/getPosts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Page, Post } from "@/payload-types";
import type { Media } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type BaseBlock = Extract<LayoutType[number], { blockType: string }>;

interface ExtendedPost {
	id: string;
	title: string;
	slug: string;
	excerpt?: string;
	createdAt: string;
	featuredImage?: Media;
}

interface PostsResponse {
	docs: ExtendedPost[];
	totalPages: number;
	page: number;
	totalDocs: number;
	hasNextPage: boolean;
	hasPrevPage: boolean;
}

interface BlogBlock extends Omit<BaseBlock, "blockType"> {
	blockType: "blog";
	header: {
		title: string;
		subtitle: string;
	};
	featuredPost?: string | { id: string }; // Make featuredPost optional
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
	const { data: postsData, isLoading: isLoadingPosts } = useQuery({
		queryKey: ["posts", page, postsPerPage, sort],
		queryFn: async () => {
			const posts = await getPosts({
				limit: postsPerPage,
				page,
			});

			// Sort posts by date and transform to ExtendedPost type
			const sortedPosts = [...posts]
				.sort((a, b) => {
					const dateA = new Date(a.createdAt || "").getTime();
					const dateB = new Date(b.createdAt || "").getTime();
					return sort === "desc" ? dateB - dateA : dateA - dateB;
				})
				.map((post) => ({
					id: post.id,
					title: post.title,
					slug: post.slug,
					excerpt: typeof post.content === "object" && post.content?.root?.children?.[0]?.text ? String(post.content.root.children[0].text).slice(0, 160) + "..." : undefined,
					createdAt: post.createdAt,
					featuredImage: post.image as Media | undefined,
				}));

			// If featuredPost is "first", use the first post as featured
			if (props.featuredPost === "first" && sortedPosts.length > 0) {
				props.featuredPost = { id: sortedPosts[0].id };
			}

			return {
				docs: sortedPosts,
				totalPages: Math.ceil(posts.length / postsPerPage),
				page,
				totalDocs: posts.length,
				hasNextPage: page * postsPerPage < posts.length,
				hasPrevPage: page > 1,
			};
		},
	});

	const handlePageChange = (newPage: number) => {
		setPage(newPage);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (isLoadingPosts) {
		return (
			<div className="container px-4 py-8 mx-auto max-w-7xl">
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: postsPerPage }).map((_, i) => (
						<div key={i} className="h-64 bg-gray-100 rounded-lg animate-pulse" />
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="container px-4 py-8 mx-auto max-w-7xl">
			{/* Header */}
			<div className="mb-8 text-center">
				<h2 className="mb-2 text-3xl font-bold tracking-tight">{header.title}</h2>
				<p className="text-muted-foreground">{header.subtitle}</p>
			</div>

			{/* Sort */}
			<div className="flex items-center justify-end mb-8">
				<Select defaultValue={sort} onValueChange={(value: "asc" | "desc") => setSort(value)}>
					<SelectTrigger>
						<SelectValue placeholder="Sort by" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="desc">Newest first</SelectItem>
						<SelectItem value="asc">Oldest first</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Posts Grid */}
			<div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
				{postsData?.docs.map((post) => (
					<Link key={post.id} href={`/expert-plumbing-tips/${post.slug}`}>
						<Card>
							<CardContent className="p-0">
								<div className="overflow-hidden transition-all hover:shadow-lg">
									{post.featuredImage?.url && (
										<div className="relative aspect-[16/9]">
											<Image src={post.featuredImage.url} alt={post.featuredImage.alt || post.title} fill className="object-cover" />
										</div>
									)}
									<div className="p-4">
										<h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
										{post.excerpt && <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>}
										<div className="flex items-center justify-between">
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
							</CardContent>
						</Card>
					</Link>
				))}
			</div>

			{/* Pagination */}
			{showPagination && postsData && postsData.totalPages > 1 && (
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
		</div>
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
