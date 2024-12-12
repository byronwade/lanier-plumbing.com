"use client";

import { useMemo } from "react";
import Image from "next/image";
import { Wrench } from "lucide-react";
import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type CostSavingBlock = Extract<LayoutType[number], { blockType: "costSaving" }>;

interface ServiceItem {
	image: {
		url: string;
		alt?: string;
		width?: number;
		height?: number;
	};
	title: string;
}

interface CostSavingProps extends Omit<CostSavingBlock, "blockType"> {
	blockType: "costSaving";
	title?: string;
	subtitle?: string;
	services?: ServiceItem[];
}

export default function CostSaving(props: CostSavingProps) {
	const {
		title = "We Offer Cost Efficient Plumbing Services",
		subtitle = "Our Work",
		services = [
			{ image: { url: "/placeholder.svg", alt: "Pipe repair" }, title: "Pipe repair" },
			{ image: { url: "/placeholder.svg", alt: "Drain cleaning" }, title: "Drain cleaning" },
			{ image: { url: "/placeholder.svg", alt: "Water heater installation" }, title: "Water heater installation" },
			{ image: { url: "/placeholder.svg", alt: "Fixture installation" }, title: "Fixture installation" },
			{ image: { url: "/placeholder.svg", alt: "Leak detection" }, title: "Leak detection" },
		],
	} = props;

	const serviceGrid = useMemo(
		() => (
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
				{services.map((service, index) => (
					<div key={index} className="relative h-64 overflow-hidden rounded-lg">
						<Image
							src={service.image.url || "/placeholder.svg"}
							alt={service.image.alt || service.title}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
							className="transition-transform duration-300 hover:scale-110"
							loading="lazy"
						/>
					</div>
				))}
			</div>
		),
		[services]
	);

	return (
		<section className="relative py-16 overflow-hidden text-gray-100 bg-gray-900 md:pt-20 md:pb-32">
			<div className="container relative z-10 px-4 mx-auto">
				<div className="flex items-center justify-center mb-4">
					<Wrench className="mr-2 text-red-500" size={24} />
					<span className="font-semibold tracking-wider text-red-500 uppercase">{subtitle}</span>
				</div>
				<h2 className="mb-4 text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl">
					{title.split("\n").map((line, i) => (
						<span key={i}>
							{line}
							<br />
						</span>
					))}
				</h2>
				{serviceGrid}
			</div>
		</section>
	);
} 