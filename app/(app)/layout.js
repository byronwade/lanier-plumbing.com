import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Suspense } from "react";
import { getSettings } from "@/lib/actions/getSettings";

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

async function LayoutContent({ children }) {
	"use cache";
	let settings;
	try {
		settings = await getSettings();
	} catch (error) {
		console.error("Failed to load settings:", error);
		settings = null;
	}

	return (
		<html lang="en">
			<body className={inter.className}>
				<Suspense fallback={<div className="h-16 bg-background" />}>
					<Header initialSettings={settings} />
				</Suspense>
				<Suspense fallback={<div className="min-h-screen animate-pulse" />}>{children}</Suspense>
				<Suspense fallback={<div className="h-16 bg-background" />}>
					<Footer initialSettings={settings} />
				</Suspense>
			</body>
		</html>
	);
}

export default function RootLayout({ children }) {
	return <LayoutContent>{children}</LayoutContent>;
}
