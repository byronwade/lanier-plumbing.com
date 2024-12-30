import { getSettings } from "@/lib/actions/getSettings";
import { getAllPages } from "@/lib/actions/getPages";
import { getServices } from "@/lib/actions/getServices";
import { MetadataRoute } from "next";
import type { Page, Service } from "@/payload-types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const settings = await getSettings();
	const baseUrl = settings?.siteURL || "https://lanier-plumbing.com";

	// Get all pages
	const { docs: pages } = await getAllPages();
	const pageUrls = (pages as Page[]).map((page) => ({
		url: `${baseUrl}/${page.slug}`,
		lastModified: new Date(page.updatedAt),
		changeFrequency: "weekly" as const,
		priority: 0.8,
	}));

	// Get all services
	const services = await getServices();
	const serviceUrls = (services as Service[]).map((service) => ({
		url: `${baseUrl}/lanier-plumbing-services/${service.slug}`,
		lastModified: new Date(service.updatedAt),
		changeFrequency: "weekly" as const,
		priority: 0.9,
	}));

	// Static routes
	const staticRoutes = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "daily" as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/lanier-plumbing-services`,
			lastModified: new Date(),
			changeFrequency: "daily" as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/expert-plumbing-tips`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/about-lanier-plumbing`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/contact-lanier-plumbing`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		},
	];

	return [...staticRoutes, ...pageUrls, ...serviceUrls];
}
