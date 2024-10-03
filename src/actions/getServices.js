"use server";

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export async function getServices() {
	const servicesDirectory = path.join(process.cwd(), "src/content/services");

	try {
		const filenames = await fs.readdir(servicesDirectory);

		return Promise.all(
			filenames.map(async (filename) => {
				const filePath = path.join(servicesDirectory, filename);
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
		console.error("Error reading services directory:", err);
		return [];
	}
}

export async function getServiceBySlug(slug) {
	const filePath = path.join(process.cwd(), `src/content/services/${slug}.mdx`);
	const fileContents = await fs.readFile(filePath, "utf8");
	const { data, content } = matter(fileContents);
	return { data, content };
}
