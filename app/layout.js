import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

// Optimize font loading
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	preload: true,
	fallback: ["system-ui", "arial"],
	adjustFontFallback: true,
});

export const metadata = {
	title: "Lanier Plumbing | Expert Plumbing Services",
	description: "Professional plumbing services for residential and commercial properties. Available 24/7 for emergencies.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
				<GoogleAnalytics gaId="G-D4C3GCFE7P" />
			</body>
		</html>
	);
}
