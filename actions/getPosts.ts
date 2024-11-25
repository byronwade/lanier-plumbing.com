"use server";

import { createCache } from "@/lib/unstable-cache";
import { getPayloadClient } from "@/lib/payload";

export const getPosts = createCache(
	async () => {
		const payload = await getPayloadClient();
		const { websiteContent } = await payload.findGlobal({
			slug: "websiteContent",
		});

		return websiteContent.posts.map(({ slug, title, description, date }) => ({
			slug,
			title,
			description,
			date,
		}));
	},
	["posts-list"],
	{ revalidate: 3600, tags: ["posts"] }
);

export const getPostBySlug = createCache(
	async (slug: string) => {
		const payload = await getPayloadClient();
		const { websiteContent } = await payload.findGlobal({
			slug: "websiteContent",
		});

		const post = websiteContent.posts.find((p) => p.slug === slug);

		if (!post) {
			throw new Error(`Post ${slug} not found`);
		}

		return {
			data: {
				title: post.title,
				description: post.description,
				date: post.date,
			},
			content: post.content,
		};
	},
	["post"],
	{ revalidate: 3600, tags: ["posts"] }
);
