"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const CATEGORIES = [
	{
		key: "veggies",
		title: "Vegetables",
		tag: "Everyday Greens",
		price: "Starting at ₹19",
		badge: "VR Pick",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1764400272/vegetables-that-are-actually-fruit-66ccedf92ec3a.jpg_g2kvjp.jpg",
		gradient: "var(--gradient-brand)",
	},
	{
		key: "fruits",
		title: "Fruits",
		tag: "Juicy & Seasonal",
		price: "Starting at ₹29",
		badge: "Top Seller",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1764400314/pngtree-beautiful-various-fruits-item-and-healthy-clipart-png-image_16788969_dcamjq.png",
		gradient: "var(--gradient-soft)",
	},
	{
		key: "dairy",
		title: "Dairy & Bakery",
		tag: "Morning Essentials",
		price: "Starting at ₹49",
		badge: "Fresh Daily",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1764400396/shutterstock_775708189_scthsr.jpg",
		gradient:
			"linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
	},
	{
		key: "snacks",
		title: "Snacks & Beverages",
		tag: "Anytime Cravings",
		price: "Starting at ₹10",
		badge: "Party Time",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1764400441/assorted-snacks-beverages-displayed-table-perfect-food-beverage-concepts_153912-132267_v7gr7o.jpg",
		gradient:
			"linear-gradient(135deg, var(--color-accent), var(--color-primary))",
	},
	{
		key: "staples",
		title: "Rice, Oils & Staples",
		tag: "Kitchen Must-haves",
		price: "Starting at ₹59",
		badge: "Value Pack",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1764400525/Essential-Asian-Pantry-Staples-5119-300x300_kzdgiu.jpg",
		gradient:
			"linear-gradient(135deg, var(--color-primary), var(--color-background-alt))",
	},
	{
		key: "cleaning",
		title: "Cleaning & Home Care",
		tag: "Sparkling Homes",
		price: "Starting at ₹35",
		badge: "Daily Use",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1764400925/guide-to-household-cleaning-supplies-getty-0423-2000-ffd247a66ef847c78f12379bbd080f4b_sdnd1i.jpg",
		gradient:
			"linear-gradient(135deg, var(--color-background-alt), var(--color-surface))",
	},
	{
		key: "personal",
		title: "Personal Care",
		tag: "Self-care Daily",
		price: "Starting at ₹25",
		badge: "Everyday Care",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1764401307/Importance_of_Personal_Care_Products_480x480_g2i3qd.jpg",
		gradient:
			"linear-gradient(135deg, var(--color-secondary), var(--color-primary))",
	},
	{
		key: "baby",
		title: "Baby & Household",
		tag: "For Little Ones",
		price: "Starting at ₹49",
		badge: "Gentle Choice",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1764401386/Freebies-image_xaoqmw.jpg",
		gradient:
			"linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
	},
];

export default function Category() {
	const trackRef = useRef<HTMLDivElement | null>(null);

	const scroll = (dir: "left" | "right") => {
		if (!trackRef.current) return;
		const amount = dir === "left" ? -260 : 260;
		trackRef.current.scrollBy({ left: amount, behavior: "smooth" });
	};

	return (
		<section
			className="w-full text-(--color-dark)"
			style={{ backgroundImage: "var(--gradient-soft)" }}>
			<div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-12">
				{/* Header row */}
				<div className="flex items-center justify-between gap-3">
					<div>
						<p className="inline-flex items-center gap-2 rounded-full bg-(--color-secondary) px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-(--color-dark)] shadow-sm">
							<Sparkles className="h-3.5 w-3.5 text-(--color-accent)" />
							Explore by category
						</p>

						<h2 className="mt-2 text-lg font-extrabold text-(--color-dark) sm:text-xl md:text-2xl">
							Shop by Categories
						</h2>
						<p className="text-xs text-gray-800 sm:text-sm">
							Swipe through{" "}
							<span className="font-semibold text-(--color-success)">
								VR<span className="text-(--color-accent)">1</span>MART
							</span>{" "}
							favourites – everything your home needs, in one place.
						</p>
					</div>

					<div className="hidden items-center gap-2 md:flex">
						<button
							onClick={() => scroll("left")}
							className="flex h-9 w-9 items-center justify-center rounded-full border border-(--color-accent) bg-(--color-surface)/90 text-(--color-accent) shadow-sm transition hover:bg-(--color-secondary)/90">
							<ChevronLeft className="h-4 w-4" />
						</button>
						<button
							onClick={() => scroll("right")}
							className="flex h-9 w-9 items-center justify-center rounded-full border border-(--color-accent) bg-(--color-surface)/90 text-(--color-accent) shadow-sm transition hover:bg-(--color-secondary)/90">
							<ChevronRight className="h-4 w-4" />
						</button>
					</div>
				</div>

				{/* CAROUSEL WRAPPER */}
				<div className="relative mt-6 rounded-3xl bg-(--color-surface) px-2 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
					{/* side fade */}
					<div className="pointer-events-none absolute left-2 top-4 h-[85%] w-10 rounded-r-3xl bg-linear-to-r from-(--color-surface) to-transparent" />
					<div className="pointer-events-none absolute right-2 top-4 h-[85%] w-10 rounded-l-3xl bg-linear-to-l from-(--color-surface) to-transparent" />

					<div
						ref={trackRef}
						className="
							flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pt-1
							scroll-smooth
							scrollbar-thin scrollbar-thumb-(--color-accent) scrollbar-track-(--color-background-alt)/70
						">
						{CATEGORIES.map((cat, idx) => (
							<motion.button
								key={cat.key}
								whileHover={{ y: -8, scale: 1.04, rotate: -1.2 }}
								whileTap={{ scale: 0.97 }}
								initial={{ opacity: 0, y: 18 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.35, delay: idx * 0.04 }}
								className="group relative min-w-[180px] max-w-[220px] snap-start rounded-3xl bg-transparent p-0.5 text-left">
								{/* gradient frame */}
								<div
									className="absolute inset-0 rounded-3xl opacity-80 blur-[0.5px] group-hover:opacity-100 group-hover:blur-[1px]"
									style={{ backgroundImage: cat.gradient }}
								/>
								<div className="relative z-10 flex h-full flex-col rounded-3xl bg-(--color-light) shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-shadow group-hover:shadow-[0_20px_55px_rgba(0,0,0,0.09)]">
									{/* image area */}
									<div className="relative h-28 overflow-hidden rounded-t-3xl">
										<Image
											src={cat.img}
											alt={cat.title}
											fill
											className="object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										{/* warm overlay */}
										<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--color-primary)/30 via-transparent to-transparent" />
										<span className="absolute bottom-2 left-2 rounded-full bg-(--color-accent)/90 px-2.5 py-[3px] text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-(--color-light)]">
											{cat.tag}
										</span>
										{cat.badge && (
											<span className="absolute right-2 top-2 rounded-full bg-(--color-light)/95 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-(--color-accent) shadow-sm">
												{cat.badge}
											</span>
										)}
									</div>

									{/* text area */}
									<div className="flex flex-1 flex-col justify-between gap-2 px-3.5 pb-3 pt-2.5">
										<div>
											<h3 className="text-[0.95rem] font-semibold text-(--color-dark)">
												{cat.title}
											</h3>
											<p className="mt-1 text-[0.7rem] font-medium text-(--color-accent)">
												{cat.price}
											</p>
										</div>

										<div className="flex items-center justify-between text-[0.65rem]">
											<span className="rounded-full bg-(--color-background-alt) px-2 py-[3px] font-medium text-(--color-accent) transition-colors group-hover:bg-(--color-secondary)/80">
												View items
											</span>
											<span className="flex items-center gap-1 text-gray-700 group-hover:text-(--color-success)">
												<span className="h-1.5 w-1.5 rounded-full bg-(--color-accent) group-hover:bg-(--color-success)" />
												<span>In stock</span>
											</span>
										</div>
									</div>
								</div>
							</motion.button>
						))}
					</div>

					{/* mobile arrows */}
					<div className="mt-3 flex items-center justify-center gap-3 md:hidden">
						<button
							onClick={() => scroll("left")}
							className="flex h-8 w-8 items-center justify-center rounded-full border border-(--color-accent) bg-(--color-surface)/95 text-(--color-accent) shadow-sm">
							<ChevronLeft className="h-4 w-4" />
						</button>
						<button
							onClick={() => scroll("right")}
							className="flex h-8 w-8 items-center justify-center rounded-full border border-(--color-accent) bg-(--color-surface)/95 text-(--color-accent) shadow-sm">
							<ChevronRight className="h-4 w-4" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
