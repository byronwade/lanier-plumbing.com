"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FooterCTA } from "@/components/footer-cta";

export function getCurrentYear() {
	return new Date().getFullYear();
}

export default function Footer({ initialSettings }) {
	const [year, setYear] = useState(2024);
	const phoneNumber = initialSettings?.companyPhone || "(770) 536-1161";
	const email = initialSettings?.companyEmail || "info@lanierplumbing.com";
	const address = initialSettings?.companyAddress || "2530 Monroe Dr, Gainesville, GA 30507";
	const companyName = initialSettings?.companyName || "Lanier Plumbing";
	const socialLinks = initialSettings?.socialLinks || [];

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<>
			<FooterCTA />
			<footer className="py-8 text-gray-700 bg-gray-100">
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div>
							<h3 className="mb-4 text-lg font-semibold">{companyName}</h3>
							<p className="text-sm">Your trusted neighborhood plumber serving Gainesville and beyond.</p>
						</div>
						<div>
							<h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
							<ul className="space-y-2">
								<li>
									<Link prefetch={true} href="/" className="text-sm transition-colors hover:text-red-600">
										Home
									</Link>
								</li>
								<li>
									<Link prefetch={true} href="/lanier-plumbing-services" className="text-sm transition-colors hover:text-red-600">
										Services
									</Link>
								</li>
								<li>
									<Link prefetch={true} href="/expert-plumbing-tips" className="text-sm transition-colors hover:text-red-600">
										Expert Tips
									</Link>
								</li>
								<li>
									<Link prefetch={true} href="/about-lanier-plumbing" className="text-sm transition-colors hover:text-red-600">
										About Us
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
							<p className="mb-2 text-sm">{address}</p>
							<p className="mb-2 text-sm">
								Phone:{" "}
								<a href={`tel:${phoneNumber.replace(/\D/g, "")}`} className="transition-colors hover:text-red-600">
									{phoneNumber}
								</a>
							</p>
							<p className="mb-4 text-sm">
								Email:{" "}
								<a href={`mailto:${email}`} className="transition-colors hover:text-red-600">
									{email}
								</a>
							</p>
							<div className="flex space-x-4">
								{socialLinks.map((link) => {
									const Icon = {
										facebook: Facebook,
										instagram: Instagram,
										twitter: Twitter,
									}[link.platform.toLowerCase()];

									return Icon ? (
										<a key={link.platform} href={link.url} className="text-gray-500 transition-colors hover:text-red-600" target="_blank" rel="noopener noreferrer">
											<Icon size={20} />
											<span className="sr-only">{link.platform}</span>
										</a>
									) : null;
								})}
							</div>
						</div>
					</div>
					<div className="pt-8 mt-8 text-sm text-center border-t border-gray-200">
						<p>
							&copy; {year} {companyName}. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}
