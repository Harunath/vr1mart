"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Store, ShoppingBag, ArrowRight, Boxes } from "lucide-react";

export default function FranchiseMartSection() {
	return (
		<section className="w-full bg-[#FFFCF2]">
			<div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
				<motion.div
					initial={{ opacity: 0, y: 22 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.45, ease: "easeOut" }}
					className="relative overflow-hidden rounded-3xl border border-[#F9C80B]/45 bg-[#FFFDF5] shadow-[0_14px_38px_rgba(249,200,11,0.16)]">
					{/* soft background accents */}
					<div className="pointer-events-none absolute -left-16 -top-10 h-40 w-40 rounded-full bg-[#F9C80B]/30 blur-3xl" />
					<div className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-[#FF6A00]/28 blur-3xl" />
					<div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#F9C80B]/28 to-transparent" />

					<div className="relative z-10 flex flex-col gap-8 px-5 py-7 md:flex-row md:items-stretch md:justify-between md:gap-10 md:px-8 md:py-8">
						{/* LEFT: Text + bullets */}
						<div className="flex flex-1 flex-col justify-between gap-5 max-w-xl">
							<div>
								<p className="inline-flex items-center gap-2 rounded-full bg-[#F9C80B] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#2A1800]">
									<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6A00]">
										<Store className="h-3.5 w-3.5 text-white" />
									</span>
									<span>
										VR<span className="text-white">1</span>MART Franchise
									</span>
								</p>

								<h2 className="mt-3 text-2xl font-extrabold text-[#2A1800] md:text-[1.9rem]">
									Start Your Own{" "}
									<span className="text-[#309740]">
										VR<span className="text-[#FF6A00]">1</span>MART
									</span>{" "}
									Store
								</h2>

								<p className="mt-2 text-sm text-[#5F3B00] md:text-[0.95rem]">
									Become part of our fast-growing retail network and build a
									modern neighbourhood mart under the{" "}
									<span className="font-semibold text-[#309740]">
										VR<span className="text-[#FF6A00]">1</span>MART
									</span>{" "}
									brand.
								</p>
							</div>

							{/* Bullets */}
							<div className="grid gap-3 text-sm text-[#2A1800] sm:grid-cols-2">
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
										<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF4CC] text-[#FF6A00] text-xs">
											✓
										</span>
										<div>
											<p className="font-semibold">{item.title}</p>
											<p className="text-[0.78rem] text-[#5F3B00]">
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>

							{/* Button row */}
							<div className="mt-2 flex flex-wrap items-center gap-3">
								<motion.div
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.97 }}>
									<Link
										href="/partner"
										className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#F9C80B] to-[#FF6A00] px-5 py-2.5 text-sm font-semibold text-[#1F1300] shadow-[0_12px_30px_rgba(249,200,11,0.45)] hover:brightness-105">
										Become a Partner
										<ArrowRight className="h-4 w-4" />
									</Link>
								</motion.div>

								<p className="text-[0.8rem] text-[#5F3B00]">
									Ideal for supermarkets, minimarts & new retail entrepreneurs.
								</p>
							</div>
						</div>

						{/* RIGHT: “Mart look” visual card */}
						<div className="flex flex-1 items-center justify-center">
							<div className="w-full max-w-sm rounded-2xl border border-[#F9C80B]/45 bg-white shadow-[0_16px_40px_rgba(255,106,0,0.22)] md:max-w-md">
								{/* store top (awning) */}
								<div className="rounded-t-2xl bg-linear-to-r from-[#FF6A00] via-[#F9C80B] to-[#FFFF41] px-4 py-3 text-white">
									<div className="flex items-center justify-between gap-2">
										<div className="flex items-center gap-2">
											<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6A00]/80">
												<Store className="h-4 w-4" />
											</div>
											<div>
												<p className="text-[0.7rem] uppercase tracking-[0.16em] text-white/90">
													Your Mart
												</p>
												<p className="text-sm font-semibold">
													VR1MART Franchise
												</p>
											</div>
										</div>
										<span className="rounded-full bg-white/90 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#C05A00]">
											Franchise Ready
										</span>
									</div>
								</div>

								{/* middle – shelves visual */}
								<div className="space-y-3 px-4 py-4">
									<div className="flex items-center justify-between text-[0.78rem] text-[#5F3B00]">
										<span className="inline-flex items-center gap-1 rounded-full bg-[#FFF4CC] px-2 py-0.5">
											<ShoppingBag className="h-3.5 w-3.5 text-[#FF6A00]" />
											<span>Neighbourhood format</span>
										</span>
										<span className="rounded-full bg-[#FFF4CC] px-2 py-0.5 text-[0.7rem] font-medium text-[#FF6A00]">
											Local customers
										</span>
									</div>

									{/* fake shelves */}
									<div className="space-y-2 rounded-xl bg-[#FFF4CC]/70 p-3">
										<div className="flex h-3 rounded-md bg-white/90 shadow-inner">
											<div className="w-1/3 rounded-md bg-[#F9C80B]" />
										</div>
										<div className="flex h-3 rounded-md bg-white/90 shadow-inner">
											<div className="w-2/5 rounded-md bg-[#FF6A00]" />
										</div>
										<div className="flex h-3 rounded-md bg-white/90 shadow-inner">
											<div className="w-1/4 rounded-md bg-[#F9C80B]" />
										</div>
										<p className="mt-2 text-[0.7rem] text-[#5F3B00]">
											Shelves, categories & planogram support from VR1MART.
										</p>
									</div>

									{/* supply & margin hint */}
									<div className="flex items-center justify-between gap-3 rounded-xl bg-[#F9C80B] px-3 py-3 text-[0.75rem] text-white">
										<div className="flex flex-1 items-center gap-2">
											<Boxes className="h-4 w-4" />
											<div>
												<p className="font-semibold">Bulk supply pipeline</p>
												<p className="text-[0.7rem] text-white/90">
													Better buying power & consistent stock.
												</p>
											</div>
										</div>
										<span className="rounded-full bg-[#FF6A00] px-2 py-0.5 text-[0.65rem] font-semibold">
											Backed by VR1MART
										</span>
									</div>
								</div>

								{/* footer strip */}
								<div className="border-t border-dashed border-[#F9C80B]/55 px-4 py-2.5 text-[0.7rem] text-[#5F3B00]">
									<span>
										Fill the partner form and our team will connect with you.
									</span>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
