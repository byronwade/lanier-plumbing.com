"use server";

import { getPageBySlug } from "@/lib/actions/getPages";
import { getPostBySlug } from "@/lib/actions/getPosts";
import { getServiceBySlug, listAllServices } from "@/lib/actions/getServices";
import { getSettings } from "@/lib/actions/getSettings";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import { unstable_cache } from "next/cache";
import { getMetadata } from "@/lib/config/seo";

interface PageProps {
	params: {
		slug?: string[];
	};
}

// Cache the page data fetch
const getCachedPageData = unstable_cache(
	async (slug: string | null) => {
		try {
			if (!slug) {
				const settings = await getSettings();
				if (!settings?.homePage) return null;

				const homePageId = typeof settings.homePage === "number" ? settings.homePage : settings.homePage.id;
				if (!homePageId) return null;

				return await getPageBySlug("/");
			}
			return await getPageBySlug(slug);
		} catch (error) {
			console.error("Error fetching page data:", error);
			return null;
		}
	},
	["dynamic-page"],
	{
		revalidate: 30,
		tags: ["pages"],
	}
);

// Cache the post data fetch
const getCachedPostData = unstable_cache(
	async (slug: string) => {
		try {
			return await getPostBySlug(slug);
		} catch (error) {
			console.error("Error fetching post data:", error);
			return null;
		}
	},
	["post-page"],
	{
		revalidate: 30,
		tags: ["posts"],
	}
);

// Cache the service data fetch
const getCachedServiceData = unstable_cache(
	async (slug: string) => {
		try {
			return await getServiceBySlug(slug);
		} catch (error) {
			console.error("Error fetching service data:", error);
			return null;
		}
	},
	["service-page"],
	{
		revalidate: 30,
		tags: ["services"],
	}
);

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const nextjs15 = await params;
	const slugArray = nextjs15.slug || [];
	const isPost = slugArray[0] === "expert-plumbing-tips" && slugArray.length === 2;
	const isService = slugArray[0] === "lanier-plumbing-services" && slugArray.length === 2;

	if (isPost) {
		const postSlug = slugArray[1];
		const post = await getCachedPostData(postSlug);

		if (!post) {
			notFound();
		}

		return getMetadata({
			title: post.data.title,
			description: post.data.description,
			openGraph: {
				title: post.data.title,
				description: post.data.description,
				type: "article",
				publishedTime: post.data.createdAt,
				authors: ["Lanier Plumbing Expert"],
				images: post.data.image ? [{ url: post.data.image.url, alt: post.data.image.alt }] : undefined,
			},
			twitter: {
				card: "summary_large_image",
				title: post.data.title,
				description: post.data.description,
				images: post.data.image ? [post.data.image.url] : undefined,
			},
			alternates: {
				canonical: `https://lanier-plumbing.com/expert-plumbing-tips/${postSlug}`,
			},
			other: {
				"article:published_time": post.data.createdAt,
				"article:modified_time": post.data.createdAt,
				"og:article:published_time": post.data.createdAt,
				"og:article:modified_time": post.data.createdAt,
			},
		});
	}

	if (isService) {
		const serviceSlug = slugArray[1];
		const service = await getCachedServiceData(serviceSlug);

		if (!service) {
			notFound();
		}

		return getMetadata({
			title: service.data.title,
			description: service.data.description,
			openGraph: {
				title: service.data.title,
				description: service.data.description,
				type: "website",
				images: service.data.image ? [{ url: service.data.image.url, alt: service.data.image.alt }] : undefined,
			},
			twitter: {
				card: "summary_large_image",
				title: service.data.title,
				description: service.data.description,
				images: service.data.image ? [service.data.image.url] : undefined,
			},
			alternates: {
				canonical: `https://lanier-plumbing.com/lanier-plumbing-services/${serviceSlug}`,
			},
			other: {
				"og:updated_time": service.data.updatedAt,
			},
		});
	}

	const slug = slugArray.join("/");
	const page = await getCachedPageData(slug);

	if (!page) {
		notFound();
	}

	const title = page.pageMeta?.title || page.title;
	const description = page.pageMeta?.description || `Learn about our ${title.toLowerCase()} services and solutions.`;
	const canonicalUrl = `https://lanier-plumbing.com/${slug}`;

	return getMetadata({
		title,
		description,
		openGraph: {
			title,
			description,
			type: "website",
			images: page.pageMeta?.image ? [{ url: page.pageMeta.image.url, alt: title }] : undefined,
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: page.pageMeta?.image ? [page.pageMeta.image.url] : undefined,
		},
		alternates: {
			canonical: canonicalUrl,
		},
	});
}

function PostContent({
	content,
	data,
}: {
	content: any;
	data: {
		title: string;
		description: string;
		createdAt: string;
		author: string;
		image?: {
			url: string;
			alt: string;
		};
	};
}) {
	const renderContent = () => {
		if (typeof content === "string") {
			return <div dangerouslySetInnerHTML={{ __html: content }} />;
		}

		if (content?.root?.children) {
			return content.root.children.map((node: any, index: number) => {
				if (node.children?.[0]?.text) {
					return (
						<p key={index}>
							{node.children.map((child: any, childIndex: number) => (
								<span key={childIndex}>{child.text}</span>
							))}
						</p>
					);
				}
				return null;
			});
		}

		return null;
	};

	const formattedDate = new Date(data.createdAt).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<article className="container max-w-4xl px-4 py-8 mx-auto">
			<div className="mx-auto prose prose-lg dark:prose-invert">
				<h1 className="mb-4">{data.title}</h1>
				<div className="flex items-center mb-8 text-sm gap-x-4 text-muted-foreground not-prose">
					<div className="flex items-center gap-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<circle cx="12" cy="12" r="10" />
							<path d="M12 6v6l4 2" />
						</svg>
						<time dateTime={data.createdAt}>{formattedDate}</time>
					</div>
					<div className="flex items-center gap-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
							<circle cx="12" cy="7" r="4" />
						</svg>
						<span>{data.author}</span>
					</div>
				</div>
				{data.image && (
					<div className="relative mb-8 overflow-hidden rounded-lg aspect-video not-prose">
						<img src={data.image.url} alt={data.image.alt || data.title} className="object-cover w-full h-full" />
					</div>
				)}
				<p className="lead">{data.description}</p>
				{renderContent()}
				<div className="mt-8 not-prose">
					<a href="/expert-plumbing-tips" className="text-primary hover:underline">
						← Back to Tips
					</a>
				</div>
			</div>
		</article>
	);
}

// Dynamic page component
export default async function DynamicPage({ params }: PageProps) {
	const nextjs15 = await params;
	const slugArray = nextjs15.slug || [];
	console.log("DynamicPage - Received slugArray:", slugArray);

	const isPost = slugArray[0] === "expert-plumbing-tips" && slugArray.length === 2;
	const isService = slugArray[0] === "lanier-plumbing-services" && slugArray.length === 2;
	console.log("DynamicPage - Path type:", { isPost, isService });

	if (isPost) {
		const postSlug = slugArray[1];
		const post = await getCachedPostData(postSlug);

		if (!post) {
			notFound();
		}

		if (!post.content || !post.data) {
			notFound();
		}

		return <PostContent content={post.content} data={post.data} />;
	}

	if (isService) {
		const serviceSlug = slugArray[1];
		console.log("DynamicPage - Fetching service with slug:", serviceSlug);
		const service = await getCachedServiceData(serviceSlug);
		console.log("DynamicPage - Service fetch result:", service ? "Found" : "Not Found");

		if (!service) {
			console.log("DynamicPage - Service not found, returning 404");
			notFound();
		}

		return (
			<article className="container max-w-4xl px-4 py-8 mx-auto">
				<div className="mx-auto prose prose-lg dark:prose-invert">
					<h1 className="mb-4">{service.data.title}</h1>
					<p className="mb-8 lead">{service.data.description}</p>
					{service.data.image && (
						<div className="relative mb-8 overflow-hidden rounded-lg aspect-video not-prose">
							<img src={service.data.image.url} alt={service.data.image.alt || service.data.title} className="object-cover w-full h-full" />
						</div>
					)}
					<div className="prose prose-lg dark:prose-invert">
						{typeof service.content === "string" ?
							<div dangerouslySetInnerHTML={{ __html: service.content }} />
						:	<div>
								{service.content.root.children.map((node: any, index: number) => {
									if (node.children?.[0]?.text) {
										return (
											<p key={index}>
												{node.children.map((child: any, childIndex: number) => (
													<span key={childIndex}>{child.text}</span>
												))}
											</p>
										);
									}
									return null;
								})}
							</div>
						}
					</div>
					<div className="mt-8 not-prose">
						<a href="/lanier-plumbing-services" className="text-primary hover:underline">
							← Back to Services
						</a>
					</div>
				</div>
			</article>
		);
	}

	const slug = slugArray.join("/");
	const data = await getCachedPageData(slug);

	if (!data) {
		notFound();
	}

	return <PageContent key={data.id} data={data} />;
}
