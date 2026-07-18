"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Menu, X, ArrowRight, Zap, MapPin } from "lucide-react";
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
	IMAGES,
} from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "./_sections/contact";
import Footer from "./_sections/footer";

export default function LandingPage() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 800);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<main className="flex-1 w-full bg-background text-foreground font-sans">
			{/* 1. Navigation */}
			<header
				className={cn(
					"fixed top-0 left-0 w-full z-50 transition-all duration-300",
					isScrolled
						? "bg-brand-navy/90 grayscale backdrop-blur-lg shadow-lg py-4"
						: "glass-nav py-4",
				)}
			>
				<div className="container mx-auto px-6 lg:px-12 max-w-[1400px] flex items-center justify-between">
					<Link
						href="/"
						className="relative w-[180px] h-0 -ml-3 z-10 flex items-center gap-3"
					>
						<Image
							src={IMAGES.headerLogo}
							alt="JDC Nigeria Logo"
							width={180}
							height={100}
							className="h-[100px]! hidden sm:block opacity-90"
							priority
						/>
						<Image
							src={IMAGES.logo}
							alt="JDC Nigeria Logo"
							width={60}
							height={60}
							className="block sm:hidden"
							priority
						/>
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
							render={<Link href={"#contact"} />}
						>
							Discuss a Partnership
						</Button>
					</nav>

					{/* Mobile Toggle */}
					<button
						type="button"
						className="lg:hidden text-white relative z-10"
						onClick={() => toggleMenu()}
					>
						{isOpen ? <X size={20} /> : <Menu size={20} />}
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
										onClick={() => closeMenu()}
										className="text-2xl font-serif text-white hover:text-brand-cyan"
									>
										{link.label}
									</Link>
								))}
							</nav>
							<Button
								className="mt-auto text-xl py-6 mb-4 bg-brand-cyan text-brand-navy font-semibold"
								render={<Link href="#contact" onClick={() => closeMenu()} />}
							>
								Discuss a Partnership
							</Button>
						</motion.div>
					)}
				</AnimatePresence>
			</header>

			{/* 1. Hero */}
			<section className="relative min-h-svh flex flex-col items-center pt-32 overflow-hidden bg-brand-navy">
				<div className="absolute inset-0 z-0">
					<Image
						src={IMAGES.hero}
						alt="Campus at dusk"
						fill
						className="object-cover opacity-40 mix-blend-overlay"
						priority
					/>
					<div className="absolute inset-0 bg-linear-to-r from-brand-navy via-brand-navy/40 to-brand-navy/30"></div>
					<div className="absolute inset-0 bg-linear-to-t from-brand-navy via-transparent to-transparent"></div>
				</div>

				<div className="container self-center flex-1 relative z-10 mx-auto px-8 lg:px-12 max-w-[1400px] flex flex-col justify-center h-full pb- md:pb-20">
					<div className="max-w-3xl">
						<h1 className="text-5xl sm:text-6xl lg:text-[72px] leading-[1.05] font-serif text-white mb-8 font-medium tracking-tight">
							{HERO_DATA.headlineStart}
							<span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-teal">
								{HERO_DATA.headlineHighlight}
							</span>
						</h1>
						<p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10 max-w-2xl">
							{HERO_DATA.supportingCopy}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 mb-16">
							<Button
								size="lg"
								className=""
								render={<Link href={"#contact"} />}
							>
								Discuss a Partnership
							</Button>
							{/* <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 font-semibold text-base px-8 h-14 rounded-full" asChild> */}
							<Button size="lg" variant="white" className="">
								<Link href="#services">Enquire About Capacity</Link>
							</Button>
						</div>
						{/* <p className="text-brand-amber font-serif text-lg italic opacity-90">
							{HERO_DATA.closingLine}
						</p> */}
					</div>
				</div>

				{/* Hero Stats */}
				<div className="md:absolute bottom-0 left-0 w-full bg-brand-navy-light/95 border-t border-white/10 backdrop-blur-md">
					<div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
						<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
							{HERO_DATA.stats.map((stat, i) => (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: arrayIndexKey
									key={i}
									className={cn(
										"py-6 px-4 md:px-6 flex flex-col max-md:last:border-0 border-white/5",
										i === 1 && "border-0",
									)}
								>
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
								// biome-ignore lint/suspicious/noArrayIndexKey: arrayIndexKey
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
				<div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-brand-cyan via-brand-navy to-brand-navy"></div>
				<div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-[1400px]">
					<div className="max-w-3xl mb-16">
						<Badge className="bg-brand-amber/10 text-brand-amber border-none mb-6 px-4 py-3 sm:py-4">
							Partnerships
						</Badge>
						<h2 className="text-4xl md:text-5xl font-serif mb-6">
							{PARTNERSHIPS_DATA.heading}
						</h2>
						<p className="text-xl text-white/70 leading-relaxed mb-6">
							{PARTNERSHIPS_DATA.description}
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-6 mb-16">
						{PARTNERSHIPS_DATA.cards.map((card, idx) => (
							<Card
								// biome-ignore lint/suspicious/noArrayIndexKey: arrayIndexKey
								key={idx}
								className="bg-brand-navy-light border-white/5 p-6 sm:p-8 hover:border-brand-cyan/30 transition-colors"
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

					<div className="flex flex-col md:flex-row items-center gap-4 justify-between border-t border-white/10 pt-10">
						<div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-3 mb-8 md:mb-0">
							<span className="text-white/50 text-sm uppercase tracking-widest mr-2">
								What we value:
							</span>
							<div className="flex flex-wrap flex-1 gap-x-2 sm:gap-x-4 gap-y-3">
								{PARTNERSHIPS_DATA.values.map((val) => (
									<span key={val} className="text-white/80 text-sm font-medium">
										{val}
									</span>
								))}
							</div>
						</div>

						<Button
							size="lg"
							className="w-full md:w-auto max-md:rounded-xs max-sm:h-auto max-sm:whitespace-pre-wrap max-md:px-6 max-md:py-4 h-12"
							render={<Link href="#contact" />}
						>
							Bring the capability that completes the platform{" "}
							<ArrowRight className="ml-2 w-4 h-4" />
						</Button>
					</div>
				</div>
			</section>

			{/* 4. The Campus */}
			<section id="campus" className="py-24 bg-slate-50">
				<div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
					<div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 mb-12">
						<div className="p-10 lg:p-14 lg:w-[45%] flex flex-col justify-center relative z-20 bg-white">
							<span className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
								The Campus
							</span>
							<h2 className="text-3xl lg:text-[40px] leading-tight font-serif text-brand-navy mb-6 font-semibold">
								{CAMPUS_DATA.heading}
							</h2>
							<div className="space-y-4 text-slate-600 mb-8 leading-relaxed text-[15px] sm:text-base">
								{CAMPUS_DATA.description.map((p, i) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: arrayIndexKey
									<p key={i}>{p}</p>
								))}
							</div>

							<Link
								href="#contact"
								className="inline-flex ml-1 items-center text-cyan-600  font-semibold transition-colors group text-sm w-max"
							>
								Explore the Campus
								<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
							</Link>
						</div>

						<div className="relative lg:w-[55%] min-h-[300px] lg:min-h-[450px]">
							<Image
								src={IMAGES.network}
								alt="Campus Design"
								fill
								className="object-cover"
							/>
							{/* Gradient fade on desktop */}
							<div className="absolute inset-y-0 left-[-1px] w-48 bg-linear-to-r from-white via-white/80 to-transparent hidden lg:block z-10 pointer-events-none"></div>
							{/* Gradient fade on mobile */}
							<div className="absolute inset-x-0 top-[-1px] h-32 bg-linear-to-b from-white via-white/80 to-transparent lg:hidden z-10 pointer-events-none"></div>
						</div>
					</div>

					{/* Campus Bullets Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{CAMPUS_DATA.bullets.map((bullet, i) => (
							<Card
								// biome-ignore lint/suspicious/noArrayIndexKey: arrayIndexKey
								key={i}
								className="p-5 flex items-start gap-4 border-slate-200 shadow-sm rounded-xl bg-white"
							>
								<div className="w-10 h-10 shrink-0 bg-brand-cyan/10 rounded-lg flex items-center justify-center text-brand-navy">
									<bullet.icon className="w-5 h-5" />
								</div>
								<span className="text-sm font-semibold text-slate-800 leading-snug mt-1 sm:mt-2">
									{bullet.label}
								</span>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* <section id="campus" className="bg-slate-50 pt-24">
				<div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
					<div className="max-w-4xl mx-auto text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-serif text-brand-navy mb-8">
							{CAMPUS_DATA.heading}
						</h2>
						<div className="space-y-6 text-lg text-slate-600 mb-12 leading-relaxed">
							{CAMPUS_DATA.description.map((p, i) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: arrayIndexKey
								<p key={i}>{p}</p>
							))}
						</div>
						<ul className="grid sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
							{CAMPUS_DATA.bullets.map((bullet, i) => (
								<li
									// biome-ignore lint/suspicious/noArrayIndexKey: arrayIndexKey
									key={i}
									className="flex items-start gap-4 text-slate-700 font-medium bg-white p-4 rounded-xl shadow-sm border border-slate-100"
								>
									<CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
									<span>{bullet}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="relative w-full h-[50vh] md:h-[80vh] min-h-[500px]">
					<Image
						src={IMAGES.campus}
						alt="JDC Nigeria Campus Design"
						fill
						className="object-cover"
						priority
					/>
				</div>
			</section> */}

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
					<div className="grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
						{POWER_RESILIENCE_DATA.stats.map((stat, i) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: arrayIndexKey
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
					<p className="text-brand-amber font-serif font-medium italic">
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
									// biome-ignore lint/suspicious/noArrayIndexKey: arrayIndexKey
									<div key={i} className="flex items-start gap-3">
										<div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-2 shrink-0"></div>
										<span className="text-slate-700 font-medium">{bullet}</span>
									</div>
								))}
							</div>
						</div>
						<div className="order-1 lg:order-2 sm:bg-slate-50 p-12 sm:rounded-3xl sm:border border-slate-100 relative h-[400px]">
							{/* <Network
								className="w-32 h-32 text-brand-navy/10"
								strokeWidth={0.5}
							/> */}
							{/* <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-xl"> */}
							<Image
								src={IMAGES.campus}
								alt="Campus Design"
								fill
								className="absolute max-sm:h-auto! inset-0 sm:rounded-3xl"
							/>
							{/* </div> */}
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
								// biome-ignore lint/suspicious/noArrayIndexKey: arrayIndexKey
								key={i}
								className="overflow-hidden p-8 border-none shadow-sm hover:shadow-xl transition-shadow duration-300 group bg-white"
							>
								<div className="w-14 h-14 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-6 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-navy transition-colors">
									<card.icon
										className="w-7 h-7 group-hover:text-white"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-xl font-serif text-brand-navy mb-3 font-semibold">
									{card.title}
								</h3>
								<p className="text-slate-600 text-sm leading-relaxed">
									{card.desc}
								</p>
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
				<div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-brand-teal/10 to-transparent"></div>
				<div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-[1400px]">
					<div className="grid lg:grid-cols-2 gap-20">
						<div>
							<Badge className="bg-brand-teal/20 text-brand-teal border-none mb-6 px-4 py-3 sm:py-4">
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
									// biome-ignore lint/suspicious/noArrayIndexKey: arrayIndexKey
									<li key={i} className="flex items-center gap-3">
										<MapPin className="w-5 h-5 text-brand-teal shrink-0" />
										<span className="text-white/90">{b}</span>
									</li>
								))}
							</ul>
						</div>
						<div>
							<Badge className="bg-brand-cyan/20 text-brand-cyan border-none mb-6 px-4 py-3 sm:py-4">
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
					<div className="inline-block bg-brand-navy text-white px-8 py-5 rounded-xs min-[600px]:rounded-full font-bold tracking-wide">
						{OPENING_2029_DATA.callout}
					</div>
				</div>
			</section>

			{/* 11. Contact */}
			<section id="contact" className="py-24 bg-slate-50">
				<div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
					<ContactSection />
				</div>
			</section>

			{/* 12. Footer */}
			<Footer />
		</main>
	);
}
