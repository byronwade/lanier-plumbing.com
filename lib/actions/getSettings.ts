"use cache";

import { getPayloadClient } from "@/lib/payload";

export async function getSettings() {
	try {
		const client = await getPayloadClient();
		const settings = await client.findGlobal({
			slug: "settings",
		});

		return settings;
	} catch (error) {
		console.error("Error fetching settings:", error);
		return null;
	}
}
