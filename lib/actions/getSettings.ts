"use cache";

import { getPayloadClient } from "../payload";
import type { Setting } from "../../payload-types";

// Get raw settings
async function getRawSettings() {
	try {
		const payload = await getPayloadClient();
		const settings = await payload.findGlobal({
			slug: "settings",
			depth: 2,
			draft: false,
		});
		return settings;
	} catch (error) {
		console.error("Error fetching raw settings:", error);
		return null;
	}
}

// Export the processed settings with proper typing
export async function getSettings() {
	const settings = await getRawSettings();

	if (!settings) {
		return null;
	}

	// Process the home page reference
	const homePage = settings.homePage && {
		id: typeof settings.homePage === "object" ? settings.homePage.id || settings.homePage.value?.id : settings.homePage,
		value: typeof settings.homePage === "object" ? settings.homePage.value : null,
	};

	return {
		...settings,
		homePage,
	} as Setting;
}
