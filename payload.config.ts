import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";
import { Settings } from "./collections/Settings";
import { Media } from "./collections/Media";
import { Posts } from "./collections/Posts";
import { Services } from "./collections/Services";

export default buildConfig({
	editor: lexicalEditor(),
	collections: [Media, Posts, Services],
	secret: process.env.PAYLOAD_SECRET || "",
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI,
			ssl: {
				rejectUnauthorized: false,
			},
		},
	}),
	sharp,
	globals: [Settings],
	typescript: {
		outputFile: "payload-types.ts",
	},

	plugins: [
		vercelBlobStorage({
			enabled: true, // Optional, defaults to true
			// Specify which collections should use Vercel Blob
			collections: {
				media: true,
			},
			// Token provided by Vercel once Blob storage is added to your Vercel project
			token: process.env.BLOB_READ_WRITE_TOKEN,
		}),
	],
	cors: ["http://localhost:3000"],
	csrf: ["http://localhost:3000"],
});
