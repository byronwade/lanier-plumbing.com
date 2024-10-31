import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
	return (
		<section className="relative overflow-hidden bg-white">
			<div className="mx-auto max-w-7xl">
				<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
					<svg className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
						<polygon points="50,0 100,0 50,100 0,100" />
					</svg>

					<main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<div className="sm:text-center lg:text-left">
							<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
								<span className="block xl:inline">Expert Plumbing Services</span> <span className="block text-red-800 xl:inline">You Can Trust</span>
							</h1>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">From leaky faucets to complete bathroom renovations, our team of skilled plumbers is ready to tackle any job, big or small.</p>
							<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
								<div className="rounded-md shadow">
									<Button className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-900 md:py-4 md:text-lg md:px-10">Get a Free Quote</Button>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<Button variant="outline" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-black border border-transparent rounded-md hover:bg-gray-800 md:py-4 md:text-lg md:px-10">
										Our Services
									</Button>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
			<div className="absolute inset-y-0 top-0 right-0 w-full h-full lg:w-1/2">
				<Image className="object-cover w-full h-full" src="/hero-image.webp" alt="Plumber working on pipes" priority width={800} height={600} />
			</div>
		</section>
	);
}
