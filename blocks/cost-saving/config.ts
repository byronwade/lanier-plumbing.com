import type { Block } from "payload";

export const costSavingBlock: Block = {
	slug: "costSaving",
	labels: {
		singular: "Cost Saving Block",
		plural: "Cost Saving Blocks",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			label: "Title",
			defaultValue: "We Offer Cost Efficient Plumbing Services",
		},
		{
			name: "subtitle",
			type: "text",
			required: true,
			label: "Subtitle",
			defaultValue: "Our Work",
		},
		{
			name: "services",
			type: "array",
			label: "Services",
			minRows: 1,
			maxRows: 5,
			fields: [
				{
					name: "image",
					type: "upload",
					relationTo: "media",
					required: true,
					label: "Service Image",
				},
				{
					name: "title",
					type: "text",
					required: true,
					label: "Service Title",
				},
			],
		},
	],
}; 