"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ScrollToNext } from "@/components/ui/scroll-to-next";

function CategoryCard({
  category,
  index,
}: {
  category: (typeof categories)[0];
  index: number;
}) {
  const products = getProductsByCategory(category.slug);
  const firstProduct = products[0];
  const displayImage = firstProduct?.images[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="shrink-0 sm:shrink"
    >
      <Link
        href={`/shop?category=${category.slug}`}
        className="group block w-44 sm:w-auto"
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
          {/* Static Product Image with hover zoom */}
          {displayImage ? (
            <Image
              src={displayImage}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 176px, (max-width: 1024px) 33vw, 20vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
          )}

          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Category info */}
          <div className="absolute inset-0 flex items-end p-4">
            <div className="w-full">
              <h3 className="text-sm font-semibold text-white drop-shadow-md">
                {category.name}
              </h3>
              <span className="mt-1 flex items-center gap-1 text-xs text-white/80 transition-colors group-hover:text-white">
                Shop Now
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function CategoryShowcase() {
  return (
    <section id="category-showcase" className="relative min-h-screen flex flex-col justify-center py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Shop by Category
            </h2>
            <p className="mt-2 text-gray-600">
              Find your style across our collections.
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden items-center gap-1 text-sm font-medium transition-colors hover:text-gray-600 sm:flex"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Horizontal scrolling row on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 lg:grid-cols-5">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>

      {/* Scroll to next section */}
      <ScrollToNext targetId="featured-products" label="Featured Products" />
    </section>
  );
}
