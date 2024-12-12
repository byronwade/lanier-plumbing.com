"use server";

import { getPayloadClient } from "../payload";
import type { Service } from "../../payload-types";

interface ServiceContent {
	content: string;
}

export async function getServices({ limit = 10, page = 1, where = {} } = {}) {
	const payload = await getPayloadClient();
	const services = await payload.find({
		collection: "services",
		limit,
		page,
		where,
		depth: 2,
	});

	return services.docs as Service[];
}

export async function getServiceBySlug(slug: string) {
	const payload = await getPayloadClient();
	const service = await payload.find({
		collection: "services",
		where: {
			slug: {
				equals: slug,
			},
		},
		limit: 1,
	});

	const doc = service.docs[0] as Service & ServiceContent;
	if (!doc) {
		throw new Error(`Service ${slug} not found`);
	}

	return {
		data: {
			title: doc.title,
			description: typeof doc.content === "string" ? doc.content.slice(0, 160) + "..." : "",
		},
		content: doc.content,
	};
}
