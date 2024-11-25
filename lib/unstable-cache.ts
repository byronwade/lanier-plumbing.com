import { unstable_cache } from "next/cache";
import { cache } from "react";

type CacheOptions = {
	revalidate?: number;
	tags?: string[];
};

export const createCache = <T>(fn: (...args: any[]) => Promise<T>, keys: string[], options: CacheOptions = {}) => {
	return cache(
		unstable_cache(fn, keys, {
			revalidate: 3600,
			tags: [],
			...options,
		})
	);
};
