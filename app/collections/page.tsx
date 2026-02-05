import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { collections } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";

export const metadata: Metadata = {
  title: "Collections | Oh Sh!rt",
  description: "Browse our curated collections of premium shirts.",
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => {
            const products = getProductsByCollection(collection.slug);
            const firstProductImage = products[0]?.images[0];

            return (
              <Link
                key={collection.id}
                href={`/shop?collection=${collection.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
                  {firstProductImage ? (
                    <Image
                      src={firstProductImage}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
                  )}

                  <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <h2 className="text-2xl font-bold mb-2 text-center">{collection.name}</h2>
                    <p className="text-sm text-white/80 text-center mb-4">
                      {collection.description}
                    </p>
                    <span className="text-sm font-medium border border-white/50 px-4 py-2 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                      {products.length} {products.length === 1 ? "Product" : "Products"}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
