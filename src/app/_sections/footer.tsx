import { FOOTER_DATA, IMAGES } from "@/constants";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-brand-navy text-white/60 py-8 md:pt-12  border-t border-white/5">
			<div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1400px]">
				<div className="grid md:grid-cols-2 gap-8 mb-12">
					<div className="flex flex-col gap-3">
						<div className="shrink-0 md:-mt-7">
							<Image
								src={IMAGES.footerLogo}
								alt="JDC Nigeria Logo"
								width={180}
								height={100}
								className=" w-auto object-contain opacity-90"
							/>
						</div>
						<h4 className="text-white font-serif text-xl mb-2">
							{FOOTER_DATA.brand}
						</h4>
						<p className="mb-4">{FOOTER_DATA.tagline}</p>
					</div>

					<div className="md:text-right">
						<address className="not-italic mb-4 text-sm">
							{FOOTER_DATA.address}
						</address>
						<div className="max-[360px]:space-x-1.5 space-x-2 sm:space-x-4 flex flex-wrap md:justify-end">
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

				<div className="text-center text-sm border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
					<p>{FOOTER_DATA.copyright}</p>
					<p className="text-brand-cyan font-serif font-semibold uppercase tracking-wider text-xs">
						{FOOTER_DATA.poweredBy}
					</p>
				</div>
			</div>
		</footer>
	);
}
