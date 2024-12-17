"use client";

import { Wrench, ShieldCheck, Clock } from "lucide-react";
import Image from "next/image";
import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type BaseBlock = Extract<LayoutType[number], { blockType: string }>;

interface AboutBlock extends Omit<BaseBlock, "blockType"> {
	blockType: "about";
	hero: {
		title: string;
		description: string;
	};
	mission: {
		image: {
			url: string;
			alt?: string;
		};
		label: string;
		statement: string;
	};
	features: {
		title: string;
		subtitle: string;
		items: Array<{
			icon: "wrench" | "clock" | "shield-check";
			title: string;
			description: string;
		}>;
	};
	services: {
		label: string;
		title: string;
		image: {
			url: string;
			alt?: string;
		};
		description: string;
	};
}

const IconMap = {
	wrench: Wrench,
	clock: Clock,
	"shield-check": ShieldCheck,
} as const;

export default function About(props: AboutBlock) {
	const { hero, mission, features, services } = props;

	return (
		<section className="pt-12 pb-32">
			<div className="container flex flex-col mx-auto max-w-7xl gap-28">
				{/* Hero Section */}
				<div className="flex flex-col gap-7">
					<h1 className="text-4xl font-semibold lg:text-7xl">{hero.title}</h1>
					<p className="max-w-xl text-lg">{hero.description}</p>
				</div>

				{/* Mission Section */}
				<div className="grid gap-6 md:grid-cols-2">
					<Image src={mission.image.url} alt={mission.image.alt || "Lanier Plumbing team at work"} className="object-cover w-full h-96 rounded-2xl" width={576} height={384} />
					<div className="flex flex-col justify-between gap-10 p-10 rounded-2xl bg-muted">
						<p className="text-sm text-muted-foreground">{mission.label}</p>
						<p className="text-lg font-medium">{mission.statement}</p>
					</div>
				</div>

				{/* Features Section */}
				<div className="flex flex-col gap-6 md:gap-20">
					<div className="max-w-xl">
						<h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">{features.title}</h2>
						<p className="text-muted-foreground">{features.subtitle}</p>
					</div>
					<div className="grid gap-10 md:grid-cols-3">
						{features.items.map((feature, index) => {
							const Icon = IconMap[feature.icon];
							return (
								<div key={index} className="flex flex-col">
									<div className="flex items-center justify-center mb-5 size-12 rounded-2xl bg-accent">
										<Icon className="size-5" />
									</div>
									<h3 className="mt-2 mb-3 text-lg font-semibold">{feature.title}</h3>
									<p className="text-muted-foreground">{feature.description}</p>
								</div>
							);
						})}
					</div>
				</div>

				{/* Services Section */}
				<div className="grid gap-10 md:grid-cols-2">
					<div>
						<p className="mb-10 text-sm font-medium text-muted-foreground">{services.label}</p>
						<h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">{services.title}</h2>
					</div>
					<div>
						<Image src={services.image.url} alt={services.image.alt || "Lanier Plumbing service showcase"} className="object-cover w-full mb-6 h-36 rounded-xl" width={576} height={144} />
						<p className="text-muted-foreground">{services.description}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
