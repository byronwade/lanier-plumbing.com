"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { FooterCTA } from "@/components/footer-cta";

export function getCurrentYear() {
	return new Date().getFullYear();
}

export default function Footer({ initialSettings, navigation }) {
	const [year, setYear] = useState(getCurrentYear());
	const phoneNumber = initialSettings?.phone || "(770) 536-1161";
	const email = initialSettings?.email || "info@lanierplumbing.com";
	const address = initialSettings?.address ? `${initialSettings.address.street}, ${initialSettings.address.city}, ${initialSettings.address.state} ${initialSettings.address.zip}` : "2530 Monroe Dr, Gainesville, GA 30507";
	const companyName = initialSettings?.companyName || "Lanier Plumbing";
	const socialMedia = initialSettings?.socialMedia || {};
	const logo = initialSettings?.logo;
	const navItems = navigation?.items || [];

	useEffect(() => {
		setYear(getCurrentYear());
	}, []);

	const socialIcons = {
		facebook: Facebook,
		instagram: Instagram,
		twitter: Twitter,
		linkedin: Linkedin,
		youtube: Youtube,
	};

	return (
		<>
			<FooterCTA />
			<footer className="py-8 text-gray-700 bg-gray-100">
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div>
							{logo?.url && (
								<div className="mb-4">
									<Image src={logo.url} alt={companyName} width={logo.width || 200} height={logo.height || 50} className="w-auto h-10" />
								</div>
							)}
							<h3 className="mb-4 text-lg font-semibold">{companyName}</h3>
							<p className="text-sm">Your trusted neighborhood plumber serving {initialSettings?.serviceArea || "Gainesville"} and beyond.</p>
						</div>
						<div>
							<h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
							<ul className="space-y-2">
								{navItems.map((item) => (
									<li key={item.href}>
										<Link href={item.href} prefetch={true} className="text-sm transition-colors hover:text-red-600" {...(item.openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
											{item.label}
										</Link>
									</li>
								))}
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
								{Object.entries(socialMedia).map(([platform, url]) => {
									if (!url) return null;
									const Icon = socialIcons[platform.toLowerCase()];
									if (!Icon) return null;

									return (
										<a key={platform} href={url} className="text-gray-500 transition-colors hover:text-red-600" target="_blank" rel="noopener noreferrer" aria-label={`Visit our ${platform} page`}>
											<Icon size={20} />
											<span className="sr-only">Visit our {platform} page</span>
										</a>
									);
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
