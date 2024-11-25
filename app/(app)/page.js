import dynamic from "next/dynamic";
import { Suspense } from "react";

// Server components
const Hero = dynamic(() => import("@/components/sections/hero"), {
	ssr: true,
	loading: () => <div className="min-h-screen bg-gray-100 animate-pulse" />
});

const FactsBanner = dynamic(() => import("@/components/sections/facts"), {
	ssr: true,
	loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const PlumbingCostSaving = dynamic(() => import("@/components/sections/cost-saving"), {
	ssr: true,
	loading: () => <div className="bg-gray-100 h-96 animate-pulse" />
});

const Services = dynamic(() => import("@/components/sections/services"), {
	ssr: true,
	loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const FAQ = dynamic(() => import("@/components/sections/faq"), {
	ssr: true,
	loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

// Client component
const Testimonials = dynamic(() => import("@/components/sections/testimonials"), {
	loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

export default function HomePage() {
	return (
		<main className="flex flex-col min-h-screen">
			<Suspense fallback={<div className="min-h-screen bg-gray-100 animate-pulse" />}>
				<Hero />
			</Suspense>

			<Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
				<FactsBanner />
			</Suspense>

			<Suspense fallback={<div className="bg-gray-100 h-96 animate-pulse" />}>
				<PlumbingCostSaving />
			</Suspense>

			<Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
				<Services />
			</Suspense>

			<Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
				<FAQ />
			</Suspense>

			<div className="bg-gray-100">
				<Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
					<Testimonials />
				</Suspense>
			</div>
		</main>
	);
}

export const metadata = {
	generateStaticParams: true,
	revalidate: 3600,
};
