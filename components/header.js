"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, Clock, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CompactBalancedPlumberHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-white">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 sm:h-18">
					<div className="flex items-center">
						<Link href="/" className="flex items-center space-x-2">
							<div className="relative w-7 h-7 sm:w-8 sm:h-8">
								<Phone className="w-full h-full text-red-600" />
							</div>
							<span className="text-base font-bold text-gray-900 sm:text-lg">Lanier Plumbing</span>
						</Link>
					</div>

					<nav className="items-center hidden space-x-4 md:flex lg:space-x-6">
						<Link href="/" className="text-sm text-gray-700 transition-colors hover:text-red-600">
							Home
						</Link>
						<Link href="/lanier-plumbing-services" className="text-sm text-gray-700 transition-colors hover:text-red-600">
							Services
						</Link>
						<Link href="/expert-plumbing-tips" className="text-sm text-gray-700 transition-colors hover:text-red-600">
							Expert Tips
						</Link>
						<Link href="/about-lanier-plumbing" className="text-sm text-gray-700 transition-colors hover:text-red-600">
							About Us
						</Link>
						<Link href="/contact-lanier-plumbing" className="text-sm text-gray-700 transition-colors hover:text-red-600">
							Contact Us
						</Link>
					</nav>

					<div className="flex items-center space-x-2 md:space-x-0">
						<a href="tel:+18005551234" className="bg-red-600 text-white hover:bg-red-700 text-sm px-3 py-1.5 rounded transition-colors flex items-center">
							<Phone className="w-4 h-4 mr-2" />
							<span className="font-semibold md:hidden">Call</span>
							<span className="hidden font-semibold md:inline">1-800-555-1234</span>
						</a>
						<Button variant="ghost" size="sm" className="text-gray-700 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<Menu className="w-5 h-5" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="bg-white border-t border-gray-200 md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1">
						<Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-red-600">
							Home
						</Link>
						<Link href="/services" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-red-600">
							Services
						</Link>
						<Link href="/expert-tips" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-red-600">
							Expert Tips
						</Link>
						<Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-red-600">
							About Us
						</Link>
						<Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-red-600">
							Contact Us
						</Link>
					</div>
				</div>
			)}

			<div className="hidden py-2 text-gray-700 bg-gray-100 border-gray-200 border-y sm:block">
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="flex flex-wrap items-center justify-between text-xs sm:text-sm">
						<div className="flex items-center space-x-4">
							<div className="flex items-center">
								<Clock className="w-4 h-4 mr-2 text-red-600" />
								<span>Mon - Fri: 8am - 6pm</span>
							</div>
							<div className="flex items-center">
								<MapPin className="w-4 h-4 mr-2 text-red-600" />
								<span>Serving Cherokee Counties & Beyond</span>
							</div>
						</div>
						<div className="flex items-center">
							<Award className="w-4 h-4 mr-2 text-red-600" />
							<span>Your Trusted Neighborhood Humble Plumber</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
