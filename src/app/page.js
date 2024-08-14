import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">Reliable Plumbing Services</h1>
									<p className="max-w-[600px] text-muted-foreground md:text-xl">Acme Plumbing provides top-quality plumbing services for residential and commercial clients. Our experienced team is dedicated to ensuring your plumbing needs are met efficiently and effectively.</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Link href="#" className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors rounded-md shadow bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
										Schedule Service
									</Link>
									<Link href="#" className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors border rounded-md shadow-sm border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
										Learn More
									</Link>
								</div>
							</div>
							<img src="/placeholder.svg" width="550" height="550" alt="Hero" className="object-cover mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last lg:aspect-square" />
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block px-3 py-1 text-sm rounded-lg bg-muted">Expertise</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted Plumbing Experts</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Acme Plumbing has been providing top-quality plumbing services for over 20 years. Our team of licensed and certified plumbers are experts in their field, ensuring your plumbing needs are met with the utmost care and professionalism.</p>
							</div>
						</div>
						<div className="grid items-center max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-2 lg:gap-12">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h3 className="text-2xl font-bold">Certifications</h3>
									<p className="text-muted-foreground">Our plumbers are licensed and certified by the state to ensure the highest level of quality and safety. We are also members of the National Plumbing Contractors Association and the Better Business Bureau.</p>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<img src="/placeholder.svg" width="100" height="100" alt="Certification 1" className="object-contain aspect-square" />
									<img src="/placeholder.svg" width="100" height="100" alt="Certification 2" className="object-contain aspect-square" />
									<img src="/placeholder.svg" width="100" height="100" alt="Certification 3" className="object-contain aspect-square" />
									<img src="/placeholder.svg" width="100" height="100" alt="Certification 4" className="object-contain aspect-square" />
								</div>
							</div>
							<img src="/placeholder.svg" width="550" height="310" alt="Certifications" className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last" />
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block px-3 py-1 text-sm rounded-lg bg-muted">Our Team</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Experienced Plumbers</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Our team of licensed and certified plumbers have years of experience in the industry, ensuring your plumbing needs are met with the highest level of expertise and professionalism.</p>
							</div>
						</div>
						<div className="grid items-center max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-3 lg:gap-8">
							<div className="flex flex-col items-center justify-center space-y-2">
								<img src="/placeholder.svg" width="120" height="120" alt="John Doe" className="rounded-full" style={{ aspectRatio: "120/120", objectFit: "cover" }} />
								<div className="text-center">
									<h3 className="text-lg font-bold">John Doe</h3>
									<p className="text-muted-foreground">Master Plumber</p>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center space-y-2">
								<img src="/placeholder.svg" width="120" height="120" alt="Jane Smith" className="rounded-full" style={{ aspectRatio: "120/120", objectFit: "cover" }} />
								<div className="text-center">
									<h3 className="text-lg font-bold">Jane Smith</h3>
									<p className="text-muted-foreground">Journeyman Plumber</p>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center space-y-2">
								<img src="/placeholder.svg" width="120" height="120" alt="Bob Johnson" className="rounded-full" style={{ aspectRatio: "120/120", objectFit: "cover" }} />
								<div className="text-center">
									<h3 className="text-lg font-bold">Bob Johnson</h3>
									<p className="text-muted-foreground">Apprentice Plumber</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block px-3 py-1 text-sm rounded-lg bg-muted">Contact Us</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Fill out the form below to schedule a service appointment or to ask any questions about our plumbing services.</p>
							</div>
						</div>
						<div className="w-full max-w-md pt-8 mx-auto space-y-4">
							<form className="space-y-2">
								<div className="space-y-1">
									<Label htmlFor="name">Name</Label>
									<Input id="name" required />
								</div>
								<div className="space-y-1">
									<Label htmlFor="email">Email</Label>
									<Input id="email" type="email" required />
								</div>
								<div className="space-y-1">
									<Label htmlFor="phone">Phone</Label>
									<Input id="phone" type="tel" required />
								</div>
								<div className="space-y-1">
									<Label htmlFor="message">Message</Label>
									<Textarea id="message" rows={4} required />
								</div>
								<Button type="submit" className="w-full">
									Submit
								</Button>
							</form>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
