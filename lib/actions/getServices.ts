"use server";

import { createCache } from "@/lib/unstable-cache";
import { getPayloadClient } from "@/lib/payload";
import type { Service } from "@/payload-types";

export const getServices = createCache(
	async () => {
		const payload = await getPayloadClient();
		const services = await payload.find({
			collection: "services" as const,
		});
		return services.docs as Service[];
	},
	["services-list"],
	{ revalidate: 3600, tags: ["services"] }
);

export const getServiceBySlug = createCache(
	async (slug: string) => {
		const payload = await getPayloadClient();
		const service = await payload.find({
			collection: "services" as const,
			where: {
				slug: { equals: slug },
			},
		});

		if (!service.docs[0]) {
			throw new Error(`Service ${slug} not found`);
		}

		return service.docs[0] as Service;
	},
	["service"],
	{ revalidate: 3600, tags: ["services"] }
);
