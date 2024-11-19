import dynamic from "next/dynamic";
import { Suspense } from "react";

// Server components with proper loading states
const Hero = dynamic(() => import("@/components/sections/hero"));
const FactsBanner = dynamic(() => import("@/components/sections/facts"));
const PlumbingCostSaving = dynamic(() => import("@/components/sections/cost-saving"));
const Services = dynamic(() => import("@/components/sections/services"));

// Client component with proper boundary
const Testimonials = dynamic(() => import("@/components/sections/testimonials"), {
	loading: () => <div className="h-96 bg-gray-50" />,
});

export default function HomePage() {
	return (
		<main className="flex flex-col min-h-screen">
			<Suspense fallback={<div className="min-h-screen bg-gray-100" />}>
				<Hero />
			</Suspense>

			<Suspense fallback={<div className="h-96 bg-gray-50" />}>
				<FactsBanner />
			</Suspense>

			<Suspense fallback={<div className="bg-gray-100 h-96" />}>
				<PlumbingCostSaving />
			</Suspense>

			<Suspense fallback={<div className="h-96 bg-gray-50" />}>
				<Services />
			</Suspense>

			<div className="bg-gray-100">
				<Suspense fallback={<div className="h-96 bg-gray-50" />}>
					<Testimonials />
				</Suspense>
			</div>
		</main>
	);
}

export const generateMetadata = () => ({
	generateStaticParams: true,
	revalidate: 3600,
});
