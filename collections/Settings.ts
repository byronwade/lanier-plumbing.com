import { GlobalConfig } from "payload";

export const Settings: GlobalConfig = {
	slug: "settings",
	admin: {
		group: "Site Settings",
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "logo",
			type: "upload",
			relationTo: "media",
			label: "Company Logo",
			admin: {
				description: "Upload your company logo (recommended size: 200x50px)",
			},
		},
		{
			name: "homePage",
			type: "relationship",
			relationTo: "pages",
			required: true,
			admin: {
				description: "Select which page should be displayed as the home page",
			},
		},
		{
			name: "companyName",
			type: "text",
			required: true,
			defaultValue: "Lanier Plumbing",
		},
		{
			name: "companyPhone",
			type: "text",
			required: true,
			defaultValue: "(770) 536-1161",
		},
		{
			name: "companyEmail",
			type: "email",
			required: true,
			defaultValue: "info@lanierplumbing.com",
		},
		{
			name: "companyAddress",
			type: "text",
			required: true,
			defaultValue: "2530 Monroe Dr, Gainesville, GA 30507",
		},
		{
			name: "socialLinks",
			type: "array",
			defaultValue: [
				{
					platform: "facebook",
					url: "https://facebook.com/lanierplumbing",
				},
				{
					platform: "instagram",
					url: "https://instagram.com/lanierplumbing",
				},
			],
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
