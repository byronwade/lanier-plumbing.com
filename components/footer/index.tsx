import Link from "next/link";
import type { Setting } from "@/payload-types";

interface FooterProps {
	initialSettings: Setting | null;
}

export default function Footer({ initialSettings }: FooterProps) {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full border-t bg-background">
			<div className="container py-8">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<h3 className="mb-4 text-lg font-semibold">About Us</h3>
						<p className="text-sm text-muted-foreground">Professional plumbing services for residential and commercial properties. Available 24/7 for emergencies.</p>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="/lanier-plumbing-services" className="text-muted-foreground hover:text-primary">
									Services
								</Link>
							</li>
							<li>
								<Link href="/expert-plumbing-tips" className="text-muted-foreground hover:text-primary">
									Tips
								</Link>
							</li>
							<li>
								<Link href="/about-lanier-plumbing" className="text-muted-foreground hover:text-primary">
									About
								</Link>
							</li>
							<li>
								<Link href="/contact-lanier-plumbing" className="text-muted-foreground hover:text-primary">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-semibold">Contact</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>Phone: (555) 123-4567</li>
							<li>Email: info@lanier-plumbing.com</li>
							<li>Address: Georgia, USA</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-semibold">Hours</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>Monday - Friday: 8am - 6pm</li>
							<li>Saturday: 9am - 4pm</li>
							<li>Sunday: Emergency Only</li>
							<li className="font-semibold text-primary">24/7 Emergency Service</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
					<p>© {currentYear} Lanier Plumbing. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
