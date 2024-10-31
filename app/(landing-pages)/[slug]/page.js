import Link from "next/link";
import { getLandingPageBySlug } from "../../../actions/getLandingPages";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "../../mdx-components";

export default async function LandingPage(props) {
    const params = await props.params;
    const { data, content } = await getLandingPageBySlug(params.slug);
    console.log(data, content);

    return (
		<div>
			<h1>{data.title}</h1>
			<MDXRemote source={content} components={useMDXComponents} />
			<Link href="/">go back</Link>
		</div>
	);
}
