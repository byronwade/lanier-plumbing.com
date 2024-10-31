import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/sections/hero"));
const Testimonials = dynamic(() => import("@/components/sections/testimonials"));
const FactsBanner = dynamic(() => import("@/components/sections/facts"));
const Services = dynamic(() => import("@/components/sections/services"));

export default function VIPUnderConstruction() {
	return (
		<>
			<Hero />
			<FactsBanner />
			<Services />
			<Testimonials />
		</>
	);
}
