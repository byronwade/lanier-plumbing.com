import type { Metadata, ResolvingMetadata } from "next";
import { unstable_cache } from "next/cache";
import { getSettings } from "@/lib/actions/getSettings";
import type { Page } from "@/payload-types";

const getBaseMetadata = unstable_cache(
	async () => {
		const settings = await getSettings();
		const baseUrl = settings?.siteURL || "https://lanier-plumbing.com";
		const companyName = settings?.companyName || "Lanier Plumbing";

		const metadata: Metadata = {
			metadataBase: new URL(baseUrl),
			applicationName: companyName,
			title: {
				template: `%s | ${companyName}`,
				default: settings?.defaultSEO?.title || "Lanier Plumbing | Expert Plumbing Services in Georgia",
			},
			description: settings?.defaultSEO?.description || "Professional plumbing services in Georgia. Available 24/7 for emergencies.",
			keywords: settings?.defaultSEO?.keywords || ["plumbing services", "emergency plumber", "Georgia plumber", "24/7 plumbing", "residential plumbing", "commercial plumbing", "licensed plumber", "plumbing repair", "water heater installation", "drain cleaning"],
			authors: [{ name: companyName, url: baseUrl }],
			creator: companyName,
			publisher: companyName,
			referrer: "origin-when-cross-origin",
			robots: {
				index: true,
				follow: true,
				googleBot: {
					index: true,
					follow: true,
					"max-video-preview": -1,
					"max-image-preview": "large",
					"max-snippet": -1,
				},
			},
			openGraph: {
				type: "website",
				locale: "en_US",
				url: baseUrl,
				siteName: companyName,
				title: settings?.defaultSEO?.title || "Lanier Plumbing | Expert Plumbing Services in Georgia",
				description: settings?.defaultSEO?.description,
				images:
					settings?.defaultSEO?.image ?
						[
							{
								url: settings.defaultSEO.image.url,
								width: 1200,
								height: 630,
								alt: companyName,
							},
						]
					:	undefined,
			},
			twitter: {
				card: "summary_large_image",
				site: settings?.socialMedia?.twitter || "@lanierplumbing",
				creator: settings?.socialMedia?.twitter || "@lanierplumbing",
				images: settings?.defaultSEO?.image ? [settings.defaultSEO.image.url] : undefined,
			},
			verification: {
				google: settings?.siteVerification?.google || "",
				other: {
					yandex: settings?.siteVerification?.yandex || "",
					yahoo: settings?.siteVerification?.yahoo || "",
					me: settings?.siteVerification?.bing || "",
				},
			},
			alternates: {
				canonical: baseUrl,
				languages: {
					"en-US": baseUrl,
				},
			},
			icons: {
				icon: [{ url: "/favicon.ico" }, { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }, { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
				apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
				other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#00446a" }],
			},
			manifest: "/site.webmanifest",
			formatDetection: {
				telephone: true,
				date: true,
				address: true,
				email: true,
				url: true,
			},
			category: "Business & Services",
		};

		return metadata;
	},
	["base-metadata"],
	{
		revalidate: 3600, // Revalidate every hour
		tags: ["settings", "seo"],
	}
);

export const getPageMetadata = unstable_cache(
	async (page: Page, slug?: string): Promise<Metadata> => {
		const baseMetadata = await getBaseMetadata();
		const settings = await getSettings();
		const baseUrl = settings?.siteURL || "https://lanier-plumbing.com";
		const pageUrl = `${baseUrl}/${slug || ""}`;

		return {
			...baseMetadata,
			title: page.pageMeta?.title || page.title,
			description: page.pageMeta?.description || baseMetadata.description || undefined,
			openGraph: {
				...baseMetadata.openGraph,
				title: page.pageMeta?.title || page.title,
				description: page.pageMeta?.description || baseMetadata.description || undefined,
				url: pageUrl,
				images:
					page.pageMeta?.image ?
						[
							{
								url: page.pageMeta.image.url,
								width: 1200,
								height: 630,
								alt: page.pageMeta.title || page.title,
							},
						]
					:	baseMetadata.openGraph?.images,
			},
			alternates: {
				...baseMetadata.alternates,
				canonical: pageUrl,
			},
		};
	},
	["page-metadata"],
	{
		revalidate: 3600,
		tags: ["settings", "seo", "page"],
	}
);

export const getMetadata = unstable_cache(
	async (customMetadata: Partial<Metadata> = {}): Promise<Metadata> => {
		const baseMetadata = await getBaseMetadata();
		const merged = { ...baseMetadata } as Metadata;

		// Special handling for title to maintain template
		if (typeof customMetadata.title === "string") {
			merged.title = customMetadata.title;
		} else if (customMetadata.title && typeof customMetadata.title === "object") {
			if ("default" in customMetadata.title) {
				merged.title = customMetadata.title.default;
			} else {
				merged.title = {
					...(baseMetadata.title as { template: string; default: string }),
					...(customMetadata.title as { template?: string; default?: string }),
				};
			}
		}

		// Handle OpenGraph
		if (customMetadata.openGraph) {
			merged.openGraph = {
				...(baseMetadata.openGraph || {}),
				...(customMetadata.openGraph || {}),
			};
		}

		// Handle Twitter
		if (customMetadata.twitter) {
			merged.twitter = {
				...(baseMetadata.twitter || {}),
				...(customMetadata.twitter || {}),
			};
		}

		// Handle other metadata properties
		Object.entries(customMetadata).forEach(([key, value]) => {
			if (key !== "title" && key !== "openGraph" && key !== "twitter") {
				(merged as any)[key] = value;
			}
		});

		return merged;
	},
	["custom-metadata"],
	{
		revalidate: 3600,
		tags: ["settings", "seo"],
	}
);
