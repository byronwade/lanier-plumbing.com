/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
		],
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	experimental: {
		// Remove optimizeCss as we'll handle it differently
		optimizePackageImports: ["lucide-react"],
		scrollRestoration: true,
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	output: "standalone",
	poweredByHeader: false,
	reactStrictMode: true,
	compress: true,

	// Handle CSS optimization manually
	webpack: (config, { dev, isServer }) => {
		// Optimize CSS only in production and when not running on server
		if (!dev && !isServer) {
			config.optimization.splitChunks.cacheGroups = {
				...config.optimization.splitChunks.cacheGroups,
				styles: {
					name: "styles",
					test: /\.(css|scss)$/,
					chunks: "all",
					enforce: true,
				},
			};
		}
		return config;
	},

	// Configure headers
	async headers() {
		return [
			{
				source: "/:all*(svg|jpg|png|webp|avif)",
				locale: false,
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, must-revalidate",
					},
				],
			},
			{
				source: "/_next/image/:all*",
				locale: false,
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, must-revalidate",
					},
				],
			},
			{
				source: "/fonts/:all*",
				locale: false,
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		];
	},

	// Handle redirects
	async redirects() {
		return [];
	},
};

module.exports = nextConfig;
