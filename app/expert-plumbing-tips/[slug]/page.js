import Link from "next/link";
import { getPostBySlug } from "@/actions/getPosts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/app/mdx-components";

export default async function Post({ params }) {
	const { data, content } = await getPostBySlug(params.slug);
	console.log(data, content);

	const components = useMDXComponents();

	return (
		<div>
			<h1>{data.title}</h1>
			<MDXRemote source={content} components={components} />
			<Link href="/expert-tips">go back</Link>
		</div>
	);
}
