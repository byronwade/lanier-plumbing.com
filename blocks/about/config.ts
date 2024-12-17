import type { Block } from "payload";

export const aboutBlock: Block = {
	slug: "about",
	labels: {
		singular: "About Block",
		plural: "About Blocks",
	},
	admin: {
		description: "A full-page about section with hero, mission, features, and services content",
		group: "Template Blocks",
	},
	fields: [
		{
			name: "hero",
			type: "group",
			fields: [
				{
					name: "title",
					type: "text",
					required: true,
					defaultValue: "Reliable Plumbing Solutions for Lanier and Beyond",
				},
				{
					name: "description",
					type: "textarea",
					required: true,
					defaultValue: "Lanier Plumbing provides expert plumbing services for residential and commercial properties. With our skilled team and state-of-the-art equipment, we ensure your plumbing needs are met efficiently and effectively.",
				},
			],
		},
		{
			name: "mission",
			type: "group",
			fields: [
				{
					name: "image",
					type: "upload",
					relationTo: "media",
					required: true,
				},
				{
					name: "label",
					type: "text",
					defaultValue: "OUR MISSION",
				},
				{
					name: "statement",
					type: "textarea",
					required: true,
					defaultValue: "At Lanier Plumbing, we're committed to providing top-notch plumbing services with integrity and professionalism. Our goal is to ensure every customer experiences the peace of mind that comes with reliable, high-quality plumbing solutions.",
				},
			],
		},
		{
			name: "features",
			type: "group",
			fields: [
				{
					name: "title",
					type: "text",
					required: true,
					defaultValue: "Why Choose Lanier Plumbing?",
				},
				{
					name: "subtitle",
					type: "textarea",
					defaultValue: "We pride ourselves on our expertise, reliability, and customer-first approach. Here's what sets us apart in the plumbing industry.",
				},
				{
					name: "items",
					type: "array",
					required: true,
					minRows: 1,
					maxRows: 3,
					fields: [
						{
							name: "icon",
							type: "select",
							required: true,
							options: [
								{
									label: "Wrench",
									value: "wrench",
								},
								{
									label: "Clock",
									value: "clock",
								},
								{
									label: "Shield Check",
									value: "shield-check",
								},
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
					],
					defaultValue: [
						{
							icon: "wrench",
							title: "Expert Craftsmanship",
							description: "Our team of licensed plumbers brings years of experience and a commitment to quality workmanship to every job, ensuring lasting solutions for your plumbing needs.",
						},
						{
							icon: "clock",
							title: "24/7 Emergency Service",
							description: "Plumbing emergencies don't wait for business hours. That's why we offer round-the-clock emergency services to address your urgent plumbing issues promptly.",
						},
						{
							icon: "shield-check",
							title: "Guaranteed Satisfaction",
							description: "We stand behind our work with a satisfaction guarantee. If you're not completely satisfied with our service, we'll make it right - that's our promise to you.",
						},
					],
				},
			],
		},
		{
			name: "services",
			type: "group",
			fields: [
				{
					name: "label",
					type: "text",
					defaultValue: "OUR SERVICES",
				},
				{
					name: "title",
					type: "text",
					required: true,
					defaultValue: "Comprehensive Plumbing Solutions",
				},
				{
					name: "image",
					type: "upload",
					relationTo: "media",
					required: true,
				},
				{
					name: "description",
					type: "textarea",
					required: true,
					defaultValue: "From routine maintenance to complex installations, Lanier Plumbing offers a full range of services to meet all your plumbing needs. Our expertise covers residential and commercial properties, ensuring top-quality solutions for every client.",
				},
			],
		},
	],
};
