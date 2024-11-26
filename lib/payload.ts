import { Payload } from "payload";
import { getPayload } from "payload";
import config from "@payload-config";

let cachedPayload: Payload | null = null;

export const getPayloadClient = async (): Promise<Payload> => {
	if (!cachedPayload) {
		cachedPayload = await getPayload({
			config,
		});
	}
	return cachedPayload;
};
