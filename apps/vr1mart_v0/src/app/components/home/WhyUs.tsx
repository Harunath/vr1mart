"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
	Truck,
	Package,
	Leaf,
	ShoppingBag,
	Boxes,
	ShieldCheck,
} from "lucide-react";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: (delay = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: "easeOut", delay },
	}),
};

// VR1MART Yellow Palette – USP cards
const USP_DATA = [
	{
		title: "Farm-to-Shelf Freshness",
		desc: "Delivered directly from trusted farmers & local suppliers.",
		icon: Leaf,
		bg: "bg-[#FFF9E8]", // soft cream yellow
	},
	{
		title: "Guaranteed Daily Fresh Stock",
		desc: "New arrivals every morning for unmatched quality.",
		icon: Package,
		bg: "bg-[#FFEFC8]", // slightly deeper yellow
	},
	{
		title: "Fast Delivery in Your Locality",
		desc: "Orders delivered within hours.",
		icon: Truck,
		bg: "bg-[#FFF4D0]", // hero-matching base
	},
	{
		title: "Affordable Prices Everyday",
		desc: "Premium products at transparent pricing.",
		icon: ShoppingBag,
		bg: "bg-[#FFE1EA]", // subtle rose accent
	},
	{
		title: "Wide Range of Essentials",
		desc: "Grocery, dairy, produce, home-care & more.",
		icon: Boxes,
		bg: "bg-[#FFF9E8]",
	},
	{
		title: "Safe & Hygienic Handling",
		desc: "Clean packaging and secure delivery.",
		icon: ShieldCheck,
		bg: "bg-[#F6E6CF]",
	},
] as const;

export default function WhyUs() {
	return (
		<section className="relative bg-[#FFF4D0] py-14 sm:py-16 md:py-20">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Heading */}
				<motion.div
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					custom={0}
					className="mx-auto max-w-2xl text-center">
					<p className="inline-flex items-center gap-2 rounded-full bg-[#F9C80E] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#7A3B00] shadow-sm shadow-[#F5A623]/40">
						<span className="h-1.5 w-1.5 rounded-full bg-white/80" />
						Why Families Prefer VR1MART
					</p>

					<h2 className="mt-4 text-2xl font-extrabold text-[#2F2F2F] sm:text-3xl">
						Fresh. Fast. Family Trusted.
					</h2>

					<p className="mt-2 text-sm text-[#5F4A2A] sm:text-[0.95rem]">
						Built for your everyday needs — from morning milk to midnight
						essentials, with quality, speed and savings.
					</p>
				</motion.div>

				{/* USP Grid */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{USP_DATA.map((usp, i) => {
						const Icon = usp.icon;
						return (
							<motion.div
								key={usp.title}
								variants={fadeUp}
								custom={0.1 + i * 0.07}
								className={`${usp.bg} rounded-2xl border border-[#F9C80E]/35 p-5 shadow-sm shadow-amber-100/70 transition-all hover:-translate-y-1 hover:shadow-md`}>
								<div className="flex items-start gap-3">
									<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm shadow-amber-100/80">
										<Icon className="h-5 w-5 text-[#A05A2C]" />
									</div>

									<div>
										<h3 className="text-[0.95rem] font-semibold text-[#2F2F2F] sm:text-base">
											{usp.title}
										</h3>
										<p className="mt-1 text-xs leading-relaxed text-[#5F4A2A] sm:text-[0.8rem]">
											{usp.desc}
										</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
