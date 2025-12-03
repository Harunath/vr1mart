import Link from "next/link";
import { Home, ShoppingBag } from "lucide-react";

const float = {
	animate: {
		y: [0, -10, 0],
		transition: {
			duration: 4,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

export default function NotFound() {
	return (
		<main
			className="flex min-h-screen w-full items-center justify-center text-(--color-dark) px-4"
			style={{ backgroundImage: "var(--gradient-soft)" }}>
			<div className="relative max-w-xl w-full text-center">
				{/* Background glows */}
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute -left-16 top-16 h-40 w-40 rounded-full bg-(--color-secondary)/45 blur-3xl" />
					<div className="absolute -right-16 bottom-10 h-48 w-48 rounded-full bg-(--color-primary)/45 blur-3xl" />
				</div>

				{/* Animated Mart Icon */}
				<div
					{...float}
					className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-(--color-background-soft) shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
					<ShoppingBag className="h-14 w-14 text-(--color-accent)" />
				</div>

				{/* Heading */}
				<h1 className="text-3xl font-extrabold tracking-tight text-(--color-dark) sm:text-4xl">
					This page is under development.
				</h1>
				{/* Description */}
				<p className="mt-3 text-sm text-gray-700 sm:text-base max-w-md mx-auto">
					We’re stocking up this section of{" "}
					<span className="font-semibold">
						VR<span className="text-(--color-accent)">1</span>MART
					</span>{" "}
					to serve you better.
				</p>

				{/* Buttons */}
				<div className="mt-6 flex flex-wrap justify-center gap-4">
					<Link
						href="/"
						className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-(--color-dark)] shadow-[0_12px_30px_rgba(0,0,0,0.10)] transition"
						style={{ backgroundImage: "var(--gradient-brand)" }}>
						<Home className="h-4 w-4" />
						Go Home
					</Link>
				</div>
			</div>
		</main>
	);
}
