import React from "react";
import Link from "next/link";

export default function Header() {
	return (
		<footer className="w-full p-6 bg-muted md:py-12">
			<div className="container grid grid-cols-2 gap-8 text-sm max-w-7xl sm:grid-cols-3 md:grid-cols-5">
				<div className="grid gap-1">
					<h3 className="font-semibold">Company</h3>
					<Link href="#" prefetch={false}>
						About Us
					</Link>
					<Link href="#" prefetch={false}>
						Our Services
					</Link>
					<Link href="#" prefetch={false}>
						Careers
					</Link>
					<Link href="#" prefetch={false}>
						News
					</Link>
				</div>
				<div className="grid gap-1">
					<h3 className="font-semibold">Services</h3>
					<Link href="#" prefetch={false}>
						Residential Plumbing
					</Link>
					<Link href="#" prefetch={false}>
						Commercial Plumbing
					</Link>
					<Link href="#" prefetch={false}>
						Emergency Repairs
					</Link>
					<Link href="#" prefetch={false}>
						Drain Cleaning
					</Link>
				</div>
				<div className="grid gap-1">
					<h3 className="font-semibold">Resources</h3>
					<Link href="#" prefetch={false}>
						Blog
					</Link>
					<Link href="#" prefetch={false}>
						FAQs
					</Link>
					<Link href="#" prefetch={false}>
						Testimonials
					</Link>
					<Link href="#" prefetch={false}>
						Warranty Info
					</Link>
				</div>
				<div className="grid gap-1">
					<h3 className="font-semibold">Legal</h3>
					<Link href="#" prefetch={false}>
						Privacy Policy
					</Link>
					<Link href="#" prefetch={false}>
						Terms of Service
					</Link>
					<Link href="#" prefetch={false}>
						Licensing
					</Link>
				</div>
				<div className="grid gap-1">
					<h3 className="font-semibold">Contact</h3>
					<Link href="#" prefetch={false}>
						Phone: 555-555-5555
					</Link>
					<Link href="#" prefetch={false}>
						Email: info@acmeplumbing.com
					</Link>
					<Link href="#" prefetch={false}>
						Address: 123 Main St, Anytown USA
					</Link>
				</div>
			</div>
		</footer>
	);
}
