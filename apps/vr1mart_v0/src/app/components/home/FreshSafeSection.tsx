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
		<section className="w-full bg-[#FFFCF2]">
			<div className="mx-auto max-w-6xl px-4 pb-14 pt-10 md:px-6 md:pt-12">
				{/* Heading */}
				<div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="inline-flex items-center gap-1 rounded-full bg-[#F9C80E] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-black">
							<span className="h-1.5 w-1.5 rounded-full bg-[#F9C80B]" />
							<span className="font-semibold text-[#309740]">
								VR<span className="text-amber-900">1</span>MART
							</span>{" "}
							PROMISE
						</p>
						<h2 className="mt-2 text-[1.3rem] font-extrabold text-black md:text-[1.6rem]">
							Fresh. Fast. Safe. Every Order.
						</h2>
						<p className="mt-1 max-w-xl text-sm text-gray-700 md:text-black md:text-[0.95rem]">
							Designed like your neighbourhood mart, powered by modern
							convenience.
						</p>
					</div>

					<div className="mt-2 flex items-center gap-2 rounded-full bg-[#FFF4CC] px-3 py-1 text-[0.7rem] font-medium text-[#FF6A00] md:mt-0">
						<Tag className="h-3.5 w-3.5 text-[#FF6A00]" />
						<span>Trusted by local families</span>
					</div>
				</div>

				{/* Cards wrapper */}
				<div
					className="
  mt-6 rounded-3xl border border-[#F9C80B]/40 bg-[#FFFDF5]
  bg-[radial-gradient(circle_at_top,rgba(249,200,11,0.16),transparent_55%)]
  p-4 md:p-5
">
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
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
										group flex flex-col justify-between rounded-2xl border border-[#F9C80B]/35
										bg-white/95 px-4 py-4 shadow-[0_10px_26px_rgba(249,200,11,0.18)]
										transition-shadow
										hover:shadow-[0_14px_34px_rgba(249,200,11,0.26)]
									">
									{/* Top row: icon + pill */}
									<div className="flex items-start justify-between gap-2">
										<div className="flex items-center gap-3">
											<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF4CC] text-[#FF6A00] group-hover:bg-[#FFEFC8]">
												<Icon className="h-5 w-5" />
											</div>
											<div className="flex flex-col">
												<span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#FF6A00]/90">
													{item.label}
												</span>
												<h3 className="text-[0.95rem] font-semibold text-black">
													{item.title}
												</h3>
											</div>
										</div>

										{/* small “mart-feel” tag */}
										<span className="mt-1 rounded-full bg-[#FFF4CC] px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#FF6A00]">
											Mart care
										</span>
									</div>

									<p className="mt-3 text-[0.8rem] leading-relaxed text-black">
										{item.desc}
									</p>

									{/* Bottom strip */}
									<div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-[#F9C80B]/45 pt-2 text-[0.7rem] text-black">
										<span className="font-medium">
											Made for{" "}
											<span className="font-semibold text-[#309740]">
												VR<span className="text-amber-900">1</span>MART
											</span>{" "}
										</span>
										<span className="rounded-full bg-[#FFF4CC] px-2 py-0.5 text-[0.65rem] font-semibold text-[#FF6A00]">
											Every order
										</span>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
