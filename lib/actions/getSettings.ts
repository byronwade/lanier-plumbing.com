"use cache";

import { fetchGraphQL } from "@/lib/graphql";
import type { Setting } from "@/payload-types";

export async function getSettings() {
	const query = `
		query GetSettings {
			Setting {
				companyName
				companyPhone
				companyEmail
				companyAddress
				socialLinks {
					platform
					url
				}
			}
		}
	`;

	try {
		const data = await fetchGraphQL(query);
		return data.Setting as Setting;
	} catch (error) {
		console.error("Error fetching settings:", error);
		return null;
	}
}
