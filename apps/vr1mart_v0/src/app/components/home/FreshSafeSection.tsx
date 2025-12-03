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
		<section
			className="w-full text-(--color-dark)"
			style={{ backgroundImage: "var(--gradient-soft)" }}>
			<div className="mx-auto max-w-6xl px-4 pb-14 pt-10 md:px-6 md:pt-12">
				{/* Heading */}
				<div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
					<div>
						<p
							className="inline-flex items-center gap-1 rounded-full px-3 py-1 
							bg-(--color-secondary) text-[0.7rem] font-semibold uppercase 
							tracking-[0.18em] text-(--color-dark) shadow-sm">
							<span className="h-1.5 w-1.5 rounded-full bg-(--color-primary)" />
							<span className="font-semibold text-(--color-success)">
								VR<span className="text-red-900">1</span>MART
							</span>{" "}
							PROMISE
						</p>

						<h2 className="mt-2 text-[1.3rem] font-extrabold text-(--color-dark) md:text-[1.6rem]">
							Fresh. Fast. Safe. Every Order.
						</h2>

						<p className="mt-1 max-w-xl text-sm text-gray-700 md:text-[0.95rem]">
							Designed like your neighbourhood mart, powered by modern
							convenience.
						</p>
					</div>

					<div
						className="mt-2 flex items-center gap-2 rounded-full 
						bg-(--color-background-alt) px-3 py-1 text-[0.7rem] 
						font-medium text-(--color-accent) md:mt-0">
						<Tag className="h-3.5 w-3.5 text-(--color-accent)" />
						<span>Trusted by local families</span>
					</div>
				</div>

				{/* Cards wrapper */}
				<div
					className="
						mt-6
						p-4 md:p-5
					">
					<div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
						{FEATURES.map((item, idx) => {
							const Icon = item.icon;

							return (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, y: 18 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.45, delay: idx * 0.06 }}
									whileHover={{ y: -4, scale: 1.01 }}
									className="
										group flex flex-col justify-between rounded-2xl 
										border border-(--color-background)
										bg-(--color-light) px-4 py-4
										shadow-[0_10px_26px_rgba(0,0,0,0.08)]
										transition-all hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)]
									">
									{/* Top Row */}
									<div className="flex items-start justify-between gap-2">
										<div className="flex items-center gap-3">
											<div
												className="flex h-10 w-10 items-center justify-center 
												rounded-xl bg-(--color-background-alt)
												text-(--color-accent) group-hover:bg-(--color-secondary)/80">
												<Icon className="h-5 w-5" />
											</div>

											<div className="flex flex-col">
												<span
													className="text-[0.7rem] font-semibold uppercase 
													tracking-[0.18em] text-(--color-accent)/90">
													{item.label}
												</span>
												<h3 className="text-[0.95rem] font-semibold text-(--color-dark)">
													{item.title}
												</h3>
											</div>
										</div>

										<span
											className="mt-1 rounded-full bg-(--color-background-alt) 
											px-2 py-0.5 text-[0.6rem] font-semibold uppercase 
											tracking-[0.16em] text-(--color-accent)]">
											Mart care
										</span>
									</div>

									<p className="mt-3 text-[0.8rem] leading-relaxed text-gray-800">
										{item.desc}
									</p>

									{/* Bottom Row */}
									<div
										className="mt-3 flex flex-wrap items-center justify-between gap-2 
										border-t border-dashed border-(--color-background-alt)
										pt-2 text-[0.7rem] text-gray-800">
										<span className="font-medium">
											Made for{" "}
											<span className="font-semibold text-(--color-success)">
												VR<span className="text-(--color-accent)">1</span>
												MART
											</span>
										</span>
										<span
											className="rounded-full bg-(--color-background-alt)] 
											px-2 py-0.5 text-[0.65rem] font-semibold text-(--color-accent)]">
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
