"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageSquare, Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type BaseBlock = Extract<LayoutType[number], { blockType: string }>;

interface ContactBlock extends Omit<BaseBlock, "blockType"> {
	blockType: "contact";
	header: {
		title: string;
		phoneNumber: string;
		subtitle: string;
		hours: string;
	};
	formSettings: {
		formTitle: string;
		subjects: Array<{
			label: string;
			value: string;
		}>;
		successMessage: string;
		errorMessage: string;
	};
	buttons: {
		callButton: {
			text: string;
			link: string;
		};
		textButton: {
			text: string;
			link: string;
		};
		submitButton: {
			text: string;
			loadingText: string;
		};
	};
}

const formSchema = z.object({
	subject: z.string({
		required_error: "Please select a subject.",
	}),
	firstName: z.string().min(2, {
		message: "First name must be at least 2 characters.",
	}),
	lastName: z.string().min(2, {
		message: "Last name must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	phone: z.string().min(10, {
		message: "Please enter a valid phone number.",
	}),
	address: z.object({
		line1: z.string().min(1, "Address line 1 is required"),
		line2: z.string().optional(),
		city: z.string().min(1, "City is required"),
		state: z.string().min(1, "State is required"),
		postalCode: z.string().min(5, "Please enter a valid postal code"),
	}),
	message: z.string().min(10, {
		message: "Message must be at least 10 characters.",
	}),
});

export default function Contact(props: ContactBlock) {
	const { header, formSettings, buttons } = props;
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			subject: "",
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			address: {
				line1: "",
				line2: "",
				city: "",
				state: "",
				postalCode: "",
			},
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true);
		setSubmitStatus(null);
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			console.log(values);
			setSubmitStatus("success");
			form.reset();
		} catch (error) {
			console.error("Form submission error:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<div className="container max-w-5xl px-4 pt-12 pb-32 mx-auto">
			<div className="space-y-16">
				<header className="space-y-8 text-center">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{header.title}</h1>
					<div className="space-y-4">
						<p className="text-3xl font-semibold text-red-600 sm:text-4xl md:text-5xl">{header.phoneNumber}</p>
						<p className="text-xl text-muted-foreground">{header.subtitle}</p>
						<p className="text-muted-foreground">{header.hours}</p>
					</div>
					<div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
						<Button size="lg" className="px-8 py-6 text-lg bg-red-600 hover:bg-red-700" onClick={() => (window.location.href = buttons.callButton.link)}>
							<Phone className="w-6 h-6 mr-2" />
							{buttons.callButton.text}
						</Button>
						<Button size="lg" variant="outline" className="px-8 py-6 text-lg text-red-600 border-red-600 hover:bg-red-50" onClick={() => (window.location.href = buttons.textButton.link)}>
							<MessageSquare className="w-6 h-6 mr-2" />
							{buttons.textButton.text}
						</Button>
					</div>
				</header>

				<div className="space-y-8">
					<h2 className="text-2xl font-semibold text-center sm:text-3xl">{formSettings.formTitle}</h2>
					{submitStatus === "success" && (
						<div className="relative px-4 py-3 text-green-700 bg-green-100 border border-green-500 rounded" role="alert">
							<strong className="font-bold">Success!</strong>
							<p className="block sm:inline"> {formSettings.successMessage}</p>
						</div>
					)}
					{submitStatus === "error" && (
						<div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-500 rounded" role="alert">
							<strong className="font-bold">Error!</strong>
							<p className="block sm:inline"> {formSettings.errorMessage}</p>
						</div>
					)}

					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							<FormField
								control={form.control}
								name="subject"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Subject</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select a subject" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{formSettings.subjects.map((subject) => (
													<SelectItem key={subject.value} value={subject.value}>
														{subject.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className="grid gap-6 md:grid-cols-2">
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>First Name</FormLabel>
											<FormControl>
												<Input placeholder="John" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Last Name</FormLabel>
											<FormControl>
												<Input placeholder="Doe" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<div className="grid gap-6 md:grid-cols-2">
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input type="email" placeholder="john.doe@example.com" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Phone</FormLabel>
											<FormControl>
												<Input type="tel" placeholder="(555) 123-4567" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<div className="space-y-4">
								<FormField
									control={form.control}
									name="address.line1"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Address Line 1</FormLabel>
											<FormControl>
												<Input placeholder="123 Main St" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="address.line2"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Address Line 2 (Optional)</FormLabel>
											<FormControl>
												<Input placeholder="Apt 4B" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<div className="grid gap-4 md:grid-cols-3">
									<FormField
										control={form.control}
										name="address.city"
										render={({ field }) => (
											<FormItem>
												<FormLabel>City</FormLabel>
												<FormControl>
													<Input placeholder="Atlanta" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="address.state"
										render={({ field }) => (
											<FormItem>
												<FormLabel>State</FormLabel>
												<FormControl>
													<Input placeholder="GA" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="address.postalCode"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Postal Code</FormLabel>
												<FormControl>
													<Input placeholder="30301" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							</div>

							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Message</FormLabel>
										<FormControl>
											<Textarea placeholder="Please describe your plumbing needs..." className="h-32" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className="flex justify-center">
								<Button type="submit" className="px-8 py-3 text-lg bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
									{isSubmitting ?
										<>
											<Loader2 className="w-4 h-4 mr-2 animate-spin" />
											{buttons.submitButton.loadingText}
										</>
									:	buttons.submitButton.text}
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}
