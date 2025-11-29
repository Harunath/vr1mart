"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Store, ShoppingBag, ArrowRight, Boxes } from "lucide-react";

export default function FranchiseMartSection() {
	return (
		<section className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pt-14">
			<motion.div
				initial={{ opacity: 0, y: 22 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.45, ease: "easeOut" }}
				className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-[#F9FFF9] shadow-[0_14px_38px_rgba(16,185,129,0.16)]">
				{/* soft background accents */}
				<div className="pointer-events-none absolute -left-16 -top-10 h-40 w-40 rounded-full bg-emerald-200/50 blur-3xl" />
				<div className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-amber-200/60 blur-3xl" />
				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-emerald-100/40 to-transparent" />

				<div className="relative z-10 flex flex-col gap-8 px-5 py-7 md:flex-row md:items-center md:justify-between md:px-8 md:py-8">
					{/* LEFT: Text + bullets */}
					<div className="max-w-xl">
						<p className="inline-flex items-center gap-2 rounded-full bg-emerald-900 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-50 px-3 py-1">
							<span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700">
								<Store className="h-3.5 w-3.5" />
							</span>
							<span>VR1MART Franchise</span>
						</p>

						<h2 className="mt-3 text-2xl font-bold text-emerald-950 md:text-3xl">
							Start Your Own <span className="text-emerald-700">VR1MART</span>{" "}
							Store
						</h2>

						<p className="mt-1.5 text-sm text-emerald-900/80 md:text-[0.95rem]">
							Become part of our fast-growing retail network and build a modern
							neighbourhood mart under the VR1MART brand.
						</p>

						{/* Bullets */}
						<div className="mt-5 grid gap-3 text-sm text-emerald-900/90 sm:grid-cols-2">
							<div className="flex items-start gap-2">
								<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs">
									✓
								</span>
								<div>
									<p className="font-semibold">Low investment</p>
									<p className="text-[0.78rem] text-emerald-900/70">
										Smart store formats to get started faster.
									</p>
								</div>
							</div>

							<div className="flex items-start gap-2">
								<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs">
									✓
								</span>
								<div>
									<p className="font-semibold">Full operational support</p>
									<p className="text-[0.78rem] text-emerald-900/70">
										Training, SOPs and ongoing guidance.
									</p>
								</div>
							</div>

							<div className="flex items-start gap-2">
								<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs">
									✓
								</span>
								<div>
									<p className="font-semibold">Bulk inventory supply</p>
									<p className="text-[0.78rem] text-emerald-900/70">
										Centralised sourcing and logistics.
									</p>
								</div>
							</div>

							<div className="flex items-start gap-2">
								<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs">
									✓
								</span>
								<div>
									<p className="font-semibold">
										Marketing &amp; branding included
									</p>
									<p className="text-[0.78rem] text-emerald-900/70">
										VR1MART brand, promotions and digital presence.
									</p>
								</div>
							</div>
						</div>

						{/* Button row */}
						<div className="mt-5 flex flex-wrap items-center gap-3">
							<motion.div
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.97 }}>
								<Link
									href="/partner"
									className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-emerald-50 shadow-[0_12px_30px_rgba(16,185,129,0.55)] hover:bg-emerald-600">
									Become a Partner
									<ArrowRight className="h-4 w-4" />
								</Link>
							</motion.div>

							<p className="text-[0.8rem] text-emerald-900/70">
								Ideal for supermarkets, minimarts &amp; new retail
								entrepreneurs.
							</p>
						</div>
					</div>

					{/* RIGHT: “Mart look” visual card */}
					<div className="w-full max-w-xs md:max-w-sm">
						<div className="rounded-2xl bg-white shadow-[0_16px_40px_rgba(15,118,110,0.25)] border border-emerald-100">
							{/* store top (awning) */}
							<div className="rounded-t-2xl bg-linear-to-r from-emerald-600 to-emerald-500 px-4 py-3 text-emerald-50">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2">
										<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-800/70">
											<Store className="h-4 w-4" />
										</div>
										<div>
											<p className="text-[0.7rem] uppercase tracking-[0.16em] text-emerald-100/90">
												Your Mart
											</p>
											<p className="text-sm font-semibold">VR1MART Franchise</p>
										</div>
									</div>
									<span className="rounded-full bg-emerald-800/70 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em]">
										Franchise Ready
									</span>
								</div>
							</div>

							{/* middle – shelves visual */}
							<div className="space-y-3 px-4 py-4">
								<div className="flex items-center justify-between text-[0.78rem] text-emerald-900/80">
									<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5">
										<ShoppingBag className="h-3.5 w-3.5 text-emerald-700" />
										<span>Neighbourhood format</span>
									</span>
									<span className="rounded-full bg-amber-50 px-2 py-0.5 text-[0.7rem] font-medium text-amber-700">
										Local customers
									</span>
								</div>

								{/* fake shelves */}
								<div className="space-y-2 rounded-xl bg-emerald-50/60 p-3">
									<div className="flex h-3 rounded-md bg-white/90 shadow-inner">
										<div className="w-1/3 rounded-md bg-emerald-200" />
									</div>
									<div className="flex h-3 rounded-md bg-white/90 shadow-inner">
										<div className="w-2/5 rounded-md bg-emerald-300" />
									</div>
									<div className="flex h-3 rounded-md bg-white/90 shadow-inner">
										<div className="w-1/4 rounded-md bg-amber-200" />
									</div>
									<p className="mt-2 text-[0.7rem] text-emerald-900/80">
										Shelves, categories &amp; planogram support from VR1MART.
									</p>
								</div>

								{/* supply & margin hint */}
								<div className="flex items-center justify-between rounded-xl bg-emerald-900/95 px-3 py-3 text-[0.75rem] text-emerald-50">
									<div className="flex items-center gap-2">
										<Boxes className="h-4 w-4" />
										<div>
											<p className="font-semibold">Bulk supply pipeline</p>
											<p className="text-[0.7rem] text-emerald-100/85">
												Better buying power &amp; consistent stock.
											</p>
										</div>
									</div>
									<span className="rounded-full bg-emerald-700 px-2 py-0.5 text-[0.65rem] font-semibold">
										Backed by VR1MART
									</span>
								</div>
							</div>

							{/* footer strip */}
							<div className="border-t border-dashed border-emerald-100 px-4 py-2.5 text-[0.7rem] text-emerald-900/75">
								<span>
									Fill the partner form and our team will connect with you.
								</span>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
