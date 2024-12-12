import { getServices } from "@/lib/actions/getServices";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import { Suspense } from "react";

async function ServicesList() {
	"use cache";
	const services = await getServices();

	if (!services?.length) {
		return (
			<div className="container max-w-4xl px-4 mx-auto">
				<p className="text-center text-gray-600">No services available at the moment.</p>
			</div>
		);
	}

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

async function ServicesContent() {
	"use cache";
	return (
		<div className="py-8">
			<PageHeader title="Our Services" subtitle="Professional plumbing services for your home and business" />
			<Suspense fallback={<div className="container max-w-4xl px-4 mx-auto animate-pulse">Loading services...</div>}>
				<ServicesList />
			</Suspense>
		</div>
	);
}

export default function Services() {
	return (
		<Suspense fallback={<div className="min-h-screen animate-pulse" />}>
			<ServicesContent />
		</Suspense>
	);
}
