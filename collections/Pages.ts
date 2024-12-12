import { CollectionConfig } from "payload";
import { blocksArray } from "../blocks";

export const Pages: CollectionConfig = {
	slug: "pages",
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "slug", "updatedAt"],
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "layout",
			type: "blocks",
			minRows: 0,
			maxRows: 20,
			blocks: blocksArray,
		},
		{
			name: "content",
			type: "richText",
			required: false,
		},
		{
			name: "slug",
			label: "Page Slug",
			type: "text",
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "pageMeta",
			type: "group",
			fields: [
				{
					name: "title",
					type: "text",
				},
				{
					name: "description",
					type: "textarea",
				},
				{
					name: "image",
					type: "upload",
					relationTo: "media",
				},
			],
		},
	],
};
