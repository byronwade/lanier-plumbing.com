import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Lanier Plumbing",
	description: "The Humble Plumber",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
						<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-D4C3GCFE7P"></Script>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D4C3GCFE7P');
					`}
			</Script>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	);
}
