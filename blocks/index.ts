import type { Block } from "payload";
import { heroBlock } from "./hero/config";
import { costSavingBlock } from "./cost-saving/config";

// Export blocks array directly for use in collections
export const blocksArray = [heroBlock, costSavingBlock];

// Export blocks object for admin UI
export const blocks = {
	hero: heroBlock,
	costSaving: costSavingBlock,
} as Record<string, Block>;

// Export for backwards compatibility
export default blocksArray;
