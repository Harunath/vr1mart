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
			<motion.nav
				initial={{ y: -40, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.35, ease: "easeOut" }}
				className="w-full bg-transparent/80 backdrop-blur-md border-b border-white/10">
				{/* NAV HEIGHT UPDATED HERE */}
				<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
					{/* LEFT : Logo + tagline */}
					<div className="flex items-center gap-3">
						<Link
							href="/"
							className="flex items-center gap-2"
							aria-label="Go to VR1MART home">
							{/* LOGO SIZE UPDATED HERE */}
							<div className="relative h-16 w-[150px] md:h-16 md:w-[210px]">
								<div className="absolute inset-0 rounded-lg bg-white/30 blur-[18px]" />

								<Image
									src="https://res.cloudinary.com/diaoy3wzi/image/upload/v1764315364/vr1mart-logo_sample1_1_lxyspi.png"
									alt="VR1MART Logo"
									fill
									className="relative object-contain"
									priority
								/>
							</div>
						</Link>

						<div className="hidden flex-col leading-tight text-xs md:flex">
							{/* badge line */}
							<span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-emerald-900 shadow-sm shadow-emerald-900/40">
								<Leaf className="h-3 w-3 text-emerald-900" />
								<span>From Farmers to Shelf</span>
							</span>

							{/* pattern line */}
							<span className="mt-1 inline-flex items-center gap-2 text-[0.75rem] text-[#309740]">
								<span>Fresh</span>
								<span className="h-1 w-1 rounded-full bg-emerald-200/80" />
								<span>Fast</span>
								<span className="h-1 w-1 rounded-full bg-emerald-200/80" />
								<span>Affordable</span>
							</span>
						</div>
					</div>

					{/* RIGHT : Desktop nav */}
					<div className="hidden items-center gap-5 md:flex">
						<div className="flex items-center gap-3">
							{NAV_ITEMS.map((item) => {
								const Icon = item.icon;
								const isSolid = item.variant === "solid";

								return (
									<motion.div
										key={item.href}
										whileHover={{ y: -1, scale: 1.02 }}
										transition={{ duration: 0.15 }}>
										<Link
											href={item.href}
											className={[
												"group inline-flex items-center gap-2 rounded-full text-xs font-semibold transition-colors border",
												isSolid
													? "border-emerald-300/80 bg-white px-4 py-2 text-emerald-900 shadow-sm shadow-emerald-900/40 hover:bg-emerald-400"
													: "border-emerald-200/70 bg-white px-4 py-2 text-emerald-900 hover:border-emerald-100 hover:bg-emerald-400",
											].join(" ")}>
											<Icon className="h-4 w-4" />
											<span>{item.label}</span>
											{isSolid && (
												<span className="rounded-full bg-emerald-950/70 px-2 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-emerald-100">
													Franchise Ready
												</span>
											)}
										</Link>
									</motion.div>
								);
							})}
						</div>

						{/* divider */}
						<span className="h-5 w-px bg-emerald-100/40" />

						{/* Login */}
						<Link
							href="/auth"
							className="flex items-center gap-2 rounded-full border border-emerald-100/40 bg-white px-3 py-1.5 text-sm font-medium text-emerald-900 
	           hover:bg-emerald-400 hover:text-white transition-colors duration-300">
							<User className="h-4 w-4" />
							<span>Login</span>
						</Link>
					</div>

					{/* MOBILE : Menu Toggle */}
					<button
						onClick={() => setOpen((prev) => !prev)}
						className="flex items-center justify-center rounded-full border border-white/35 bg-emerald-900/50 p-1.5 text-emerald-50 shadow-sm md:hidden"
						aria-label="Toggle navigation menu">
						{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</div>
			</motion.nav>

			{/* MOBILE MENU */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0, y: -8 }}
						animate={{ height: "auto", opacity: 1, y: 0 }}
						exit={{ height: 0, opacity: 0, y: -8 }}
						transition={{ duration: 0.22, ease: "easeOut" }}
						className="overflow-hidden border-b border-emerald-100/15 bg-emerald-950/95 text-sm text-emerald-50 shadow-lg">
						<div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 pb-4 pt-2">
							{NAV_ITEMS.map((item) => {
								const Icon = item.icon;
								const isSolid = item.variant === "solid";

								return (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setOpen(false)}
										className={[
											"flex items-center justify-between rounded-xl px-3 py-2.5",
											isSolid
												? "bg-emerald-500 text-white hover:bg-emerald-400"
												: "bg-emerald-900/70 text-emerald-50 hover:bg-emerald-800",
										].join(" ")}>
										<span className="flex items-center gap-2">
											<Icon
												className={`h-4 w-4 ${
													isSolid ? "text-white" : "text-emerald-100"
												}`}
											/>
											{item.label}
										</span>
										{isSolid && (
											<span className="rounded-full bg-emerald-950/80 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-emerald-100">
												Franchise
											</span>
										)}
									</Link>
								);
							})}

							{/* Login */}
							<Link
								href="/auth"
								onClick={() => setOpen(false)}
								className="flex w-full items-center justify-center rounded-xl bg-emerald-900/70 px-3 py-2.5 hover:bg-emerald-800">
								<span className="flex items-center gap-2">
									<User className="h-4 w-4 text-emerald-100" />
									Login
								</span>
							</Link>

							{/* Cart preview */}
							<div className="mt-1 flex items-center justify-between rounded-xl bg-emerald-900/80 px-3 py-2 text-xs text-emerald-50">
								<div className="flex items-center gap-2">
									<ShoppingBasket className="h-4 w-4" />
									<span className="font-semibold">Cart</span>
								</div>
								<span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[0.7rem] text-white">
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
