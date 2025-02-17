"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, Clock, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function NavLink({ href, children, openInNewTab }) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href} prefetch={true} className={`transition-colors ${isActive ? "text-primary" : "hover:text-primary"}`} {...(openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
			{children}
		</Link>
	);
}

export default function Header({ initialSettings, navigation }) {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const phoneNumber = initialSettings?.phone || "(770) 536-1161";
	const address = initialSettings?.address ? `${initialSettings.address.street}, ${initialSettings.address.city}, ${initialSettings.address.state} ${initialSettings.address.zip}` : "2530 Monroe Dr, Gainesville, GA 30507";
	const companyName = initialSettings?.companyName || "Lanier Plumbing";
	const serviceArea = initialSettings?.serviceArea || "Gainesville";
	const logo = initialSettings?.logo;
	const navItems = navigation?.items || [];

	return (
		<header className="bg-white">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 sm:h-18">
					<div className="flex items-center">
						<Link prefetch={true} href="/" className="flex items-center space-x-2">
							{logo?.url && <Image src={logo.url} alt={companyName} width={logo.width || 200} height={logo.height || 50} className="w-auto h-8 sm:h-10" priority />}
							<span className="text-base font-bold text-gray-900 sm:text-lg">{companyName}</span>
						</Link>
					</div>

					<nav className="items-center hidden space-x-4 md:flex lg:space-x-6">
						{navItems.map((item) => (
							<NavLink key={item.href} href={item.href} openInNewTab={item.openInNewTab}>
								{item.label}
							</NavLink>
						))}
					</nav>

					<div className="flex items-center space-x-2 md:space-x-0">
						<a href={`tel:${phoneNumber.replace(/\D/g, "")}`} className="bg-red-600 text-white hover:bg-red-700 text-sm px-3 py-1.5 rounded transition-colors flex items-center" aria-label="Call us">
							<Phone className="w-4 h-4 mr-2" />
							<span className="font-semibold md:hidden">Call</span>
							<span className="hidden font-semibold md:inline">{phoneNumber}</span>
						</a>
						<Button variant="ghost" size="sm" className="text-gray-700 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
							<Menu className="w-5 h-5" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="bg-white border-t border-gray-200 md:hidden">
					<nav className="px-2 pt-2 pb-3 space-y-1">
						{navItems.map((item) => (
							<div key={item.href} className="block px-3 py-2">
								<NavLink href={item.href} openInNewTab={item.openInNewTab}>
									{item.label}
								</NavLink>
							</div>
						))}
					</nav>
				</div>
			)}

			<div className="hidden py-2 text-gray-700 bg-gray-100 border-gray-200 border-y sm:block">
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="flex flex-wrap items-center justify-between text-xs sm:text-sm">
						<div className="flex items-center space-x-4">
							<div className="flex items-center">
								<Clock className="w-4 h-4 mr-2 text-red-600" />
								<span>Mon - Fri: 8am - 5pm</span>
							</div>
							<div className="flex items-center">
								<MapPin className="w-4 h-4 mr-2 text-red-600" />
								<span>{address}</span>
							</div>
						</div>
						<div className="flex items-center">
							<Award className="w-4 h-4 mr-2 text-red-600" />
							<span>Your Trusted {serviceArea} Plumber</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
