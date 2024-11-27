import { cache } from "react";
import payload from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
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
			config: {
				serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
				collections: [], // Collections will be loaded from config file
				globals: [], // Globals will be loaded from config file
				db: postgresAdapter({
					pool: {
						connectionString: process.env.DATABASE_URI || "",
					},
				}),
				admin: {
					bundler: webpackBundler(),
				},
				editor: slateEditor({}),
				typescript: {
					outputFile: false,
				},
				graphQL: {
					schemaOutputFile: false,
				},
				secret: process.env.PAYLOAD_SECRET,
			},
			// This configPath is required - it will load your collections and globals
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
export const payloadClient = cache(async () => {
	const client = await getPayloadClient();
	return client;
});
