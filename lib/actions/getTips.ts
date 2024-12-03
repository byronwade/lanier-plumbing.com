"use cache";

const FAKE_TIPS = [
	{
		slug: "prevent-frozen-pipes",
		title: "How to Prevent Frozen Pipes",
		description: "Essential tips to protect your pipes during winter",
		content: "# Preventing Frozen Pipes\n\nLearn how to protect your plumbing...",
	},
	{
		slug: "water-conservation",
		title: "Water Conservation Tips",
		description: "Smart ways to reduce your water usage",
		content: "# Water Conservation\n\nDiscover practical ways to save water...",
	},
];

export async function getTips() {
	return FAKE_TIPS.map(({ slug, title, description }) => ({
		slug,
		title,
		description,
	}));
}

export async function getTipBySlug(slug: string) {
	const tip = FAKE_TIPS.find((t) => t.slug === slug);

	if (!tip) {
		throw new Error(`Tip ${slug} not found`);
	}

	return {
		data: {
			title: tip.title,
			description: tip.description,
		},
		content: tip.content,
	};
}
