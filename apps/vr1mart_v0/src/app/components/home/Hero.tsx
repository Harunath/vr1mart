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
		<section className="relative overflow-hidden bg-linear-to-br from-[#6EE7B7] via-[#22C55E] to-[#047857] text-white">
			{/* Soft glows / pattern */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-24 left-6 h-56 w-56 rounded-full bg-white/12 blur-3xl" />
				<div className="absolute bottom-[-70px] right-6 h-64 w-64 rounded-full bg-emerald-900/40 blur-3xl" />
				<div className="absolute inset-x-0 bottom-[-120px] h-56 bg-linear-to-t from-emerald-950/40 to-transparent" />
			</div>

			{/* LEFT EDGE IMAGE (floating) */}
			<motion.div
				className="pointer-events-none absolute left-[-90px] bottom-32 hidden md:block lg:left-[-110px]"
				animate={{ y: [0, -10, 0], rotate: [25, 30, 25] }}
				transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
				<Image
					src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1764322423/afe145da-bd0e-402c-9e5f-3ac46abab66e_removalai_preview_cabzpl.png"
					alt="Fresh vegetables bag"
					width={360}
					height={360}
					className="drop-shadow-[0_24px_55px_rgba(0,0,0,0.45)]"
				/>
			</motion.div>

			{/* RIGHT EDGE IMAGE (floating) */}
			<motion.div
				className="pointer-events-none absolute right-[-90px] bottom-64 hidden md:block lg:right-[-110px]"
				animate={{ y: [0, 12, 0], rotate: [-35, -40, -35] }}
				transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
				<Image
					src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1764322425/53eeb343-b049-464c-a0ca-dffceadcc4da_removalai_preview_acrlb9.png"
					alt="Fresh fruits bowl"
					width={360}
					height={360}
					className="drop-shadow-[0_24px_55px_rgba(0,0,0,0.45)]"
				/>
			</motion.div>

			{/* MAIN CONTENT */}
			<div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-28 md:pt-32">
				{/* HEADING */}
				<motion.div
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					custom={0}
					className="max-w-3xl text-center">
					<p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-900 shadow-sm shadow-emerald-900/40">
						<span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
						Your Neighbourhood Premium Mart
					</p>

					<h1 className="mt-4 text-[1.9rem] font-extrabold leading-tight sm:text-[2.2rem] lg:text-[2.6rem]">
						Order groceries &amp; daily essentials.
						<br />
						<span className="bg-linear-to-r from-amber-100 to-yellow-300 bg-clip-text text-transparent">
							Your trusted neighbourhood mart, online.
						</span>
					</h1>

					<p className="mt-3 text-sm text-emerald-50/95 sm:text-base">
						Fresh fruits, vegetables, dairy, snacks and home essentials
						delivered from <span className="font-semibold">VR1MART</span> — fast
						&amp; safe.
					</p>
				</motion.div>

				{/* SEARCH + LOCATION */}
				<motion.div
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					custom={0.15}
					className="mt-8 flex w-full max-w-4xl flex-col gap-3 md:flex-row">
					{/* Location */}
					<motion.div
						whileHover={{ scale: 1.01, y: -2 }}
						className="flex flex-1 items-center gap-3 rounded-full bg-white px-4 py-3 text-sm text-slate-800 shadow-xl shadow-emerald-900/35">
						<MapPin className="h-4 w-4 text-[#16a34a]" />
						<input
							type="text"
							placeholder="Enter your area, street or pincode"
							className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
						/>
						<ChevronDown className="h-4 w-4 text-slate-500" />
					</motion.div>

					{/* Search */}
					<motion.div
						whileHover={{ scale: 1.01, y: -2 }}
						className="flex flex-[1.4] items-center gap-3 rounded-full bg-white px-4 py-3 text-sm text-slate-800 shadow-xl shadow-emerald-900/35">
						<Search className="h-4 w-4 text-[#15803d]" />
						<input
							type="text"
							placeholder="Search for products, brands or categories"
							className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
						/>
					</motion.div>
				</motion.div>

				{/* CTA */}
				<motion.button
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					custom={0.25}
					whileHover={{ scale: 1.05, y: -1 }}
					whileTap={{ scale: 0.97 }}
					className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-950/90 px-6 py-2.5 text-xs font-semibold text-emerald-50 shadow-lg shadow-emerald-900/60">
					<span className="relative flex items-center gap-2">
						<span className="absolute inset-0 rounded-full bg-emerald-400/20 blur-md" />
						<span className="relative flex items-center gap-2">
							Start shopping now
							<ArrowRight className="h-4 w-4" />
						</span>
					</span>
				</motion.button>

				{/* CATEGORY CARDS */}
				<motion.div
					initial={{ opacity: 0, y: 26 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.35, duration: 0.45 }}
					className="mt-10 grid w-full gap-6 md:grid-cols-3">
					{/* CARD 1 */}
					<div className="rounded-2xl bg-white p-6 text-slate-900 shadow-xl shadow-orange-900/20">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-lg font-extrabold">DAILY GROCERY</h3>
								<p className="text-xs tracking-widest text-slate-500">
									RICE · OILS · MASALAS
								</p>
							</div>
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
								<ShoppingBasket className="h-4 w-4 text-emerald-700" />
							</div>
						</div>
						<span className="mt-4 inline-block rounded-full bg-[#FFF7ED] px-3 py-1 text-[0.7rem] font-semibold text-[#F97316]">
							SAVE UP TO 40%
						</span>
						<div className="mt-5 flex items-center justify-between">
							<p className="text-xs text-slate-600">Kitchen staples daily.</p>
							<div className="relative h-16 w-16 overflow-hidden rounded-xl bg-yellow-50">
								<Image
									src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1764325967/bright-playful-scene-opened-blue-600nw-2642043075_wminmt.jpg"
									fill
									alt="Grocery"
								/>
							</div>
						</div>
					</div>

					{/* CARD 2 */}
					<div className="rounded-2xl bg-white p-6 text-slate-900 shadow-xl shadow-orange-900/20">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-lg font-extrabold">FRESH PRODUCE</h3>
								<p className="text-xs tracking-widest text-slate-500">
									FRUITS · VEGETABLES
								</p>
							</div>
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-100">
								<Apple className="h-4 w-4 text-lime-700" />
							</div>
						</div>
						<span className="mt-4 inline-block rounded-full bg-[#ECFDF3] px-3 py-1 text-[0.7rem] font-semibold text-[#15803D]">
							FARM-FRESH ARRIVALS
						</span>
						<div className="mt-5 flex items-center justify-between ">
							<p className="text-xs text-slate-600">Handpicked daily.</p>
							<div className="relative h-16 w-16 overflow-hidden rounded-xl bg-green-50">
								<Image
									src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1764322205/basket-fruits-vegetables-with-transparent-background_623289-149_qlmsja.jpg"
									fill
									alt="Produce"
								/>
							</div>
						</div>
					</div>

					{/* CARD 3 */}
					<div className="rounded-2xl bg-white p-6 text-slate-900 shadow-xl shadow-orange-900/20">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-lg font-extrabold">HOME &amp; CARE</h3>
								<p className="text-xs tracking-widest text-slate-500">
									CLEANING · PERSONAL CARE
								</p>
							</div>
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100">
								<Home className="h-4 w-4 text-sky-700" />
							</div>
						</div>
						<span className="mt-4 inline-block rounded-full bg-[#E0F2FE] px-3 py-1 text-[0.7rem] font-semibold text-[#0369A1]">
							ESSENTIALS EVERYDAY
						</span>
						<div className="mt-5 flex items-center justify-between">
							<p className="text-xs text-slate-600">Household must-haves.</p>
							<div className="relative h-16 w-16 overflow-hidden rounded-xl bg-blue-50">
								<Image
									src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1764325999/Multimedia_Images_AR2023_Skin_Personal_Care_zgsisa.jpg"
									fill
									alt="Homecare"
								/>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
