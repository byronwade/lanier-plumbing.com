"use server";

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export async function getProjects() {
	const projectsDirectory = path.join(process.cwd(), "src/content/projects");

	try {
		const filenames = await fs.readdir(projectsDirectory);

		return Promise.all(
			filenames.map(async (filename) => {
				const filePath = path.join(projectsDirectory, filename);
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
		console.error("Error reading projects directory:", err);
		return [];
	}
}

export async function getProjectBySlug(slug) {
	const filePath = path.join(process.cwd(), `src/content/projects/${slug}.mdx`);
	const fileContents = await fs.readFile(filePath, "utf8");
	const { data, content } = matter(fileContents);
	return { data, content };
}
