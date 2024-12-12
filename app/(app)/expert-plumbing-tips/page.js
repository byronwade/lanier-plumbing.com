import { Suspense } from "react";
import { getPosts } from "@/lib/actions/getPosts";
import PageHeader from "@/components/page-header";
import Link from "next/link";

async function PostsList() {
	"use cache";
	const posts = await getPosts();

	if (!posts?.length) {
		return (
			<div className="container max-w-4xl px-4 mx-auto">
				<p className="text-center text-gray-600">No posts available at the moment.</p>
			</div>
		);
	}

	return (
		<div className="container max-w-4xl px-4 mx-auto">
			<ul className="grid gap-4 md:grid-cols-2">
				{posts.map((post) => (
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

async function ExpertTipsContent() {
	"use cache";
	return (
		<div className="py-8">
			<PageHeader title="Expert Tips" subtitle="Learn more about plumbing from our experts" />
			<Suspense fallback={<div className="container max-w-4xl px-4 mx-auto animate-pulse">Loading posts...</div>}>
				<PostsList />
			</Suspense>
		</div>
	);
}

export default function ExpertTips() {
	return (
		<Suspense fallback={<div className="min-h-screen animate-pulse" />}>
			<ExpertTipsContent />
		</Suspense>
	);
}
