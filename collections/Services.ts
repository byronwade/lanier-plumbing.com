import { CollectionConfig } from "payload";
import { unstable_cache } from "next/cache";
import payload from "payload";

// Cache service queries
export const getCachedServices = unstable_cache(
	async (query = {}) => {
		const services = await payload.find({
			collection: "services",
			...query,
		});
		return services;
	},
	["services"],
	{ revalidate: 60 }
);

export const Services: CollectionConfig = {
	slug: "services",
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "slug", "createdAt"],
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "slug",
			type: "text",
			required: true,
			admin: {
				position: "sidebar",
			},
			hooks: {
				beforeValidate: [
					({ value, data }) => {
						if (!value && data?.title) {
							return data.title
								.toLowerCase()
								.replace(/ /g, "-")
								.replace(/[^\w-]+/g, "");
						}
						return value;
					},
				],
			},
		},
		{
			name: "content",
			type: "richText",
			required: true,
		},
		{
			name: "image",
			type: "upload",
			relationTo: "media",
			required: true,
		},
		{
			name: "excerpt",
			type: "textarea",
			admin: {
				description: "A short description of the service. If not provided, it will be generated from the content.",
			},
		},
		{
			name: "status",
			type: "select",
			options: [
				{
					label: "Draft",
					value: "draft",
				},
				{
					label: "Published",
					value: "published",
				},
			],
			defaultValue: "draft",
			required: true,
			admin: {
				position: "sidebar",
			},
		},
	],
	timestamps: true,
};
