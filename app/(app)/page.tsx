import { getPageBySlug } from "@/lib/actions/getPages";
import { getSettings } from "@/lib/actions/getSettings";
import { notFound } from "next/navigation";
import type { Page } from "@/payload-types";
import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import { unstable_cache } from "next/cache";
import { getMetadata } from "@/lib/config/seo";

// Cache the home page data fetch
const getHomePageData = unstable_cache(
	async () => {
		try {
			const settings = await getSettings();
			if (!settings?.homePage) {
				return null;
			}

			// If homePage is a number, use it as the ID
			const homePageId = typeof settings.homePage === "number" ? settings.homePage : settings.homePage.id;
			if (!homePageId) {
				return null;
			}

			return (await getPageBySlug("/")) as Page | null;
		} catch (error) {
			console.error("Error fetching home page data:", error);
			return null;
		}
	},
	["home-page"],
	{
		revalidate: 30,
		tags: ["pages", "home"],
	}
);

// Generate metadata for the home page
export async function generateMetadata(): Promise<Metadata> {
	const data = await getHomePageData();
	const settings = await getSettings();
	if (!data) {
		notFound();
	}

	const title = settings?.defaultSEO?.title || "Lanier Plumbing | Expert Plumbing Services in Georgia";
	return getMetadata({
		title,
		description: settings?.defaultSEO?.description,
		openGraph: {
			title,
			description: settings?.defaultSEO?.description,
			images: settings?.defaultSEO?.image ? [{ url: settings.defaultSEO.image.url }] : undefined,
		},
	});
}

// Home page component
export default async function HomePage() {
	const data = await getHomePageData();
	if (!data) {
		notFound();
	}

	return <PageContent key={data.id} data={data} />;
}
