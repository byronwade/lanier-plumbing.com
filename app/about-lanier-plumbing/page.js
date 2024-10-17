"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Droplet, Wrench, Users, DollarSign, Award, CheckCircle, Building, Home, Hotel, Hospital } from "lucide-react";
import Image from "next/image";

export default function ArtisticAboutUs() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="min-h-screen overflow-hidden text-gray-800 bg-gradient-to-br from-white via-red-50 to-red-100">
			<main className="relative">
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<motion.div
						className="absolute left-0 w-64 h-64 top-1/4 opacity-20"
						animate={{
							x: [0, 100, 0],
							y: [0, -50, 0],
							rotate: [0, 180, 360],
						}}
						transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
					>
						<Image src="https://placehold.co/256x256" alt="Floating shape" width={256} height={256} className="rounded-full" />
					</motion.div>
					<motion.div
						className="absolute right-0 w-48 h-48 top-3/4 opacity-20"
						animate={{
							x: [0, -80, 0],
							y: [0, 60, 0],
							rotate: [0, -180, -360],
						}}
						transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
					>
						<Image src="https://placehold.co/192x192" alt="Floating shape" width={192} height={192} className="rounded-full" />
					</motion.div>
				</div>

				<section id="about" className="relative flex items-center justify-center min-h-screen py-20">
					<motion.div
						className="absolute inset-0 flex items-center justify-center opacity-5"
						style={{
							fontSize: `${Math.min(200 + scrollY * 0.1, 400)}px`,
							transform: `translateY(${scrollY * 0.5}px)`,
						}}
					>
						<Droplet className="text-red-300" />
					</motion.div>
					<div className="container z-10 px-6 mx-auto">
						<motion.h2 className="mb-8 font-bold text-center text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-600 to-red-800" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
							About Us
						</motion.h2>
						<motion.p className="max-w-3xl mx-auto text-xl leading-relaxed text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
							At Lanier Plumbing Services LLC, we&apos;ve built our reputation on being the humble plumber—the company you can count on to get the job done right without any fuss. For years, we&apos;ve been the go-to choice for commercial plumbing across Georgia, quietly delivering top-quality work on projects ranging from fire stations to major civil infrastructure.
						</motion.p>
					</div>
				</section>

				<section id="impact" className="relative flex items-center justify-center min-h-screen py-20 overflow-hidden">
					<div className="container z-10 px-6 mx-auto">
						<h3 className="mb-16 text-5xl font-bold text-center text-red-800">Our Impact</h3>
						<div className="relative">
							<motion.div className="absolute inset-0 bg-red-200 rounded-3xl" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} />
							<div className="relative grid grid-cols-1 gap-8 p-8 md:grid-cols-3">
								{[
									{ icon: DollarSign, value: "$10M+", label: "Generated Last Year", description: "Our commitment to quality has led to significant financial growth, allowing us to invest in cutting-edge technology and training." },
									{ icon: Wrench, value: "100s", label: "Projects Completed", description: "From small residential fixes to large-scale commercial installations, weve successfully tackled a diverse range of plumbing challenges." },
									{ icon: Users, value: "1000s", label: "Satisfied Customers", description: "Our dedication to exceptional service has earned us a loyal customer base and numerous referrals across Georgia." },
								].map((item, index) => (
									<motion.div key={index} className="p-6 bg-white shadow-lg rounded-2xl" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
										<div className="flex items-center mb-4">
											<div className="p-3 mr-4 bg-red-100 rounded-full">
												<item.icon size={24} className="text-red-600" />
											</div>
											<div>
												<p className="text-4xl font-bold text-red-700">{item.value}</p>
												<p className="text-lg text-gray-600">{item.label}</p>
											</div>
										</div>
										<p className="text-gray-700">{item.description}</p>
									</motion.div>
								))}
							</div>
						</div>
						<motion.div className="mt-12 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
							<p className="text-xl text-gray-700">Our impact goes beyond numbers. We&apos;re proud to contribute to the safety, comfort, and efficiency of countless homes and businesses across Georgia.</p>
						</motion.div>
					</div>
				</section>

				<section id="expertise" className="relative flex items-center justify-center min-h-screen py-20">
					<div className="container z-10 px-6 mx-auto">
						<h3 className="mb-16 text-5xl font-bold text-center text-red-800">Our Expertise</h3>
						<p className="max-w-3xl mx-auto mb-12 text-xl text-center">Our expertise spans a wide range of projects and industries. Here are just a few examples of the diverse areas where we excel:</p>
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
							{[
								{ icon: Building, title: "Fire Stations", description: "Ensuring safety with top-notch plumbing systems" },
								{ icon: Home, title: "Multi-Home Units", description: "Efficient solutions for residential complexes" },
								{ icon: Hotel, title: "Hotels", description: "Luxury plumbing for hospitality excellence" },
								{ icon: Hospital, title: "Hospitals", description: "Critical systems for healthcare facilities" },
							].map((item, index) => (
								<motion.div key={index} className="flex flex-col items-center text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
									<item.icon size={48} className="mb-4 text-red-600" />
									<h4 className="mb-2 text-xl font-bold text-red-700">{item.title}</h4>
									<p className="text-gray-700">{item.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<section id="services" className="relative flex items-center justify-center min-h-screen py-20">
					<div className="container z-10 px-6 mx-auto">
						<h3 className="mb-16 text-5xl font-bold text-center text-red-800">Our Comprehensive Services</h3>
						<p className="max-w-3xl mx-auto mb-12 text-xl text-center">At Lanier Plumbing, we offer a wide array of services to meet all your plumbing needs. Our expertise extends far beyond the examples above, covering everything from routine maintenance to complex installations:</p>
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{["Commercial Plumbing", "Residential Plumbing", "Emergency Repairs", "Water Heater Installation", "Pipe Replacement", "Drain Cleaning", "Sewer Line Services", "Gas Line Installation", "Bathroom Remodeling", "Kitchen Plumbing", "Backflow Prevention", "Water Treatment Systems", "HVAC Integration", "Industrial Plumbing", "Green Plumbing Solutions"].map((service, index) => (
								<motion.div key={index} className="flex items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
									<CheckCircle className="mr-2 text-red-600" />
									<span className="text-lg text-gray-800">{service}</span>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<section id="team" className="relative flex items-center justify-center min-h-screen py-20 overflow-hidden">
					<div className="container z-10 px-6 mx-auto">
						<h3 className="mb-16 text-5xl font-bold text-center text-red-800">Our Team</h3>
						<div className="grid grid-cols-1 gap-12 md:grid-cols-3">
							{[
								{ name: "John Doe", role: "Master Plumber", responsibility: "Oversees all major commercial projects", image: "https://placehold.co/300x300" },
								{ name: "Jane Smith", role: "Service Manager", responsibility: "Coordinates residential and commercial service calls", image: "https://placehold.co/300x300" },
								{ name: "Mike Johnson", role: "Apprentice Plumber", responsibility: "Learning the trade and assisting on various projects", image: "https://placehold.co/300x300" },
							].map((employee, index) => (
								<motion.div key={index} className="text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
									<Image src={employee.image} alt={employee.name} width={200} height={200} className="mx-auto mb-4 rounded-full" />
									<h4 className="mb-2 text-2xl font-bold text-red-700">{employee.name}</h4>
									<p className="mb-2 text-xl text-gray-700">{employee.role}</p>
									<p className="text-sm text-gray-600">{employee.responsibility}</p>
								</motion.div>
							))}
						</div>
					</div>
					<motion.div
						className="absolute inset-0 flex items-center justify-center opacity-5"
						style={{
							fontSize: "800px",
							transform: `translateX(${(scrollY - 2000) * 0.1}px)`,
						}}
					>
						<Users className="text-red-200" />
					</motion.div>
				</section>
			</main>
		</div>
	);
}
