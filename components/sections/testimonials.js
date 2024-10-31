"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
export default function Testimonials() {
	return (
		<section className="relative py-24 border-y bg-background border-primary/10">
			<div className="absolute inset-0 z-0 opacity-50" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")" }}></div>
			<div className="container relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex flex-col items-start gap-12 sm:flex-row sm:items-center sm:justify-between sm:gap-16">
					<div className="flex flex-col items-start flex-1 text-left">
						<h2 className="mb-6 text-3xl font-bold text-primary sm:text-4xl">Testimonials</h2>
						<p className="max-w-2xl mb-8 text-base text-muted-foreground sm:text-lg">Trust the plumbing company that hundreds of homeowners rely on. See what our satisfied customers have to say about our expert services.</p>
						<Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
							View All Reviews
						</Button>
					</div>
					<div className="flex flex-col gap-8 sm:flex-row lg:gap-16">
						<div className="inline-block">
							<Image src="https://placehold.co/24x24" alt="Google Reviews" className="mb-4" width={24} height={24} />
							<div className="flex items-center">
								<div className="mr-4 text-sm font-semibold text-primary">4.8 / 5</div>
								<div className="flex items-center gap-0.5">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="w-5 h-5 fill-primary stroke-none" />
									))}
								</div>
							</div>
						</div>
						<div className="inline-block">
							<Image src="https://placehold.co/24x24" alt="Yelp Reviews" className="mb-4" width={24} height={24} />
							<div className="flex items-center">
								<div className="mr-4 text-sm font-semibold text-primary">4.8 / 5</div>
								<div className="flex items-center gap-0.5">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="w-5 h-5 fill-primary stroke-none" />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-16">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{testimonials.map((testimonial, index) => (
							<Card key={index} className="flex flex-col justify-between p-6 border rounded-lg shadow-sm border-primary/10 bg-background">
								<p className="mb-4 text-sm text-muted-foreground">&quot;{testimonial.text}&quot;</p>
								<div className="flex items-center gap-3">
									<span className="relative flex w-10 h-10 overflow-hidden rounded-full shrink-0">
										<Image src={testimonial.avatar} alt={testimonial.name} className="object-cover w-full h-full aspect-square" width={40} height={40} />
									</span>
									<div>
										<p className="text-sm font-medium text-foreground">{testimonial.name}</p>
										<p className="text-xs text-muted-foreground">{testimonial.location}</p>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

const testimonials = [
	{
		text: "Best plumber in the area! Fixed our leaking pipe quickly and professionally. The team was courteous and cleaned up everything after the job.",
		name: "Sarah Johnson",
		location: "Local Homeowner",
		avatar: "https://placehold.co/40x40",
	},
	{
		text: "Emergency service that actually shows up! Had a burst pipe at 2 AM and they were here within 30 minutes.",
		name: "Michael Chen",
		location: "Residential Customer",
		avatar: "https://placehold.co/40x40",
	},
	{
		text: "Fair pricing and excellent workmanship. They replaced our water heater and explained everything clearly throughout the process.",
		name: "David Williams",
		location: "Property Manager",
		avatar: "https://placehold.co/40x40",
	},
	{
		text: "Very professional team. They installed new fixtures in our bathroom and kitchen. Everything works perfectly!",
		name: "Emily Rodriguez",
		location: "Home Owner",
		avatar: "https://placehold.co/40x40",
	},
	{
		text: "Fantastic service! They helped us with a complete plumbing inspection before buying our new home. Saved us from a costly mistake!",
		name: "James Thompson",
		location: "New Homeowner",
		avatar: "https://placehold.co/40x40",
	},
	{
		text: "Regular maintenance service for our office building. Always reliable, always on time. Highly recommended for commercial properties.",
		name: "Lisa Anderson",
		location: "Business Owner",
		avatar: "https://placehold.co/40x40",
	},
];
