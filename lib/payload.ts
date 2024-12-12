import { getPayload } from "payload";
import config from "../payload.config";

// Use a global variable to cache the client
let cachedClient: any = null;
let clientPromise: Promise<any> | null = null;

// Cache the payload client promise
export const getPayloadClient = async () => {
	// Return cached client if available
	if (cachedClient) {
		return cachedClient;
	}

	// Return existing initialization promise if one is in progress
	if (clientPromise) {
		return clientPromise;
	}

	try {
		// Create a new initialization promise
		clientPromise = (async () => {
			console.log("Initializing Payload client...");
			const payload = await getPayload({
				config,
				importMap: {
					"@payloadcms/ui-playground": {
						enabled: false,
					},
				},
			});
			console.log("Payload client initialized successfully");

			// Cache the client
			cachedClient = payload;
			return payload;
		})();

		return await clientPromise;
	} catch (error) {
		console.error("Error initializing Payload client:", error);
		// Clear the promise so we can try again
		clientPromise = null;
		throw error;
	}
};
