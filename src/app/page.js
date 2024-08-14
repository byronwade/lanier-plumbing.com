import { Card } from "@/components/ui/card";
import UnderwaterBackground from "@/components/underwater";
import { StarFilledIcon } from "@radix-ui/react-icons";

export default function Home() {
	return (
		// skipcq: JS-0415
		<main>
			<div className="relative min-h-screen">
				<UnderwaterBackground />
				<div className="absolute inset-0 flex items-center justify-end mr-[10%]">
					<Card className="z-10">
						<h1 className="mb-4 text-4xl font-bold">Your Plumbing Company</h1>
						<p className="text-xl">We deliver quality service, every time</p>
					</Card>
				</div>
			</div>
			<section className="relative">
				<section className="container px-4 mx-auto">
					<div className="flex flex-wrap items-center justify-between gap-4">
						<div className="md:w-7/12">
							<ul className="flex mb-0 space-x-1 list-inline">
								<li className="inline-block">
									<StarFilledIcon className="text-yellow-500" />
								</li>
								<li className="inline-block">
									<StarFilledIcon className="text-yellow-500" />
								</li>
								<li className="inline-block">
									<StarFilledIcon className="text-yellow-500" />
								</li>
								<li className="inline-block">
									<StarFilledIcon className="text-yellow-500" />
								</li>
								<li className="inline-block">
									<StarFilledIcon className="text-yellow-500" />
								</li>
								<li className="inline-block font-normal text-gray-700">Trusted by 1K+ industry leaders</li>
							</ul>

							<h1 className="my-3">Testimonials</h1>
							<p className="mb-0 lead">Don&apos;t go with our words only. Hear some of the reviews our clients have to say about what it&apos;s like to work with our team.</p>
						</div>

						<div className="text-right md:w-5/12">
							<i className="text-6xl text-blue-600 opacity-25 bi bi-chat-left-quote"></i>
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
			</section>
		</main>
	);
}
