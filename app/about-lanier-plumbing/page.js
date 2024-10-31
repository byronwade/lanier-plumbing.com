import { Wrench, ShieldCheck, Clock } from 'lucide-react'
import Image from 'next/image'
export default function About() {
  return (
    <section className="pt-12 pb-32">
      <div className="container flex flex-col mx-auto max-w-7xl gap-28">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-semibold lg:text-7xl">
            Reliable Plumbing Solutions for Lanier and Beyond
          </h1>
          <p className="max-w-xl text-lg">
            Lanier Plumbing provides expert plumbing services for residential and commercial properties. With our skilled team and state-of-the-art equipment, we ensure your plumbing needs are met efficiently and effectively.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Image
            src="/placeholder.svg"
            alt="Lanier Plumbing team at work"
            className="object-cover w-full h-96 rounded-2xl"
			width={576}
			height={144}
          />
          <div className="flex flex-col justify-between gap-10 p-10 rounded-2xl bg-muted">
            <p className="text-sm text-muted-foreground">OUR MISSION</p>
            <p className="text-lg font-medium">
              At Lanier Plumbing, we&apos;re committed to providing top-notch plumbing services with integrity and professionalism. Our goal is to ensure every customer experiences the peace of mind that comes with reliable, high-quality plumbing solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="max-w-xl">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              Why Choose Lanier Plumbing?
            </h2>
            <p className="text-muted-foreground">
              We pride ourselves on our expertise, reliability, and customer-first approach. Here&apos;s what sets us apart in the plumbing industry.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col">
              <div className="flex items-center justify-center mb-5 size-12 rounded-2xl bg-accent">
                <Wrench className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">
                Expert Craftsmanship
              </h3>
              <p className="text-muted-foreground">
                Our team of licensed plumbers brings years of experience and a commitment to quality workmanship to every job, ensuring lasting solutions for your plumbing needs.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-center mb-5 size-12 rounded-2xl bg-accent">
                <Clock className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">
                24/7 Emergency Service
              </h3>
              <p className="text-muted-foreground">
                Plumbing emergencies don&apos;t wait for business hours. That&apos;s why we offer round-the-clock emergency services to address your urgent plumbing issues promptly.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-center mb-5 size-12 rounded-2xl bg-accent">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">
                Guaranteed Satisfaction
              </h3>
              <p className="text-muted-foreground">
                We stand behind our work with a satisfaction guarantee. If you&apos;re not completely satisfied with our service, we&apos;ll make it right - that&apos;s our promise to you.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-10 text-sm font-medium text-muted-foreground">
              OUR SERVICES
            </p>
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              Comprehensive Plumbing Solutions
            </h2>
          </div>
          <div>
            <Image	
              src="/placeholder.svg"
              alt="Lanier Plumbing service showcase"
              className="object-cover w-full mb-6 h-36 rounded-xl"
			  width={576}
			  height={144}
            />
            <p className="text-muted-foreground">
              From routine maintenance to complex installations, Lanier Plumbing offers a full range of services to meet all your plumbing needs. Our expertise covers residential and commercial properties, ensuring top-quality solutions for every client.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}