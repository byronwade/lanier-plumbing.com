"use cache";

import { GraphQLResponse } from "./types";

const GRAPHQL_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL 
  ? `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/graphql`
  : "http://localhost:3000/api/graphql";

export async function fetchGraphQL<T extends { [key: string]: any }>(query: string, variables = {}) {
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
		throw new Error(`GraphQL Error: ${res.statusText}`);
	}

	const json = await res.json() as GraphQLResponse<T>;
	if (json.errors) {
		throw new Error(json.errors[0].message);
	}

	return json.data;
}

// Example usage:
export async function getPage(slug: string) {
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
}
