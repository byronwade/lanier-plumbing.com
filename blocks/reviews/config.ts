import type { Block } from "payload";

export const reviewsBlock: Block = {
	slug: "reviews",
	labels: {
		singular: "Reviews Block",
		plural: "Reviews Blocks",
	},
	fields: [
		{
			name: "tagline",
			type: "text",
			required: true,
			defaultValue: "Trust the experts at FlowMasters Plumbing for all your residential and commercial plumbing needs.",
		},
		{
			name: "platforms",
			type: "array",
			label: "Review Platforms",
			minRows: 1,
			maxRows: 3,
			fields: [
				{
					name: "platform",
					type: "select",
					required: true,
					options: [
						{ label: "Yelp", value: "yelp" },
						{ label: "Facebook", value: "facebook" },
						{ label: "Google", value: "google" },
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
			],
		},
	],
};
