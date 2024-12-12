import { Payload } from "payload";
import { getPayload } from "payload";
import config from "../payload.config";

// Cache the payload client promise
export const getPayloadClient = async () => {
	const payload = await getPayload({
		config,
	});

	return payload;
};
