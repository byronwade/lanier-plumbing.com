/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
			{
				protocol: "http",
				hostname: "placehold.co",
			},
		],
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	},
	experimental: {
		optimizeCss: true,
		optimizePackageImports: ["lucide-react"],
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
};
