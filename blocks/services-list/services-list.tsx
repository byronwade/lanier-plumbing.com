"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { getServices } from "@/lib/actions/getServices";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type BaseBlock = Extract<LayoutType[number], { blockType: string }>;

interface Media {
	id: string;
	url: string;
	alt: string;
	filename: string;
}

interface Service {
	id: string;
	title: string;
	slug: string;
	content: {
		root: {
			children: Array<{ text: string }>;
		};
	};
	image?: Media;
}

interface ExtendedService {
	id: string;
	title: string;
	slug: string;
	excerpt?: string;
	image?: Media;
}

interface ServicesResponse {
	docs: Service[];
	totalDocs: number;
	totalPages: number;
	page: number;
	hasNextPage: boolean;
	hasPrevPage: boolean;
}

interface ServicesListBlock extends Omit<BaseBlock, "blockType"> {
	blockType: "services-list";
	header: {
		title: string;
		subtitle: string;
	};
	servicesPerPage: number;
	showPagination: boolean;
}

// Create a client
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000, // 1 minute
			refetchOnWindowFocus: false,
		},
	},
});

function ServicesListContent(props: ServicesListBlock) {
	const { header, servicesPerPage = 9, showPagination = true } = props;
	const [page, setPage] = useState(1);

	console.log("ServicesListContent props:", props);

	// Fetch services with React Query
	const { data: servicesData } = useQuery({
		queryKey: ["services"],
		queryFn: getServices,
		staleTime: 1000 * 60 * 5, // 5 minutes
	});

	const services = servicesData?.docs || [];

	if (!services.length) {
		return null;
	}

	const handlePageChange = (newPage: number) => {
		setPage(newPage);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<section className="py-16 bg-white">
			{/* Header */}
			<div className="mb-8 text-center">
				<h2 className="mb-2 text-3xl font-bold tracking-tight">{header.title}</h2>
				<p className="text-muted-foreground">{header.subtitle}</p>
			</div>

			{/* Services Grid */}
			<div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
				{services.map((service) => (
					<Link key={service.id} href={`/lanier-plumbing-services/${service.slug}`} className="block">
						<div className="overflow-hidden transition-all border rounded-lg hover:shadow-lg bg-card text-card-foreground">
							<div className="p-0">
								{service.image?.url && (
									<div className="relative aspect-[16/9]">
										<Image src={service.image.url} alt={service.image.alt || service.title} fill className="object-cover" />
									</div>
								)}
								<div className="p-4">
									<h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
									{service.excerpt && <p className="mb-4 text-sm text-muted-foreground">{service.excerpt}</p>}
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>

			{/* Pagination */}
			{showPagination && servicesData?.totalPages > 1 && (
				<div className="flex items-center justify-center gap-2">
					<Button variant="outline" size="icon" onClick={() => handlePageChange(page - 1)} disabled={!servicesData?.hasPrevPage}>
						<ChevronLeft className="w-4 h-4" />
						<span className="sr-only">Previous page</span>
					</Button>
					{Array.from({ length: servicesData?.totalPages }, (_, i) => (
						<Button key={i + 1} variant={page === i + 1 ? "default" : "outline"} size="sm" onClick={() => handlePageChange(i + 1)}>
							{i + 1}
						</Button>
					))}
					<Button variant="outline" size="icon" onClick={() => handlePageChange(page + 1)} disabled={!servicesData?.hasNextPage}>
						<ChevronRight className="w-4 h-4" />
						<span className="sr-only">Next page</span>
					</Button>
				</div>
			)}
		</section>
	);
}

// Export the wrapped component
export default function ServicesList(props: ServicesListBlock) {
	return (
		<QueryClientProvider client={queryClient}>
			<ServicesListContent {...props} />
		</QueryClientProvider>
	);
}
