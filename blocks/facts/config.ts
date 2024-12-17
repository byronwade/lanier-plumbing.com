import type { Block } from "payload";

export const factsBlock: Block = {
	slug: "facts",
	labels: {
		singular: "Facts Block",
		plural: "Facts Blocks",
	},
	fields: [
		{
			name: "facts",
			type: "array",
			label: "Plumbing Facts",
			minRows: 1,
			fields: [
				{
					name: "fact",
					type: "text",
					required: true,
					label: "Fact",
				},
			],
			defaultValue: [{ fact: "The word 'plumber' comes from the Latin word 'plumbum', which means lead." }, { fact: "Ancient Egyptians used copper pipes for their irrigation systems as early as 2500 BC." }, { fact: "The first flushing toilet was invented by Sir John Harington in 1596." }],
		},
		{
			name: "interval",
			type: "number",
			label: "Rotation Interval (ms)",
			defaultValue: 8000,
		},
	],
};
