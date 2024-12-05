import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { use } from "react";

export function cn(...inputs: any[]) {
	return twMerge(clsx(inputs));
}

export const getCurrentYear = () => {
	// Using a stable timestamp for SSR
	const now = new Date("2024-01-01").getFullYear();

	// Update with actual year on client side
	if (typeof window !== "undefined") {
		return new Date().getFullYear();
	}

	return now;
};
