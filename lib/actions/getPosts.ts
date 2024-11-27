"use server";

import { createCache } from "@/lib/unstable-cache";
import { getPayloadClient } from "@/lib/payload";
import type { Post } from "@/payload-types";

export const getPosts = createCache(
	async () => {
		const payload = await getPayloadClient();
		const posts = await payload.find({
			collection: "posts" as const,
		});
		return posts.docs as Post[];
	},
	["posts-list"],
	{ revalidate: 3600, tags: ["posts"] }
);

export const getPostBySlug = createCache(
	async (slug: string) => {
		const payload = await getPayloadClient();
		const post = await payload.find({
			collection: "posts" as const,
			where: {
				slug: { equals: slug },
			},
		});

		if (!post.docs[0]) {
			throw new Error(`Post ${slug} not found`);
		}

		return post.docs[0] as Post;
	},
	["post"],
	{ revalidate: 3600, tags: ["posts"] }
);
