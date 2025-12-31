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
		<footer
			style={{ backgroundImage: "var(--gradient-soft)" }}
			className="relative text-(--color-dark)">
			{/* Soft overlay */}
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_60%)]" />

			<div className="relative mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8">
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
					{/* 1. Logo + About */}
					<div className="max-w-sm">
						<Link
							href="/"
							aria-label="Go to VR1MART home"
							className="flex items-center gap-2">
							<div className="relative h-14 w-[150px] sm:h-16 sm:w-[210px]">
								<div className="absolute inset-0 rounded-lg bg-white/30 blur-xl" />
								<Image
									src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1764740121/vr1mart-logo-final_mfwrro.png"
									alt="VR1MART Logo"
									fill
									className="relative object-contain"
									priority
								/>
							</div>
						</Link>

						<p className="mt-3 text-sm text-(--color-dark)/80">
							Your trusted neighbourhood mart delivering fresh groceries,
							fruits, vegetables, dairy & daily essentials at the best prices.
						</p>

						{/* Social buttons */}
						<div className="mt-4 flex flex-wrap items-center gap-2">
							{[
								{ icon: Facebook, label: "Facebook" },
								{ icon: Instagram, label: "Instagram" },
								{ icon: Youtube, label: "YouTube" },
							].map(({ icon: Icon, label }, idx) => (
								<button
									key={idx}
									aria-label={label}
									className="
										inline-flex h-9 w-9 items-center justify-center rounded-full
										bg-white/70 text-(--color-accent)
										shadow-[0_4px_12px_rgba(0,0,0,0.15)]
										transition hover:bg-(--color-accent) hover:text-white
									">
									<Icon className="h-4 w-4" />
								</button>
							))}
						</div>
					</div>

					{/* 2. Quick Links */}
					<div>
						<h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-(--color-gray-700)]">
							Quick Links
						</h4>
						<ul className="space-y-2 text-sm text-(--color-dark)/85">
							{[
								["Home", "/"],
								["Shop Categories", "/categories"],
								["About Us", "/about"],
								["Contact", "/contact"],
							].map(([label, href]) => (
								<li key={href}>
									<Link
										href={href}
										className="transition hover:text-(--color-accent) hover:underline">
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* 3. For Business */}
					<div>
						<h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-700">
							For Business
						</h4>
						<ul className="space-y-2 text-sm text-(--color-dark)/85">
							{[
								["Corporate / Bulk Orders", "/corporate"],
								["Partner With Us", "/partner"],
								["Become a Franchise", "/franchise"],
								["Careers", "/careers"],
							].map(([label, href]) => (
								<li key={href}>
									<Link
										href={href}
										className="transition hover:text-(--color-accent) hover:underline">
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* 4. Contact Info */}
					<div>
						<h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-700)">
							Get in Touch
						</h4>

						<ul className="space-y-4 text-sm text-(--color-dark)/85">
							<li className="flex items-start gap-2">
								<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/75">
									<MapPin className="h-3.5 w-3.5 text-(--color-accent)" />
								</div>
								<span>VR1MART Headquarters, Hyderabad, Telangana</span>
							</li>

							<li className="flex items-start gap-2">
								<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/75">
									<Mail className="h-3.5 w-3.5 text-(--color-accent)" />
								</div>
								<a
									href="mailto:support@vr1mart.com"
									className="underline-offset-2 hover:underline">
									support@vr1mart.com
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Divider + bottom row */}
				<div className="mt-10 flex flex-col items-center gap-1 border-t border-white/60 pt-5 text-center sm:flex-row sm:justify-between sm:text-left">
					<p className="text-xs text-(--color-dark)/70">
						© {year} VR1MART. All Rights Reserved.
					</p>

					<p className="text-xs text-gray-700)">
						Developed by{" "}
						<a
							href="https://www.vrtechforz.com"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium underline-offset-2 hover:text-(--color-dark) hover:underline">
							VR Tech Forz
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
