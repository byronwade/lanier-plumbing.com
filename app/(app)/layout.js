import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Suspense } from "react";
import Providers from "@/app/(app)/providers";
import { getSettings } from "@/lib/actions/getSettings";

// Optimize font loading
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	preload: true,
	fallback: ["system-ui", "arial"],
	adjustFontFallback: true,
});

export const metadata = {
	metadataBase: new URL("https://lanier-plumbing.com"),
	title: {
		default: "Lanier Plumbing | Expert Plumbing Services",
		template: "%s | Lanier Plumbing",
	},
	description: "Professional plumbing services for residential and commercial properties. Available 24/7 for emergencies.",
	openGraph: {
		images: "/og-image.jpg",
	},
};

export default async function RootLayout({ children }) {
	const initialSettings = await getSettings();
	console.log(initialSettings);

	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<Suspense fallback={<div className="h-16 bg-background" />}>
						<Header initialSettings={initialSettings} />
					</Suspense>
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
