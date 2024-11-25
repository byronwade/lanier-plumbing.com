"use server";

import { createCache } from "@/lib/unstable-cache";

const FAKE_SERVICES = [
	{
		slug: "emergency-plumbing",
		title: "Emergency Plumbing",
		description: "24/7 emergency plumbing services for your urgent needs",
		content: "# Emergency Plumbing\n\nWe offer round-the-clock emergency services for all your plumbing needs. Our expert team is available 24/7 to handle any plumbing emergency.",
	},
	{
		slug: "drain-cleaning",
		title: "Drain Cleaning",
		description: "Professional drain cleaning and maintenance services",
		content: "# Drain Cleaning\n\nOur professional drain cleaning services use the latest equipment to clear any blockage and keep your drains flowing smoothly.",
	},
];

export const getServices = createCache(
	async () => {
		return FAKE_SERVICES.map(({ slug, title, description }) => ({
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
		const service = FAKE_SERVICES.find((s) => s.slug === slug);

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
