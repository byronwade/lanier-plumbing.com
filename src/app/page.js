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
				<div className="container px-4 mx-auto">
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
				</div>
			</section>

			<section className="relative pt-0">
				<div className="container px-4 mx-auto">
					<div className="flex flex-wrap gap-4" data-isotope='{ "layoutMode": "masonry" }'>
						<div className="md:w-1/2">
							<div className="p-4 bg-gray-100 rounded-lg card">
								<div className="flex items-center mb-4">
									<div className="w-16 h-16 avatar">
										<img src="assets/images/avatar/02.jpg" className="rounded-full" alt="" />
									</div>
									<div className="ml-2">
										<h6 className="mb-1">Louis Crawford</h6>
										<p className="mb-0">CEO, Google INC</p>
									</div>
								</div>
								<p className="lead">A nice touch of creativity, easy to use, especially bootstrap 5. I love this, good work team!</p>
								<div className="flex justify-between mt-4">
									<img src="assets/images/client/google.svg" className="w-1/4" alt="" />
									<a href="#" className="mb-0 text-gray-700 btn btn-link">
										View project
									</a>
								</div>
							</div>
						</div>

						<div className="md:w-1/2">
							<div className="p-4 bg-gray-100 rounded-lg card">
								<div className="flex items-center mb-4">
									<div className="w-16 h-16 avatar">
										<img src="assets/images/avatar/01.jpg" className="rounded-full" alt="" />
									</div>
									<div className="ml-2">
										<h6 className="mb-1">Amanda Reed</h6>
										<p className="mb-0">Education minister, Algolia</p>
									</div>
								</div>
								<p className="lead">The theme has done very well. 5 stars! Efficient support. Support responds immediately and solves all problems! Good Job!</p>
								<div className="relative mt-4 aspect-w-21 aspect-h-9">
									<iframe className="rounded-lg" width="560" height="350" src="https://www.youtube.com/embed/24zI3oD9wtw?controls=0" frameBorder="0" allow="auto-play"></iframe>
								</div>
								<div className="flex justify-between mt-4">
									<img src="assets/images/client/algolia-.svg" className="w-1/4" alt="" />
									<a href="#" className="mb-0 text-gray-700 btn btn-link">
										View project
									</a>
								</div>
							</div>
						</div>

						<div className="md:w-1/2">
							<div className="p-4 text-white bg-gray-800 rounded-lg card">
								<div className="flex items-center mb-4">
									<div className="w-16 h-16 avatar">
										<img src="assets/images/avatar/05.jpg" className="rounded-full" alt="" />
									</div>
									<div className="ml-2">
										<h6 className="mb-1 text-white">Joan Wallace</h6>
										<p className="mb-0 text-white">Sr. Developer, Android</p>
									</div>
								</div>
								<p className="text-white lead">Awesome theme. Very clean and organized code, very easy for inexperienced users like me to design with it. Great and fast support. Answering questions even on Sundays. Big thanks to the Webestica team</p>
								<div className="flex justify-between mt-4">
									<img src="assets/images/client/android-.svg" className="w-1/4" alt="" />
									<a href="#" className="mb-0 text-white btn btn-link">
										View project
									</a>
								</div>
							</div>
						</div>

						<div className="md:w-1/2">
							<div className="p-4 bg-gray-100 rounded-lg card">
								<div className="flex items-center mb-4">
									<div className="w-16 h-16 avatar">
										<img src="assets/images/avatar/02.jpg" className="rounded-full" alt="" />
									</div>
									<div className="ml-2">
										<h6 className="mb-1">Samuel Bishop</h6>
										<p className="mb-0">Director, Envato</p>
									</div>
								</div>
								<p className="mb-0 lead">I have already 4 purchases of 4 different themes here, And this Folio theme is the best:</p>
								<p className="mb-0 lead">1. It has a very modern, beautiful, emotional design. I like modern, but a lot of modern themes always seem to be a little bit rude because, many developers often lose &quot;beauty details&quot; on it, but here is they didn&apos;t. Yeah, I know this is subjective, but emotion is about yes or no.</p>
								<p className="mb-0 lead">2. It is easy to built in components</p>
								<p className="mb-0 lead">3. Support is fantastically operational.</p>
								<div className="flex justify-between mt-4">
									<img src="assets/images/client/envato.svg" className="w-1/4" alt="" />
									<a href="#" className="mb-0 text-gray-700 btn btn-link">
										View project
									</a>
								</div>
							</div>
						</div>

						<div className="md:w-1/2">
							<div className="p-4 bg-gray-100 rounded-lg card">
								<div className="flex items-center mb-4">
									<div className="w-16 h-16 avatar">
										<img src="assets/images/avatar/04.jpg" className="rounded-full" alt="" />
									</div>
									<div className="ml-2">
										<h6 className="mb-1">Billy Vasquez</h6>
										<p className="mb-0">Marketing Manager, Netflix</p>
									</div>
								</div>
								<p className="lead">I bought this website template and I wasn&apos;t sure if I can handle it (it was my first template :) ) so I had some problems starting with some technical issues (from my side). But the support is one of the best I have ever seen. they are very kind to customers and help to fix a problem.... until it&apos;s fixed! Now everything is fine and I will buy the next templates only from here, cause they help until it runs :)</p>
								<div className="flex justify-between mt-4">
									<img src="assets/images/client/netflix.svg" className="w-1/4" alt="" />
									<a href="#" className="mb-0 text-gray-700 btn btn-link">
										View project
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
