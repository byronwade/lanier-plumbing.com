import { Payload } from "payload";
import type { Page } from "../payload-types";

export const seedData = async (payload: Payload) => {
	try {
		// Create home page
		const homePage = await payload.create({
			collection: "pages",
			data: {
				title: "Lanier Plumbing",
				slug: "/",
				layout: [
					{
						blockType: "hero",
						mainHeading: "Expert Plumbing Services",
						highlightedHeading: "You Can Trust",
						description: "From leaky faucets to complete bathroom renovations, our team of skilled plumbers is ready to tackle any job, big or small.",
						phoneNumber: "(770) 536-1161",
						primaryButton: {
							text: "Get a Free Quote",
							link: "/contact",
						},
						secondaryButton: {
							text: "Our Services",
							link: "/services",
						},
					},
					{
						blockType: "services",
						sections: [
							{
								type: "residential",
								title: "Residential Plumbing Excellence",
								description: "From quick fixes to complete home remodels, our expert team ensures your residential plumbing runs flawlessly. Experience peace of mind with our 24/7 emergency services.",
								features: [{ text: "Leak Detection & Repair" }, { text: "Fixture Installation & Upgrades" }, { text: "Drain Cleaning & Maintenance" }],
								phoneNumber: "(770) 536-1161",
								primaryButton: {
									text: "Call Now",
									link: "tel:7705361161",
								},
								secondaryButton: {
									text: "View Residential Services",
									link: "/services#residential",
								},
							},
						],
					},
					{
						blockType: "testimonials",
						title: "What Our Customers Say",
						description: "Trust the plumbing company that hundreds of homeowners rely on. See what our satisfied customers have to say about our expert services.",
						platforms: [
							{
								platform: "google",
								rating: 4.8,
								reviewCount: 150,
								link: "https://g.page/r/your-google-review-link",
							},
							{
								platform: "yelp",
								rating: 4.7,
								reviewCount: 85,
								link: "https://www.yelp.com/your-yelp-page",
							},
						],
					},
				],
			},
		});

		// Create services
		const services = [
			{
				title: "Residential Plumbing",
				slug: "residential-plumbing",
				content: {
					root: {
						type: "root",
						children: [
							{
								type: "paragraph",
								children: [{ text: "Our comprehensive residential plumbing services include leak detection, pipe repair, fixture installation, and more." }],
							},
						],
						direction: null,
						format: "",
						indent: 0,
						version: 1,
					},
				},
			},
			{
				title: "Commercial Plumbing",
				slug: "commercial-plumbing",
				content: {
					root: {
						type: "root",
						children: [
							{
								type: "paragraph",
								children: [{ text: "Expert commercial plumbing solutions for businesses of all sizes, including maintenance, repairs, and installations." }],
							},
						],
						direction: null,
						format: "",
						indent: 0,
						version: 1,
					},
				},
			},
			{
				title: "Emergency Services",
				slug: "emergency-services",
				content: {
					root: {
						type: "root",
						children: [
							{
								type: "paragraph",
								children: [{ text: "24/7 emergency plumbing services for when you need immediate assistance with urgent plumbing issues." }],
							},
						],
						direction: null,
						format: "",
						indent: 0,
						version: 1,
					},
				},
			},
		];

		for (const service of services) {
			await payload.create({
				collection: "services",
				data: service,
			});
		}

		// Create blog posts
		const posts = [
			{
				title: "Common Plumbing Issues and How to Fix Them",
				slug: "common-plumbing-issues",
				content: {
					root: {
						type: "root",
						children: [
							{
								type: "paragraph",
								children: [{ text: "Learn about the most common plumbing problems and how to address them before they become major issues." }],
							},
						],
						direction: null,
						format: "",
						indent: 0,
						version: 1,
					},
				},
				date: new Date().toISOString(),
			},
			{
				title: "Water Conservation Tips",
				slug: "water-conservation-tips",
				content: {
					root: {
						type: "root",
						children: [
							{
								type: "paragraph",
								children: [{ text: "Discover effective ways to save water and reduce your utility bills with these expert tips." }],
							},
						],
						direction: null,
						format: "",
						indent: 0,
						version: 1,
					},
				},
				date: new Date().toISOString(),
			},
		];

		for (const post of posts) {
			await payload.create({
				collection: "posts",
				data: post,
			});
		}

		// Create settings
		await payload.updateGlobal({
			slug: "settings",
			data: {
				homePage: homePage.id,
				companyName: "Lanier Plumbing",
				companyPhone: "(770) 536-1161",
				companyEmail: "info@lanierplumbing.com",
				companyAddress: "2530 Monroe Dr, Gainesville, GA 30507",
				socialLinks: [
					{
						platform: "facebook",
						url: "https://facebook.com/lanierplumbing",
					},
					{
						platform: "instagram",
						url: "https://instagram.com/lanierplumbing",
					},
				],
			},
		});

		console.log("✅ Seed data created successfully");
	} catch (error) {
		console.error("Error seeding data:", error);
		throw error;
	}
};
