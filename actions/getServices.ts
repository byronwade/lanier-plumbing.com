"use server";

import { createCache } from "@/lib/unstable-cache";
import { getPayloadClient } from "@/lib/payload";

export const getServices = createCache(
	async () => {
		const payload = await getPayloadClient();
		const { websiteContent } = await payload.findGlobal({
			slug: "websiteContent",
		});

		return websiteContent.services.map(({ slug, title, description }) => ({
			slug,
			title,
			description,
		}));
	},
	["services-list"],
	{ revalidate: 3600, tags: ["services"] }
);

export const getServiceBySlug = createCache(
	async (slug: string) => {
		const payload = await getPayloadClient();
		const { websiteContent } = await payload.findGlobal({
			slug: "websiteContent",
		});

		const service = websiteContent.services.find((s) => s.slug === slug);

		if (!service) {
			throw new Error(`Service ${slug} not found`);
		}

		return {
			data: {
				title: service.title,
				description: service.description,
			},
			content: service.content,
		};
	},
	["service"],
	{ revalidate: 3600, tags: ["services"] }
);
