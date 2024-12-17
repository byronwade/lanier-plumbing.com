import type { Block } from "payload";

export const testimonialsBlock: Block = {
	slug: "testimonials",
	labels: {
		singular: "Testimonials Block",
		plural: "Testimonials Blocks",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			defaultValue: "Testimonials",
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			defaultValue: "Trust the plumbing company that hundreds of homeowners rely on. See what our satisfied customers have to say about our expert services.",
		},
		{
			name: "platforms",
			type: "array",
			label: "Review Platforms",
			minRows: 1,
			maxRows: 2,
			fields: [
				{
					name: "platform",
					type: "select",
					required: true,
					options: [
						{ label: "Google", value: "google" },
						{ label: "Yelp", value: "yelp" },
					],
				},
				{
					name: "rating",
					type: "number",
					required: true,
					min: 0,
					max: 5,
					defaultValue: 4.8,
				},
				{
					name: "icon",
					type: "upload",
					relationTo: "media",
					required: true,
				},
			],
		},
	],
};
