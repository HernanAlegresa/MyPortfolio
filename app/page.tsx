import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CategoryShowcase } from "@/components/sections/CategoryShowcase";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { BrandStory } from "@/components/sections/BrandStory";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover our collection of high-quality, comfortable premium t-shirts designed for everyday wear.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
      <BrandStory />
    </>
  );
}
