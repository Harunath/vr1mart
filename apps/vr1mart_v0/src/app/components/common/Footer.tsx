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
	return (
		<footer className="relative mt-20 bg-emerald-900 text-emerald-50">
			{/* Top Shape Accent */}
			<div className="absolute inset-x-0 -top-8 mx-auto h-8 w-full max-w-7xl rounded-t-3xl bg-emerald-800/40 blur-md" />

			<div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
				<div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
					{/* 1. Logo + about */}
					<div>
						<Link
							href="/"
							className="flex items-center gap-2"
							aria-label="Go to VR1MART home">
							{/* LOGO SIZE UPDATED HERE */}
							<div className="relative h-16 w-[150px] md:h-16 md:w-[210px]">
								<div className="absolute inset-0 rounded-lg bg-white blur-[18px]" />

								<Image
									src="https://res.cloudinary.com/diaoy3wzi/image/upload/v1764315364/vr1mart-logo_sample1_1_lxyspi.png"
									alt="VR1MART Logo"
									fill
									className="relative object-contain"
									priority
								/>
							</div>
						</Link>
						<p className="mt-3 text-sm text-emerald-100/80">
							Your trusted neighbourhood mart delivering fresh groceries, dairy,
							fruits, vegetables & essentials at the best prices.
						</p>

						<div className="mt-4 flex gap-3">
							<Facebook className="h-5 w-5 cursor-pointer text-emerald-100 hover:text-white" />
							<Instagram className="h-5 w-5 cursor-pointer text-emerald-100 hover:text-white" />
							<Youtube className="h-5 w-5 cursor-pointer text-emerald-100 hover:text-white" />
						</div>
					</div>

					{/* 2. Quick Links */}
					<div>
						<h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-200">
							Quick Links
						</h4>
						<ul className="space-y-2 text-sm text-emerald-100/90">
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/categories">Shop Categories</Link>
							</li>
							<li>
								<Link href="/about">About Us</Link>
							</li>
							<li>
								<Link href="/contact">Contact</Link>
							</li>
						</ul>
					</div>

					{/* 3. For Business */}
					<div>
						<h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-200">
							For Business
						</h4>
						<ul className="space-y-2 text-sm text-emerald-100/90">
							<li>
								<Link href="/corporate">Corporate / Bulk Orders</Link>
							</li>
							<li>
								<Link href="/partner">Partner With Us</Link>
							</li>
							<li>
								<Link href="/franchise">Become a Franchise</Link>
							</li>
							<li>
								<Link href="/careers">Careers</Link>
							</li>
						</ul>
					</div>

					{/* 4. Contact Info */}
					<div>
						<h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-200">
							Get in Touch
						</h4>
						<ul className="space-y-3 text-sm text-emerald-100/90">
							<li className="flex items-start gap-2">
								<MapPin className="h-4 w-4 text-emerald-300" />
								<span>VR1MART Headquarters, Hyderabad, Telangana</span>
							</li>
							<li className="flex items-start gap-2">
								<Mail className="h-4 w-4 text-emerald-300" />
								<span>support@vr1mart.com</span>
							</li>
							<li className="flex items-start gap-2">
								<Phone className="h-4 w-4 text-emerald-300" />
								<span>+91 98765 43210</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Divider */}
				<div className="mt-12 border-t border-emerald-800/70 pt-6">
					<p className="text-center text-xs text-emerald-200/70">
						© {new Date().getFullYear()} VR1MART. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
