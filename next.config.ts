/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
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
		scrollRestoration: true,
		serverActions: {
			bodySizeLimit: "2mb",
		},
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	output: "standalone",
	poweredByHeader: false,
	reactStrictMode: true,
	compress: true,
	pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

module.exports = nextConfig;
