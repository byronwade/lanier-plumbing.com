import type { Block } from "payload";

export const heroBlock: Block = {
	slug: "hero",
	labels: {
		singular: "Hero Block",
		plural: "Hero Blocks",
	},
	fields: [
		{
			name: "mainHeading",
			type: "text",
			required: true,
			label: "Main Heading",
			defaultValue: "Expert Plumbing Services",
		},
		{
			name: "highlightedHeading",
			type: "text",
			required: true,
			label: "Highlighted Heading",
			defaultValue: "You Can Trust",
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			label: "Description",
			defaultValue: "From leaky faucets to complete bathroom renovations, our team of skilled plumbers is ready to tackle any job, big or small.",
		},
		{
			name: "primaryButton",
			type: "group",
			label: "Primary Button",
			fields: [
				{
					name: "text",
					type: "text",
					required: true,
					defaultValue: "Get a Free Quote",
				},
				{
					name: "link",
					type: "text",
					required: true,
					defaultValue: "/contact",
				},
			],
		},
		{
			name: "secondaryButton",
			type: "group",
			label: "Secondary Button",
			fields: [
				{
					name: "text",
					type: "text",
					required: true,
					defaultValue: "Our Services",
				},
				{
					name: "link",
					type: "text",
					required: true,
					defaultValue: "/services",
				},
			],
		},
		{
			name: "phoneNumber",
			type: "text",
			required: true,
			label: "Phone Number",
			defaultValue: "404-988-4910",
		},
		{
			name: "heroImage",
			type: "upload",
			relationTo: "media",
			required: true,
			label: "Hero Image",
		},
	],
};
