import Image from "next/image";
import Hero from "./components/home/Hero";
import WhyUs from "./components/home/WhyUs";
import CategoryGrid from "./components/home/Category";
import FreshSafeSection from "./components/home/FreshSafeSection";
import FranchiseCTA from "./components/home/FranchiseCta";
export default function Home() {
	return (
		<>
			<Hero />
			<WhyUs />
			<CategoryGrid />
			<FreshSafeSection />
			<FranchiseCTA />
		</>
	);
}
