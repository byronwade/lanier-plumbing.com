import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/actions/getPosts";
import { Suspense } from "react";

interface Props {
	params: {
		slug: string;
	};
}

async function PostContent({ slug }: { slug: string }) {
	try {
		const { data, content } = await getPostBySlug(slug);

		if (!data) {
			notFound();
		}

		return (
			<div className="container max-w-4xl px-4 py-8 mx-auto">
				<h1 className="mb-4 text-3xl font-bold">{data.title}</h1>
				<p className="mb-8 text-lg text-gray-600">{data.description}</p>
				<div className="prose max-w-none">
					<div dangerouslySetInnerHTML={{ __html: content }} />
				</div>
				<div className="mt-8">
					<Link href="/expert-plumbing-tips" prefetch={true} className="text-primary hover:underline">
						← Back to Tips
					</Link>
				</div>
			</div>
		);
	} catch (error) {
		notFound();
	}
}

export default async function Post({ params }: Props) {
	const nextjs15 = await params;
	return (
		<Suspense fallback={<div className="container max-w-4xl px-4 py-8 mx-auto">Loading...</div>}>
			<PostContent slug={nextjs15.slug} />
		</Suspense>
	);
}
