import { getServices } from "@/actions/getServices";
import Link from "next/link";

export default async function Services() {
	const services = await getServices();

	return (
		<div>
			<h1>Services</h1>
			<ul>
				{services.map((service) => (
					<li key={service.slug}>
						<Link href={`/services/${service.slug}`}>{service.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
