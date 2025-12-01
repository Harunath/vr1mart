"use client";

import Link from "next/link";
import {
	Facebook,
	Instagram,
	Youtube,
	Mail,
	MapPin,
	Phone,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="relative bg-linear-to-l from-[#FF6A00] via-[#F9C80B] to-[#FFFF41] text-[#1F1300]">
			{/* soft overlay for readability */}
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_55%)]" />

			<div className="relative mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8">
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
					{/* 1. Logo + about */}
					<div className="max-w-sm">
						<Link
							href="/"
							className="flex items-center gap-2"
							aria-label="Go to VR1MART home">
							<div className="relative h-14 w-[150px] sm:h-16 sm:w-[210px]">
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
						<p className="mt-3 text-sm text-[#3A2200]/85">
							Your trusted neighbourhood mart delivering fresh groceries, dairy,
							fruits, vegetables & essentials at the best prices.
						</p>

						<div className="mt-4 flex flex-wrap items-center gap-2">
							{[
								{ icon: Facebook, label: "VR1MART on Facebook" },
								{ icon: Instagram, label: "VR1MART on Instagram" },
								{ icon: Youtube, label: "VR1MART on YouTube" },
							].map(({ icon: Icon, label }, idx) => (
								<button
									key={idx}
									type="button"
									aria-label={label}
									className="
										inline-flex h-9 w-9 items-center justify-center rounded-full 
										bg-white/70 text-[#FF6A00] shadow-[0_4px_10px_rgba(0,0,0,0.15)]
										transition hover:bg-[#FF6A00] hover:text-white
									">
									<Icon className="h-4 w-4" />
								</button>
							))}
						</div>
					</div>

					{/* 2. Quick Links */}
					<div>
						<h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7A3B00]">
							Quick Links
						</h4>
						<ul className="space-y-2 text-sm text-[#3A2200]/90">
							<li>
								<Link
									href="/"
									className="transition hover:text-[#FF6A00] hover:underline">
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/categories"
									className="transition hover:text-[#FF6A00] hover:underline">
									Shop Categories
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="transition hover:text-[#FF6A00] hover:underline">
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="transition hover:text-[#FF6A00] hover:underline">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* 3. For Business */}
					<div>
						<h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7A3B00]">
							For Business
						</h4>
						<ul className="space-y-2 text-sm text-[#3A2200]/90">
							<li>
								<Link
									href="/corporate"
									className="transition hover:text-[#FF6A00] hover:underline">
									Corporate / Bulk Orders
								</Link>
							</li>
							<li>
								<Link
									href="/partner"
									className="transition hover:text-[#FF6A00] hover:underline">
									Partner With Us
								</Link>
							</li>
							<li>
								<Link
									href="/franchise"
									className="transition hover:text-[#FF6A00] hover:underline">
									Become a Franchise
								</Link>
							</li>
							<li>
								<Link
									href="/careers"
									className="transition hover:text-[#FF6A00] hover:underline">
									Careers
								</Link>
							</li>
						</ul>
					</div>

					{/* 4. Contact Info */}
					<div>
						<h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7A3B00]">
							Get in Touch
						</h4>
						<ul className="space-y-3 text-sm text-[#3A2200]/90">
							<li className="flex items-start gap-2">
								<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/70">
									<MapPin className="h-3.5 w-3.5 text-[#FF6A00]" />
								</div>
								<span className="leading-snug">
									VR1MART Headquarters, Hyderabad, Telangana
								</span>
							</li>
							<li className="flex items-start gap-2">
								<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/70">
									<Mail className="h-3.5 w-3.5 text-[#FF6A00]" />
								</div>
								<a
									href="mailto:support@vr1mart.com"
									className="leading-snug underline-offset-2 hover:underline">
									support@vr1mart.com
								</a>
							</li>
							<li className="flex items-start gap-2">
								<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/70">
									<Phone className="h-3.5 w-3.5 text-[#FF6A00]" />
								</div>
								<a
									href="tel:+919876543210"
									className="leading-snug underline-offset-2 hover:underline">
									+91 98765 43210
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Divider + bottom row */}
				<div className="mt-8 flex flex-col items-center gap-1 border-t border-white/60 pt-5 text-center sm:flex-row sm:justify-between sm:text-left">
					<p className="text-xs text-[#3A2200]/75">
						© {year} VR1MART. All Rights Reserved.
					</p>
					<p className="text-xs text-[#7A3B00]">
						Developed by{" "}
						<a
							href="https://www.vrtechforz.com"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium underline-offset-2 hover:text-white hover:underline">
							VR Tech Forz
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
