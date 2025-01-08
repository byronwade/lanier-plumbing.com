"use client";

import { Star } from "lucide-react";
import { FaYelp, FaFacebook, FaGoogle } from "react-icons/fa";
import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type BaseBlock = Extract<LayoutType[number], { blockType: string }>;

interface Settings {
	companyName?: string;
	serviceArea?: string;
}

interface Platform {
	platform: "yelp" | "facebook" | "google";
	rating: number;
}

interface ReviewsBlock extends Omit<BaseBlock, "blockType"> {
	blockType: "reviews";
	tagline: string;
	platforms: Platform[];
	settings?: Settings;
}

const platformIcons = {
	yelp: FaYelp,
	facebook: FaFacebook,
	google: FaGoogle,
};

export default function Reviews(props: ReviewsBlock) {
	const { tagline = "Trust the experts for all your residential and commercial plumbing needs.", platforms = [], settings } = props;
	const companyName = settings?.companyName || "Lanier Plumbing";
	const serviceArea = settings?.serviceArea || "Gainesville";

	const formattedTagline = tagline.replace("FlowMasters", companyName);

	return (
		<section className="py-16 bg-white">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
					<p className="max-w-2xl text-lg font-medium text-center lg:text-left lg:text-2xl">{formattedTagline}</p>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{platforms.map((item, index) => {
							const Icon = platformIcons[item.platform];
							return (
								<div key={index} className="flex flex-col items-center gap-1 p-4 transition-all duration-300 border rounded-lg shadow-sm hover:shadow-md">
									<div className="flex items-center gap-2 text-2xl font-medium text-red-600">
										<span>{item.rating}</span>
										<Star className="w-6 h-6 fill-current" />
									</div>
									<div className="flex items-center gap-2">
										<Icon className="w-5 h-5 text-red-600" />
										<span className="text-sm font-medium">{item.platform.charAt(0).toUpperCase() + item.platform.slice(1)}</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
