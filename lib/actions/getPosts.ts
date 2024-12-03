"use cache";

import { getPayloadClient } from "@/lib/payload";
import type { Post } from "@/payload-types";

export async function getPosts() {
	const payload = await getPayloadClient();
	const posts = await payload.find({
		collection: "posts" as const,
	});
	return posts.docs as Post[];
}

export async function getPostBySlug(slug: string) {
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
}
