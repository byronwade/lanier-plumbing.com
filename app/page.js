import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hero = dynamic(() => import("@/components/sections/hero"));
const PlumbingCostSaving = dynamic(() => import("@/components/sections/cost-saving"));
const Testimonials = dynamic(() => import("@/components/sections/testimonials"));
const FactsBanner = dynamic(() => import("@/components/sections/facts"));
const Services = dynamic(() => import("@/components/sections/services"));

export default function VIPUnderConstruction() {
	return (
		<>
			<Hero />
			<Suspense fallback={<div>Loading facts...</div>}>
				<FactsBanner />
			</Suspense>
			<Suspense fallback={<div>Loading cost saving...</div>}>
				<PlumbingCostSaving />
			</Suspense>
			<Suspense fallback={<div>Loading services...</div>}>
				<Services />
			</Suspense>
			<Suspense fallback={<div>Loading testimonials...</div>}>
				<Testimonials />
			</Suspense>
		</>
	);
}
