import Link from "next/link";
import { getLandingPageBySlug } from "../../../actions/getLandingPages";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "../../mdx-components";
import { notFound } from "next/navigation";

export default async function LandingPage(props) {
	const params = await props.params;

	// Skip processing for non-MDX files
	if (params.slug.endsWith(".svg")) {
		notFound();
		return null;
	}

	try {
		const { data, content } = await getLandingPageBySlug(params.slug);

		return (
			<div>
				<h1>{data.title}</h1>
				<MDXRemote source={content} components={useMDXComponents()} />
				<Link href="/">go back</Link>
			</div>
		);
	} catch (error) {
		console.error("Error loading page:", error);
		notFound();
		return null;
	}
}
