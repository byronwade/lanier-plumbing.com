import { getSettings } from "@/lib/actions/getSettings";
import { unstable_cache } from "next/cache";

// Cache the robots configuration
const getRobotsConfig = unstable_cache(
	async () => {
		try {
			const settings = await getSettings();
			const baseUrl = settings?.siteURL || "https://lanier-plumbing.com";

			return {
				rules: {
					userAgent: "*",
					allow: ["/", "/lanier-plumbing-services", "/expert-plumbing-tips", "/about-lanier-plumbing", "/contact-lanier-plumbing"],
					disallow: ["/private/", "/admin/*", "/_next/*", "/api/*"],
				},
				sitemap: `${baseUrl}/sitemap.xml`,
				host: baseUrl,
			};
		} catch (error) {
			console.error("Error generating robots config:", error);
			return {
				rules: {
					userAgent: "*",
					allow: "/",
					disallow: "/private/",
				},
				sitemap: "https://lanier-plumbing.com/sitemap.xml",
			};
		}
	},
	["robots-config"],
	{
		revalidate: 3600, // Revalidate every hour
		tags: ["settings"],
	}
);

export default async function robots() {
	return getRobotsConfig();
}
