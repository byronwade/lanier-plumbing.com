"use server";

import { getPayloadClient } from "../payload";
import { unstable_cache } from "next/cache";
import { getSettings } from "./getSettings";

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
	updatedAt: string;
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
		const settings = await getSettings();

		if (!post) {
			console.log("No post found for slug:", slug);
			return null;
		}

		console.log("Post found:", post.title);

		const baseUrl = settings?.siteURL || "https://lanier-plumbing.com";

		// Ensure media URLs are properly formatted
		const formatMediaUrl = (url?: string) => {
			if (!url) return undefined;
			if (url.startsWith("http")) return url;

			// Use the server URL from environment variables
			const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || (process.env.NODE_ENV === "development" ? "http://localhost:3000" : baseUrl);

			// Remove any potential double slashes except for protocol
			const cleanUrl = `${serverUrl}${url}`.replace(/([^:]\/)\/+/g, "$1");

			return cleanUrl;
		};

		const formattedImage =
			post.image ?
				{
					...post.image,
					url: formatMediaUrl(post.image.url),
				}
			:	undefined;

		const companyName = settings?.companyName || "Lanier Plumbing";
		const logoUrl = formatMediaUrl(settings?.logo?.url);

		return {
			data: {
				title: post.title,
				description: post.excerpt || settings?.blogSettings?.defaultExcerpt || "Read our latest plumbing tips and advice",
				createdAt: post.createdAt,
				author: settings?.blogSettings?.defaultAuthor || "Plumbing Expert",
				image: formattedImage,
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BlogPosting",
					headline: post.title,
					description: post.excerpt || settings?.blogSettings?.defaultExcerpt,
					image: formattedImage?.url || logoUrl,
					author: {
						"@type": "Organization",
						name: companyName,
						url: baseUrl,
						logo: logoUrl,
					},
					publisher: {
						"@type": "Organization",
						name: companyName,
						logo: {
							"@type": "ImageObject",
							url: logoUrl || `${baseUrl}/logo.png`,
						},
					},
					datePublished: post.createdAt,
					dateModified: post.updatedAt || post.createdAt,
					mainEntityOfPage: {
						"@type": "WebPage",
						"@id": `${baseUrl}/expert-plumbing-tips/${post.slug}`,
					},
				},
			},
			content: post.content,
		};
	} catch (error) {
		console.error(`Error fetching post with slug ${slug}:`, error);
		return null;
	}
}
