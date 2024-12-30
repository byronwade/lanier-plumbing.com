import type { Metadata, ResolvingMetadata } from "next";
import { getSettings } from "@/lib/actions/getSettings";
import type { Page } from "@/payload-types";

const getBaseMetadata = async () => {
	const settings = await getSettings();
	const baseUrl = settings?.siteURL || "https://lanier-plumbing.com";

	const metadata: Metadata = {
		metadataBase: new URL(baseUrl),
		applicationName: settings?.companyName || "Lanier Plumbing",
		title: {
			template: `%s | ${settings?.companyName || "Lanier Plumbing"}`,
			default: settings?.defaultSEO?.title || "Lanier Plumbing | Expert Plumbing Services in Georgia",
		},
		description: settings?.defaultSEO?.description || "Professional plumbing services in Georgia. Available 24/7 for emergencies.",
		keywords: settings?.defaultSEO?.keywords || ["plumbing services", "emergency plumber", "Georgia plumber", "24/7 plumbing"],
		authors: [{ name: settings?.companyName || "Lanier Plumbing", url: baseUrl }],
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
			siteName: settings?.companyName || "Lanier Plumbing",
			title: settings?.defaultSEO?.title || "Lanier Plumbing | Expert Plumbing Services in Georgia",
			description: settings?.defaultSEO?.description || undefined,
			images: settings?.defaultSEO?.image
				? [
						{
							url: settings.defaultSEO.image.url,
							width: 1200,
							height: 630,
							alt: settings?.companyName || "Lanier Plumbing",
						},
					]
				: undefined,
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
	};

	return metadata;
};

export const getPageMetadata = async (page: Page, slug?: string): Promise<Metadata> => {
	const baseMetadata = await getBaseMetadata();
	const settings = await getSettings();
	const baseUrl = settings?.siteURL || "https://lanier-plumbing.com";

	return {
		...baseMetadata,
		title: page.pageMeta?.title || page.title,
		description: page.pageMeta?.description || baseMetadata.description || undefined,
		openGraph: {
			...baseMetadata.openGraph,
			title: page.pageMeta?.title || page.title,
			description: page.pageMeta?.description || baseMetadata.description || undefined,
			url: `${baseUrl}/${slug || ""}`,
			images: page.pageMeta?.image
				? [
						{
							url: page.pageMeta.image.url,
							width: 1200,
							height: 630,
							alt: page.pageMeta.title || page.title,
						},
					]
				: baseMetadata.openGraph?.images,
		},
		alternates: {
			...baseMetadata.alternates,
			canonical: `${baseUrl}/${slug || ""}`,
		},
	};
};

export const getMetadata = async (customMetadata: Partial<Metadata> = {}): Promise<Metadata> => {
	const baseMetadata = await getBaseMetadata();
	const merged = { ...baseMetadata } as Metadata;

	// Special handling for title to maintain template
	if (typeof customMetadata.title === "string") {
		merged.title = customMetadata.title;
	} else if (customMetadata.title && typeof customMetadata.title === "object") {
		if ("default" in customMetadata.title) {
			merged.title = customMetadata.title.default;
		} else {
			// Otherwise merge with base metadata
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
};
