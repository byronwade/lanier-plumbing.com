"use client";

import { useQuery } from "@tanstack/react-query";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import LoadingSkeleton from "@/components/loading-skeleton";
import { getPosts } from "@/actions/getPosts";

function ExpertTipsContent() {
	const { data: posts, isLoading } = useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			const response = await getPosts();
			return response;
		},
		staleTime: 60 * 1000,
		cacheTime: 5 * 60 * 1000,
	});

	if (isLoading) return <LoadingSkeleton />;

	return (
		<div>
			<PageHeader title="Expert Tips" subtitle="Learn more about plumbing from our experts" />
			<ul className="py-96">
				{posts?.map((post) => (
					<li key={post.slug}>
						<Link href={`/expert-plumbing-tips/${post.slug}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default function ExpertTips() {
	return <ExpertTipsContent />;
}
