import { getServices } from "@/actions/getServices";
import PageHeader from "@/components/page-header";
import Link from "next/link";

export default async function Services() {
	const services = await getServices();

	return (
		<div>
			<PageHeader title="Services" subtitle="We offer a wide range of plumbing services to meet your needs." />
			<ul className="py-96">
				{services.map((service) => (
					<li key={service.slug}>
						<Link href={`/lanier-plumbing-services/${service.slug}`}>{service.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
