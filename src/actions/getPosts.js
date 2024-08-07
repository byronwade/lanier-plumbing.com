"use server";

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export async function getPosts() {
	const postsDirectory = path.join(process.cwd(), "src/content/posts");

	try {
		const filenames = await fs.readdir(postsDirectory);

		return Promise.all(
			filenames.map(async (filename) => {
				const filePath = path.join(postsDirectory, filename);
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
		console.error("Error reading posts directory:", err);
		return [];
	}
}

export async function getPostBySlug(slug) {
	const filePath = path.join(process.cwd(), `src/content/posts/${slug}.mdx`);
	const fileContents = await fs.readFile(filePath, "utf8");
	const { data, content } = matter(fileContents);
	return { data, content };
}
