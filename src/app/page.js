import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
						<div className="z-10 max-w-screen-sm p-4 bg-white rounded ustify-center lg:mt-0 lg:col-span-5 xl:col-span-4 sm:p-6 lg:p-8 dark:bg-gray-800">
  <form
    className="lg:flex-auto"
    data-np-autofill-form-type="identity"
    data-np-checked={1}
    data-np-watching={1}
  >
    <input
      type="text"
      id="pathname"
      className="hidden"
      name="pathname"
      defaultValue="/"
    />
    <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
      <div>
        <label
          htmlFor="full-name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Full name
        </label>
        <div className="mt-2.5">
          <input
            placeholder="Mario Mario"
            required=""
            type="text"
            id="full-name"
            autoComplete="off"
            className="block w-full rounded border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 text-base sm:leading-6"
            name="full-name"
            data-np-autofill-field-type="fullName"
            data-np-uid="0d754394-70f9-4101-aa0d-d81b0ae228be"
          />
          <nordpass-icon data-np-uid="0d754394-70f9-4101-aa0d-d81b0ae228be" />
        </div>
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Phone
        </label>
        <div className="mt-2.5">
          <input
            autoComplete="off"
            placeholder="831-225-4344"
            required=""
            id="phone"
            type="text"
            className="block w-full rounded border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 text-base sm:leading-6"
            name="phone"
            data-np-autofill-field-type="phone"
            data-np-uid="999994d7-75c1-4d24-ab5a-96fd3f825a97"
          />
          <nordpass-icon data-np-uid="999994d7-75c1-4d24-ab5a-96fd3f825a97" />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Email
        </label>
        <div className="mt-2.5">
          <input
            autoComplete="off"
            placeholder="support@wadesinc.io"
            required=""
            id="email"
            type="text"
            className="block w-full rounded border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 text-base sm:leading-6"
            name="email"
            data-np-autofill-field-type="email"
            data-np-uid="f8302c1f-441f-4b0e-af27-8a88d0d50def"
          />
          <nordpass-icon data-np-uid="f8302c1f-441f-4b0e-af27-8a88d0d50def" />
        </div>
      </div>
      <div>
        <label
          htmlFor="address"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Address
        </label>
        <div className="mt-2.5">
          <input
            placeholder="Mashroom Kingdom"
            autoComplete="off"
            required=""
            id="address"
            type="text"
            className="block w-full rounded border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 text-base sm:leading-6"
            name="address"
            data-np-autofill-field-type="address"
            data-np-uid="ca48c282-5ec3-420c-8aed-73c1407da204"
          />
          <nordpass-icon data-np-uid="ca48c282-5ec3-420c-8aed-73c1407da204" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Message
        </label>
        <div className="mt-2.5">
          <textarea
            placeholder="Tell us sbout your project..."
            required=""
            id="message"
            name="message"
            rows={4}
            className="block w-full rounded border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 text-base sm:leading-6"
            data-np-intersection-state="visible"
            defaultValue={""}
          />
        </div>
      </div>
    </div>
    <div className="mt-4">
      <Button>
        Get a Quote
      </Button>
    </div>
    <p className="mt-4 text-sm leading-6 text-gray-700">
      By submitting this form, I agree to the{/* */}{" "}
      <a
        className="font-medium text-brand-700 dark:text-brand-500 hover:underline"
        href="/about-us/privacy-policy"
      >
        privacy policy
      </a>
      .
    </p>
  </form>
</div>

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
