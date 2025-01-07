import type { Block } from "payload";

export const servicesListBlock: Block = {
	slug: "services-list",
	labels: {
		singular: "Services List Block",
		plural: "Services List Blocks",
	},
	fields: [
		{
			name: "header",
			type: "group",
			fields: [
				{
					name: "title",
					type: "text",
					required: true,
					defaultValue: "Our Plumbing Services",
				},
				{
					name: "subtitle",
					type: "text",
					defaultValue: "Comprehensive plumbing solutions for your home and business",
				},
			],
		},
		{
			name: "servicesPerPage",
			type: "number",
			required: true,
			defaultValue: 9,
			min: 1,
			max: 24,
		},
		{
			name: "showPagination",
			type: "checkbox",
			defaultValue: true,
			label: "Show pagination controls",
		},
	],
};
