"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type HeroBlock = Extract<LayoutType[number], { blockType: "hero" }>;

export default  function Hero(props: HeroBlock) {
	const {
		mainHeading = "Expert Plumbing Services",
		highlightedHeading = "You Can Trust",
		description = "From leaky faucets to complete bathroom renovations, our team of skilled plumbers is ready to tackle any job, big or small.",
		primaryButton = { text: "Get a Free Quote", link: "/contact" },
		secondaryButton = { text: "Our Services", link: "/services" },
		phoneNumber = "404-988-4910",
		heroImage,
	} = props;

	return (
		<section className="relative overflow-hidden bg-white">
			<div className="absolute inset-y-0 top-0 right-0 w-full h-full lg:w-1/2">
				{heroImage?.url ? (
					<Image
						alt={heroImage.alt || "Plumber working on pipes"}
						src={heroImage.url}
						width={heroImage.width || 800}
						height={heroImage.height || 600}
						priority
						className="object-cover w-full h-full"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				) : null}
			</div>
			<div className="mx-auto max-w-7xl">
				<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
					<svg
						className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
						fill="currentColor"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<polygon points="50,0 100,0 50,100 0,100" />
					</svg>

					<main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<div className="sm:text-center lg:text-left">
							<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
								<span className="block xl:inline">{mainHeading}</span>{" "}
								<span className="block text-red-800 xl:inline">{highlightedHeading}</span>
							</h1>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
								{description}
							</p>
							<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
								<div className="rounded-md shadow">
									<Link href={primaryButton.link}>
										<Button className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-red-600 rounded-md shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-red-800">
											{primaryButton.text}
										</Button>
									</Link>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<Link href={secondaryButton.link}>
										<Button variant="outline" className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-transparent border rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input hover:bg-accent hover:text-accent-foreground">
											{secondaryButton.text}
										</Button>
									</Link>
								</div>
							</div>
							<div className="contact-cta">
								<a href={`tel:${phoneNumber}`} className="cta-button">
									Call Now: {phoneNumber}
								</a>
							</div>
						</div>
					</main>
				</div>
			</div>
			<div className="absolute inset-y-0 top-0 right-0 w-full h-full lg:w-1/2">
				{heroImage?.url ? (
					<Image
						alt={heroImage.alt || "Plumber working on pipes"}
						src={heroImage.url}
						width={heroImage.width || 800}
						height={heroImage.height || 600}
						priority
						className="object-cover w-full h-full"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				) : (
					<Image
						alt="Plumber working on pipes"
						src="/hero-image.webp"
						width={800}
						height={600}
						priority
						className="object-cover w-full h-full"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				)}
			</div>
		</section>
	);
}

