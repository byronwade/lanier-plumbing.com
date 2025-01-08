import { GlobalConfig } from "payload";

export const Settings: GlobalConfig = {
	slug: "settings",
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
			name: "siteURL",
			type: "text",
			required: true,
		},
		{
			name: "homePage",
			type: "relationship",
			relationTo: "pages",
		},
		{
			name: "logo",
			type: "upload",
			relationTo: "media",
		},
		{
			name: "address",
			type: "group",
			fields: [
				{
					name: "street",
					type: "text",
				},
				{
					name: "city",
					type: "text",
				},
				{
					name: "state",
					type: "text",
				},
				{
					name: "zip",
					type: "text",
				},
				{
					name: "country",
					type: "text",
				},
			],
		},
		{
			name: "phone",
			type: "text",
		},
		{
			name: "email",
			type: "email",
		},
		{
			name: "priceRange",
			type: "select",
			options: ["$", "$$", "$$$", "$$$$"],
		},
		{
			name: "serviceArea",
			type: "text",
		},
		{
			name: "blogSettings",
			type: "group",
			fields: [
				{
					name: "defaultAuthor",
					type: "text",
				},
				{
					name: "defaultExcerpt",
					type: "textarea",
				},
				{
					name: "authorBio",
					type: "richText",
				},
			],
		},
		{
			name: "socialMedia",
			type: "group",
			fields: [
				{
					name: "twitter",
					type: "text",
				},
				{
					name: "facebook",
					type: "text",
				},
				{
					name: "instagram",
					type: "text",
				},
				{
					name: "linkedin",
					type: "text",
				},
				{
					name: "youtube",
					type: "text",
				},
			],
		},
		{
			name: "defaultSEO",
			type: "group",
			fields: [
				{
					name: "title",
					type: "text",
				},
				{
					name: "description",
					type: "textarea",
				},
				{
					name: "keywords",
					type: "text",
					hasMany: true,
					label: "Keywords",
					admin: {
						description: "Enter SEO keywords (one per line)",
					},
				},
				{
					name: "image",
					type: "upload",
					relationTo: "media",
				},
			],
		},
		{
			name: "siteVerification",
			type: "group",
			fields: [
				{
					name: "google",
					type: "text",
				},
				{
					name: "bing",
					type: "text",
				},
				{
					name: "yandex",
					type: "text",
				},
				{
					name: "yahoo",
					type: "text",
				},
			],
		},
	],
};
