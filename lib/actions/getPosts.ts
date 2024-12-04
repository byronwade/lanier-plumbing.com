"use cache";

import { fetchGraphQL } from "@/lib/graphql";
import type { Post } from "@/lib/types";

interface PostsResponse {
	Posts: {
		docs: Post[];
	};
}

export async function getPosts() {
	const query = `
		query GetPosts {
			Posts {
				docs {
					id
					title
					slug
					content
					createdAt
					updatedAt
				}
			}
		}
	`;

	const data = await fetchGraphQL<PostsResponse>(query);
	return data.Posts.docs;
}

export async function getPostBySlug(slug: string) {
	const query = `
		query GetPost($slug: String!) {
			Posts(where: { slug: { equals: $slug } }) {
				docs {
					id
					title
					slug
					content
					createdAt
					updatedAt
				}
			}
		}
	`;

	const data = await fetchGraphQL<PostsResponse>(query, { slug });
	const post = data.Posts.docs[0];

	if (!post) {
		throw new Error(`Post ${slug} not found`);
	}

	return post;
}
