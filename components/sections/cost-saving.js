import { useMemo } from "react";
import Image from "next/image";
import { Wrench } from "lucide-react";

export default function PlumbingCostSaving() {
	const services = useMemo(
		() => [
			{ src: "/placeholder.svg", alt: "Pipe repair" },
			{ src: "/placeholder.svg", alt: "Drain cleaning" },
			{ src: "/placeholder.svg", alt: "Water heater installation" },
			{ src: "/placeholder.svg", alt: "Fixture installation" },
			{ src: "/placeholder.svg", alt: "Leak detection" },
		],
		[]
	);

	const serviceGrid = useMemo(
		() => (
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
				{services.map((service, index) => (
					<div key={index} className="relative h-64 overflow-hidden rounded-lg">
						<Image src={service.src} alt={service.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw" className="transition-transform duration-300 hover:scale-110" loading="lazy" />
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
					<span className="font-semibold tracking-wider text-red-500 uppercase">Our Work</span>
				</div>
				<h2 className="mb-4 text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl">
					We Offer Cost Efficient
					<br />
					Plumbing Services
				</h2>
				{serviceGrid}
			</div>
		</section>
	);
}
