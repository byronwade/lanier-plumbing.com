import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FooterCTA } from "@/components/footer-cta";

export default function Footer() {
	return (
		<>
			<FooterCTA />
			<footer className="py-8 text-gray-700 bg-gray-100">
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div>
							<h3 className="mb-4 text-lg font-semibold">Humble Plumber</h3>
							<p className="text-sm">Your trusted neighborhood plumber serving Humbletown and beyond.</p>
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
							<p className="mb-2 text-sm">1100 McFarland 400, Suite B, Alpharetta, GA 30004</p>
							<p className="mb-2 text-sm">
								Phone:{" "}
								<a href="tel:404-988-4910" className="transition-colors hover:text-red-600">
									404-988-4910
								</a>
							</p>
							<p className="mb-4 text-sm">
								Email:{" "}
								<a href="mailto:byron@lanier-plumbing.com" className="transition-colors hover:text-red-600">
									byron@lanier-plumbing.com
								</a>
							</p>
							<div className="flex space-x-4">
								<a href="#" className="text-gray-500 transition-colors hover:text-red-600">
									<Facebook size={20} />
									<span className="sr-only">Facebook</span>
								</a>
								<a href="#" className="text-gray-500 transition-colors hover:text-red-600">
									<Instagram size={20} />
									<span className="sr-only">Instagram</span>
								</a>
								<a href="#" className="text-gray-500 transition-colors hover:text-red-600">
									<Twitter size={20} />
									<span className="sr-only">Twitter</span>
								</a>
							</div>
						</div>
					</div>
					<div className="pt-8 mt-8 text-sm text-center border-t border-gray-200">
						<p>&copy; {performance.getFullYear()} Humble Plumber. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</>
	);
}
