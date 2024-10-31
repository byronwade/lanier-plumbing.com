import Link from "next/link";
import { getServiceBySlug } from "../../../actions/getServices";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Service(props) {
    const params = await props.params;
    const { data, content } = await getServiceBySlug(params.slug);
    console.log(data, content);

    return (
		<div>
			<h1>{data.title}</h1>
			<MDXRemote source={content} />
			<Link href="/services">go back</Link>
		</div>
	);
}
