import Link from "next/link";
import { getProjectBySlug } from "@/actions/getProjects";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Project({ params }) {
	const { data, content } = await getProjectBySlug(params.slug);
	console.log(data, content);

	return (
		<div>
			<h1>{data.title}</h1>
			<MDXRemote source={content} />
			<Link href="/projects">go back</Link>
		</div>
	);
}
