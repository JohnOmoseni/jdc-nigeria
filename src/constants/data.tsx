import { Server, Zap, Network, Shield, Cpu, Cloud, Link, RefreshCcw, Handshake } from "lucide-react";
import { IMAGES } from "./images";

export const NAV_LINKS = [
	{ label: "Campus", href: "#campus" },
	{ label: "Infrastructure", href: "#infrastructure" },
	{ label: "Services", href: "#services" },
	{ label: "Partnerships", href: "#partnerships" },
	{ label: "Why Southern Nigeria", href: "#location" },
	{ label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
	eyebrow: "SOUTHERN NIGERIA • OPENING 2029",
	headlineStart: "Built for Scale. Designed for AI. ",
	headlineHighlight: "Powered by Partnership.",
	supportingCopy: "JDC Nigeria Data Centres is developing a 55 MW, Tier III-targeted digital-infrastructure campus in Southern Nigeria. The platform is being built with specialist operating, technology, connectivity and commercial partners to serve cloud, enterprise, carrier and high-density computing requirements.",
	closingLine: "Designed for Nigeria. Built for the world.",
	stats: [
		{ value: "55 MW", label: "Facility Load" },
		{ value: "60 MW", label: "Installed Generation" },
		{ value: "Tier III", label: "Targeted Design" },
		{ value: "2029", label: "Opening" },
	],
};

export const POWER_TO_PACKET_DATA = {
	heading: "One platform. Every critical layer.",
	description: "JDC brings the energy, building, connectivity, operations and commercial disciplines of a modern data centre into one coordinated development programme. Wellsmart Energy Limited provides the dedicated power and resilience platform. Selected specialist partners will lead data-centre design, certification, connectivity, operations and customer development.",
	sequence: [
		{ label: "Power", icon: Zap },
		{ label: "Facility", icon: Server },
		{ label: "Connectivity", icon: Network },
		{ label: "Operations", icon: Shield },
		{ label: "Customer Experience", icon: Handshake },
	]
};

export const PARTNERSHIPS_DATA = {
	heading: "A platform designed for the right partners.",
	description: "JDC is assembling the specialist capability required to design, deliver, operate and commercialise a major data-centre platform in Southern Nigeria. Participation is reserved for partners that bring measurable long-term value.",
	callout: "Up to 25% of JDC (Nigeria) SPV Ltd is reserved collectively for selected specialist operating, technical, connectivity and commercial partners. Participation will reflect measurable contribution — not name recognition alone.",
	cards: [
		{
			title: "Operating and certification partners",
			desc: "Lead operator design standards, commissioning, Tier certification pathways, operating systems, staffing and long-term facility management."
		},
		{
			title: "Technology and delivery partners",
			desc: "Bring data-centre engineering, cooling, electrical systems, controls, security, construction management and integrated commissioning capability."
		},
		{
			title: "Connectivity and ecosystem partners",
			desc: "Provide diverse fibre routes, carrier-neutral interconnection, cloud and content access, internet exchange connectivity and customer reach."
		},
		{
			title: "Commercial and customer partners",
			desc: "Support anchor capacity, customer origination, enterprise access, market development and long-term contracted business."
		}
	],
	values: ["Delivery capability", "Operating excellence", "Customer access", "Technology", "Long-term commitment"]
};

export const CAMPUS_DATA = {
	heading: "55 MW of facility scale. Modular from the ground up.",
	description: [
		"JDC is being developed as one fully coordinated campus platform. The common power, connectivity, security, roads, drainage and facility infrastructure will be designed for the full programme, while data halls and white space are activated in commercially sensible modules aligned with customer commitments.",
		"Final saleable IT capacity will be established through operator-led design, reflecting cooling architecture, rack density, resilience and the requirements of cloud, enterprise and high-density workloads."
	],
	bullets: [
		"Modular data halls and private suites",
		"High-density and AI/HPC-ready design pathways",
		"Scalable electrical and cooling distribution",
		"Integrated fire, security and monitoring systems",
		"Customer activation aligned with contracted demand"
	]
};

export const POWER_RESILIENCE_DATA = {
	heading: "Dedicated power. Designed for continuity.",
	description: "The development is designed around 60 MW of installed generation delivered by Wellsmart Energy Limited. A modular N+1 architecture, integrated ride-through systems, black-start capability and emergency resilience will be engineered around the operating requirements of the data-centre campus.",
	stats: [
		{ value: "60 MW", label: "Installed Generation" },
		{ value: "12", label: "Modular Units" },
		{ value: "N+1", label: "Design Basis" },
		{ value: "55 MW", label: "Facility Requirement" }
	],
	footer: "Powered by Wellsmart Energy Limited."
};

export const CONNECTIVITY_DATA = {
	heading: "Carrier-neutral by design.",
	description: "JDC is being designed for two physically diverse fibre entrances, carrier-neutral meet-me rooms, multiple operator access, cloud and content interconnection, and flexible cross-connect services. Final routes and service commitments will be contracted as part of the development programme.",
	bullets: [
		"Physically diverse fibre-route design",
		"Carrier-neutral meet-me rooms",
		"Cloud, content and internet-exchange access",
		"Managed cross-connect and interconnection services",
		"Regional access from Southern Nigeria"
	]
};

export const SERVICES_DATA = {
	heading: "Capacity for the workloads shaping the next decade.",
	description: "JDC will support customers from single enterprise deployments to dedicated halls and high-density environments. Commercial structures will be developed around long-term, USD-denominated capacity and service agreements for qualifying customers.",
	cards: [
		{
			title: "Wholesale Colocation",
			desc: "Scalable capacity for cloud, content, carrier and large enterprise customers requiring contiguous space and dependable infrastructure.",
			image: IMAGES.services.colocation
		},
		{
			title: "Enterprise Private Suites",
			desc: "Secure, dedicated environments for regulated institutions, industrial companies, government and critical business systems.",
			image: IMAGES.services.enterprise
		},
		{
			title: "Hyperscale and Cloud",
			desc: "Modular campus capacity designed to support cloud platforms, content providers and large-scale digital services.",
			image: IMAGES.services.hyperscale
		},
		{
			title: "AI and High-Performance Computing",
			desc: "Power and cooling pathways designed for high-density deployments, subject to final operator-led engineering.",
			image: IMAGES.services.hpc
		},
		{
			title: "Disaster Recovery and Business Continuity",
			desc: "Location-diverse infrastructure for organisations strengthening resilience beyond their primary operating environments.",
			image: IMAGES.services.dr
		},
		{
			title: "Managed Connectivity and Cross-Connects",
			desc: "Carrier access, interconnection, cloud on-ramps, cross-connects and related operational support.",
			image: IMAGES.services.connectivity
		}
	]
};

export const LOCATION_DATA = {
	heading: "Digital growth needs infrastructure beyond one market.",
	description: "Southern Nigeria brings together major population centres, financial institutions, industrial clusters, public-sector workloads and regional businesses that require resilient local infrastructure and meaningful location diversity.",
	bullets: [
		"A growing enterprise and industrial demand base",
		"Location diversification beyond Lagos",
		"Onshore data, resilience and business-continuity requirements",
		"A platform for regional cloud, content and connectivity growth"
	]
};

export const SUSTAINABILITY_DATA = {
	heading: "Efficiency through infrastructure discipline.",
	description: "JDC's sustainability approach begins with design: dedicated power, efficient cooling pathways, modular activation, lifecycle-conscious engineering and reduced dependence on inefficient emergency generation. Capacity will be fitted out against real demand rather than activated wastefully ahead of customers."
};

export const OPENING_2029_DATA = {
	heading: "Development underway. Built for long-term operation.",
	description: "JDC is advancing its site, power, design, partner, connectivity and financing workstreams towards an opening in 2029. The programme is being structured for phased customer activation within a fully coordinated campus platform.",
	callout: "Opening 2029 — Partnership and early capacity discussions are now open."
};

export const CONTACT_DATA = {
	heading: "Build with us.",
	description: "We are engaging operating, technology, connectivity, commercial and strategic partners with the capability to help deliver and scale the platform. We are also opening early conversations with organisations evaluating future capacity in Southern Nigeria.",
	formFields: [
		{ name: "interest", label: "Enquiry type", type: "select", options: [
			"Operating Partnership",
			"Technology or EPC",
			"Connectivity",
			"Commercial or Customer",
			"Financing or Investment",
			"Capacity Enquiry",
			"General"
		]},
		{ name: "message", label: "Message", type: "textarea" }
	],
	email: "info@jdcnigeria.net",
	website: "www.jdcnigeria.net",
	address: "27B Prince Adelowo Adedeji, Off Admiralty Way, Lekki Phase 1, Lagos, Nigeria"
};

export const FOOTER_DATA = {
	brand: "JDC Nigeria Data Centres — A public brand of JDC (Nigeria) SPV Ltd",
	tagline: "55 MW digital-infrastructure platform in Southern Nigeria • Opening 2029",
	poweredBy: "Powered by Wellsmart Energy Limited",
	address: "27B Prince Adelowo Adedeji, Off Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
	email: "info@jdcnigeria.net",
	website: "www.jdcnigeria.net",
	copyright: "© 2026 JDC (Nigeria) SPV Ltd. All rights reserved."
};
