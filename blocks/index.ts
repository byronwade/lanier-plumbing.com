import type { Block } from "payload";
import { heroBlock } from "./hero/config";
import { costSavingBlock } from "./cost-saving/config";
import { factsBlock } from "./facts/config";
import { faqBlock } from "./faq/config";
import { servicesBlock } from "./services/config";
import { reviewsBlock } from "./reviews/config";
import { testimonialsBlock } from "./testimonials/config";
import { contactBlock } from "./contact/config";
import { blogBlock } from "./blog/config";
import { aboutBlock } from "./about/config";
import { servicesListBlock } from "./services-list/config";
import ServicesList from "./services-list/services-list";

// Helper function to add category to block
const addCategory = (block: Block, group: string): Block => ({
	...block,
	admin: {
		...(block.admin || {}),
		custom: {
			group,
		},
	},
});

// Add category to each block
export const blocks = {
	hero: addCategory(heroBlock, "Page Sections"),
	costSaving: addCategory(costSavingBlock, "Page Sections"),
	facts: addCategory(factsBlock, "Content Blocks"),
	faq: addCategory(faqBlock, "Content Blocks"),
	services: addCategory(servicesBlock, "Content Blocks"),
	reviews: addCategory(reviewsBlock, "Social Proof"),
	testimonials: addCategory(testimonialsBlock, "Social Proof"),
	contact: addCategory(contactBlock, "Template Blocks"),
	blog: addCategory(blogBlock, "Template Blocks"),
	about: addCategory(aboutBlock, "Template Blocks"),
	"services-list": {
		...servicesListBlock,
		Component: ServicesList,
	},
};

// Export blocks array for use in collections
export const blocksArray = Object.values(blocks).map((block) => {
	if ("Component" in block) {
		const { Component, ...rest } = block;
		return rest;
	}
	return block;
});

// Export for backwards compatibility
export default blocksArray;
