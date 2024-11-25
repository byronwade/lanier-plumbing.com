import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Suspense } from "react";
import { getSettings } from "@/actions/getSettings";

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
	const settings = await getSettings();

	return (
		<html lang="en">
			<body className={inter.className}>
				<Suspense fallback={<div className="h-16 bg-background" />}>
					<Header settings={settings} />
				</Suspense>
				<main>{children}</main>
				<Footer />
				{/* <GoogleAnalytics gaId="G-D4C3GCFE7P" /> */}
			</body>
		</html>
	);
}
