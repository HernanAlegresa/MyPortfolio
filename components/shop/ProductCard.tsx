"use client";

import { useState } from "react";
import Link from "next/link";
import { ProductImage } from "@/components/ui/product-image";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import type { Product } from "@/lib/types/product";
import { cn } from "@/lib/utils";
import { QuickView } from "@/components/shop/QuickView";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const mainImage = product.images[0];
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href={`/shop/${product.slug}`}
          className={cn(
            "group block",
            "focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-lg"
          )}
        >
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <ProductImage
                src={mainImage}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
            </motion.div>
            {hasDiscount && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
              >
                -{Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)}%
              </motion.div>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center">
                <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                  Out of Stock
                </span>
              </div>
            )}

            {/* Quick View button (desktop only) */}
            {product.inStock && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setQuickViewOpen(true);
                }}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-xs font-medium shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hover:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                aria-label={`Quick view ${product.name}`}
              >
                <Eye className="h-3.5 w-3.5" />
                Quick View
              </button>
            )}
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors text-lg">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
            <div className="flex items-baseline gap-2 pt-1">
              <span className="text-xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {hasDiscount && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.compareAtPrice!.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </Link>
      </motion.div>

      <QuickView
        product={product}
        open={quickViewOpen}
        onOpenChange={setQuickViewOpen}
      />
    </>
  );
}
