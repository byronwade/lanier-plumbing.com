import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
	return (
		<div className="flex items-center justify-center min-h-screen px-4 py-12 bg-background sm:px-6 lg:px-8">
			<div className="w-full space-y-8 max-w-7xl">
				<div className="text-center">
					<h1 className="text-4xl font-extrabold text-primary">Contact Us</h1>
					<p className="mt-2 text-xl text-muted-foreground">We&apos;d love to hear from you</p>
				</div>
				<div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-2">
					{/* Left column: Contact info and location */}
					<div className="space-y-12">
						<section>
							<h2 className="mb-6 text-2xl font-semibold text-primary">Get in Touch</h2>
							<div className="space-y-6">
								<div className="flex items-center space-x-4">
									<MapPin className="w-6 h-6 text-primary" />
									<span className="text-lg">123 Main St, Anytown, USA 12345</span>
								</div>
								<div className="flex items-center space-x-4">
									<Phone className="w-6 h-6 text-primary" />
									<span className="text-lg">(123) 456-7890</span>
								</div>
								<div className="flex items-center space-x-4">
									<Mail className="w-6 h-6 text-primary" />
									<span className="text-lg">contact@example.com</span>
								</div>
							</div>
						</section>
						<section>
							<h2 className="mb-6 text-2xl font-semibold text-primary">Our Location</h2>
							<Image src="/placeholder.svg" alt="Map location" width={600} height={400} className="object-cover" />
						</section>
					</div>

					{/* Right column: Contact form */}
					<section className="p-8 rounded-lg shadow-lg bg-card">
						<h2 className="mb-6 text-2xl font-semibold text-primary">Send us a message</h2>
						<form className="space-y-6">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<label htmlFor="first-name" className="text-sm font-medium text-muted-foreground">
										First name
									</label>
									<Input id="first-name" placeholder="John" required className="bg-background" />
								</div>
								<div className="space-y-2">
									<label htmlFor="last-name" className="text-sm font-medium text-muted-foreground">
										Last name
									</label>
									<Input id="last-name" placeholder="Doe" required className="bg-background" />
								</div>
							</div>
							<div className="space-y-2">
								<label htmlFor="email" className="text-sm font-medium text-muted-foreground">
									Email
								</label>
								<Input id="email" type="email" placeholder="johndoe@example.com" required className="bg-background" />
							</div>
							<div className="space-y-2">
								<label htmlFor="message" className="text-sm font-medium text-muted-foreground">
									Message
								</label>
								<Textarea id="message" placeholder="Your message here..." className="min-h-[150px] bg-background" required />
							</div>
							<Button type="submit" className="w-full">
								Send Message
							</Button>
						</form>
					</section>
				</div>
			</div>
		</div>
	);
}
