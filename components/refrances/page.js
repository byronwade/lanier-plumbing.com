import dynamic from "next/dynamic";
import { Suspense } from "react";
import { unstable_cache } from "next/cache";

// Server components
const Hero = dynamic(() => import("@/components/sections/hero"), {
	ssr: true,
	loading: () => <div className="min-h-screen bg-gray-100 animate-pulse" />,
});

const FactsBanner = dynamic(() => import("@/components/sections/facts"), {
	ssr: true,
	loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const PlumbingCostSaving = dynamic(() => import("@/components/sections/cost-saving"), {
	ssr: true,
	loading: () => <div className="bg-gray-100 h-96 animate-pulse" />,
});

const Services = dynamic(() => import("@/components/sections/services"), {
	ssr: true,
	loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const FAQ = dynamic(() => import("@/components/sections/faq"), {
	ssr: true,
	loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

// Client component
const Testimonials = dynamic(() => import("@/components/sections/testimonials"), {
	loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const getHomeContent = unstable_cache(
	async () => {
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
	},
	["home-content"],
	{
		revalidate: 30,
		tags: ["home"],
	}
);

async function HomeContent() {
	return await getHomeContent();
}

export default function HomePage() {
	return (
		<Suspense fallback={<div className="min-h-screen animate-pulse" />}>
			<HomeContent />
		</Suspense>
	);
}
