import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FeatureItem {
	label: string;
	icon: LucideIcon;
}

interface TwoPanelFeatureCardProps {
	eyebrow: string;
	heading: string;
	description: string;
	features: FeatureItem[];
	backgroundImage: string | StaticImageData;
	gradientOverlay?: string;
	themeColor?: "teal" | "cyan";
	className?: string;
}

export function TwoPanelFeatureCard({
	eyebrow,
	heading,
	description,
	features,
	backgroundImage,
	gradientOverlay = "from-brand-navy/95 via-brand-navy/80 to-brand-navy/40",
	themeColor = "cyan",
	className,
}: TwoPanelFeatureCardProps) {
	const isTeal = themeColor === "teal";
	return (
		<div
			className={cn(
				"relative overflow-hidden flex flex-col justify-end p-8 pb-10 lg:p-12 xl:p-16 h-full min-h-[500px] lg:min-h-[600px] group",
				className,
			)}
		>
			<Image
				src={backgroundImage}
				alt={heading}
				fill
				className="object-cover transition-transform duration-1000 group-hover:scale-105"
			/>
			<div
				className={cn("absolute inset-0 bg-linear-to-tr", gradientOverlay)}
			/>

			<div className="relative z-10 flex flex-col h-full mt-auto">
				<div className="mb-auto" />

				<div className="max-w-xl">
					<Badge
						className={cn(
							"border-none font-serif mb-6 px-4 py-2 uppercase tracking-widest text-xs",
							isTeal
								? "bg-brand-teal/20 text-brand-teal"
								: "bg-brand-cyan/20 text-brand-cyan",
						)}
					>
						{eyebrow}
					</Badge>
					<h2 className="text-3xl lg:text-[40px] font-bold font-serif text-white mb-5 leading-[1.15]">
						{heading}
					</h2>
					<p className="text-white/70 text-[15px] font-serif lg:text-base mb-12 leading-relaxed max-w-md">
						{description}
					</p>
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 mt-auto">
					{features.map((feature, idx) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: arrayIndexKey
							key={idx}
							className="flex flex-col items-center text-center gap-4"
						>
							<div
								className={cn(
									"w-14 h-14 rounded-full border flex items-center justify-center text-white bg-brand-navy/20 backdrop-blur-sm transition-colors",
									isTeal
										? "border-brand-teal/30 group-hover:border-brand-teal/50"
										: "border-brand-cyan/30 group-hover:border-brand-cyan/50",
								)}
							>
								<feature.icon className="w-6 h-6" strokeWidth={1.5} />
							</div>
							<span className="text-xs uppercase tracking-widest text-white/70 font-medium leading-tight px-2">
								{feature.label}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
