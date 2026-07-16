"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Menu,
	X,
	ArrowRight,
	CheckCircle2,
	Factory,
	Shield,
	Cpu,
	Cloud,
	Link as LinkIcon,
	Zap,
	Server,
	Network,
	Handshake,
	MapPin,
} from "lucide-react";

import {
	NAV_LINKS,
	HERO_DATA,
	POWER_TO_PACKET_DATA,
	PARTNERSHIPS_DATA,
	CAMPUS_DATA,
	POWER_RESILIENCE_DATA,
	CONNECTIVITY_DATA,
	SERVICES_DATA,
	LOCATION_DATA,
	SUSTAINABILITY_DATA,
	OPENING_2029_DATA,
	CONTACT_DATA,
	FOOTER_DATA,
	IMAGES,
} from "@/constants";

export default function LandingPage() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<main className="flex-1 w-full bg-background text-foreground font-sans">
			{/* 1. Navigation */}
			<header
				className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-brand-navy shadow-lg py-4 border-b border-white/5" : "bg-transparent py-6"}`}
			>
				<div className="container mx-auto px-6 lg:px-12 max-w-[1400px] flex items-center justify-between">
					<Link href="/" className="relative z-10 flex items-center gap-3">
						<Image
							src={IMAGES.placeholderLogo}
							alt="JDC Nigeria Logo"
							width={40}
							height={40}
							className="w-10 h-10 object-contain"
						/>
						<span className="text-white font-serif font-semibold text-lg tracking-wide hidden sm:block">
							JDC Nigeria
						</span>
					</Link>

					{/* Desktop Nav */}
					<nav className="hidden lg:flex items-center gap-8">
						{NAV_LINKS.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className="text-sm font-medium text-white/80 hover:text-brand-cyan transition-colors tracking-wide"
							>
								{link.label}
							</Link>
						))}
						<Button
							className="bg-brand-cyan text-brand-navy hover:bg-brand-cyan/90 font-semibold"
							// asChild
						>
							<Link href="#contact">Discuss a Partnership</Link>
						</Button>
					</nav>

					{/* Mobile Toggle */}
					<button
						className="lg:hidden text-white relative z-10"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							className="absolute top-0 left-0 w-full h-screen bg-brand-navy pt-24 px-6 pb-16 flex flex-col"
						>
							<nav className="flex flex-col gap-6 mt-4">
								{NAV_LINKS.map((link) => (
									<Link
										key={link.label}
										href={link.href}
										onClick={() => setIsOpen(false)}
										className="text-2xl font-serif text-white hover:text-brand-cyan"
									>
										{link.label}
									</Link>
								))}
							</nav>
							<Button
								className="mt-auto text-xl py-6 bg-brand-cyan text-brand-navy font-semibold"
								// asChild
							>
								<Link href="#contact" onClick={() => setIsOpen(false)}>
									Discuss a Partnership
								</Link>
							</Button>
						</motion.div>
					)}
				</AnimatePresence>
			</header>

			{/* 1. Hero */}
			<section className="relative min-h-[90vh] flex items-center pt-32 overflow-hidden bg-brand-navy">
				<div className="absolute inset-0 z-0">
					<Image
						src={IMAGES.hero}
						alt="Campus at dusk"
						fill
						className="object-cover opacity-40 mix-blend-overlay"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/30"></div>
					<div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
				</div>

				<div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-[1400px] flex flex-col justify-center h-full pb-20">
					<div className="max-w-3xl">
						<Badge className="bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20 hover:bg-brand-cyan/20 px-4 py-1.5 mb-8 text-xs font-bold tracking-widest uppercase rounded-full">
							{HERO_DATA.eyebrow}
						</Badge>
						<h1 className="text-5xl sm:text-6xl lg:text-[72px] leading-[1.05] font-serif text-white mb-8 font-medium tracking-tight">
							{HERO_DATA.headlineStart}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-teal">
								{HERO_DATA.headlineHighlight}
							</span>
						</h1>
						<p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10 max-w-2xl">
							{HERO_DATA.supportingCopy}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 mb-16">
							{/* <Button size="lg" className="bg-brand-cyan text-brand-navy hover:bg-brand-teal transition-colors font-semibold text-base px-8 h-14 rounded-full" asChild> */}
							<Button
								size="lg"
								className="bg-brand-cyan text-brand-navy hover:bg-brand-teal transition-colors font-semibold text-base px-8 h-14 rounded-full"
							>
								<Link href="#contact">Discuss a Partnership</Link>
							</Button>
							{/* <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 font-semibold text-base px-8 h-14 rounded-full" asChild> */}
							<Button
								size="lg"
								variant="outline"
								className="border-white/20 text-white hover:bg-white/5 font-semibold text-base px-8 h-14 rounded-full"
							>
								<Link href="#services">Enquire About Capacity</Link>
							</Button>
						</div>
						<p className="text-brand-amber font-serif text-lg italic opacity-90">
							{HERO_DATA.closingLine}
						</p>
					</div>
				</div>

				{/* Hero Stats */}
				<div className="absolute bottom-0 left-0 w-full bg-brand-navy-light/95 border-t border-white/10 backdrop-blur-md">
					<div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
						<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
							{HERO_DATA.stats.map((stat, i) => (
								<div key={i} className="py-6 px-4 md:px-6 flex flex-col">
									<span className="font-serif text-2xl md:text-3xl text-brand-cyan mb-1 font-medium">
										{stat.value}
									</span>
									<span className="text-xs uppercase tracking-widest text-white/50 font-semibold">
										{stat.label}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* 2. From Power to Packet */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-6 lg:px-12 max-w-[1200px] text-center">
					<h2 className="text-4xl font-serif text-brand-navy mb-8">
						{POWER_TO_PACKET_DATA.heading}
					</h2>
					<p className="text-lg text-slate-600 max-w-4xl mx-auto mb-16 leading-relaxed">
						{POWER_TO_PACKET_DATA.description}
					</p>

					<div className="flex flex-col md:flex-row items-center justify-between relative max-w-5xl mx-auto">
						<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
						{POWER_TO_PACKET_DATA.sequence.map((item, idx) => (
							<div
								key={idx}
								className="relative z-10 flex flex-col items-center gap-4 group mb-8 md:mb-0 bg-white px-2"
							>
								<div className="w-16 h-16 rounded-2xl bg-brand-navy-light flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-navy transition-all duration-300 shadow-md">
									<item.icon className="w-8 h-8" strokeWidth={1.5} />
								</div>
								<span className="font-medium text-brand-navy text-sm uppercase tracking-wider">
									{item.label}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 3. Build With JDC (Partnerships) */}
			<section
				id="partnerships"
				className="py-28 bg-brand-navy text-white relative overflow-hidden"
			>
				<div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-cyan via-brand-navy to-brand-navy"></div>
				<div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-[1400px]">
					<div className="max-w-3xl mb-16">
						<Badge className="bg-brand-amber/10 text-brand-amber border-none mb-6 px-4 py-1">
							Partnerships
						</Badge>
						<h2 className="text-4xl md:text-5xl font-serif mb-6">
							{PARTNERSHIPS_DATA.heading}
						</h2>
						<p className="text-xl text-white/70 leading-relaxed mb-6">
							{PARTNERSHIPS_DATA.description}
						</p>
						<div className="p-6 border border-brand-cyan/20 bg-brand-cyan/5 rounded-xl">
							<p className="text-brand-cyan font-medium leading-relaxed">
								{PARTNERSHIPS_DATA.callout}
							</p>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-6 mb-16">
						{PARTNERSHIPS_DATA.cards.map((card, idx) => (
							<Card
								key={idx}
								className="bg-brand-navy-light border-white/5 p-8 hover:border-brand-cyan/30 transition-colors"
							>
								<h3 className="text-2xl font-serif text-white mb-4 flex items-center gap-3">
									<span className="text-brand-cyan font-mono text-sm opacity-50">
										0{idx + 1}
									</span>
									{card.title}
								</h3>
								<p className="text-white/60 leading-relaxed">{card.desc}</p>
							</Card>
						))}
					</div>

					<div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-10">
						<div className="flex flex-wrap gap-4 mb-8 md:mb-0">
							<span className="text-white/50 text-sm uppercase tracking-widest mr-2">
								What we value:
							</span>
							{PARTNERSHIPS_DATA.values.map((val) => (
								<span key={val} className="text-white/80 text-sm font-medium">
									{val}
								</span>
							))}
						</div>
						{/* <Button size="lg" className="bg-brand-cyan text-brand-navy hover:bg-brand-teal w-full md:w-auto px-8 rounded-full" asChild> */}
						<Button
							size="lg"
							className="bg-brand-cyan text-brand-navy hover:bg-brand-teal w-full md:w-auto px-8 rounded-full"
						>
							<Link href="#contact">
								Bring the capability that completes the platform{" "}
								<ArrowRight className="ml-2 w-4 h-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* 4. The Campus */}
			<section id="campus" className="py-24 bg-slate-50">
				<div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-xl">
							<Image
								src={IMAGES.campus}
								alt="Campus Design"
								fill
								className="object-cover"
							/>
						</div>
						<div>
							<h2 className="text-4xl lg:text-5xl font-serif text-brand-navy mb-8">
								{CAMPUS_DATA.heading}
							</h2>
							<div className="space-y-6 text-lg text-slate-600 mb-10 leading-relaxed">
								{CAMPUS_DATA.description.map((p, i) => (
									<p key={i}>{p}</p>
								))}
							</div>
							<ul className="space-y-4">
								{CAMPUS_DATA.bullets.map((bullet, i) => (
									<li
										key={i}
										className="flex items-start gap-4 text-slate-700 font-medium"
									>
										<CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
										<span>{bullet}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* 5. Power & Resilience */}
			<section id="infrastructure" className="py-24 bg-brand-navy text-white">
				<div className="container mx-auto px-6 lg:px-12 max-w-[1200px] text-center">
					<Zap
						className="w-12 h-12 text-brand-cyan mx-auto mb-8"
						strokeWidth={1}
					/>
					<h2 className="text-4xl lg:text-5xl font-serif mb-8">
						{POWER_RESILIENCE_DATA.heading}
					</h2>
					<p className="text-xl text-white/70 max-w-3xl mx-auto mb-16 leading-relaxed">
						{POWER_RESILIENCE_DATA.description}
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
						{POWER_RESILIENCE_DATA.stats.map((stat, i) => (
							<div
								key={i}
								className="p-6 border border-white/10 rounded-2xl bg-brand-navy-light/50 backdrop-blur-sm"
							>
								<div className="text-3xl lg:text-4xl font-serif text-brand-teal mb-2">
									{stat.value}
								</div>
								<div className="text-xs uppercase tracking-widest text-white/60 font-semibold">
									{stat.label}
								</div>
							</div>
						))}
					</div>
					<p className="text-brand-amber font-medium italic">
						{POWER_RESILIENCE_DATA.footer}
					</p>
				</div>
			</section>

			{/* 6. Connectivity */}
			<section className="py-24 bg-white border-b border-slate-100">
				<div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="order-2 lg:order-1">
							<h2 className="text-4xl lg:text-5xl font-serif text-brand-navy mb-8">
								{CONNECTIVITY_DATA.heading}
							</h2>
							<p className="text-lg text-slate-600 mb-10 leading-relaxed">
								{CONNECTIVITY_DATA.description}
							</p>
							<div className="grid sm:grid-cols-2 gap-6">
								{CONNECTIVITY_DATA.bullets.map((bullet, i) => (
									<div key={i} className="flex items-start gap-3">
										<div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-2 shrink-0"></div>
										<span className="text-slate-700 font-medium">{bullet}</span>
									</div>
								))}
							</div>
						</div>
						<div className="order-1 lg:order-2 bg-slate-50 p-12 rounded-3xl border border-slate-100 flex items-center justify-center min-h-[400px]">
							<Network
								className="w-32 h-32 text-brand-navy/10"
								strokeWidth={0.5}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* 7. Services */}
			<section id="services" className="py-24 bg-slate-50">
				<div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-4xl lg:text-5xl font-serif text-brand-navy mb-6">
							{SERVICES_DATA.heading}
						</h2>
						<p className="text-lg text-slate-600 leading-relaxed">
							{SERVICES_DATA.description}
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{SERVICES_DATA.cards.map((card, i) => (
							<Card
								key={i}
								className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-shadow duration-300 group"
							>
								<div className="relative h-48 overflow-hidden">
									<Image
										src={card.image}
										alt={card.title}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply group-hover:bg-brand-navy/40 transition-colors"></div>
								</div>
								<div className="p-8 bg-white">
									<h3 className="text-xl font-serif text-brand-navy mb-3 font-semibold">
										{card.title}
									</h3>
									<p className="text-slate-600 text-sm leading-relaxed">
										{card.desc}
									</p>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* 8. Why Southern Nigeria & 9. Sustainability */}
			<section
				id="location"
				className="py-24 bg-brand-navy text-white relative overflow-hidden"
			>
				<div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-teal/10 to-transparent"></div>
				<div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-[1400px]">
					<div className="grid lg:grid-cols-2 gap-20">
						<div>
							<Badge className="bg-brand-teal/20 text-brand-teal border-none mb-6 px-4 py-1">
								Location Strategy
							</Badge>
							<h2 className="text-4xl font-serif mb-6">
								{LOCATION_DATA.heading}
							</h2>
							<p className="text-lg text-white/70 mb-10 leading-relaxed">
								{LOCATION_DATA.description}
							</p>
							<ul className="space-y-4">
								{LOCATION_DATA.bullets.map((b, i) => (
									<li key={i} className="flex items-center gap-3">
										<MapPin className="w-5 h-5 text-brand-teal" />
										<span className="text-white/90">{b}</span>
									</li>
								))}
							</ul>
						</div>
						<div>
							<Badge className="bg-brand-cyan/20 text-brand-cyan border-none mb-6 px-4 py-1">
								Sustainability
							</Badge>
							<h2 className="text-4xl font-serif mb-6">
								{SUSTAINABILITY_DATA.heading}
							</h2>
							<p className="text-lg text-white/70 leading-relaxed">
								{SUSTAINABILITY_DATA.description}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* 10. Opening 2029 */}
			<section className="py-32 bg-brand-cyan text-brand-navy text-center">
				<div className="container mx-auto px-6 max-w-4xl">
					<h2 className="text-4xl lg:text-5xl font-serif mb-8 font-medium">
						{OPENING_2029_DATA.heading}
					</h2>
					<p className="text-xl font-medium opacity-80 mb-12">
						{OPENING_2029_DATA.description}
					</p>
					<div className="inline-block bg-brand-navy text-white px-8 py-4 rounded-full font-bold tracking-wide">
						{OPENING_2029_DATA.callout}
					</div>
				</div>
			</section>

			{/* 11. Contact */}
			<section id="contact" className="py-24 bg-slate-50">
				<div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
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

						<Card className="p-8 shadow-xl border-slate-100 rounded-3xl">
							<form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
								<div className="grid sm:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label className="text-sm font-medium text-slate-700">
											Name
										</label>
										<Input
											placeholder="John Doe"
											className="bg-slate-50 border-slate-200"
										/>
									</div>
									<div className="space-y-2">
										<label className="text-sm font-medium text-slate-700">
											Organisation
										</label>
										<Input
											placeholder="Company Ltd"
											className="bg-slate-50 border-slate-200"
										/>
									</div>
								</div>
								<div className="grid sm:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label className="text-sm font-medium text-slate-700">
											Email
										</label>
										<Input
											type="email"
											placeholder="john@example.com"
											className="bg-slate-50 border-slate-200"
										/>
									</div>
									<div className="space-y-2">
										<label className="text-sm font-medium text-slate-700">
											Telephone
										</label>
										<Input
											type="tel"
											placeholder="+234..."
											className="bg-slate-50 border-slate-200"
										/>
									</div>
								</div>
								<div className="space-y-2">
									<label className="text-sm font-medium text-slate-700">
										Enquiry type
									</label>
									<Select>
										<SelectTrigger className="bg-slate-50 border-slate-200">
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
								</div>
								<div className="space-y-2">
									<label className="text-sm font-medium text-slate-700">
										Message
									</label>
									<Textarea
										placeholder="How can we partner?"
										className="min-h-[120px] bg-slate-50 border-slate-200"
									/>
								</div>
								<Button
									size="lg"
									className="w-full bg-brand-navy text-white hover:bg-brand-navy-light h-14 rounded-xl text-lg"
								>
									Send Message
								</Button>
							</form>
						</Card>
					</div>
				</div>
			</section>

			{/* 12. Footer */}
			<footer className="bg-brand-navy text-white/60 py-12 border-t border-white/5">
				<div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
					<div className="grid md:grid-cols-2 gap-8 mb-12">
						<div>
							<h4 className="text-white font-serif text-xl mb-2">
								{FOOTER_DATA.brand}
							</h4>
							<p className="mb-4">{FOOTER_DATA.tagline}</p>
							<p className="text-brand-cyan text-sm font-semibold uppercase tracking-wider">
								{FOOTER_DATA.poweredBy}
							</p>
						</div>
						<div className="md:text-right">
							<address className="not-italic mb-4 text-sm">
								{FOOTER_DATA.address}
							</address>
							<div className="space-x-4">
								<a
									href={`mailto:${FOOTER_DATA.email}`}
									className="hover:text-white transition-colors"
								>
									{FOOTER_DATA.email}
								</a>
								<span>|</span>
								<a
									href={`https://${FOOTER_DATA.website}`}
									className="hover:text-white transition-colors"
								>
									{FOOTER_DATA.website}
								</a>
							</div>
						</div>
					</div>
					<div className="text-center text-sm border-t border-white/10 pt-8">
						{FOOTER_DATA.copyright}
					</div>
				</div>
			</footer>
		</main>
	);
}
