"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type BaseBlock = Extract<LayoutType[number], { blockType: "testimonials" }>;

interface Settings {
	companyName?: string;
	serviceArea?: string;
}

interface Platform {
	platform: "google" | "yelp";
	rating: number;
	icon: {
		url: string;
		alt?: string;
		width?: number;
		height?: number;
	};
}

interface TestimonialsBlock extends BaseBlock {
	title: string;
	description: string;
	platforms: Platform[];
	settings?: Settings;
}

export default function Testimonials(props: TestimonialsBlock) {
	const { title = "Testimonials", description = "Trust the plumbing company that hundreds of homeowners rely on. See what our satisfied customers have to say about our expert services.", platforms = [], settings } = props;

	const companyName = settings?.companyName || "Lanier Plumbing";
	const serviceArea = settings?.serviceArea || "Gainesville";

	const formattedDescription = description.replace("plumbing company", `${companyName}`);

	const starRating = useMemo(
		() => (
			<div className="flex items-center gap-0.5">
				{[...Array(5)].map((_, i) => (
					<Star key={i} className="w-5 h-5 fill-primary stroke-none" />
				))}
			</div>
		),
		[]
	);

	return (
		<section className="relative py-24 border-y bg-background border-primary/10">
			<div
				className="absolute inset-0 z-0 opacity-50"
				style={{
					backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
				}}
			></div>
			<div className="container relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex flex-col items-start gap-12 sm:flex-row sm:items-center sm:justify-between sm:gap-16">
					<div className="flex flex-col items-start flex-1 text-left">
						<h2 className="mb-6 text-3xl font-bold text-primary sm:text-4xl">{title}</h2>
						<p className="max-w-2xl mb-8 text-base text-muted-foreground sm:text-lg">{formattedDescription}</p>
						<Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
							View All Reviews
						</Button>
					</div>
					<div className="flex flex-col gap-8 sm:flex-row lg:gap-16">
						{platforms.map((platform, index) => (
							<div key={index} className="inline-block">
								<Image src={platform.icon.url} alt={`${platform.platform} Reviews for ${companyName}`} className="mb-4" width={24} height={24} />
								<div className="flex items-center">
									<div className="mr-4 text-sm font-semibold text-primary">{platform.rating} / 5</div>
									{starRating}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
