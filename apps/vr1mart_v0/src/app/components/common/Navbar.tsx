"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
	ShoppingBasket,
	Menu,
	X,
	User,
	Store,
	Briefcase,
	Leaf,
} from "lucide-react";

const NAV_ITEMS = [
	{
		label: "Corporate / Bulk Orders",
		href: "/corporate",
		icon: Briefcase,
		variant: "outline" as const,
	},
	{
		label: "Partner With Us",
		href: "/partner",
		icon: Store,
		variant: "solid" as const,
	},
];

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<header className="fixed inset-x-0 top-0 z-50">
			{/* NAVBAR */}
			<motion.nav
				initial={{ y: -40, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.4, ease: "easeOut" }}
				className="
					w-full
					bg-white/60
					backdrop-filter 
					text-[#1F1300]
					border-b border-[#1F1300]/10
					backdrop-blur-sm
				">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 md:px-6 md:py-4">
					{/* LEFT SECTION */}
					<div className="flex items-center gap-3">
						<Link href="/" className="flex items-center gap-2">
							<div className="relative h-16 w-[200px] md:h-20 md:w-[260px] -ml-3">
								<Image
									src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1764740121/vr1mart-logo-final_mfwrro.png"
									alt="VR1MART Logo"
									fill
									className="object-contain"
									priority
								/>
							</div>
						</Link>

						{/* Motto */}
						<div className="hidden flex-col leading-tight text-xs md:flex">
							<span className="inline-flex items-center gap-1 rounded-full bg-[#FFF9C2] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-orange-400 shadow-sm">
								<Leaf className="h-3 w-3 text-green-600" />
								From Farmers to Shelf
							</span>

							<span className="mt-1 inline-flex items-center gap-2 text-[0.75rem] text-gray-900 font-medium">
								<span>Fresh</span>
								<span className="h-1 w-1 rounded-full bg-orange-400" />
								<span>Fast</span>
								<span className="h-1 w-1 rounded-full bg-orange-400" />
								<span>Affordable</span>
							</span>
						</div>
					</div>

					{/* DESKTOP NAV */}
					<div className="hidden items-center gap-5 md:flex">
						<div className="flex items-center gap-3">
							{NAV_ITEMS.map((item) => {
								const Icon = item.icon;
								const isSolid = item.variant === "solid";

								return (
									<Link
										key={item.href}
										href={item.href}
										className={[
											"inline-flex items-center gap-2 rounded-full text-xs font-semibold transition-all",
											isSolid
												? "bg-orange-400 text-[#FFEFC8] px-4 py-2 shadow-md hover:bg-orange-600"
												: "bg-[#FFF6D5] text-orange-400 border border-[#1F1300]/10 px-4 py-2 hover:bg-[#FFE58D]",
										].join(" ")}>
										<Icon className="h-4 w-4" />
										{item.label}

										{isSolid && (
											<span className="rounded-full bg-[#FFEFC8] text-black px-2 py-0.5 text-[0.6rem] font-semibold uppercase">
												Franchise
											</span>
										)}
									</Link>
								);
							})}
						</div>

						{/* Divider */}
						<span className="h-5 w-px bg-gray-900/20" />

						{/* LOGIN */}
						<Link
							href="/auth"
							className="flex items-center gap-2 rounded-full border border-gray-900/10 bg-[#FFF6D5] px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-[#FFE58D] transition">
							<User className="h-4 w-4" />
							Login
						</Link>
					</div>

					{/* MOBILE MENU BUTTON */}
					<button
						onClick={() => setOpen(!open)}
						className="md:hidden flex items-center justify-center rounded-full border border-[#1F1300]/20 bg-[#FFF6D5]/80 p-1.5 text-[#4A2D00] shadow-sm">
						{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</div>
			</motion.nav>

			{/* MOBILE MENU */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25 }}
						className="overflow-hidden bg-linear-to-br from-[#FFFF41] via-[#F9C80B] to-[#FF6A00] border-b border-orange-400 text-orange-400 shadow">
						<div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 pb-4 pt-2">
							{NAV_ITEMS.map((item) => {
								const Icon = item.icon;
								const solid = item.variant === "solid";

								return (
									<Link
										key={item.href}
										onClick={() => setOpen(false)}
										href={item.href}
										className={[
											"flex items-center justify-between rounded-xl px-3 py-2.5",
											solid
												? "bg-[#f0a52c] text-[#FFEFC8]"
												: "bg-[#FFF6D5] text-orange-400 border border-orange-400",
										].join(" ")}>
										<span className="flex items-center gap-2">
											<Icon className="h-4 w-4" /> {item.label}
										</span>

										{solid && (
											<span className="rounded-full bg-[#FFEFC8] text-orange-400 px-2 py-0.5 text-[0.6rem] font-semibold uppercase">
												Franchise
											</span>
										)}
									</Link>
								);
							})}

							{/* LOGIN MOBILE */}
							<Link
								onClick={() => setOpen(false)}
								href="/auth"
								className="flex items-center justify-center rounded-xl bg-[#FFF6D5] border border-[#1F1300]/10 px-3 py-2.5 text-orange-400">
								<User className="h-4 w-4" /> Login
							</Link>

							{/* CART */}
							<div className="mt-1 flex items-center justify-between rounded-xl bg-[#FFF6D5] border border-[#1F1300]/10 px-3 py-2 text-xs text-orange-400">
								<div className="flex items-center gap-2">
									<ShoppingBasket className="h-4 w-4" />
									Cart
								</div>
								<span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-400 text-[0.7rem] text-[#FFEFC8]">
									0
								</span>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
