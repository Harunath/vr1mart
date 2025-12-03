"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
	MapPin,
	Search,
	ChevronDown,
	ArrowRight,
	ShoppingBasket,
	Apple,
	Home,
	Leaf,
} from "lucide-react";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: (delay = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut", delay },
	}),
};

export default function Hero() {
	return (
		<section
			className="relative overflow-hidden text-(--color-dark)"
			style={{ backgroundImage: "var(--gradient-soft)" }}>
			{/* Soft glows */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-x-0 -top-40 h-64 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent)]" />
				<div className="absolute inset-x-0 bottom-0 h-72 bg-[linear-gradient(to_top,rgba(255,255,255,0.95),transparent)]" />
				<div className="absolute right-20 top-10 h-64 w-64 rounded-full bg-(--color-secondary)/40 blur-3xl" />
				<div className="absolute left-[-60px] bottom-0 h-64 w-64 rounded-full bg-(--color-primary)/40 blur-3xl" />
			</div>

			{/* Left veg bag */}
			<motion.div
				className="pointer-events-none absolute bottom-60 left-[-70px] hidden md:block lg:left-[-90px]"
				animate={{ y: [0, -10, 0], rotate: [18, 24, 18] }}
				transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
				<Image
					src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1764322423/afe145da-bd0e-402c-9e5f-3ac46abab66e_removalai_preview_cabzpl.png"
					alt="Fresh vegetables bag"
					width={280}
					height={280}
					className="drop-shadow-[0_24px_60px_rgba(0,0,0,0.30)]"
				/>
			</motion.div>

			{/* Right fruit bowl */}
			<motion.div
				className="pointer-events-none absolute -right-10 top-40 hidden md:block lg:-right-10"
				animate={{ y: [0, 14, 0], rotate: [-30, -36, -30] }}
				transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
				<Image
					src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1764322425/53eeb343-b049-464c-a0ca-dffceadcc4da_removalai_preview_acrlb9.png"
					alt="Fresh fruits bowl"
					width={280}
					height={280}
					className="drop-shadow-[0_24px_60px_rgba(0,0,0,0.30)]"
				/>
			</motion.div>

			<div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-28 md:pt-36 lg:pt-40">
				{/* Top pill */}
				<motion.div
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					custom={0}
					className="mb-3 flex items-center gap-2 rounded-full border border-(--color-secondary)/70 bg-(--color-light)/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-gray-700 shadow-sm">
					<span className="flex h-4 w-4 items-center justify-center rounded-full bg-(--color-secondary)/80">
						<Leaf className="h-2.5 w-2.5 text-(--color-success)" />
					</span>
					<span>Fresh • Local • Everyday</span>
				</motion.div>

				{/* Heading + subtext */}
				<motion.div
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					custom={0.08}
					className="max-w-3xl text-center">
					<h1 className="text-[2rem] font-extrabold leading-tight text-(--color-dark) sm:text-[2.5rem] lg:text-[3rem]">
						<span className="block">
							Your neighbourhood{" "}
							<span className="font-extrabold text-(--color-success)">
								VR<span className="text-red-800">1</span>MART
							</span>{" "}
							is now online.
						</span>

						<span className="mt-1 block text-[1.6rem] font-semibold text-gray-800 sm:text-[1.8rem]">
							Order groceries & daily essentials in a few taps.
						</span>
					</h1>

					<p className="mt-4 text-sm text-gray-700 sm:text-base">
						Fresh fruits, vegetables, dairy, snacks & home essentials delivered
						from{" "}
						<span className="font-semibold text-(--color-dark)">
							VR<span className="text-(--color-accent)">1</span>MART
						</span>{" "}
						— fast, fresh & vibrant for your everyday needs.
					</p>
				</motion.div>

				{/* Search + Location card */}
				<motion.div
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					custom={0.16}
					className="mt-8 w-full max-w-4xl rounded-3xl bg-(--color-light)/95 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.10) backdrop-blur">
					<div className="flex flex-col gap-3 md:flex-row">
						{/* Location */}
						<div className="flex flex-1 items-center gap-3 rounded-2xl border border-gray-200) bg-(--color-background-soft)/80 px-4 py-3 text-sm">
							<MapPin className="h-4 w-4 text-(--color-success)" />
							<input
								type="text"
								placeholder="Enter your area or pincode"
								className="w-full bg-transparent text-sm text-(--color-dark) outline-none placeholder:text-gray-500)"
							/>
							<ChevronDown className="h-4 w-4 text-gray-500)" />
						</div>

						{/* Search */}
						<div className="flex flex-[1.4] items-center gap-3 rounded-2xl border border-gray-200 bg-(--color-surface) px-4 py-3 text-sm">
							<Search className="h-4 w-4 text-(--color-accent)" />
							<input
								type="text"
								placeholder="Search products or brands"
								className="w-full bg-transparent text-sm text-(--color-dark) outline-none placeholder:text-gray-500)"
							/>
						</div>
					</div>

					{/* CTA Row */}
					<div className="mt-3 flex flex-col items-center justify-between gap-3 px-1 text-xs text-gray-600) sm:flex-row">
						<div className="flex items-center gap-2">
							<span className="h-1.5 w-1.5 rounded-full bg-(--color-success)" />
							<span>Same-day delivery in select VR1MART locations.</span>
						</div>
						<div className="flex items-center gap-2 text-[0.7rem] sm:text-[0.78rem]">
							<span className="rounded-full bg-(--color-background-alt) px-2 py-1 font-semibold text-gray-800">
								Fresh stock every morning
							</span>
							<span className="rounded-full bg-(--color-background-soft) px-2 py-1 font-semibold text-gray-900">
								Best prices in your area
							</span>
						</div>
					</div>
				</motion.div>

				{/* Primary CTA */}
				<motion.div
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					custom={0.24}
					className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
					<motion.button
						whileHover={{ scale: 1.05, translateY: -1 }}
						whileTap={{ scale: 0.96 }}
						style={{ backgroundImage: "var(--gradient-brand)" }}
						className="inline-flex items-center gap-2 rounded-full px-7 py-2.5 text-xs font-semibold text-(--color-dark) shadow-[0_14px_30px_rgba(0,0,0,0.18)">
						Start shopping now
						<ArrowRight className="h-4 w-4" />
					</motion.button>

					<button className="inline-flex items-center gap-2 text-[0.78rem] font-semibold text-gray-700">
						Browse categories
						<span className="flex h-6 w-6 items-center justify-center rounded-full bg-(--color-secondary)/80">
							<ShoppingBasket className="h-3.5 w-3.5 text-(--color-dark)" />
						</span>
					</button>
				</motion.div>

				{/* Category cards */}
				<motion.div
					initial={{ opacity: 0, y: 26 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.32, duration: 0.45 }}
					className="mt-10 grid w-full gap-5 sm:grid-cols-2 md:grid-cols-3">
					{/* CARD 1 */}
					<div className="rounded-2xl border border-gray-200 bg-(--color-light) p-5 text-(--color-dark) shadow-[0_10px_28px_rgba(0,0,0,0.06)]">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-sm font-extrabold tracking-tight text-(--color-dark)">
									DAILY GROCERY
								</h3>
								<p className="text-[0.7rem] text-gray-600">
									Rice · Oils · Masalas
								</p>
							</div>
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-primary)">
								<ShoppingBasket className="h-4 w-4 text-(--color-light)" />
							</div>
						</div>
						<span className="mt-4 inline-block rounded-full bg-(--color-background-alt) px-3 py-1 text-[0.68rem] font-semibold text-(--color-dark)">
							Save up to 40% daily
						</span>
						<div className="mt-4 flex items-center justify-between">
							<p className="text-[0.7rem] font-medium text-(--color-success)">
								Kitchen staples always in stock.
							</p>
							<div className="relative h-16 w-16 overflow-hidden rounded-xl bg-(--color-secondary)/40">
								<Image
									src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1764325967/bright-playful-scene-opened-blue-600nw-2642043075_wminmt.jpg"
									fill
									alt="Grocery"
									className="object-cover"
								/>
							</div>
						</div>
					</div>

					{/* CARD 2 */}
					<div className="rounded-2xl border border-gray-200 bg-(--color-light) p-5 text-(--color-dark) shadow-[0_10px_28px_rgba(0,0,0,0.06)]">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-sm font-extrabold tracking-tight text-(--color-dark)">
									FRESH PRODUCE
								</h3>
								<p className="text-[0.7rem] text-gray-600">
									Fruits · Vegetables
								</p>
							</div>
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-primary)">
								<Apple className="h-4 w-4 text-(--color-light)" />
							</div>
						</div>
						<span className="mt-4 inline-block rounded-full bg-(--color-background-alt) px-3 py-1 text-[0.68rem] font-semibold text-(--color-dark)">
							Farm-fresh arrivals
						</span>
						<div className="mt-4 flex items-center justify-between">
							<p className="text-[0.7rem] font-medium text-(--color-success)">
								Morning stock, handpicked for you.
							</p>
							<div className="relative h-16 w-16 overflow-hidden rounded-xl bg-(--color-secondary)/40">
								<Image
									src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1764322205/basket-fruits-vegetables-with-transparent-background_623289-149_qlmsja.jpg"
									fill
									alt="Produce"
									className="object-cover"
								/>
							</div>
						</div>
					</div>

					{/* CARD 3 */}
					<div className="rounded-2xl border border-gray-200 bg-(--color-light) p-5 text-(--color-dark) shadow-[0_10px_28px_rgba(0,0,0,0.06)]">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-sm font-extrabold tracking-tight text-(--color-dark)">
									HOME & CARE
								</h3>
								<p className="text-[0.7rem] text-gray-600">
									Cleaning · Personal care
								</p>
							</div>
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-primary)">
								<Home className="h-4 w-4 text-(--color-light)" />
							</div>
						</div>
						<span className="mt-4 inline-block rounded-full bg-(--color-background-alt) px-3 py-1 text-[0.68rem] font-semibold text-(--color-dark)">
							Essentials, everyday
						</span>
						<div className="mt-4 flex items-center justify-between">
							<p className="text-[0.7rem] font-medium text-(--color-success)">
								Household must-haves, always ready.
							</p>
							<div className="relative h-16 w-16 overflow-hidden rounded-xl bg-(--color-secondary)/40">
								<Image
									src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1764325999/Multimedia_Images_AR2023_Skin_Personal_Care_zgsisa.jpg"
									fill
									alt="Homecare"
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
