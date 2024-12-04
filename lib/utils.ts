import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { use } from "react";

export function cn(...inputs: any[]) {
	return twMerge(clsx(inputs));
}

export const getCurrentYear = () => {
	return use(Promise.resolve(performance().getFullYear()));
};
