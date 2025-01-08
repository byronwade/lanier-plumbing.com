import { unstable_cache } from "next/cache";
import { getPayloadClient } from "@/lib/payload";

type NavigationLocation = "header" | "footer";

interface NavigationLink {
	type: "custom" | "page";
	label: string;
	href: string;
	openInNewTab: boolean;
}

interface NavigationData {
	id: string;
	name: string;
	location: NavigationLocation;
	items: NavigationLink[];
}

export const getNavigation = unstable_cache(
	async (location: NavigationLocation): Promise<NavigationData | null> => {
		try {
			const payload = await getPayloadClient();
			console.log("Got payload client");

			const navigation = await payload.find({
				collection: "navigation",
				where: {
					location: {
						equals: location,
					},
				},
				depth: 1,
			});

			if (!navigation.docs.length) {
				console.log(`No navigation found for location: ${location}`);
				return null;
			}

			const nav = navigation.docs[0];
			console.log(`Found navigation for ${location}:`, nav.name);

			const processedItems =
				nav.items?.map((item: any) => {
					const link: NavigationLink = {
						type: item.type,
						label: item.label,
						openInNewTab: item.openInNewTab || false,
						href: item.type === "page" && item.pageLink ? `/${item.pageLink.slug}` : item.customLink,
					};
					return link;
				}) || [];

			return {
				id: nav.id,
				name: nav.name,
				location: nav.location,
				items: processedItems,
			};
		} catch (error) {
			console.error("Error fetching navigation:", error);
			return null;
		}
	},
	["navigation"],
	{
		revalidate: 3600,
		tags: ["navigation"],
	}
);
