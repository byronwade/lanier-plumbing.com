"use server";

import { getPayloadClient } from "../payload";
import type { Setting } from "../../payload-types";

export async function getSettings() {
	const payload = await getPayloadClient();
	const settings = await payload.findGlobal({
		slug: "settings",
	});

	return settings as Setting;
}
