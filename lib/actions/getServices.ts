"use cache";

import { fetchGraphQL } from "@/lib/graphql";
import type { Service } from "@/payload-types";

export async function getServices() {
	const query = `
		query GetServices {
			Services {
				docs {
					id
					title
					slug
					description
					content
					createdAt
					updatedAt
				}
			}
		}
	`;

	const data = await fetchGraphQL(query);
	return data.Services.docs as Service[];
}

export async function getServiceBySlug(slug: string) {
	const query = `
		query GetService($slug: String!) {
			Services(where: { slug: { equals: $slug } }) {
				docs {
					id
					title
					slug
					description
					content
					createdAt
					updatedAt
				}
			}
		}
	`;

	const data = await fetchGraphQL(query, { slug });
	const service = data.Services.docs[0];

	if (!service) {
		throw new Error(`Service ${slug} not found`);
	}

	return service as Service;
}
