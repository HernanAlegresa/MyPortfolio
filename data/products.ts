import type { Product, Size } from "@/lib/types/product";
import { collections } from "./collections";

// ============================================
// PRODUCTS — Edit these for your store
// ============================================
// This is the static product catalog. Replace with your own products.
// Each product needs: id, name, slug, description, price, images, etc.
//
// Images: place product images in /public/products/<slug>/
// and reference them as "/products/<slug>/image-name.jpg".
//
// For placeholder images during development, use:
//   "/placeholders/product.svg"

const standardSizes: Size[] = ["XS", "S", "M", "L", "XL"];

// Helper to get collection by id
const getCollection = (id: string) => collections.find((c) => c.id === id)!;

export const products: Product[] = [
  // ── Shirts ─────────────────────────────────────
  {
    id: "classic-tee-white",
    name: "Classic Tee — White",
    slug: "classic-tee-white",
    description:
      "A premium cotton crew-neck t-shirt with a relaxed fit. The essential everyday staple.",
    price: 35,
    images: ["/placeholders/product.svg"],
    category: getCollection("shirts"),
    collection: getCollection("shirts"),
    sizes: standardSizes,
    colors: [{ name: "White", hex: "#FFFFFF" }],
    inStock: true,
    featured: true,
    createdAt: "2026-01-01T00:00:00Z",
  },
  {
    id: "classic-tee-black",
    name: "Classic Tee — Black",
    slug: "classic-tee-black",
    description:
      "A premium cotton crew-neck t-shirt with a relaxed fit. Timeless black for any occasion.",
    price: 35,
    images: ["/placeholders/product.svg"],
    category: getCollection("shirts"),
    collection: getCollection("shirts"),
    sizes: standardSizes,
    colors: [{ name: "Black", hex: "#1A1A1A" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-01T00:00:00Z",
  },
  {
    id: "oxford-shirt-blue",
    name: "Oxford Shirt — Blue",
    slug: "oxford-shirt-blue",
    description:
      "A tailored button-down oxford shirt in washed blue. Versatile enough for work or weekend.",
    price: 65,
    images: ["/placeholders/product.svg"],
    category: getCollection("shirts"),
    collection: getCollection("shirts"),
    sizes: standardSizes,
    colors: [{ name: "Blue", hex: "#4A90A4" }],
    inStock: true,
    featured: true,
    createdAt: "2026-01-05T00:00:00Z",
  },
  {
    id: "linen-shirt-sand",
    name: "Linen Shirt — Sand",
    slug: "linen-shirt-sand",
    description:
      "A lightweight linen shirt perfect for warm weather. Relaxed cut with a natural texture.",
    price: 72,
    images: ["/placeholders/product.svg"],
    category: getCollection("shirts"),
    collection: getCollection("shirts"),
    sizes: standardSizes,
    colors: [{ name: "Sand", hex: "#C2B280" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-10T00:00:00Z",
  },

  // ── Outerwear ──────────────────────────────────
  {
    id: "chore-jacket-olive",
    name: "Chore Jacket — Olive",
    slug: "chore-jacket-olive",
    description:
      "A durable canvas chore jacket with a boxy silhouette. Inspired by classic workwear.",
    price: 120,
    images: ["/placeholders/product.svg"],
    category: getCollection("outerwear"),
    collection: getCollection("outerwear"),
    sizes: standardSizes,
    colors: [{ name: "Olive", hex: "#556B2F" }],
    inStock: true,
    featured: true,
    createdAt: "2026-01-15T00:00:00Z",
  },
  {
    id: "bomber-jacket-black",
    name: "Bomber Jacket — Black",
    slug: "bomber-jacket-black",
    description:
      "A modern bomber jacket in matte black nylon. Ribbed cuffs and minimal branding.",
    price: 145,
    images: ["/placeholders/product.svg"],
    category: getCollection("outerwear"),
    collection: getCollection("outerwear"),
    sizes: standardSizes,
    colors: [{ name: "Black", hex: "#1A1A1A" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-20T00:00:00Z",
  },

  // ── Accessories ────────────────────────────────
  {
    id: "canvas-tote-natural",
    name: "Canvas Tote — Natural",
    slug: "canvas-tote-natural",
    description:
      "A heavy-duty canvas tote bag with reinforced handles. Perfect for daily use.",
    price: 28,
    images: ["/placeholders/product.svg"],
    category: getCollection("accessories"),
    collection: getCollection("accessories"),
    sizes: ["One Size"],
    colors: [{ name: "Natural", hex: "#F5F5DC" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-25T00:00:00Z",
  },
  {
    id: "corduroy-cap-brown",
    name: "Corduroy Cap — Brown",
    slug: "corduroy-cap-brown",
    description:
      "A 5-panel corduroy cap with an adjustable strap. Casual and versatile.",
    price: 32,
    images: ["/placeholders/product.svg"],
    category: getCollection("accessories"),
    collection: getCollection("accessories"),
    sizes: ["One Size"],
    colors: [
      { name: "Brown", hex: "#8B6914" },
      { name: "Olive", hex: "#6B8E23" },
    ],
    inStock: true,
    featured: true,
    createdAt: "2026-02-01T00:00:00Z",
  },

  // ── Basics ─────────────────────────────────────
  {
    id: "heavyweight-hoodie-grey",
    name: "Heavyweight Hoodie — Grey",
    slug: "heavyweight-hoodie-grey",
    description:
      "A 400gsm heavyweight french terry hoodie. Oversized fit with a kangaroo pocket.",
    price: 85,
    images: ["/placeholders/product.svg"],
    category: getCollection("basics"),
    collection: getCollection("basics"),
    sizes: standardSizes,
    colors: [{ name: "Heather Grey", hex: "#9E9E9E" }],
    inStock: true,
    featured: false,
    createdAt: "2026-02-05T00:00:00Z",
  },
  {
    id: "sweatpants-charcoal",
    name: "Sweatpants — Charcoal",
    slug: "sweatpants-charcoal",
    description:
      "Relaxed-fit sweatpants in brushed cotton fleece. Elastic waist with a drawcord.",
    price: 68,
    images: ["/placeholders/product.svg"],
    category: getCollection("basics"),
    collection: getCollection("basics"),
    sizes: standardSizes,
    colors: [{ name: "Charcoal", hex: "#36454F" }],
    inStock: true,
    featured: false,
    createdAt: "2026-02-10T00:00:00Z",
  },
];

// ============================================
// Helper Functions
// ============================================

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.category?.slug === categorySlug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter(
    (product) => product.collection?.slug === collectionSlug
  );
}
