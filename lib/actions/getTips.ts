"use cache";

import { fetchGraphQL } from "@/lib/graphql";
import type { Tip } from "@/lib/types";

interface TipsResponse {
	Tips: {
		docs: Tip[];
	};
}

export async function getTips() {
	const query = `
		query GetTips {
			Tips {
				docs {
					id
					title
					slug
					description
					content
					createdAt
				}
			}
		}
	`;

	const data = await fetchGraphQL<TipsResponse>(query);
	return data.Tips.docs;
}

export async function getTipBySlug(slug: string) {
	const query = `
		query GetTip($slug: String!) {
			Tips(where: { slug: { equals: $slug } }) {
				docs {
					id
					title
					slug
					description
					content
					createdAt
				}
			}
		}
	`;

	const data = await fetchGraphQL<TipsResponse>(query, { slug });
	const tip = data.Tips.docs[0];

	if (!tip) {
		throw new Error(`Tip ${slug} not found`);
	}

	return {
		data: {
			title: tip.title,
			description: tip.description,
		},
		content: tip.content,
	};
}
