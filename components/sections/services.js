import React from "react";
import { Home, Building2, ArrowRight, HardHat, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
	return (
		<div className="flex flex-col w-full">
			<ResidentialSection />
			<NewConstructionSection />
			<CommercialSection />
		</div>
	);
}

function ResidentialSection() {
	return (
		<section className="flex items-center min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
			<div className="container px-4 py-12 mx-auto max-w-7xl md:py-24">
				<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
					<div className="order-2 lg:order-1">
						<div className="inline-flex items-center justify-center p-3 mb-6 bg-red-100 rounded-full">
							<Home className="w-8 h-8 text-red-600" />
						</div>
						<h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl lg:mb-6">Residential Plumbing Excellence</h2>
						<p className="mb-6 text-lg leading-relaxed text-gray-600 md:text-xl lg:mb-8">From quick fixes to complete home remodels, our expert team ensures your residential plumbing runs flawlessly. Experience peace of mind with our 24/7 emergency services.</p>
						<ul className="mb-6 space-y-3 lg:mb-8">
							<li className="flex items-center gap-3">
								<ArrowRight className="flex-shrink-0 w-5 h-5 text-red-600" />
								<span className="text-base md:text-lg">Leak Detection & Repair</span>
							</li>
							<li className="flex items-center gap-3">
								<ArrowRight className="flex-shrink-0 w-5 h-5 text-red-600" />
								<span className="text-base md:text-lg">Fixture Installation & Upgrades</span>
							</li>
							<li className="flex items-center gap-3">
								<ArrowRight className="flex-shrink-0 w-5 h-5 text-red-600" />
								<span className="text-base md:text-lg">Drain Cleaning & Maintenance</span>
							</li>
						</ul>
						<div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
							<Button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 min-h-[48px]" aria-label="Call us for residential plumbing services">
								<Phone className="w-5 h-5 mr-2" aria-hidden="true" />
								<span className="min-w-[7rem]">(555) 123-4567</span>
							</Button>

							<Link href="/services#residential" className="w-full sm:w-auto inline-block min-h-[48px]">
								<span className="w-full px-8 py-4 text-lg font-semibold text-red-700 transition-colors bg-white border-2 border-red-700 rounded-md hover:bg-red-700 hover:text-white focus:ring-4 focus:ring-red-300 inline-block min-w-[200px]">View Residential Services</span>
							</Link>
						</div>
					</div>
					<div className="order-1 lg:order-2">
						<div className="relative h-[300px] md:h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
							<Image src="/residential-plumbing.webp" alt="Residential Plumbing Services" className="object-cover w-full h-full" width={800} height={600} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function NewConstructionSection() {
	return (
		<section className="flex items-center min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
			<div className="container px-4 py-12 mx-auto max-w-7xl md:py-24">
				<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
					<div className="order-2 lg:order-1">
						<div className="relative h-[300px] md:h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
							<Image src="/new-construction.webp" alt="Residential New Construction Plumbing" className="object-cover w-full h-full" width={800} height={600} />
						</div>
					</div>
					<div className="order-1 lg:order-2">
						<div className="inline-flex items-center justify-center p-3 mb-6 bg-red-100 rounded-full">
							<HardHat className="w-8 h-8 text-red-600" />
						</div>
						<h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl lg:mb-6">Residential New Construction</h2>
						<p className="mb-6 text-lg leading-relaxed text-gray-600 md:text-xl lg:mb-8">Build your dream home with confidence. Our expert plumbing solutions for new construction ensure efficient, long-lasting systems tailored to your unique vision.</p>
						<ul className="mb-6 space-y-3 lg:mb-8">
							<li className="flex items-center gap-3">
								<ArrowRight className="flex-shrink-0 w-5 h-5 text-red-600" />
								<span className="text-base md:text-lg">Custom Plumbing Design</span>
							</li>
							<li className="flex items-center gap-3">
								<ArrowRight className="flex-shrink-0 w-5 h-5 text-red-600" />
								<span className="text-base md:text-lg">Energy-Efficient Systems</span>
							</li>
							<li className="flex items-center gap-3">
								<ArrowRight className="flex-shrink-0 w-5 h-5 text-red-600" />
								<span className="text-base md:text-lg">Code Compliance & Permits</span>
							</li>
						</ul>
						<div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
							<Button className="px-6 py-3 text-lg font-semibold text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300" aria-label="Call us for new construction plumbing services">
								<Phone className="w-5 h-5 mr-2" aria-hidden="true" />
								(555) 123-4567
							</Button>
							<Button variant="outline" className="px-6 py-3 text-lg font-semibold text-red-700 transition-colors bg-white border-2 border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:ring-red-300">
								<Link href="/services#new-construction" className="flex items-center justify-center w-full h-full">
									View New Construction Services
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function CommercialSection() {
	return (
		<section className="flex items-center min-h-screen bg-gradient-to-br from-red-50 to-yellow-50">
			<div className="container px-4 py-12 mx-auto max-w-7xl md:py-24">
				<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
					<div className="order-2 lg:order-1">
						<div className="inline-flex items-center justify-center p-3 mb-6 bg-red-100 rounded-full">
							<Building2 className="w-8 h-8 text-red-600" />
						</div>
						<h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl lg:mb-6">Commercial Plumbing Solutions</h2>
						<p className="mb-6 text-lg leading-relaxed text-gray-600 md:text-xl lg:mb-8">Keep your business running smoothly with our comprehensive commercial plumbing services. We minimize downtime and maximize efficiency for properties of all sizes.</p>
						<ul className="mb-6 space-y-3 lg:mb-8">
							<li className="flex items-center gap-3">
								<ArrowRight className="flex-shrink-0 w-5 h-5 text-red-600" />
								<span className="text-base md:text-lg">Code Compliance & Inspections</span>
							</li>
							<li className="flex items-center gap-3">
								<ArrowRight className="flex-shrink-0 w-5 h-5 text-red-600" />
								<span className="text-base md:text-lg">Water Conservation Solutions</span>
							</li>
							<li className="flex items-center gap-3">
								<ArrowRight className="flex-shrink-0 w-5 h-5 text-red-600" />
								<span className="text-base md:text-lg">Preventive Maintenance Plans</span>
							</li>
						</ul>
						<div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
							<Button className="px-6 py-3 text-lg font-semibold text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300" aria-label="Call us for commercial plumbing services">
								<Phone className="w-5 h-5 mr-2" aria-hidden="true" />
								(555) 123-4567
							</Button>
							<Button variant="outline" className="px-6 py-3 text-lg font-semibold text-red-700 transition-colors bg-white border-2 border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:ring-red-300">
								<Link href="/services#commercial" className="flex items-center justify-center w-full h-full">
									View Commercial Services
								</Link>
							</Button>
						</div>
					</div>
					<div className="order-1 lg:order-2">
						<div className="relative h-[300px] md:h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
							<Image src="/commercial-plumbing.webp" alt="Commercial Plumbing Services" className="object-cover w-full h-full" width={800} height={600} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}