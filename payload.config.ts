import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";
import { seoPlugin } from "@payloadcms/plugin-seo";
import type { Config } from "payload";
import { Media, Pages, Posts, Services, Settings, Users } from "./collections";
import { blocks } from "./blocks";

export default buildConfig({
	editor: lexicalEditor(),
	collections: [Media, Pages, Posts, Services, Users],
	secret: process.env.PAYLOAD_SECRET || "",
	db: vercelPostgresAdapter(),
	typescript: {
		outputFile: "payload-types.ts",
	},
	globals: [Settings],
	admin: {
		components: {
			blocks: blocks,
		},
	},
	plugins: [
		vercelBlobStorage({
			enabled: true,
			collections: {
				media: true,
			},
			token: process.env.BLOB_READ_WRITE_TOKEN || "",
		}),
		seoPlugin({
			collections: ["pages"],
			uploadsCollection: "media",
			generateTitle: ({ doc }) => doc.pageMeta?.title || `${doc.title} — Lanier Plumbing`,
			generateDescription: ({ doc }) => doc.pageMeta?.description || "",
			generateImage: ({ doc }) => doc.pageMeta?.image || null,
			generateURL: ({ doc }) => `https://lanier-plumbing.com/${doc.slug}`,
		}),
	],
	cors: ["http://localhost:3000"],
	csrf: ["http://localhost:3000"],
} as Config);
