import { CollectionConfig } from "payload";
import { unstable_cache } from "next/cache";
import payload from "payload";

// Cache post queries
export const getCachedPosts = unstable_cache(
	async (query = {}) => {
		const posts = await payload.find({
			collection: "posts",
			...query,
		});
		return posts;
	},
	["posts"],
	{ revalidate: 60 }
);

export const Posts: CollectionConfig = {
	slug: "posts",
	admin: {
		useAsTitle: "title",
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		// ... other fields
	],
};
