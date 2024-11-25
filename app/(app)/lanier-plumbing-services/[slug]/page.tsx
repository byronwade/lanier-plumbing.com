import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/actions/getServices";
import { Metadata } from "next";

type Props = {
	params: Promise<{
		slug: string;
	}>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ServicePage({ params, searchParams }: Props) {
	const [nextParams, nextSearchParams] = await Promise.all([params, searchParams]);

	try {
		const { data, content } = await getServiceBySlug(nextParams.slug);

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const nextParams = await params;

	try {
		const { data } = await getServiceBySlug(nextParams.slug);

		return {
			title: data.title,
			description: data.description,
		};
	} catch {
		return {
			title: "Service Not Found",
			description: "The requested service could not be found",
		};
	}
}

// Add static config
export const dynamic = "force-static";
export const revalidate = 3600;
