"use server";

import { unstable_cache } from "next/cache";
import { GraphQLResponse } from "./types";

const GRAPHQL_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL ? `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/graphql` : "http://localhost:3000/api/graphql";

export const fetchGraphQL = unstable_cache(
	async <T extends { [key: string]: any }>(query: string, variables = {}) => {
		try {
			const res = await fetch(GRAPHQL_API_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					query,
					variables,
				}),
				next: { revalidate: 3600 }, // Cache for 1 hour
			});

			if (!res.ok) {
				console.error(`GraphQL Error: ${res.statusText}`);
				return null;
			}

			const json = (await res.json()) as GraphQLResponse<T>;

			if (json.errors) {
				console.error("GraphQL Errors:", json.errors);
				return null;
			}

			return json.data;
		} catch (error) {
			console.error("GraphQL fetch error:", error);
			return null;
		}
	},
	["graphql-query"],
	{
		revalidate: 3600,
		tags: ["graphql"],
	}
);

// Example usage with proper typing
export const getPage = unstable_cache(
	async (slug: string) => {
		const query = `
			query GetPage($slug: String!) {
				Pages(where: { slug: { equals: $slug } }) {
					docs {
						id
						title
						content
					}
				}
			}
		`;

		return fetchGraphQL(query, { slug });
	},
	["page-query"],
	{
		revalidate: 3600,
		tags: ["page"],
	}
);
