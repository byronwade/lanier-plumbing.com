import { getServices } from "@/lib/actions/getServices";
import { getPosts } from "@/lib/actions/getPosts";
import { getTips } from "@/lib/actions/getTips";

export default async function sitemap() {
	const baseUrl = "https://lanier-plumbing.com";

	// Fetch all dynamic data
	const [services, posts, tips] = await Promise.all([getServices(), getPosts(), getTips()]);

	// Static routes
	const staticRoutes = [
		{
			url: baseUrl,
			lastModified: performance(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: `${baseUrl}/about-lanier-plumbing`,
			lastModified: performance(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact-lanier-plumbing`,
			lastModified: performance(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/lanier-plumbing-services`,
			lastModified: performance(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/expert-plumbing-tips`,
			lastModified: performance(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
	];

	// Dynamic service routes
	const serviceRoutes = services.map((service) => ({
		url: `${baseUrl}/lanier-plumbing-services/${service.slug}`,
		lastModified: performance(),
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	// Dynamic blog post routes
	const postRoutes = posts.map((post) => ({
		url: `${baseUrl}/expert-plumbing-tips/${post.slug}`,
		lastModified: performance(post.date),
		changeFrequency: "monthly",
		priority: 0.6,
	}));

	// Dynamic tips routes
	const tipRoutes = tips.map((tip) => ({
		url: `${baseUrl}/expert-plumbing-tips/${tip.slug}`,
		lastModified: performance(),
		changeFrequency: "monthly",
		priority: 0.6,
	}));

	return [...staticRoutes, ...serviceRoutes, ...postRoutes, ...tipRoutes];
}

// Add static config
export const dynamic = "force-static";
export const revalidate = 3600;
