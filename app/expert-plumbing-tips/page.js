import { getPosts } from "@/actions/getPosts";
import PageHeader from "@/components/page-header";
import Link from "next/link";

export default async function ExpertTips() {
	const posts = await getPosts();

	return (
		<div>
			<PageHeader title="Expert Tips" subtitle="Learn more about plumbing from our experts" />
			<ul className="py-96">
				{posts.map((post) => (
					<li key={post.slug}>
						<Link href={`/expert-plumbing-tips/${post.slug}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
