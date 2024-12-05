import { CollectionConfig } from "payload/types";

export const Settings: CollectionConfig = {
	slug: "settings",
	admin: {
		useAsTitle: "companyName",
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "companyName",
			type: "text",
			required: true,
		},
		{
			name: "companyPhone",
			type: "text",
			required: true,
		},
		{
			name: "companyEmail",
			type: "email",
			required: true,
		},
		{
			name: "companyAddress",
			type: "text",
			required: true,
		},
		{
			name: "socialLinks",
			type: "array",
			fields: [
				{
					name: "platform",
					type: "text",
					required: true,
				},
				{
					name: "url",
					type: "text",
					required: true,
				},
			],
		},
	],
};
