import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getSettings } from "@/lib/actions/getSettings";
import "./globals.css";

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
				<Header initialSettings={settings} />
				{children}
				<Footer initialSettings={settings} />
			</body>
		</html>
	);
}
