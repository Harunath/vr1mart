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

const USP_DATA = [
	{
		title: "Farm-to-Shelf Freshness",
		desc: "Delivered directly from trusted farmers & local suppliers.",
		icon: Leaf,
		bg: "bg-[var(--color-surface)]",
	},
	{
		title: "Guaranteed Daily Fresh Stock",
		desc: "New arrivals every morning for unmatched quality.",
		icon: Package,
		bg: "bg-[var(--color-background)]",
	},
	{
		title: "Fast Delivery in Your Locality",
		desc: "Orders delivered within hours.",
		icon: Truck,
		bg: "bg-[var(--color-background-alt)]",
	},
	{
		title: "Affordable Prices Everyday",
		desc: "Premium products at transparent pricing.",
		icon: ShoppingBag,
		bg: "bg-[var(--color-background)]",
	},
	{
		title: "Wide Range of Essentials",
		desc: "Grocery, dairy, produce, home-care & more.",
		icon: Boxes,
		bg: "bg-[var(--color-surface)]",
	},
	{
		title: "Safe & Hygienic Handling",
		desc: "Clean packaging and secure delivery.",
		icon: ShieldCheck,
		bg: "bg-[var(--color-background)]",
	},
] as const;

export default function WhyUs() {
	return (
		<section
			className="relative py-14 sm:py-16 md:py-20 text-(--color-dark)"
			style={{ backgroundImage: "var(--gradient-soft)" }}>
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Heading */}
				<motion.div
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					custom={0}
					className="mx-auto max-w-2xl text-center">
					<p className="inline-flex items-center gap-2 rounded-full bg-(--color-secondary) px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-(--color-dark) shadow-sm">
						<span className="h-1.5 w-1.5 rounded-full bg-(--color-light)" />
						Why Families Prefer VR1MART
					</p>

					<h2 className="mt-4 text-2xl font-extrabold text-(--color-dark) sm:text-3xl">
						Fresh. Fast. Family Trusted.
					</h2>

					<p className="mt-2 text-sm text-gray-700 sm:text-[0.95rem]">
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
								className={`${usp.bg} rounded-2xl border border-(--color-background-alt) p-5 shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_26px_rgba(0,0,0,0.08)]`}>
								<div className="flex items-start gap-3">
									<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--color-light) border border-(--color-background-alt) shadow-[0_4px_10px_rgba(0,0,0,0.04)]">
										<Icon className="h-5 w-5 text-(--color-accent)" />
									</div>

									<div>
										<h3 className="text-[0.95rem] font-semibold text-(--color-dark) sm:text-base">
											{usp.title}
										</h3>
										<p className="mt-1 text-xs leading-relaxed text-gray-700 sm:text-[0.8rem]">
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
