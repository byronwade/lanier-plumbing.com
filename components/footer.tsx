import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FooterCTA } from "@/components/footer-cta";
import { getCurrentYear } from "@/lib/utils";

export default function Footer() {
	return (
		<>
			<FooterCTA />
			<footer className="py-8 text-gray-700 bg-gray-100">
				{/* ... rest of the footer JSX ... */}
				<div className="pt-8 mt-8 text-sm text-center border-t border-gray-200">
					<p>&copy; {getCurrentYear()} Humble Plumber. All rights reserved.</p>
				</div>
			</footer>
		</>
	);
}
