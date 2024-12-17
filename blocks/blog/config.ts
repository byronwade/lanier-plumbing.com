import type { Block } from "payload";

export const blogBlock: Block = {
	slug: "blog",
	labels: {
		singular: "Expert Plumbing Tips Block",
		plural: "Expert Plumbing Tips Blocks",
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
					defaultValue: "Expert Plumbing Tips",
				},
				{
					name: "subtitle",
					type: "text",
					defaultValue: "Professional advice and insights from our experienced plumbing team",
				},
			],
		},
		{
			name: "featuredPost",
			type: "relationship",
			relationTo: "posts",
			hasMany: false,
			required: false,
			admin: {
				description: "Optional: Select a post to feature at the top of the list. If not selected, the most recent post will be featured.",
			},
		},
		{
			name: "postsPerPage",
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
