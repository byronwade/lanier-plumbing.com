import { getSettings } from "@/lib/actions/getSettings";
import { getAllPages } from "@/lib/actions/getPages";
import { getServices } from "@/lib/actions/getServices";
import { getPosts } from "@/lib/actions/getPosts";
import { MetadataRoute } from "next";
import type { Page } from "@/payload-types";
import type { Service } from "@/lib/actions/getServices";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const settings = await getSettings();
	const baseUrl = settings?.siteURL || "https://lanier-plumbing.com";

	// Get all pages
	const { docs: pages } = await getAllPages();
	const pageUrls = (pages as Page[]).map((page) => ({
		url: `${baseUrl}/${page.slug}`,
		lastModified: new Date(page.updatedAt),
		changeFrequency: (page.slug === "" ? "daily" : "weekly") as ChangeFrequency,
		priority: page.slug === "" ? 1.0 : 0.8,
	}));

	// Get all services
	const { docs: services } = await getServices();
	const serviceUrls = services
		.filter((service) => service.status === "published")
		.map((service) => ({
			url: `${baseUrl}/lanier-plumbing-services/${service.slug}`,
			lastModified: new Date(service.updatedAt),
			changeFrequency: "weekly" as ChangeFrequency,
			priority: 0.9,
		}));

	// Get all blog posts
	const { docs: posts } = await getPosts();
	const postUrls = posts.map((post) => ({
		url: `${baseUrl}/expert-plumbing-tips/${post.slug}`,
		lastModified: new Date(post.updatedAt || post.createdAt),
		changeFrequency: "monthly" as ChangeFrequency,
		priority: 0.7,
	}));

	// Static routes with optimized priorities
	const staticRoutes = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "daily" as ChangeFrequency,
			priority: 1.0,
		},
		{
			url: `${baseUrl}/lanier-plumbing-services`,
			lastModified: new Date(),
			changeFrequency: "daily" as ChangeFrequency,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/expert-plumbing-tips`,
			lastModified: new Date(),
			changeFrequency: "daily" as ChangeFrequency,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/about-lanier-plumbing`,
			lastModified: new Date(),
			changeFrequency: "monthly" as ChangeFrequency,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/contact-lanier-plumbing`,
			lastModified: new Date(),
			changeFrequency: "weekly" as ChangeFrequency,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/emergency-plumbing-services`,
			lastModified: new Date(),
			changeFrequency: "weekly" as ChangeFrequency,
			priority: 1.0,
		},
	];

	// Combine all URLs and sort by priority
	return [...staticRoutes, ...serviceUrls, ...pageUrls, ...postUrls].sort((a, b) => b.priority - a.priority);
}
