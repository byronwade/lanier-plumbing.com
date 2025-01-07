"use server";

import { getPayloadClient } from "../payload";
import { unstable_cache } from "next/cache";

interface Post {
	id: string;
	title: string;
	slug: string;
	content:
		| string
		| {
				root: {
					children: Array<{ text: string }>;
				};
		  };
	excerpt?: string;
	createdAt: string;
	image?: {
		id: string;
		url: string;
		alt: string;
		filename: string;
	};
}

interface PostContent {
	content: string;
}

interface GetPostsOptions {
	limit?: number;
	page?: number;
	where?: Record<string, any>;
}

interface PostsResponse {
	docs: Post[];
	totalDocs: number;
	totalPages: number;
	page: number;
	hasNextPage: boolean;
	hasPrevPage: boolean;
}

// Cache post queries
const getCachedPosts = unstable_cache(
	async (query = {}) => {
		const payload = await getPayloadClient();
		return await payload.find({
			collection: "posts",
			...query,
		});
	},
	["posts"],
	{
		revalidate: 60,
		tags: ["posts"],
	}
);

export async function getPosts({ limit = 10, page = 1, where = {} }: GetPostsOptions = {}): Promise<PostsResponse> {
	const posts = await getCachedPosts({
		limit,
		page,
		where,
		depth: 1,
	});

	return {
		docs: posts.docs as Post[],
		totalDocs: posts.totalDocs,
		totalPages: posts.totalPages,
		page: posts.page,
		hasNextPage: posts.hasNextPage,
		hasPrevPage: posts.hasPrevPage,
	};
}

// Cache single post query
const getCachedPostBySlug = unstable_cache(
	async (slug: string) => {
		const payload = await getPayloadClient();
		console.log("Fetching post with slug:", slug);

		const posts = await payload.find({
			collection: "posts",
			where: {
				slug: {
					equals: slug,
				},
			},
			depth: 2,
		});

		console.log("Found posts:", posts?.docs?.length);

		if (!posts?.docs?.length) {
			return null;
		}

		return posts.docs[0] as Post & PostContent;
	},
	["post-by-slug"],
	{
		revalidate: 60,
		tags: ["posts"],
	}
);

export async function getPostBySlug(slug: string) {
	if (!slug) {
		return null;
	}

	try {
		console.log("Getting post by slug:", slug);
		const post = await getCachedPostBySlug(slug);

		if (!post) {
			console.log("No post found for slug:", slug);
			return null;
		}

		console.log("Post found:", post.title);

		return {
			data: {
				title: post.title,
				description: post.excerpt || "Read our latest plumbing tips and advice",
				createdAt: post.createdAt,
				author: "Lanier Plumbing Expert",
				image: post.image,
			},
			content: post.content,
		};
	} catch (error) {
		console.error(`Error fetching post with slug ${slug}:`, error);
		return null;
	}
}
