"use client";

import { useState, useEffect } from "react";
import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type FactsBlock = Extract<LayoutType[number], { blockType: "facts" }>;

export default function Facts(props: FactsBlock) {
	const { facts = [{ fact: "The word 'plumber' comes from the Latin word 'plumbum', which means lead." }], interval = 8000 } = props;

	const [currentFactIndex, setCurrentFactIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentFactIndex((prevIndex) => (prevIndex + 1) % facts.length);
		}, interval);

		return () => clearInterval(timer);
	}, [facts.length, interval]);

	return (
		<div className="relative px-3 py-2 overflow-hidden text-white shadow-lg bg-gradient-to-r from-red-600 to-red-700 sm:py-3 sm:px-4">
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-20"></div>
			<div className="container relative mx-auto">
				<div className="flex items-center justify-center min-h-[4rem] sm:min-h-[4.5rem]">
					<p className="px-2 text-xs font-medium text-center sm:text-sm md:text-base lg:text-lg animate-fade-in-out sm:px-4" aria-live="polite" aria-atomic="true">
						{facts[currentFactIndex].fact}
					</p>
				</div>
			</div>
		</div>
	);
}
