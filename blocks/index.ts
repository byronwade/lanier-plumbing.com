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

// Helper function to add category to block
const addCategory = (block: Block, group: string): Block => ({
	...block,
	admin: {
		...(block.admin || {}),
		group,
	},
});

// Add category to each block
const blocksWithCategories = {
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
} satisfies Record<string, Block>;

// Export blocks array directly for use in collections
export const blocksArray = Object.values(blocksWithCategories);

// Export blocks object for admin UI
export const blocks = blocksWithCategories;

// Export for backwards compatibility
export default blocksArray;
