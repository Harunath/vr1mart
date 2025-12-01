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
		<section
			className="
				relative overflow-hidden
				bg-linear-to-b
				from-[#FFFF41]
				via-[#F9C80B]
				to-[#FF6A00]
				text-[#1F1300]
			">
			{/* Soft glows */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-24 left-4 h-48 w-48 rounded-full bg-white/35 blur-3xl" />
				<div className="absolute bottom-[-70px] right-4 h-64 w-64 rounded-full bg-[#F9C80B]/40 blur-3xl" />
				<div className="absolute inset-x-0 bottom-[-120px] h-48 bg-linear-to-t from-[#6A4B00]/15 to-transparent" />
			</div>

			{/* LEFT FRUIT BAG */}
			<motion.div
				className="pointer-events-none absolute left-[-60px] bottom-50 hidden md:block lg:left-[-90px]"
				animate={{ y: [0, -10, 0], rotate: [25, 30, 25] }}
				transition={{ duration: 7, repeat: Infinity }}>
				<Image
					src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1764322423/afe145da-bd0e-402c-9e5f-3ac46abab66e_removalai_preview_cabzpl.png"
					alt="Fresh vegetables bag"
					width={300}
					height={300}
					className="drop-shadow-[0_20px_50px_rgba(0,0,0,0.30)]"
				/>
			</motion.div>

			{/* RIGHT BOWL */}
			<motion.div
				className="pointer-events-none absolute right-[-50px] bottom-80 hidden md:block lg:-right-20"
				animate={{ y: [0, 12, 0], rotate: [-35, -40, -35] }}
				transition={{ duration: 8, repeat: Infinity }}>
				<Image
					src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1764322425/53eeb343-b049-464c-a0ca-dffceadcc4da_removalai_preview_acrlb9.png"
					alt="Fresh fruits bowl"
					width={300}
					height={300}
					className="drop-shadow-[0_20px_50px_rgba(0,0,0,0.30)]"
				/>
			</motion.div>

			{/* MAIN */}
			<div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-36 md:pt-48">
				{/* HEADING */}
				<motion.div
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					custom={0}
					className="max-w-3xl text-center">
					{/* pill line: Your Neighbourhood Premium Mart */}
					<p className="inline-flex items-center gap-2 rounded-full border border-[#F9C80B]/70 bg-white/95 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gray-700 shadow-sm shadow-[rgba(0,0,0,0.10)]">
						<span className="h-1.5 w-1.5 rounded-full bg-[#F9C80B]" />
						Your Neighbourhood Premium Mart
					</p>

					{/* main heading */}
					<h1 className="mt-4 text-[1.9rem] font-extrabold leading-tight text-[#231306] sm:text-[2.3rem] lg:text-[2.7rem]">
						<span className="block">Order groceries & daily essentials.</span>
						<span className="mt-1 block text-[#3A2200]">
							Your trusted{" "}
							<span className="font-semibold text-[#309740]">
								VR<span className="text-amber-900">1</span>MART
							</span>{" "}
							now online.
						</span>
					</h1>

					{/* sub text */}
					<p className="mt-3 text-sm text-gray-600 sm:text-base">
						Fresh fruits, vegetables, dairy, snacks & home essentials delivered
						from <span className="font-semibold text-gray-700">VR1MART</span> —
						fast, fresh & mango-bright.
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
					<div className="flex flex-1 items-center gap-3 rounded-full bg-[#FFFDF3] px-4 py-3 text-sm text-orange-400 shadow-md shadow-[rgba(0,0,0,0.15)]">
						<MapPin className="h-4 w-4 text-[#F9C80B]" />
						<input
							type="text"
							placeholder="Enter your area or pincode"
							className="w-full bg-transparent text-sm outline-none placeholder:text-orange-300"
						/>
						<ChevronDown className="h-4 w-4 text-orange-400" />
					</div>

					{/* Search */}
					<div className="flex flex-[1.4] items-center gap-3 rounded-full bg-[#FFFDF3] px-4 py-3 text-sm text-orange-400 shadow-md shadow-[rgba(0,0,0,0.15)]">
						<Search className="h-4 w-4 text-[#F9C80B]" />
						<input
							type="text"
							placeholder="Search products or brands"
							className="w-full bg-transparent text-sm outline-none placeholder:text-orange-300"
						/>
					</div>
				</motion.div>

				{/* CTA */}
				<motion.button
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					custom={0.25}
					whileHover={{ scale: 1.06, translateY: -1 }}
					whileTap={{ scale: 0.96 }}
					className="mt-5 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#F9C80B] to-[#FF6A00] px-7 py-2.5 text-xs font-semibold text-[#1F1300] shadow-md shadow-[rgba(0,0,0,0.22)]">
					Start shopping now
					<ArrowRight className="h-4 w-4" />
				</motion.button>

				{/* CATEGORY CARDS */}
				<motion.div
					initial={{ opacity: 0, y: 26 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.35, duration: 0.45 }}
					className="mt-10 grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3">
					{/* CARD 1 */}
					<div className="rounded-2xl bg-[#FFFDF5] p-6 text-[#241400] shadow-lg shadow-[rgba(0,0,0,0.16)]">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-lg font-extrabold">DAILY GROCERY</h3>
								<p className="text-xs text-gray-700">RICE · OILS · MASALAS</p>
							</div>
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFEBA3]">
								<ShoppingBasket className="h-4 w-4 text-orange-400" />
							</div>
						</div>
						<span className="mt-4 inline-block rounded-full bg-[#FFEBA3] px-3 py-1 text-[0.7rem] font-semibold text-[#5A3A00]">
							SAVE UP TO 40%
						</span>
						<div className="mt-5 flex items-center justify-between">
							<p className="text-xs text-orange-400">Kitchen staples daily.</p>
							<div className="relative h-16 w-16 overflow-hidden rounded-xl bg-[#FFF4CC]">
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
					<div className="rounded-2xl bg-[#FFFDF5] p-6 text-[#241400] shadow-lg shadow-[rgba(0,0,0,0.16)]">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-lg font-extrabold">FRESH PRODUCE</h3>
								<p className="text-xs text-gray-700">FRUITS · VEGETABLES</p>
							</div>
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFEBA3]">
								<Apple className="h-4 w-4 text-orange-400" />
							</div>
						</div>
						<span className="mt-4 inline-block rounded-full bg-[#FFEBA3] px-3 py-1 text-[0.7rem] font-semibold text-[#5A3A00]">
							FARM-FRESH ARRIVALS
						</span>
						<div className="mt-5 flex items-center justify-between">
							<p className="text-xs text-orange-400">Handpicked daily.</p>
							<div className="relative h-16 w-16 overflow-hidden rounded-xl bg-[#FFF4CC]">
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
					<div className="rounded-2xl bg-[#FFFDF5] p-6 text-[#241400] shadow-lg shadow-[rgba(0,0,0,0.16)]">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-lg font-extrabold">HOME & CARE</h3>
								<p className="text-xs text-gray-700">
									CLEANING · PERSONAL CARE
								</p>
							</div>
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFEBA3]">
								<Home className="h-4 w-4 text-orange-400" />
							</div>
						</div>
						<span className="mt-4 inline-block rounded-full bg-[#FFEBA3] px-3 py-1 text-[0.7rem] font-semibold text-[#5A3A00]">
							ESSENTIALS EVERYDAY
						</span>
						<div className="mt-5 flex items-center justify-between">
							<p className="text-xs text-orange-400">Household must-haves.</p>
							<div className="relative h-16 w-16 overflow-hidden rounded-xl bg-[#FFF4CC]">
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
