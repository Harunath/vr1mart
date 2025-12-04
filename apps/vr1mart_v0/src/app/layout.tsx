import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VrMartNavbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "VR1MART – Fresh Groceries, Daily Essentials & Home Delivery",
	description:
		"VR1MART is your trusted one-stop shop for fresh groceries, pulses, spices, fruits, vegetables, dairy and daily essentials. Enjoy fast home delivery and store pick-up options.",
	keywords: [
		"VR1MART",
		"online grocery store",
		"fresh groceries",
		"daily essentials",
		"home delivery",
		"pulses",
		"spices",
		"fruits",
		"vegetables",
		"supermarket",
	],
	openGraph: {
		title: "VR1MART – Fresh Groceries Delivered to Your Doorstep",
		description:
			"Buy fresh groceries, staples, pulses, spices, fruits, vegetables & more from VR1MART. Fast delivery & affordable prices.",
		url: "https://vr1mart.com",
		siteName: "VR1MART",
		type: "website",
		images: [
			{
				url: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1764740121/vr1mart-logo-final_mfwrro.png",
				width: 1200,
				height: 630,
				alt: "VR1MART Groceries Banner",
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<VrMartNavbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
