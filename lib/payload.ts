import { cache } from "react";
import payload from "payload";
import type { Payload } from "payload";

// Cache the initialized payload instance
let cached = (global as any).payload;

if (!cached) {
	cached = (global as any).payload = { client: null, promise: null };
}

export const getPayloadClient = cache(async (): Promise<Payload> => {
	if (!process.env.PAYLOAD_SECRET) {
		throw new Error("PAYLOAD_SECRET environment variable is missing");
	}

	if (cached.client) {
		return cached.client;
	}

	if (!cached.promise) {
		cached.promise = payload.init({
			secret: process.env.PAYLOAD_SECRET,
			local: true,
			db: {
				type: process.env.DATABASE_TYPE || "postgres",
				url: process.env.DATABASE_URI || process.env.MONGODB_URI,
			},
			// Let Payload load collections and globals from the filesystem
			configPath: process.cwd() + "/payload.config.ts",
		});
	}

	try {
		cached.client = await cached.promise;
	} catch (e: unknown) {
		cached.promise = null;
		throw e;
	}

	return cached.client;
});

// Export this for use in React Server Components
export const payload = cache(async () => {
	const client = await getPayloadClient();
	return client;
});
