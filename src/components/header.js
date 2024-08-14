import React from "react";
import Link from "next/link";

export default function Header() {
	return (
		<header className="flex items-center px-4 lg:px-6 h-14 bg-primary text-primary-foreground">
			<Link href="#" className="flex items-center justify-center" prefetch={false}>
				Logo
				<span className="sr-only">Acme Plumbing</span>
			</Link>
			<nav className="flex gap-4 ml-auto sm:gap-6">
				<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
					Home
				</Link>
				<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
					Services
				</Link>
				<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
					About
				</Link>
				<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
					Team
				</Link>
				<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
					Contact
				</Link>
			</nav>
		</header>
	);
}
