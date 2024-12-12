import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/actions/getServices";
import { Suspense } from "react";

type Props = {
	params: {
		slug: string;
	};
};

async function ServiceContent({ slug }: { slug: string }) {
	"use cache";
	try {
		const serviceData = await getServiceBySlug(slug);

		if (!serviceData) {
			notFound();
		}

		const { data, content } = serviceData;

		return (
			<div className="container max-w-4xl px-4 py-8 mx-auto">
				<h1 className="mb-4 text-3xl font-bold">{data.title}</h1>
				<p className="mb-8 text-lg text-gray-600">{data.description}</p>
				<div className="prose max-w-none">
					<div dangerouslySetInnerHTML={{ __html: content }} />
				</div>
				<div className="mt-8">
					<Link href="/lanier-plumbing-services" prefetch={true} className="text-primary hover:underline">
						← Back to Services
					</Link>
				</div>
			</div>
		);
	} catch (error) {
		notFound();
	}
}

export default async function ServicePage({ params }: Props) {
	const nextjs15 = await params;
	return (
		<Suspense fallback={<div className="container max-w-4xl px-4 py-8 mx-auto">Loading...</div>}>
			<ServiceContent slug={nextjs15.slug} />
		</Suspense>
	);
}
