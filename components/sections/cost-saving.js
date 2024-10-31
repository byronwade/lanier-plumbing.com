"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Wrench } from "lucide-react";

export default function PlumbingCostSaving() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const particles = [];
		const particleCount = 75;
		const colors = ["#2C3E50", "#34495E", "#445566", "#566573"];

		class Particle {

			constructor() {
				this.x = Math.random() * canvas.width;
				this.y = Math.random() * canvas.height;
				this.size = Math.random() * 3 + 0.5;
				this.speedX = Math.random() * 0.7 - 0.35;
				this.speedY = Math.random() * 0.7 - 0.35;
				this.color = colors[Math.floor(Math.random() * colors.length)];
			}

			update() {
				this.x += this.speedX;
				this.y += this.speedY;

				if (this.x > canvas.width) this.x = 0;
				else if (this.x < 0) this.x = canvas.width;
				if (this.y > canvas.height) this.y = 0;
				else if (this.y < 0) this.y = canvas.height;
			}

			draw() {
				if (!ctx) return;
				ctx.fillStyle = this.color;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		for (let i = 0; i < particleCount; i++) {
			particles.push(new Particle());
		}

		function animate() {
			if (!ctx) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (let i = 0; i < particles.length; i++) {
				particles[i].update();
				particles[i].draw();
			}
			requestAnimationFrame(animate);
		}

		animate();

		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const services = [
		{ src: "/placeholder.svg", alt: "Pipe repair" },
		{ src: "/placeholder.svg", alt: "Drain cleaning" },
		{ src: "/placeholder.svg", alt: "Water heater installation" },
		{ src: "/placeholder.svg", alt: "Fixture installation" },
		{ src: "/placeholder.svg", alt: "Leak detection" },
	];

	return (
		<section className="relative py-16 overflow-hidden text-gray-100 bg-gray-900 md:pt-20 md:pb-32">
			<canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40" aria-hidden="true" />
			<div className="container relative z-10 px-4 mx-auto">
				<div className="flex items-center justify-center mb-4">
					<Wrench className="mr-2 text-red-500" size={24} />
					<span className="font-semibold tracking-wider text-red-500 uppercase">Our Work</span>
				</div>
				<h2 className="mb-4 text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl">
					We Offer Cost Efficient
					<br />
					Plumbing Services
				</h2>
				<p className="max-w-2xl mx-auto mb-8 text-xl text-center text-gray-300 md:mb-12">Professional solutions for all your plumbing needs, saving you time and money</p>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
					{services.map((service, index) => (
						<div key={index} className="relative overflow-hidden rounded-lg aspect-square group">
							<Image src={service.src} alt={service.alt} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-110" />
							<div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
								<span className="px-2 text-lg font-semibold text-center text-white">{service.alt}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
