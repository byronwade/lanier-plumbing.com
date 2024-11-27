import { unstable_cache } from "next/cache";

const GRAPHQL_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL + "/api/graphql";

export async function fetchGraphQL(query: string, variables = {}) {
	return unstable_cache(
		async () => {
			const res = await fetch(GRAPHQL_API_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					query,
					variables,
				}),
			});

			if (!res.ok) {
				throw new Error(`GraphQL Error: ${res.statusText}`);
			}

			return res.json();
		},
		[query, JSON.stringify(variables)],
		{
			tags: ["graphql"], // Add relevant cache tags
			revalidate: 60, // Revalidate every minute
		}
	)();
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
