import { unstable_cache } from "next/cache";
import { headers } from "next/headers";
import { Suspense } from "react";
import { Nav } from "@/components/nav/Nav";
import { NavSkeleton } from "@/components/skeletons/NavSkeleton";

interface LayoutProps {
	children: React.ReactNode;
}

// Cache header data
const getHeaderData = unstable_cache(
	async () => {
		const headersList = await headers();
		return headersList;
	},
	["header-data"],
	{ revalidate: 60 }
);

export default async function Layout({ children }: LayoutProps) {
	const headerData = await getHeaderData();

	return (
		<div className="min-h-screen">
			<Suspense fallback={<NavSkeleton />}>
				<Nav />
			</Suspense>
			{children}
		</div>
	);
}
