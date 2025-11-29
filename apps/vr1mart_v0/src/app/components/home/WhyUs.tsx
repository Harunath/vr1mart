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

// Soft pastel backgrounds for each USP card
const USP_DATA = [
	{
		title: "Farm-to-Shelf Freshness",
		desc: "Delivered directly from trusted farmers & local suppliers.",
		icon: Leaf,
		bg: "bg-[#ECFDF3]",
	},
	{
		title: "Guaranteed Daily Fresh Stock",
		desc: "New arrivals every morning for unmatched quality.",
		icon: Package,
		bg: "bg-[#FEF9C3]",
	},
	{
		title: "Fast Delivery in Your Locality",
		desc: "Orders delivered within hours.",
		icon: Truck,
		bg: "bg-[#F0FDF4]",
	},
	{
		title: "Affordable Prices Everyday",
		desc: "Premium products at transparent pricing.",
		icon: ShoppingBag,
		bg: "bg-[#FEFCE8]",
	},
	{
		title: "Wide Range of Essentials",
		desc: "Grocery, dairy, produce, home-care & more.",
		icon: Boxes,
		bg: "bg-[#ECFDF5]",
	},
	{
		title: "Safe & Hygienic Handling",
		desc: "Clean packaging and secure delivery.",
		icon: ShieldCheck,
		bg: "bg-[#F0F9FF]",
	},
] as const;

export default function WhyUs() {
	return (
		<section className="relative bg-[#F9FFF9] py-14 sm:py-16">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Heading */}
				<motion.div
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					custom={0}
					className="text-center max-w-2xl mx-auto">
					<p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-700 shadow-sm">
						<span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
						Why Families Prefer VR1MART
					</p>

					<h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-emerald-900">
						Fresh. Fast. Family Trusted.
					</h2>

					<p className="mt-2 text-sm text-emerald-700/70">
						Designed for daily shopping — with quality, speed and savings.
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
								custom={0.1 + i * 0.1}
								className={`rounded-2xl p-5 shadow-md hover:shadow-lg transition-all border border-emerald-100 ${usp.bg}`}>
								<div className="flex items-start gap-3">
									<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
										<Icon className="h-5 w-5 text-emerald-700" />
									</div>

									<div>
										<h3 className="text-[0.95rem] font-semibold text-emerald-900">
											{usp.title}
										</h3>
										<p className="mt-1 text-xs text-emerald-700/80 leading-relaxed">
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
