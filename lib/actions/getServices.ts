"use cache";

import { getPayloadClient } from "@/lib/payload";
import type { Service } from "@/payload-types";

export async function getServices() {
	const payload = await getPayloadClient();
	const services = await payload.find({
		collection: "services" as const,
	});
	return services.docs as Service[];
}

export async function getServiceBySlug(slug: string) {
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
}
