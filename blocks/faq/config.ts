import type { Block } from "payload";

export const faqBlock: Block = {
	slug: "faq",
	labels: {
		singular: "FAQ Block",
		plural: "FAQ Blocks",
	},
	fields: [
		{
			name: "heading",
			type: "text",
			required: true,
			label: "Heading",
			defaultValue: "Common Questions & Answers",
		},
		{
			name: "subheading",
			type: "text",
			label: "Subheading",
			defaultValue: "Find out all the essential details about our platform and how it can serve your needs.",
		},
		{
			name: "faqs",
			type: "array",
			label: "FAQs",
			minRows: 1,
			fields: [
				{
					name: "question",
					type: "text",
					required: true,
					label: "Question",
				},
				{
					name: "answer",
					type: "textarea",
					required: true,
					label: "Answer",
				},
			],
		},
	],
};
