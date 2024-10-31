"use client";

import { useState, useEffect } from "react";

const plumbingFacts = [
	"The word 'plumber' comes from the Latin word 'plumbum', which means lead.",
	"Ancient Egyptians used copper pipes for their irrigation systems as early as 2500 BC.",
	"The first flushing toilet was invented by Sir John Harington in 1596.",
	"Leaky faucets can waste up to 3,000 gallons of water per year.",
	"The average household loses 14% of its water to leaks.",
	"The world's longest plumbing pipeline is the Trans-Alaska Pipeline System, stretching 800 miles.",
	"Albert Einstein was made an honorary member of the Plumbers and Steamfitters Union in 1954.",
	"The first water pipes in the U.S. were made from hollowed logs.",
	"The White House has 35 bathrooms.",
	"The ancient Roman aqueduct system transported water for hundreds of miles using gravity alone.",
];

export default function ResponsivePlumbingFactsBanner() {
	const [currentFactIndex, setCurrentFactIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentFactIndex((prevIndex) => (prevIndex + 1) % plumbingFacts.length);
		}, 8000); // Change fact every 8 seconds

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="relative px-3 py-2 overflow-hidden text-white shadow-lg bg-gradient-to-r from-red-600 to-red-700 sm:py-3 sm:px-4">
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-20"></div>
			<div className="container relative mx-auto">
				<div className="flex items-center justify-center min-h-[4rem] sm:min-h-[4.5rem]">
					<p className="px-2 text-xs font-medium text-center sm:text-sm md:text-base lg:text-lg animate-fade-in-out sm:px-4" aria-live="polite" aria-atomic="true">
						{plumbingFacts[currentFactIndex]}
					</p>
				</div>
				{/* <div className="flex justify-center mt-1 space-x-1 sm:mt-2">
					{plumbingFacts.map((_, index) => (
						<div key={index} className={`h-1 w-4 sm:w-6 md:w-8 rounded-full transition-all duration-300 ${index === currentFactIndex ? "bg-white" : "bg-white/30"}`} aria-hidden="true"></div>
					))}
				</div> */}
			</div>
		</div>
	);
}
