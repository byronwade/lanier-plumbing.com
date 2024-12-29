"use client";

import { Suspense } from "react";
import Blog from "@/blocks/blog/blog";

const defaultProps = {
	blockType: "blog",
	header: {
		title: "Expert Plumbing Tips",
		subtitle: "Learn more about plumbing from our experts",
	},
	featuredPost: "first",
	postsPerPage: 9,
	showPagination: true,
};

export default function ExpertTips() {
	return (
		<Suspense fallback={<div className="min-h-screen animate-pulse" />}>
			<Blog {...defaultProps} />
		</Suspense>
	);
}
