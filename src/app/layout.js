import Script from "next/script";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google"; // Import GoogleTagManager
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Lanier Plumbing",
	description: "The Humble Plumber",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<GoogleAnalytics gaId="G-D4C3GCFE7P" />
				{children}
			</body>
		</html>
	);
}
