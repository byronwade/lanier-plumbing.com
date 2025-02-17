"use client";

import { Wrench, ShieldCheck, Clock } from "lucide-react";
import Image from "next/image";
import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type BaseBlock = Extract<LayoutType[number], { blockType: string }>;

interface Settings {
	companyName?: string;
	serviceArea?: string;
}

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
	settings?: Settings;
}

const IconMap = {
	wrench: Wrench,
	clock: Clock,
	"shield-check": ShieldCheck,
} as const;

export default function About(props: AboutBlock) {
	const { hero, mission, features, services, settings } = props;
	const companyName = settings?.companyName || "Lanier Plumbing";
	const serviceArea = settings?.serviceArea || "Gainesville";

	return (
		<section className="pt-12 pb-32 bg-white">
			<div className="container flex flex-col mx-auto max-w-7xl gap-28">
				{/* Hero Section */}
				<div className="flex flex-col gap-7">
					<h1 className="text-4xl font-semibold text-gray-900 lg:text-7xl">{hero.title}</h1>
					<p className="max-w-xl text-lg text-gray-700">{hero.description}</p>
				</div>

				{/* Mission Section */}
				<div className="grid gap-6 md:grid-cols-2">
					<Image src={mission.image.url} alt={mission.image.alt || `${companyName} team at work`} className="object-cover w-full h-96 rounded-2xl" width={576} height={384} />
					<div className="flex flex-col justify-between gap-10 p-10 bg-gray-100 rounded-2xl">
						<p className="text-sm text-gray-500">{mission.label}</p>
						<p className="text-lg font-medium text-gray-900">{mission.statement}</p>
					</div>
				</div>

				{/* Features Section */}
				<div className="flex flex-col gap-6 md:gap-20">
					<div className="max-w-xl">
						<h2 className="mb-2.5 text-3xl font-semibold text-gray-900 md:text-5xl">{features.title}</h2>
						<p className="text-gray-500">{features.subtitle}</p>
					</div>
					<div className="grid gap-10 md:grid-cols-3">
						{features.items.map((feature, index) => {
							const Icon = IconMap[feature.icon];
							return (
								<div key={index} className="flex flex-col">
									<div className="flex items-center justify-center mb-5 bg-gray-100 size-12 rounded-2xl">
										<Icon className="text-gray-900 size-5" />
									</div>
									<h3 className="mt-2 mb-3 text-lg font-semibold text-gray-900">{feature.title}</h3>
									<p className="text-gray-500">{feature.description}</p>
								</div>
							);
						})}
					</div>
				</div>

				{/* Services Section */}
				<div className="grid gap-10 md:grid-cols-2">
					<div>
						<p className="mb-10 text-sm font-medium text-gray-500">{services.label}</p>
						<h2 className="mb-2.5 text-3xl font-semibold text-gray-900 md:text-5xl">{services.title}</h2>
					</div>
					<div>
						<Image src={services.image.url} alt={services.image.alt || `${companyName} service showcase`} className="object-cover w-full mb-6 h-36 rounded-xl" width={576} height={144} />
						<p className="text-gray-500">{services.description}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
