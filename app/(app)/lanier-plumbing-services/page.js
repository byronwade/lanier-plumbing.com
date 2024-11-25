import { Suspense } from "react";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import { getServices } from "@/actions/getServices";

async function ServicesList() {
	const services = await getServices();

	return (
		<div className="container max-w-4xl px-4 mx-auto">
			<ul className="grid gap-4 md:grid-cols-2">
				{services.map((service) => (
					<li key={service.slug} className="p-4 transition-colors border rounded-lg hover:bg-gray-50">
						<Link href={`/lanier-plumbing-services/${service.slug}`} prefetch={true} className="block">
							<h2 className="mb-2 text-xl font-semibold">{service.title}</h2>
							{service.description && <p className="text-gray-600">{service.description}</p>}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default function Services() {
	return (
		<div className="py-8">
			<PageHeader title="Our Services" subtitle="Professional plumbing services for your home and business" />
			<Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse" />}>
				<ServicesList />
			</Suspense>
		</div>
	);
}

// Add static config
export const dynamic = "force-static";
export const revalidate = 3600;
