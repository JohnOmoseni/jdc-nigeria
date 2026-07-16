"use client";

import { useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { CONTACT_DATA } from "@/constants";
import { contactSchema, type ContactSchemaType } from "@/lib/schemas/contact";
import { useSubmitContact } from "@/lib/services/contactMutation";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Contact() {
	const [sent, setSent] = useState(false);
	const submitContact = useSubmitContact();

	const methods = useForm<ContactSchemaType>({
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		resolver: zodResolver(contactSchema as any),
		defaultValues: {
			name: "",
			organisation: "",
			email: "",
			phone: "",
			interest: CONTACT_DATA.formFields[0].options?.[0] || "",
			message: "",
		},
		mode: "onBlur",
		reValidateMode: "onChange",
	});

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = methods;

	const onSubmit = (data: ContactSchemaType) => {
		submitContact.mutate(data, {
			onSuccess: () => {
				setSent(true);
			},
			onError: (error) => {
				toast.error("Failed to send message.");
			},
		});
	};

	const handleReset = () => {
		setSent(false);
		reset();
	};

	const errorClass = "text-red-500 text-xs ml-0.5 font-semibold mt-1";

	return (
		<div className="grid lg:grid-cols-2 gap-16">
			<div>
				<h2 className="text-4xl md:text-5xl font-serif text-brand-navy mb-6">
					{CONTACT_DATA.heading}
				</h2>
				<p className="text-lg text-slate-600 mb-10">
					{CONTACT_DATA.description}
				</p>
				<div className="space-y-6">
					<div>
						<div className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-1">
							Email
						</div>
						<a
							href={`mailto:${CONTACT_DATA.email}`}
							className="text-xl font-medium text-brand-navy hover:text-brand-cyan transition-colors"
						>
							{CONTACT_DATA.email}
						</a>
					</div>
					<div>
						<div className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-1">
							Website
						</div>
						<a
							href={`https://${CONTACT_DATA.website}`}
							target="_blank"
							rel="noreferrer"
							className="text-xl font-medium text-brand-navy hover:text-brand-cyan transition-colors"
						>
							{CONTACT_DATA.website}
						</a>
					</div>
					<div>
						<div className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-1">
							Office
						</div>
						<address className="text-lg text-slate-600 not-italic">
							{CONTACT_DATA.address}
						</address>
					</div>
				</div>
			</div>

			<Card className="p-6 sm:p-8 shadow-xl border-slate-100 rounded-3xl relative overflow-hidden">
				{sent ? (
					<div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500 min-h-[400px]">
						<CheckCircle2 className="w-16 h-16 text-brand-cyan mb-4" />
						<h3 className="font-serif text-3xl text-brand-navy font-medium">
							Thank you.
						</h3>
						<p className="text-slate-600 max-w-sm mb-6">
							Your enquiry has reached our team. We'll be in touch shortly.
						</p>
						<Button
							onClick={handleReset}
							variant="outline"
							className="border-slate-200 text-brand-navy hover:bg-slate-50 rounded-lg"
						>
							Send another message
						</Button>
					</div>
				) : (
					<FormProvider {...methods}>
						<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
							<div className="grid sm:grid-cols-2 gap-6">
								<div className="flex flex-col gap-1">
									<label
										htmlFor="name"
										className="text-sm font-medium text-slate-700"
									>
										Name
									</label>
									<Input
										placeholder="John Doe"
										className="h-10 bg-slate-50 border-slate-200"
										{...register("name")}
									/>
									{errors.name && (
										<p className={errorClass}>{errors.name.message}</p>
									)}
								</div>
								<div className="flex flex-col gap-1">
									<label
										htmlFor="organization"
										className="text-sm font-medium text-slate-700"
									>
										Organisation
									</label>
									<Input
										placeholder="Company Ltd"
										className="h-10 bg-slate-50 border-slate-200"
										{...register("organisation")}
									/>
									{errors.organisation && (
										<p className={errorClass}>{errors.organisation.message}</p>
									)}
								</div>
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div className="flex flex-col gap-1">
									<label
										htmlFor="email"
										className="text-sm font-medium text-slate-700"
									>
										Email
									</label>
									<Input
										type="email"
										placeholder="john@example.com"
										className="h-10 bg-slate-50 border-slate-200"
										{...register("email")}
									/>
									{errors.email && (
										<p className={errorClass}>{errors.email.message}</p>
									)}
								</div>
								<div className="flex flex-col gap-1">
									<label
										htmlFor="telephone"
										className="text-sm font-medium text-slate-700"
									>
										Telephone
									</label>
									<Controller
										name="phone"
										control={control}
										render={({ field }) => (
											<PhoneInput
												international
												defaultCountry="NG"
												value={field.value}
												onChange={field.onChange}
												className="flex items-center h-10 w-full rounded-md border border-slate-200 bg-slate-50 p-0 overflow-hidden ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>input]:bg-transparent [&>input]:border-none [&>input]:outline-none [&>input]:flex-1 [&>input]:px-3 [&>input]:h-full [&>.PhoneInputCountry]:pl-3 [&>.PhoneInputCountry]:pr-2 [&>.PhoneInputCountry]:border-r [&>.PhoneInputCountry]:border-slate-200"
											/>
										)}
									/>
									{errors.phone && (
										<p className={errorClass}>{errors.phone.message}</p>
									)}
								</div>
							</div>
							<div className="flex flex-col gap-1">
								<label
									htmlFor="interest"
									className="text-sm font-medium text-slate-700"
								>
									Enquiry type
								</label>
								<Controller
									name="interest"
									control={control}
									render={({ field }) => (
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<SelectTrigger className="h-10! w-full bg-slate-50 border-slate-200">
												<SelectValue placeholder="Select an enquiry type" />
											</SelectTrigger>
											<SelectContent>
												{CONTACT_DATA.formFields[0].options?.map((opt) => (
													<SelectItem key={opt} value={opt}>
														{opt}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									)}
								/>
								{errors.interest && (
									<p className={errorClass}>{errors.interest.message}</p>
								)}
							</div>
							<div className="flex flex-col gap-1">
								<label
									htmlFor="message"
									className="text-sm font-medium text-slate-700"
								>
									Message
								</label>
								<Textarea
									placeholder="How can we partner?"
									className="min-h-[120px] bg-slate-50 border-slate-200"
									{...register("message")}
								/>
								{errors.message && (
									<p className={errorClass}>{errors.message.message}</p>
								)}
							</div>
							<Button
								type="submit"
								disabled={submitContact.isPending}
								size="lg"
								className="w-full bg-brand-navy text-white hover:bg-brand-navy-light h-12 rounded-xl"
							>
								{submitContact.isPending ? "Sending..." : "Send Message"}
							</Button>
						</form>
					</FormProvider>
				)}
			</Card>
		</div>
	);
}
