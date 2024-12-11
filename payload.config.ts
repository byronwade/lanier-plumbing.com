import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
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
	graphQL: {
		schemaOutputFile: "generated-schema.graphql",
		disablePlaygroundInProduction: false,
		disable: false,
		maxComplexity: 1000,
	},
	cors: ["http://localhost:3000"],
	csrf: ["http://localhost:3000"],
});
