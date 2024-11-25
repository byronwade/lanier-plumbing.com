export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/private/",
		},
		sitemap: "https://lanier-plumbing.com/sitemap.xml",
	};
}
