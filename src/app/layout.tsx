import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-serif" }); // Using outfit as display font

export const metadata: Metadata = {
	title: "JDC Nigeria Data Centres | 55 MW Digital Infrastructure Platform",
	description:
		"JDC Nigeria Data Centres is developing a 55 MW, Tier III-targeted, carrier-neutral data-centre campus in Southern Nigeria, opening in 2029.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${inter.variable} ${outfit.variable} antialiased bg-white`}>
				{children}
			</body>
		</html>
	);
}
