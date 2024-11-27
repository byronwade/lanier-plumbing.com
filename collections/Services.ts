import { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
	slug: "services",
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
	],
};
