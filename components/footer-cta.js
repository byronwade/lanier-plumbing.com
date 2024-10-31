"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Phone, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FooterCTA() {
	const parallaxRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY;
			if (parallaxRef.current) {
				parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section className="relative py-12 overflow-hidden bg-red-100 border-red-200 shadow-sm border-y">
			<div
				ref={parallaxRef}
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: "url('/placeholder.svg')",
					backgroundSize: "200px",
					backgroundRepeat: "repeat",
					opacity: 0.1,
				}}
			/>
			<div className="relative z-10 flex flex-col items-center justify-between w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 md:flex-row">
				<div className="w-full mb-6 text-center md:text-left md:w-auto">
					<h2 className="mb-2 text-2xl font-bold text-red-800">Lanier Plumbing Services</h2>
					<p className="mb-4 text-lg text-red-700">Expert solutions for all your plumbing needs</p>
					<div className="flex flex-col items-center space-y-2 md:flex-row md:items-start md:space-y-0 md:space-x-4">
						<div className="flex items-center">
							<Clock className="w-5 h-5 mr-2 text-red-600" />
							<span className="text-sm text-red-700">24/7 Service</span>
						</div>
						<div className="flex items-center">
							<Shield className="w-5 h-5 mr-2 text-red-600" />
							<span className="text-sm text-red-700">Licensed & Insured</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<Button className="px-8 py-6 text-lg text-white transition-transform bg-red-600 rounded-md shadow-lg hover:bg-red-700 hover:scale-105">
						<Phone className="w-6 h-6 mr-2" />
						Call (555) 123-4567
					</Button>
					<Link href="/contact-lanier-plumbing" className="mt-2 text-sm text-red-600 underline hover:text-red-800">
						Contact Us
					</Link>
				</div>
			</div>
		</section>
	);
}
