"use client";

import { Home, Building2, ArrowRight, HardHat, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type BaseBlock = Extract<LayoutType[number], { blockType: "services" }>;

interface ServiceSection {
	type: "residential" | "newConstruction" | "commercial";
	title: string;
	description: string;
	features: { text: string }[];
	image: {
		url: string;
		alt?: string;
		width?: number;
		height?: number;
	};
	phoneNumber: string;
	primaryButton: {
		text: string;
		link: `/${string}` | `tel:${string}` | `mailto:${string}`;
	};
	secondaryButton: {
		text: string;
		link: `/${string}` | `tel:${string}` | `mailto:${string}`;
	};
}

interface ServicesBlock extends BaseBlock {
	sections: ServiceSection[];
}

const iconMap = {
	residential: Home,
	newConstruction: HardHat,
	commercial: Building2,
};

export default function Services(props: ServicesBlock) {
	const { sections = [] } = props;

	return (
		<div className="flex flex-col w-full">
			{sections.map((section, index) => (
				<ServiceSection key={index} {...section} />
			))}
		</div>
	);
}

function ServiceSection(props: ServiceSection) {
	const { type, title, description, features, image, phoneNumber, primaryButton, secondaryButton } = props;

	const Icon = iconMap[type];

	return (
		<section className="flex items-center bg-gradient-to-br from-red-50 to-pink-50">
			<div className="container px-4 py-12 mx-auto max-w-7xl md:py-24">
				<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
					<div className="order-2 lg:order-1">
						<div className="inline-flex items-center justify-center p-3 mb-6 bg-red-100 rounded-full">
							<Icon className="w-8 h-8 text-red-600" />
						</div>
						<h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl lg:mb-6">{title}</h2>
						<p className="mb-6 text-lg leading-relaxed text-gray-600 md:text-xl lg:mb-8">{description}</p>
						<ul className="mb-6 space-y-3 lg:mb-8">
							{features.map((feature, index) => (
								<li key={index} className="flex items-center gap-3">
									<ArrowRight className="flex-shrink-0 w-5 h-5 text-red-600" />
									<span className="text-base md:text-lg">{feature.text}</span>
								</li>
							))}
						</ul>
						<div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
							<Link prefetch={true} href={`tel:${phoneNumber.replace(/\D/g, "")}`}>
								<Button size="lg" className="bg-red-600 hover:bg-red-800">
									<Phone className="w-4 h-4 mr-2" aria-hidden="true" />
									<span className="min-w-[7rem]">{phoneNumber}</span>
								</Button>
							</Link>
							<Link prefetch={true} href={secondaryButton.link}>
								<Button size="lg" variant="outline">
									{secondaryButton.text}
								</Button>
							</Link>
						</div>
					</div>
					<div className="order-1 lg:order-2">
						<div className="relative h-[300px] md:h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
							<Image src={image.url} alt={image.alt || title} width={image.width || 800} height={image.height || 600} className="object-cover w-full h-full" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
