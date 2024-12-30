import Link from "next/link";
import type { Setting } from "@/payload-types";

interface HeaderProps {
	initialSettings: Setting | null;
}

export default function Header({ initialSettings }: HeaderProps) {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center">
				<Link href="/" className="flex items-center space-x-2">
					<span className="text-xl font-bold">Lanier Plumbing</span>
				</Link>
				<nav className="ml-auto flex gap-6">
					<Link href="/lanier-plumbing-services" className="text-sm font-medium hover:text-primary">
						Services
					</Link>
					<Link href="/expert-plumbing-tips" className="text-sm font-medium hover:text-primary">
						Tips
					</Link>
					<Link href="/about-lanier-plumbing" className="text-sm font-medium hover:text-primary">
						About
					</Link>
					<Link href="/contact-lanier-plumbing" className="text-sm font-medium hover:text-primary">
						Contact
					</Link>
				</nav>
			</div>
		</header>
	);
}
