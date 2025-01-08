import { CollectionConfig } from "payload";

export const Navigation: CollectionConfig = {
	slug: "navigation",
	admin: {
		useAsTitle: "name",
		group: "Site Settings",
		description: "Manage navigation menus for header and footer",
		defaultColumns: ["name", "location", "updatedAt"],
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
			admin: {
				description: "Internal name for this navigation menu",
			},
		},
		{
			name: "location",
			type: "select",
			required: true,
			options: [
				{
					label: "Header Navigation",
					value: "header",
				},
				{
					label: "Footer Navigation",
					value: "footer",
				},
			],
			admin: {
				description: "Where this navigation menu will appear",
			},
		},
		{
			name: "items",
			type: "array",
			required: true,
			minRows: 1,
			admin: {
				description: "Add and order your navigation items (top to bottom = left to right)",
			},
			fields: [
				{
					name: "type",
					type: "select",
					defaultValue: "page",
					required: true,
					options: [
						{
							label: "Custom Link",
							value: "custom",
						},
						{
							label: "Page Link",
							value: "page",
						},
					],
					admin: {
						description: "Choose the type of link",
					},
				},
				{
					name: "label",
					type: "text",
					required: true,
					admin: {
						description: "The text that will be displayed in the navigation",
					},
				},
				{
					name: "pageLink",
					type: "relationship",
					relationTo: "pages",
					required: true,
					admin: {
						description: "Select a page from your existing pages",
						condition: (data, siblingData) => siblingData?.type === "page",
					},
				},
				{
					name: "customLink",
					type: "text",
					required: true,
					admin: {
						description: "Enter the full URL (e.g., /about-us or https://example.com)",
						condition: (data, siblingData) => siblingData?.type === "custom",
					},
				},
				{
					name: "openInNewTab",
					type: "checkbox",
					label: "Open in new tab",
					defaultValue: false,
				},
			],
		},
	],
	timestamps: true,
};
