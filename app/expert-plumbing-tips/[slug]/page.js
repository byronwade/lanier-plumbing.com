import Link from "next/link";
import { getPostBySlug } from "@/actions/getPosts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/app/mdx-components";

// Create a separate client component for MDX rendering
function MDXContent({ content }) {
    const components = useMDXComponents();
  return <MDXRemote source={content} components={components} />;
}

export default async function Post(props) {
    const params = await props.params;
    const { data, content } = await getPostBySlug(params.slug);
    return (
        <div>
            <h1>{data.title}</h1>
            <MDXContent content={content} />
            <Link href="/expert-tips">go back</Link>
        </div>
    );
}
