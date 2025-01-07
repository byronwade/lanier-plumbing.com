"use server";

import { getPayloadClient } from "../payload";
import { unstable_cache } from "next/cache";

interface Service {
	id: string;
	title: string;
	slug: string;
	content: {
		root: {
			children: Array<{ text: string }>;
		};
	};
	excerpt?: string;
	status: "draft" | "published";
	createdAt: string;
	updatedAt: string;
	image?: {
		id: string;
		url: string;
		alt: string;
		filename: string;
	};
}

interface GetServicesOptions {
	limit?: number;
	page?: number;
	where?: Record<string, any>;
}

interface ServicesResponse {
	docs: Service[];
	totalDocs: number;
	totalPages: number;
	page: number;
	hasNextPage: boolean;
	hasPrevPage: boolean;
}

// Cache services queries
const getCachedServices = unstable_cache(
	async (query = {}) => {
		const payload = await getPayloadClient();
		return await payload.find({
			collection: "services",
			...query,
		});
	},
	["services"],
	{
		revalidate: 60,
		tags: ["services"],
	}
);

export async function getServices({ limit = 10, page = 1, where = {} }: GetServicesOptions = {}): Promise<ServicesResponse> {
	console.log("getServices called with:", { limit, page, where });

	try {
		const payload = await getPayloadClient();
		console.log("Got payload client");

		// First, let's check if we can find any services at all
		const allServices = await payload.find({
			collection: "services",
		});
		console.log("All services (no filters):", {
			count: allServices.docs.length,
			services: allServices.docs.map((s: Service) => ({ id: s.id, title: s.title, status: s.status })),
		});

		// Now try with our filters
		const services = await payload.find({
			collection: "services",
			limit,
			page,
			where,
			depth: 1,
		});

		console.log("Filtered services:", {
			count: services.docs.length,
			totalDocs: services.totalDocs,
			totalPages: services.totalPages,
			services: services.docs.map((s: Service) => ({ id: s.id, title: s.title, status: s.status })),
		});

		return {
			docs: services.docs as Service[],
			totalDocs: services.totalDocs,
			totalPages: services.totalPages,
			page: services.page,
			hasNextPage: services.hasNextPage,
			hasPrevPage: services.hasPrevPage,
		};
	} catch (error) {
		console.error("Error in getServices:", error);
		throw error;
	}
}

// Cache single service query
const getCachedServiceBySlug = unstable_cache(
	async (slug: string) => {
		console.log("getCachedServiceBySlug - Starting fetch for slug:", slug);
		const payload = await getPayloadClient();
		console.log("getCachedServiceBySlug - Got payload client");

		const services = await payload.find({
			collection: "services",
			where: {
				slug: {
					equals: slug,
				},
			},
			depth: 2,
		});

		console.log("getCachedServiceBySlug - Query result:", {
			found: !!services?.docs?.length,
			count: services?.docs?.length,
			firstDoc:
				services?.docs?.[0] ?
					{
						id: services.docs[0].id,
						title: services.docs[0].title,
						slug: services.docs[0].slug,
						status: services.docs[0].status,
					}
				:	null,
		});

		if (!services?.docs?.length) {
			return null;
		}

		const service = services.docs[0] as Service;

		// Extract first paragraph for description if no excerpt
		const extractText = (content: any): string => {
			if (typeof content === "string") return content;
			if (!content?.root?.children) return "";

			return content.root.children
				.map((node: any) => {
					if (node.children?.[0]?.text) {
						return node.children.map((child: any) => child.text || "").join(" ");
					}
					return "";
				})
				.filter(Boolean)
				.join(" ");
		};

		const contentText = extractText(service.content);

		return {
			id: service.id,
			title: service.title,
			slug: service.slug,
			content: service.content,
			excerpt: service.excerpt || contentText.slice(0, 160) + "...",
			image: service.image,
			status: service.status,
			createdAt: service.createdAt,
			updatedAt: service.updatedAt,
		};
	},
	["service-by-slug"],
	{
		revalidate: 60,
		tags: ["services"],
	}
);

export async function getServiceBySlug(slug: string) {
	if (!slug) {
		console.log("getServiceBySlug - No slug provided");
		return null;
	}

	try {
		console.log("getServiceBySlug - Starting fetch for slug:", slug);
		const service = await getCachedServiceBySlug(slug);

		if (!service) {
			console.log("getServiceBySlug - No service found for slug:", slug);
			return null;
		}

		console.log("getServiceBySlug - Service found:", {
			title: service.title,
			slug: service.slug,
			hasImage: !!service.image,
			hasContent: !!service.content,
		});

		return {
			data: {
				title: service.title,
				description: service.excerpt,
				image: service.image,
			},
			content: service.content,
		};
	} catch (error) {
		console.error(`getServiceBySlug - Error fetching service with slug ${slug}:`, error);
		return null;
	}
}

// Debug function to list all services
export async function listAllServices() {
	try {
		const payload = await getPayloadClient();
		const allServices = await payload.find({
			collection: "services",
			depth: 1,
		});

		console.log("All services in database:", {
			count: allServices.docs.length,
			services: allServices.docs.map((s: Service) => ({
				id: s.id,
				title: s.title,
				slug: s.slug,
				status: s.status,
			})),
		});

		return allServices;
	} catch (error) {
		console.error("Error listing all services:", error);
		return null;
	}
}
