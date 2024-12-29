import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
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
	},
	experimental: {
		inlineCss: true,
		ppr: true,
		//dynamicIO: true,
		typedRoutes: true,
		reactCompiler: false,
		optimizeCss: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				fs: false,
				net: false,
				https: false,
				child_process: false,
				module: false,
				dns: false,
				readline: false,
				worker_threads: false,
				express: false,
			};
		}
		return config;
	},
};

export default withPayload(nextConfig);
