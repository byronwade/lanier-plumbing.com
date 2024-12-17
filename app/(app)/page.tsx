import { getPageBySlug } from "@/lib/actions/getPages";
import { getSettings } from "@/lib/actions/getSettings";
import { notFound } from "next/navigation";
import type { Page } from "@/payload-types";
import type { Metadata } from "next";
import PageContent from "../../components/PageContent";
import type { Media } from "@/payload-types";

const defaultMetadata: Metadata = {
	title: "Home",
	description: "Welcome to our website",
	openGraph: {
		images: [],
	},
};

async function getPageData() {
	const settings = await getSettings();
	if (!settings?.homePage) {
		return null;
	}

	// If homePage is a number, use it as the ID
	const homePageId = typeof settings.homePage === "number" ? settings.homePage : settings.homePage.id;
	if (!homePageId) {
		return null;
	}

	const data = (await getPageBySlug("/")) as Page | null;
	return data;
}

export async function generateMetadata(): Promise<Metadata> {
	try {
		const data = await getPageData();
		if (!data) {
			return defaultMetadata;
		}

		const ogImage = data.pageMeta?.image && "url" in data.pageMeta.image ? [{ url: data.pageMeta.image.url }] : [];

		return {
			title: data.pageMeta?.title || data.title,
			description: data.pageMeta?.description || defaultMetadata.description,
			openGraph: {
				title: data.pageMeta?.title || data.title,
				description: data.pageMeta?.description || defaultMetadata.description,
				images: ogImage,
			},
		};
	} catch (error) {
		console.error("Error generating metadata:", error);
		return defaultMetadata;
	}
}

export default async function Page() {
	try {
		const data = await getPageData();
		if (!data) {
			notFound();
		}

		return <PageContent key={data.id} data={data} />;
	} catch (error) {
		console.error("Error rendering page:", error);
		notFound();
	}
}
