import { createCache } from "@/lib/unstable-cache";
import { getPayloadClient } from "@/lib/payload";

export const getSettings = createCache(
	async () => {
		const client = await getPayloadClient();
		const settings = await client.findGlobal({
			slug: "settings",
			depth: 2, // To resolve media references
		});
		return settings;
	},
	["global-settings"],
	{
		revalidate: 60,
		tags: ["settings"],
	}
);
