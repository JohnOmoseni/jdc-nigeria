import {
	Server,
	Zap,
	Network,
	Shield,
	Cpu,
	Cloud,
	Link,
	RefreshCcw,
	Handshake,
	Lock,
	MapPin,
	Leaf,
} from "lucide-react";
import { IMAGES } from "./images";

export const NAV_LINKS = [
	{ label: "Campus", href: "#campus" },
	{ label: "Infrastructure", href: "#infrastructure" },
	{ label: "Services", href: "#services" },
	{ label: "Partnerships", href: "#partnerships" },
	// { label: "Why Southern Nigeria", href: "#location" },
	{ label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
	eyebrow: "SOUTHERN NIGERIA • OPENING 2029",
	headlineStart: "Built for Scale. Designed for AI. ",
	headlineHighlight: "Powered by Partnership.",
	supportingCopy:
		"JDC Nigeria Data Centres is developing a 55 MW, Tier III-targeted digital-infrastructure campus in Southern Nigeria. The platform is being developed to bring together specialist operating, technology, connectivity and commercial partners serving cloud, enterprise, carrier and high-density computing requirements.",
	closingLine: "Designed for Nigeria. Built for the world.",
	stats: [
		{ value: "55 MW", label: "Facility Load" },
		{ value: "Dedicated", label: "Modular N+1 On-Site Generation" },
		{ value: "Designed", label: "For Continuous Mission-Critical Operation" },
	],
};

export const POWER_TO_PACKET_DATA = {
	heading: "One platform. Every critical layer.",
	description:
		"JDC brings the energy, facility, connectivity, operations and commercial disciplines of a modern data centre into one coordinated development programme. Wellsmart Energy Limited is developing the dedicated energy and resilience platform. Specialist partners will be engaged to lead data-centre design, certification, connectivity, operations and customer development.",
	sequence: [
		{ label: "Power", icon: Zap },
		{ label: "Facility", icon: Server },
		{ label: "Connectivity", icon: Network },
		{ label: "Operations", icon: Shield },
		{ label: "Customer Experience", icon: Handshake },
	],
};

export const PARTNERSHIPS_DATA = {
	heading: "A platform designed for the right partners.",
	description:
		"JDC is engaging specialist operating, technical, connectivity and commercial partners capable of contributing measurable long-term value to the platform. Any long-term participation will be structured around defined delivery, operating and commercial contributions.",
	cards: [
		{
			title: "Operating and certification partners",
			desc: "Lead operator design standards, commissioning, Tier certification pathways, operating systems, staffing and long-term facility management.",
		},
		{
			title: "Technology and delivery partners",
			desc: "Bring data-centre engineering, cooling, electrical systems, controls, security, construction management and integrated commissioning capability.",
		},
		{
			title: "Connectivity and ecosystem partners",
			desc: "Provide diverse fibre routes, carrier-neutral interconnection, cloud and content access, internet exchange connectivity and customer reach.",
		},
		{
			title: "Commercial and customer partners",
			desc: "Support anchor capacity, customer origination, enterprise access, market development and long-term contracted business.",
		},
	],
	values: [
		"Delivery capability",
		"Operating excellence",
		"Customer access",
		"Technology",
		"Long-term commitment",
	],
};

export const CAMPUS_DATA = {
	heading: "55 MW of facility scale. Modular from the ground up.",
	description: [
		"JDC is being developed as one fully coordinated campus platform, planned around the full 55 MW facility requirement. Common energy, connectivity, security, roads, drainage and facility infrastructure will support the wider programme, while data halls and white space are activated in commercially sensible modules aligned with customer commitments.",
		"Final saleable IT capacity will be established through operator-led design, reflecting cooling architecture, rack density, resilience and the requirements of cloud, enterprise and high-density workloads.",
	],
	bullets: [
		{ label: "Modular data halls and private suites", icon: Server },
		{ label: "High-density and AI/HPC-ready design pathways", icon: Cpu },
		{ label: "Scalable electrical and cooling distribution", icon: Zap },
		{ label: "Integrated fire, security and monitoring systems", icon: Shield },
		{
			label: "Customer activation aligned with contracted demand",
			icon: Handshake,
		},
	],
};

export const POWER_RESILIENCE_DATA = {
	heading: "Dedicated power. Designed for continuity.",
	description:
		"The campus is being developed around a dedicated modular on-site generation and resilience platform led by Wellsmart Energy Limited. Final generation capacity, equipment configuration and mission-critical resilience architecture will be established through operator-led design, detailed engineering and site-rated OEM guarantees.",
	stats: [
		{ value: "55 MW", label: "Facility Load" },
		{ value: "Dedicated", label: "Modular N+1 On-Site Generation" },
		{ value: "Designed", label: "For Continuous Mission-Critical Operation" },
	],
	footer: "Powered by Wellsmart Energy Limited.",
};

export const CONNECTIVITY_DATA = {
	heading: "Carrier-neutral by design.",
	description:
		"JDC is being designed for two physically diverse fibre entrances, carrier-neutral meet-me rooms, multiple-carrier access, cloud and content interconnection, and flexible cross-connect services. Final routes and service commitments will be contracted as part of the development programme.",
	bullets: [
		"Physically diverse fibre-route design",
		"Carrier-neutral meet-me rooms",
		"Cloud, content and internet-exchange access",
		"Managed cross-connect and interconnection services",
		"Regional access from Southern Nigeria",
	],
};

export const SERVICES_DATA = {
	heading: "Capacity for the workloads shaping the next decade.",
	description:
		"JDC will support customers from single enterprise deployments to dedicated halls and high-density environments. Commercial structures will be developed around long-term capacity and service agreements for qualifying customers.",
	cards: [
		{
			title: "Wholesale Colocation",
			desc: "Scalable capacity for cloud, content, carrier and large enterprise customers requiring contiguous space and dependable infrastructure.",
			icon: Server,
		},
		{
			title: "Enterprise Private Suites",
			desc: "Secure, dedicated environments for regulated institutions, industrial companies, government and critical business systems.",
			icon: Lock,
		},
		{
			title: "Hyperscale and Cloud",
			desc: "Modular campus capacity designed to support cloud platforms, content providers and large-scale digital services.",
			icon: Cloud,
		},
		{
			title: "AI and High-Performance Computing",
			desc: "Power and cooling pathways designed for high-density deployments, subject to final operator-led engineering.",
			icon: Cpu,
		},
		{
			title: "Disaster Recovery and Business Continuity",
			desc: "Location-diverse infrastructure for organisations strengthening resilience beyond their primary operating environments.",
			icon: RefreshCcw,
		},
		{
			title: "Managed Connectivity and Cross-Connects",
			desc: "Carrier access, interconnection, cloud on-ramps, cross-connects and related operational support.",
			icon: Link,
		},
	],
};

export const LOCATION_DATA = {
	heading: "Digital growth needs infrastructure beyond one market.",
	description:
		"Southern Nigeria brings together major population centres, financial institutions, industrial clusters, public-sector workloads and regional businesses that require resilient local infrastructure and meaningful location diversity.",
	features: [
		{ label: "Growing Demand Base", icon: Server },
		{ label: "Location Diversity", icon: MapPin },
		{ label: "Business Continuity", icon: Shield },
		{ label: "Regional Growth", icon: Network },
	],
};

export const SUSTAINABILITY_DATA = {
	heading: "Efficiency through infrastructure discipline.",
	description:
		"JDC's sustainability approach begins with disciplined design: efficient cooling pathways, modular activation, lifecycle-conscious engineering and capacity fitted out against real demand.",
	features: [
		{ label: "Efficient Cooling", icon: Zap },
		{ label: "Modular Activation", icon: Server },
		{ label: "Lifecycle Design", icon: Leaf },
		{ label: "Demand-Fitted", icon: Cpu },
	],
};

export const OPENING_2029_DATA = {
	heading: "Development underway. Built for long-term operation.",
	description:
		"JDC is advancing its site, energy, design, partner and connectivity workstreams towards an opening in 2029. The programme is being structured for modular customer activation within a fully coordinated campus platform.",
	callout: "OPENING 2029 • PARTNERSHIP AND EARLY CAPACITY DISCUSSIONS ARE OPEN",
};

export const CONTACT_DATA = {
	heading: "Build with us.",
	description:
		"We are engaging operating, technology, connectivity, commercial and strategic partners with the capability to help deliver and scale the platform. We are also opening early conversations with organisations evaluating future capacity in Southern Nigeria.",
	formFields: [
		{
			name: "interest",
			label: "Enquiry type",
			type: "select",
			options: [
				"Operating Partnership",
				"Technology or EPC",
				"Connectivity",
				"Commercial or Customer",
				"Strategic Partnership",
				"Capacity Enquiry",
				"General",
			],
		},
		{ name: "message", label: "Message", type: "textarea" },
	],
	email: "info@jdcnigeria.com",
	website: "www.jdcnigeria.com",
	address:
		"27B Prince Adelowo Adedeji, Off Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
};

export const FOOTER_DATA = {
	brand: "JDC Nigeria Data Centres — A public brand of JDC (Nigeria) SPV",
	tagline:
		"55 MW digital-infrastructure platform in Southern Nigeria • Opening 2029",
	poweredBy: "Powered by Wellsmart Energy Limited",
	address:
		"27B Prince Adelowo Adedeji, Off Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
	email: "info@jdcnigeria.com",
	website: "www.jdcnigeria.com",
	copyright: "© 2026 JDC (Nigeria) SPV. All rights reserved.",
};
