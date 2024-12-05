import { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
	slug: "posts",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "slug",
			type: "text",
			required: true,
		},
		{
			name: "content",
			type: "richText",
		},
		{
			name: "date",
			type: "date",
		},
	],
};