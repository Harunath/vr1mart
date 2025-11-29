"use client";

import { motion } from "framer-motion";
import { Carrot, Truck, ShieldCheck, Tag } from "lucide-react";

const FEATURES = [
	{
		icon: Carrot,
		label: "Freshness",
		title: "Freshness Guarantee",
		desc: "If something isn’t fresh, we replace it. No questions asked.",
	},
	{
		icon: Truck,
		label: "Fast & Local",
		title: "Fast & Local Delivery",
		desc: "Delivered from your nearest VR1MART store in your locality.",
	},
	{
		icon: ShieldCheck,
		label: "Quality First",
		title: "Quality Checked Products",
		desc: "Every item is screened for quality before dispatch.",
	},
];

export default function VrMartPromise() {
	return (
		<section className="mx-auto max-w-6xl px-4 pb-14 pt-10 md:pt-12">
			{/* Heading */}
			<div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
				<div>
					<p className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-700">
						<span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
						<span>VR1MART PROMISE</span>
					</p>
					<h2 className="mt-2 text-xl font-bold text-slate-900 md:text-2xl">
						Fresh. Fast. Safe. Every Order.
					</h2>
					<p className="mt-1 text-sm text-slate-600">
						Designed like your neighbourhood mart, powered by modern
						convenience.
					</p>
				</div>

				<div className="mt-2 flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-[0.7rem] font-medium text-amber-700 md:mt-0">
					<Tag className="h-3.5 w-3.5" />
					<span>Trusted by local families</span>
				</div>
			</div>

			{/* Cards */}
			<div
				className=" mt-6 rounded-3xl border border-emerald-100 bg-[#F9FFF9]
bg-[linear-gradient(to_bottom,transparent_0,transparent_22px,rgba(209_250_229/0.5)_23px,transparent_24px)]
    bg-size-[100%_26px]
    p-4 md:p-5
">
				<div className="grid gap-4 md:grid-cols-3">
					{FEATURES.map((item, idx) => {
						const Icon = item.icon;

						return (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 18 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.4, delay: idx * 0.06 }}
								whileHover={{ y: -4, scale: 1.01 }}
								className="
									group flex flex-col justify-between rounded-2xl border border-emerald-100/70 
									bg-white/95 px-4 py-4 shadow-[0_8px_22px_rgba(16,185,129,0.08)]
								">
								{/* Top row: icon + pill */}
								<div className="flex items-start justify-between gap-2">
									<div className="flex items-center gap-3">
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100">
											<Icon className="h-5 w-5" />
										</div>
										<div className="flex flex-col">
											<span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-600/90">
												{item.label}
											</span>
											<h3 className="text-[0.95rem] font-semibold text-slate-900">
												{item.title}
											</h3>
										</div>
									</div>

									{/* small “mart-feel” tag */}
									<span className="mt-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-emerald-700">
										Mart care
									</span>
								</div>

								<p className="mt-3 text-[0.8rem] leading-relaxed text-slate-600">
									{item.desc}
								</p>

								{/* Bottom strip like a tiny price band */}
								<div className="mt-3 flex items-center justify-between border-t border-dashed border-emerald-100 pt-2 text-[0.7rem] text-emerald-700/90">
									<span className="font-medium">
										Made for{" "}
										<span className="font-semibold text-emerald-700">
											VR1MART shoppers
										</span>
									</span>
									<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[0.65rem] font-semibold text-emerald-700">
										Every order
									</span>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
