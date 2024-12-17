import type { Block } from "payload";

export const servicesBlock: Block = {
	slug: "services",
	labels: {
		singular: "Services Block",
		plural: "Services Blocks",
	},
	fields: [
		{
			name: "sections",
			type: "array",
			label: "Service Sections",
			minRows: 1,
			defaultValue: [
				{
					type: "residential",
					title: "Residential Plumbing Excellence",
					description: "From quick fixes to complete home remodels, our expert team ensures your residential plumbing runs flawlessly. Experience peace of mind with our 24/7 emergency services.",
					features: [{ text: "Leak Detection & Repair" }, { text: "Fixture Installation & Upgrades" }, { text: "Drain Cleaning & Maintenance" }],
					phoneNumber: "(555) 123-4567",
					primaryButton: {
						text: "Call Now",
						link: "tel:5551234567",
					},
					secondaryButton: {
						text: "View Residential Services",
						link: "/services#residential",
					},
				},
				{
					type: "newConstruction",
					title: "Residential New Construction",
					description: "Build your dream home with confidence. Our expert plumbing solutions for new construction ensure efficient, long-lasting systems tailored to your unique vision.",
					features: [{ text: "Custom Plumbing Design" }, { text: "Energy-Efficient Systems" }, { text: "Code Compliance & Permits" }],
					phoneNumber: "(555) 123-4567",
					primaryButton: {
						text: "Call Now",
						link: "tel:5551234567",
					},
					secondaryButton: {
						text: "View New Construction Services",
						link: "/services#new-construction",
					},
				},
				{
					type: "commercial",
					title: "Commercial Plumbing Solutions",
					description: "Keep your business running smoothly with our comprehensive commercial plumbing services. We minimize downtime and maximize efficiency for properties of all sizes.",
					features: [{ text: "Code Compliance & Inspections" }, { text: "Water Conservation Solutions" }, { text: "Preventive Maintenance Plans" }],
					phoneNumber: "(555) 123-4567",
					primaryButton: {
						text: "Call Now",
						link: "tel:5551234567",
					},
					secondaryButton: {
						text: "View Commercial Services",
						link: "/services#commercial",
					},
				},
			],
			fields: [
				{
					name: "type",
					type: "select",
					required: true,
					options: [
						{ label: "Residential", value: "residential" },
						{ label: "New Construction", value: "newConstruction" },
						{ label: "Commercial", value: "commercial" },
					],
				},
				{
					name: "title",
					type: "text",
					required: true,
				},
				{
					name: "description",
					type: "textarea",
					required: true,
				},
				{
					name: "features",
					type: "array",
					minRows: 1,
					maxRows: 3,
					fields: [
						{
							name: "text",
							type: "text",
							required: true,
						},
					],
				},
				{
					name: "image",
					type: "upload",
					relationTo: "media",
					required: true,
				},
				{
					name: "phoneNumber",
					type: "text",
					defaultValue: "(555) 123-4567",
				},
				{
					name: "primaryButton",
					type: "group",
					fields: [
						{
							name: "text",
							type: "text",
							required: true,
							defaultValue: "Call Now",
						},
						{
							name: "link",
							type: "text",
							required: true,
							defaultValue: "tel:5551234567",
						},
					],
				},
				{
					name: "secondaryButton",
					type: "group",
					fields: [
						{
							name: "text",
							type: "text",
							required: true,
							defaultValue: "View Services",
						},
						{
							name: "link",
							type: "text",
							required: true,
							defaultValue: "/services",
						},
					],
				},
			],
		},
	],
};
