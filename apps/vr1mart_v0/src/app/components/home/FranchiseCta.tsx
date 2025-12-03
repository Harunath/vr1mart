"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Store, ShoppingBag, ArrowRight, Boxes } from "lucide-react";

export default function FranchiseMartSection() {
	return (
		<section
			className="w-full text-(--color-dark)"
			style={{ backgroundImage: "var(--gradient-soft)" }}>
			<div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
				<motion.div
					initial={{ opacity: 0, y: 22 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.45, ease: "easeOut" }}
					className="
						relative overflow-hidden rounded-3xl 
						border border-(--color-background-alt)
						bg-(--color-surface)
						shadow-[0_14px_38px_rgba(0,0,0,0.10)]
					">
					{/* background accents */}
					<div className="pointer-events-none absolute -left-16 -top-10 h-40 w-40 rounded-full bg-(--color-secondary)/35 blur-3xl" />
					<div className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-(--color-primary)/35 blur-3xl" />

					<div className="relative z-10 flex flex-col gap-8 px-5 py-7 md:flex-row md:items-stretch md:justify-between md:gap-10 md:px-8 md:py-8">
						{/* LEFT TEXT */}
						<div className="flex flex-1 flex-col gap-5 max-w-xl">
							<div>
								<p
									className="
										inline-flex items-center gap-2 rounded-full 
										bg-(--color-secondary) px-3 py-1 
										text-[0.7rem] font-semibold uppercase tracking-[0.18em]
										text-(--color-dark)
									">
									<span
										className="
											flex h-5 w-5 items-center justify-center 
											rounded-full bg-(--color-accent)
										">
										<Store className="h-3.5 w-3.5 text-(--color-light)" />
									</span>

									<span>
										VR<span className="text-red-900">1</span>MART
										&nbsp;Franchise
									</span>
								</p>

								<h2 className="mt-3 text-2xl font-extrabold md:text-[1.9rem] text-(--color-dark)">
									Start Your Own{" "}
									<span className="text-(--color-success)">
										VR<span className="text-red-900">1</span>MART
									</span>{" "}
									Store
								</h2>

								<p className="mt-2 text-sm text-gray-800 md:text-[0.95rem]">
									Become part of our fast-growing retail network — build a
									modern neighbourhood mart under the{" "}
									<span className="font-semibold text-(--color-success)">
										VR<span className="text-red-900">1</span>MART
									</span>{" "}
									brand.
								</p>
							</div>

							{/* BULLETS */}
							<div className="grid gap-3 text-sm text-(--color-dark) sm:grid-cols-2">
								{[
									{
										title: "Low investment",
										desc: "Smart store formats to get started faster.",
									},
									{
										title: "Full operational support",
										desc: "Training, SOPs and ongoing guidance.",
									},
									{
										title: "Bulk inventory supply",
										desc: "Centralised sourcing and logistics.",
									},
									{
										title: "Marketing & branding included",
										desc: "VR1MART brand, promotions and digital presence.",
									},
								].map((item, idx) => (
									<div key={idx} className="flex items-start gap-2">
										<span
											className="
												mt-1 inline-flex h-5 w-5 items-center justify-center 
												rounded-full bg-(--color-background-alt)
												text-(--color-accent) text-xs
											">
											✓
										</span>
										<div>
											<p className="font-semibold">{item.title}</p>
											<p className="text-[0.78rem] text-gray-700">
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>

							{/* BUTTON ROW */}
							<div className="mt-2 flex flex-wrap items-center gap-3">
								<motion.div
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.97 }}>
									<Link
										href="/partner"
										className="
											inline-flex items-center gap-2 rounded-full
											px-5 py-2.5 text-sm font-semibold
											text-(--color-dark)
											shadow-[0_12px_30px_rgba(0,0,0,0.15)]
											hover:brightness-105
										"
										style={{ backgroundImage: "var(--gradient-brand)" }}>
										Become a Partner
										<ArrowRight className="h-4 w-4" />
									</Link>
								</motion.div>

								<p className="text-[0.8rem] text-gray-700">
									Ideal for supermarkets, minimarts & new retail entrepreneurs.
								</p>
							</div>
						</div>

						{/* RIGHT VISUAL CARD */}
						<div className="flex flex-1 items-center justify-center">
							<div
								className="
									w-full max-w-sm rounded-2xl 
									border border-(--color-background-alt)
									bg-(--color-light)
									shadow-[0_16px_40px_rgba(0,0,0,0.12)]
									md:max-w-md
								">
								{/* store top bar */}
								<div
									className="rounded-t-2xl px-4 py-3 text-(--color-light)"
									style={{ backgroundImage: "var(--gradient-brand)" }}>
									<div className="flex items-center justify-between gap-2">
										<div className="flex items-center gap-2">
											<div
												className="
													flex h-8 w-8 items-center justify-center 
													rounded-full bg-(--color-accent)/80
												">
												<Store className="h-4 w-4 text-white" />
											</div>
											<div>
												<p className="text-[0.7rem] uppercase tracking-[0.16em] opacity-90">
													Your Mart
												</p>
												<p className="text-sm font-semibold">
													VR1MART Franchise
												</p>
											</div>
										</div>
										<span
											className="
												rounded-full bg-(--color-light)/90
												px-2 py-0.5 text-[0.6rem] font-semibold uppercase
												tracking-[0.16em] text-(--color-accent)
											">
											Franchise Ready
										</span>
									</div>
								</div>

								{/* middle shelves */}
								<div className="space-y-3 px-4 py-4">
									<div className="flex items-center justify-between text-[0.78rem] text-(--color-dark)">
										<span className="inline-flex items-center gap-1 rounded-full bg-(--color-background-alt) px-2 py-0.5">
											<ShoppingBag className="h-3.5 w-3.5 text-(--color-accent)" />
											<span>Neighbourhood format</span>
										</span>
										<span className="rounded-full bg-(--color-background-alt) px-2 py-0.5 text-[0.7rem] font-medium text-(--color-accent)">
											Local customers
										</span>
									</div>

									{/* shelves visual */}
									<div className="space-y-2 rounded-xl bg-(--color-background-soft)/70 p-3">
										<div className="flex h-3 rounded-md bg-(--color-light) shadow-inner">
											<div className="w-1/3 rounded-md bg-(--color-primary)" />
										</div>

										<div className="flex h-3 rounded-md bg-(--color-light) shadow-inner">
											<div className="w-2/5 rounded-md bg-(--color-accent)" />
										</div>

										<div className="flex h-3 rounded-md bg-(--color-light) shadow-inner">
											<div className="w-1/4 rounded-md bg-(--color-primary)" />
										</div>

										<p className="mt-2 text-[0.7rem] text-gray-700">
											Shelves, categories & planogram support from VR1MART.
										</p>
									</div>

									{/* supply block */}
									<div
										className="
											flex items-center justify-between gap-3 rounded-xl 
											px-3 py-3 text-[0.75rem]
											text-(--color-light)]
										"
										style={{ backgroundImage: "var(--gradient-brand)" }}>
										<div className="flex flex-1 items-center gap-2">
											<Boxes className="h-4 w-4" />
											<div>
												<p className="font-semibold">Bulk supply pipeline</p>
												<p className="text-[0.7rem] opacity-90">
													Better buying power & consistent stock.
												</p>
											</div>
										</div>
										<span className="rounded-full bg-(--color-accent)] px-2 py-0.5 text-[0.65rem] font-semibold">
											Backed by VR1MART
										</span>
									</div>
								</div>

								{/* footer strip */}
								<div
									className="
										border-t border-dashed border-(--color-background-alt)]
										px-4 py-2.5 text-[0.7rem] text-(--color-gray-800)]
									">
									Fill the partner form and our team will connect with you.
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
