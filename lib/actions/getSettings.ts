import { cache } from "react";
import { getPayloadClient } from "@/lib/payload";

export const getSettings = cache(async () => {
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
});
