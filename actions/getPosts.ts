"use server";

import { createCache } from "@/lib/unstable-cache";

const FAKE_POSTS = [
	{
		slug: "prevent-frozen-pipes",
		title: "How to Prevent Frozen Pipes This Winter",
		description: "Essential tips to protect your plumbing during cold weather",
		content: "# Preventing Frozen Pipes\n\nLearn how to protect your pipes during winter...",
		date: "2024-01-15",
	},
	{
		slug: "water-heater-maintenance",
		title: "Water Heater Maintenance Guide",
		description: "Keep your water heater running efficiently with these maintenance tips",
		content: "# Water Heater Maintenance\n\nRegular maintenance of your water heater...",
		date: "2024-01-10",
	},
];

export const getPosts = createCache(
	async () => {
		return FAKE_POSTS.map(({ slug, title, description, date }) => ({
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
		const post = FAKE_POSTS.find((p) => p.slug === slug);

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
