import { Suspense } from "react";
import { getPosts } from "@/lib/actions/getPosts";
import PageHeader from "@/components/page-header";
import Link from "next/link";

async function PostsList() {
	const posts = await getPosts();

	return (
		<div className="container max-w-4xl px-4 mx-auto">
			<ul className="grid gap-4 md:grid-cols-2">
				{posts?.map((post) => (
					<li key={post.slug} className="p-4 transition-colors border rounded-lg hover:bg-gray-50">
						<Link href={`/expert-plumbing-tips/${post.slug}`} prefetch={true} className="block">
							<h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
							{post.description && <p className="text-gray-600">{post.description}</p>}
							<p className="mt-2 text-sm text-gray-500">{post.date}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default function ExpertTips() {
	return (
		<div className="py-8">
			<PageHeader title="Expert Tips" subtitle="Learn more about plumbing from our experts" />
			<Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse" />}>
				<PostsList />
			</Suspense>
		</div>
	);
}

// Add static config
export const dynamic = "force-static";
export const revalidate = 3600;
