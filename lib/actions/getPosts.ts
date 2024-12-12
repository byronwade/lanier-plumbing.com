"use server";

import { getPayloadClient } from "../payload";
import type { Post } from "../../payload-types";

interface PostContent {
	content: string;
}

export async function getPosts({ limit = 10, page = 1, where = {} } = {}) {
	const payload = await getPayloadClient();
	const posts = await payload.find({
		collection: "posts",
		limit,
		page,
		where,
		depth: 2,
	});

	return posts.docs as Post[];
}

export async function getPostBySlug(slug: string) {
	const payload = await getPayloadClient();
	const post = await payload.find({
		collection: "posts",
		where: {
			slug: {
				equals: slug,
			},
		},
		limit: 1,
	});

	const doc = post.docs[0] as Post & PostContent;
	if (!doc) {
		throw new Error(`Post ${slug} not found`);
	}

	return {
		data: {
			title: doc.title,
			description: typeof doc.content === "string" ? doc.content.slice(0, 160) + "..." : "",
		},
		content: doc.content,
	};
}
