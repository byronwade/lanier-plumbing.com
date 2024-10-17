"use server";

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export async function getLandingPages() {
	const landingPagesDirectory = path.join(process.cwd(), "content/landing-pages");

	try {
		const filenames = await fs.readdir(landingPagesDirectory);

		return Promise.all(
			filenames.map(async (filename) => {
				const filePath = path.join(landingPagesDirectory, filename);
				const fileContents = await fs.readFile(filePath, "utf8");
				const { data, content } = matter(fileContents);

				return {
					slug: filename.replace(/\.mdx?$/, ""),
					...data,
					content,
				};
			})
		);
	} catch (err) {
		console.error("Error reading landingPages directory:", err);
		return [];
	}
}

export async function getLandingPageBySlug(slug) {
	const filePath = path.join(process.cwd(), `content/landing-pages/${slug}.mdx`);
	const fileContents = await fs.readFile(filePath, "utf8");
	const { data, content } = matter(fileContents);
	return { data, content };
}
