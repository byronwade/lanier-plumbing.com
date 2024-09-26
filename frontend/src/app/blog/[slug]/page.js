import Link from "next/link";
import { getPostBySlug } from "@/actions/getPosts";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Post({ params }) {
	const { data, content } = await getPostBySlug(params.slug);
	console.log(data, content);

	return (
		<div>
			<h1>{data.title}</h1>
			<MDXRemote source={content} />
			<Link href="/blog">go back</Link>
		</div>
	);
}
