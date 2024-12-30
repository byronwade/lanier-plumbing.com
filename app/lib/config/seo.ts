import type { Metadata } from "next";

export const defaultSEO: Metadata = {
	title: "Lanier Plumbing | Expert Plumbing Services in Georgia",
	description: "Professional plumbing services for residential and commercial properties in Georgia. Available 24/7 for emergencies. Licensed, insured, and trusted since 1989.",
	keywords: ["plumbing services", "emergency plumber", "residential plumbing", "commercial plumbing", "Georgia plumber", "licensed plumber", "24/7 plumbing", "plumbing repair", "water heater installation", "drain cleaning", "pipe repair", "leak detection", "bathroom plumbing", "kitchen plumbing", "sewer line repair"],
	authors: [{ name: "Lanier Plumbing" }],
	creator: "Lanier Plumbing",
	publisher: "Lanier Plumbing",
	formatDetection: {
		telephone: true,
		address: true,
		email: true,
	},
	metadataBase: new URL("https://lanier-plumbing.com"),
	alternates: {
		canonical: "https://lanier-plumbing.com",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://lanier-plumbing.com",
		siteName: "Lanier Plumbing",
		title: "Lanier Plumbing | Expert Plumbing Services in Georgia",
		description: "Professional plumbing services for residential and commercial properties in Georgia. Available 24/7 for emergencies. Licensed, insured, and trusted since 1989.",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Lanier Plumbing - Professional Plumbing Services",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Lanier Plumbing | Expert Plumbing Services in Georgia",
		description: "Professional plumbing services for residential and commercial properties in Georgia. Available 24/7 for emergencies.",
		images: ["/twitter-image.jpg"],
		creator: "@lanierplumbing",
		site: "@lanierplumbing",
	},
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
	verification: {
		google: "your-google-verification-code",
		other: {
			yandex: "your-yandex-verification-code",
			yahoo: "your-yahoo-verification-code",
			me: "your-bing-verification-code",
		},
	},
} as const;

export const getMetadata = (customMetadata: Partial<Metadata> = {}): Metadata => {
	const merged: Metadata = {
		...defaultSEO,
		...customMetadata,
	};

	if (customMetadata.openGraph) {
		merged.openGraph = {
			...defaultSEO.openGraph,
			...customMetadata.openGraph,
		};
	}

	if (customMetadata.twitter) {
		merged.twitter = {
			...defaultSEO.twitter,
			...customMetadata.twitter,
		};
	}

	return merged;
};
