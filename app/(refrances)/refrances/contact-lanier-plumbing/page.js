import { Phone, Mail, MapPin, Clock, Wrench } from "lucide-react";
import { Suspense } from "react";

async function ContactContent() {
	"use cache";
	return (
		<div className="min-h-screen p-4 bg-background text-foreground md:p-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="mb-8 text-4xl font-bold text-center">Contact Lanier Plumbing Services</h1>

				<div className="mb-12 text-center">
					<p className="mb-4 text-xl">Need plumbing help? We&apos;re just a call or text away!</p>
					<a href="tel:404-988-4910" className="inline-block px-8 py-4 mb-2 text-2xl font-bold text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700">
						Call or Text: 404-988-4910
					</a>
					<p className="text-sm text-muted-foreground">Available Monday - Friday, 8:00 AM - 5:00 PM</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					<section className="space-y-6">
						<h2 className="text-2xl font-semibold">Contact Information</h2>
						<div className="grid gap-4 p-6 bg-gray-100 rounded-lg">
							<div className="flex items-center space-x-3">
								<Phone className="w-6 h-6 text-red-600" />
								<div>
									<p className="font-semibold">Phone</p>
									<p>404-988-4910</p>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<Mail className="w-6 h-6 text-red-600" />
								<div>
									<p className="font-semibold">Email</p>
									<a href="mailto:byron@lanier-plumbing.com" className="hover:underline">
										byron@lanier-plumbing.com
									</a>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<MapPin className="w-6 h-6 mt-1 text-red-600" />
								<div>
									<p className="font-semibold">Address</p>
									<address className="not-italic">
										1100 McFarland 400, Suite B<br />
										Alpharetta, GA 30004
									</address>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<Clock className="w-6 h-6 text-red-600" />
								<div>
									<p className="font-semibold">Business Hours</p>
									<p>Monday - Friday: 8:00 AM - 5:00 PM</p>
								</div>
							</div>
						</div>
					</section>

					<section>
						<h2 className="mb-6 text-2xl font-semibold">Our Services</h2>
						<ul className="grid grid-cols-2 gap-4">
							{["Leak Detection", "Pipe Installation", "Drain Cleaning", "Water Heaters", "Bathroom Plumbing", "Kitchen Plumbing"].map((service, index) => (
								<li key={index} className="flex items-center space-x-2">
									<Wrench className="w-4 h-4 text-red-600" />
									<span>{service}</span>
								</li>
							))}
						</ul>
					</section>
				</div>

				<section className="mt-12">
					<h2 className="mb-6 text-2xl font-semibold text-center">Why Choose Lanier Plumbing Services?</h2>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						{[
							{ title: "Expert Technicians", description: "Years of experience in plumbing solutions" },
							{ title: "Quality Materials", description: "We use only the best materials for lasting results" },
							{ title: "Transparent Pricing", description: "No hidden fees, clear and upfront quotes" },
							{ title: "Prompt Service", description: "We respect your time and arrive as scheduled" },
						].map((item, index) => (
							<div key={index} className="p-4 border rounded-lg border-border">
								<h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
								<p>{item.description}</p>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}

export default function ContactPage() {
	return (
		<Suspense fallback={<div className="min-h-screen animate-pulse" />}>
			<ContactContent />
		</Suspense>
	);
}
