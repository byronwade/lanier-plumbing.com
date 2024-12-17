import type { Block } from "payload";

export const contactBlock: Block = {
	slug: "contact",
	labels: {
		singular: "Contact Form Block",
		plural: "Contact Form Blocks",
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
					defaultValue: "Contact us",
				},
				{
					name: "phoneNumber",
					type: "text",
					required: true,
					defaultValue: "(770) 555-0123",
				},
				{
					name: "subtitle",
					type: "text",
					defaultValue: "Call or text us anytime",
				},
				{
					name: "hours",
					type: "text",
					defaultValue: "Mon - Fri 8:00 AM - 6:00 PM EST",
				},
			],
		},
		{
			name: "formSettings",
			type: "group",
			fields: [
				{
					name: "formTitle",
					type: "text",
					defaultValue: "Or fill out our contact form",
				},
				{
					name: "subjects",
					type: "array",
					label: "Subject Options",
					minRows: 1,
					defaultValue: [
						{ label: "Emergency Plumbing", value: "emergency" },
						{ label: "Repair Service", value: "repair" },
						{ label: "New Installation", value: "installation" },
						{ label: "Maintenance", value: "maintenance" },
						{ label: "Other", value: "other" },
					],
					fields: [
						{
							name: "label",
							type: "text",
							required: true,
						},
						{
							name: "value",
							type: "text",
							required: true,
						},
					],
				},
				{
					name: "successMessage",
					type: "text",
					defaultValue: "Your message has been sent successfully. We'll get back to you soon.",
				},
				{
					name: "errorMessage",
					type: "text",
					defaultValue: "There was an error submitting your message. Please try again later.",
				},
			],
		},
		{
			name: "buttons",
			type: "group",
			fields: [
				{
					name: "callButton",
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
							defaultValue: "tel:7705550123",
						},
					],
				},
				{
					name: "textButton",
					type: "group",
					fields: [
						{
							name: "text",
							type: "text",
							required: true,
							defaultValue: "Text Us",
						},
						{
							name: "link",
							type: "text",
							required: true,
							defaultValue: "sms:7705550123",
						},
					],
				},
				{
					name: "submitButton",
					type: "group",
					fields: [
						{
							name: "text",
							type: "text",
							required: true,
							defaultValue: "Submit",
						},
						{
							name: "loadingText",
							type: "text",
							required: true,
							defaultValue: "Submitting...",
						},
					],
				},
			],
		},
	],
};
