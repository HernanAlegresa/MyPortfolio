import type { Product, Size } from "@/lib/types/product";
import { categories } from "./categories";
import { collections } from "./collections";

// Standard sizes for apparel
const standardSizes: Size[] = ["XS", "S", "M", "L", "XL"];

// Helper to get category and collection by id
const getCategory = (id: string) => categories.find((c) => c.id === id)!;
const getCollection = (id: string) => collections.find((c) => c.id === id)!;

export const products: Product[] = [
  // ============================================
  // CATEGORY: Polos (Collection: Core Sh!rt)
  // ============================================
  {
    id: "rugby-stripe-shrt",
    name: "Rugby Stripe Sh!rt",
    slug: "rugby-stripe-shrt",
    description:
      "Short sleeve rugby-style polo with bold horizontal stripes. Relaxed fit with a vintage-inspired streetwear look.",
    price: 42,
    images: [
      "/products/rugby-stripe-shrt/rugby-stripe-shrt-1.jpg",
      "/products/rugby-stripe-shrt/rugby-stripe-shrt-2.jpg",
    ],
    category: getCategory("polos"),
    collection: getCollection("core-shrt"),
    sizes: standardSizes,
    colors: [{ name: "Stripe", hex: "#2C3E50" }],
    inStock: true,
    featured: true,
    createdAt: "2025-01-15T00:00:00Z",
  },
  {
    id: "raglan-shrt",
    name: "Raglan Sh!rt",
    slug: "raglan-shrt",
    description:
      "Short sleeve raglan polo with contrast panels and a relaxed silhouette. Designed for everyday streetwear with a sport-inspired feel.",
    price: 44,
    images: [
      "/products/raglan-shrt-charcoal/raglan-shrt-charcoal-3.jpeg",
      "/products/raglan-shrt-charcoal/raglan-shrt-charcoal-4.jpeg",
      "/products/raglan-shrt-charcoal/raglan-shrt-charcoal-5.jpeg",
      "/products/raglan-shrt-charcoal/raglan-shrt-charcoal-6.jpeg",
      "/products/raglan-shrt-butter/raglan-shrt-butter-3.jpeg",
      "/products/raglan-shrt-butter/raglan-shrt-butter-4.jpeg",
      "/products/raglan-shrt-butter/raglan-shrt-butter-5.jpeg",
      "/products/raglan-shrt-charcoal/raglan-shrt-charcoal-1.jpg",
      "/products/raglan-shrt-charcoal/raglan-shrt-charcoal-2.jpg",
      "/products/raglan-shrt-butter/raglan-shrt-butter-1.jpg",
      "/products/raglan-shrt-butter/raglan-shrt-butter-2.jpg",
    ],
    category: getCategory("polos"),
    collection: getCollection("core-shrt"),
    sizes: standardSizes,
    colors: [
      { name: "Charcoal", hex: "#36454F" },
      { name: "Butter", hex: "#F5E6C8" },
    ],
    inStock: true,
    featured: true,
    createdAt: "2025-01-15T00:00:00Z",
  },

  // ============================================
  // CATEGORY: Flannel Shirts – Long Sleeve
  // ============================================
  {
    id: "classic-flannel-shrt",
    name: "Classic Flannel Sh!rt",
    slug: "classic-flannel-shrt",
    description:
      "Long sleeve flannel shirt with a relaxed fit and timeless plaid pattern. An easy everyday layer for casual streetwear looks.",
    price: 49,
    images: [
      "/products/classic-flannel-shrt/classic-flannel-shrt-3.jpeg",
      "/products/classic-flannel-shrt/classic-flannel-shrt-4.jpeg",
      "/products/classic-flannel-shrt/classic-flannel-shrt-5.jpeg",
      "/products/classic-flannel-shrt/classic-flannel-shrt-1.png",
      "/products/classic-flannel-shrt/classic-flannel-shrt-2.png",
    ],
    category: getCategory("flannel-long-sleeve"),
    collection: getCollection("core-shrt"),
    sizes: standardSizes,
    colors: [{ name: "Classic Plaid", hex: "#8B4513" }],
    inStock: true,
    featured: true,
    createdAt: "2025-01-20T00:00:00Z",
  },
  {
    id: "raw-flannel-shrt",
    name: "Raw Flannel Sh!rt",
    slug: "raw-flannel-shrt",
    description:
      "Heavy long sleeve flannel shirt with raw, distressed details. Workwear-inspired piece designed for layering and durability.",
    price: 52,
    images: [
      "/products/raw-flannel-shrt/raw-flannel-shrt-2.jpeg",
      "/products/raw-flannel-shrt/raw-flannel-shrt-1.jpg",
    ],
    category: getCategory("flannel-long-sleeve"),
    collection: getCollection("work-shrt"),
    sizes: standardSizes,
    colors: [{ name: "Raw Indigo", hex: "#3D5A80" }],
    inStock: true,
    featured: false,
    createdAt: "2025-01-25T00:00:00Z",
  },
  {
    id: "patchwork-shrt-long-sleeve-blue-yellow",
    name: "Patchwork Sh!rt (Long Sleeve) – Blue Yellow",
    slug: "patchwork-shrt-long-sleeve-blue-yellow",
    description:
      "Oversized long sleeve flannel built from mixed plaid panels. A bold patchwork piece with a strong workwear and street identity.",
    price: 58,
    images: [
      "/products/patchwork-shrt-long-sleeve-blue-yellow/patchwork-shrt-long-sleeve-blue-yellow-4.jpeg",
      "/products/patchwork-shrt-long-sleeve-blue-yellow/patchwork-shrt-long-sleeve-blue-yellow-5.jpeg",
      "/products/patchwork-shrt-long-sleeve-blue-yellow/patchwork-shrt-long-sleeve-blue-yellow-1.jpg",
      "/products/patchwork-shrt-long-sleeve-blue-yellow/patchwork-shrt-long-sleeve-blue-yellow-2.jpg",
      "/products/patchwork-shrt-long-sleeve-blue-yellow/patchwork-shrt-long-sleeve-blue-yellow-3.jpg",
    ],
    category: getCategory("flannel-long-sleeve"),
    collection: getCollection("work-shrt"),
    sizes: standardSizes,
    colors: [{ name: "Blue / Yellow", hex: "#4A90A4" }],
    inStock: true,
    featured: true,
    createdAt: "2025-02-01T00:00:00Z",
  },
  {
    id: "patchwork-shrt-long-sleeve-earth-tones",
    name: "Patchwork Sh!rt (Long Sleeve) – Earth Tones",
    slug: "patchwork-shrt-long-sleeve-earth-tones",
    description:
      "Oversized long sleeve flannel built from mixed plaid panels. A bold patchwork piece with a strong workwear and street identity.",
    price: 58,
    images: [
      "/products/patchwork-shrt-long-sleeve-earth-tones/patchwork-shrt-long-sleeve-earth-tones-1.jpg",
      "/products/patchwork-shrt-long-sleeve-earth-tones/patchwork-shrt-long-sleeve-earth-tones-2.jpg",
    ],
    category: getCategory("flannel-long-sleeve"),
    collection: getCollection("work-shrt"),
    sizes: standardSizes,
    colors: [{ name: "Earth Tones", hex: "#8B7355" }],
    inStock: true,
    featured: false,
    createdAt: "2025-02-01T00:00:00Z",
  },
  {
    id: "patchwork-shrt-long-sleeve-multi-plaid",
    name: "Patchwork Sh!rt (Long Sleeve) – Multi Plaid",
    slug: "patchwork-shrt-long-sleeve-multi-plaid",
    description:
      "Oversized long sleeve flannel built from mixed plaid panels. A bold patchwork piece with a strong workwear and street identity.",
    price: 58,
    images: [
      "/products/patchwork-shrt-long-sleeve-multi-plaid/patchwork-shrt-long-sleeve-multi-plaid-3.jpeg",
      "/products/patchwork-shrt-long-sleeve-multi-plaid/patchwork-shrt-long-sleeve-multi-plaid-1.jpg",
      "/products/patchwork-shrt-long-sleeve-multi-plaid/patchwork-shrt-long-sleeve-multi-plaid-2.jpg",
    ],
    category: getCategory("flannel-long-sleeve"),
    collection: getCollection("work-shrt"),
    sizes: standardSizes,
    colors: [{ name: "Multi Plaid", hex: "#704214" }],
    inStock: true,
    featured: false,
    createdAt: "2025-02-01T00:00:00Z",
  },

  // ============================================
  // CATEGORY: Flannel Shirts – Short Sleeve
  // ============================================
  {
    id: "short-flannel-shrt",
    name: "Short Flannel Sh!rt",
    slug: "short-flannel-shrt",
    description:
      "Short sleeve flannel shirt with a relaxed, boxy fit. Designed for warm weather and casual street styling.",
    price: 42,
    images: [
      "/products/short-flannel-shrt/short-flannel-shrt-2.jpeg",
      "/products/short-flannel-shrt/short-flannel-shrt-3.jpeg",
      "/products/short-flannel-shrt/short-flannel-shrt-4.jpeg",
      "/products/short-flannel-shrt/short-flannel-shrt-1.jpg",
    ],
    category: getCategory("flannel-short-sleeve"),
    collection: getCollection("core-shrt"),
    sizes: standardSizes,
    colors: [{ name: "Summer Plaid", hex: "#C19A6B" }],
    inStock: true,
    featured: false,
    createdAt: "2025-02-05T00:00:00Z",
  },
  {
    id: "patchwork-shrt-short-sleeve",
    name: "Patchwork Sh!rt (Short Sleeve)",
    slug: "patchwork-shrt-short-sleeve",
    description:
      "Short sleeve patchwork flannel featuring mixed plaid panels. Lightweight and relaxed for summer streetwear looks.",
    price: 46,
    images: [
      "/products/patchwork-shrt-short-sleeve/patchwork-shrt-short-sleeve-4.jpeg",
      "/products/patchwork-shrt-short-sleeve/patchwork-shrt-short-sleeve-5.jpeg",
      "/products/patchwork-shrt-short-sleeve/patchwork-shrt-short-sleeve-6.jpeg",
      "/products/patchwork-shrt-short-sleeve/patchwork-shrt-short-sleeve-1.jpg",
      "/products/patchwork-shrt-short-sleeve/patchwork-shrt-short-sleeve-2.jpg",
      "/products/patchwork-shrt-short-sleeve/patchwork-shrt-short-sleeve-3.jpg",
    ],
    category: getCategory("flannel-short-sleeve"),
    collection: getCollection("work-shrt"),
    sizes: standardSizes,
    colors: [{ name: "Mixed Patchwork", hex: "#8B7355" }],
    inStock: true,
    featured: false,
    createdAt: "2025-02-10T00:00:00Z",
  },

  // ============================================
  // CATEGORY: Jackets
  // ============================================
  {
    id: "work-shrt-jacket",
    name: "Work Sh!rt Jacket",
    slug: "work-shrt-jacket",
    description:
      "Canvas workwear jacket with a boxy, relaxed fit. Inspired by classic chore jackets, designed for everyday use and durability.",
    price: 78,
    images: [
      "/products/work-shrt-jacket/work-shrt-jacket-3.jpeg",
      "/products/work-shrt-jacket/work-shrt-jacket-1.jpg",
      "/products/work-shrt-jacket/work-shrt-jacket-2.jpg",
    ],
    category: getCategory("jackets"),
    collection: getCollection("work-shrt"),
    sizes: standardSizes,
    colors: [{ name: "Black", hex: "#1A1A1A" }],
    inStock: true,
    featured: true,
    createdAt: "2025-02-15T00:00:00Z",
  },

  // ============================================
  // CATEGORY: Accessories
  // ============================================
  {
    id: "corduroy-cap",
    name: "Corduroy !Cap",
    slug: "corduroy-cap",
    description:
      "Corduroy 5-panel cap with a short brim and relaxed fit. A versatile everyday accessory with a workwear-inspired look.",
    price: 28,
    images: [
      "/products/corduroy-cap/corduroy-cap-5.jpeg",
      "/products/corduroy-cap/corduroy-cap-6.jpeg",
      "/products/corduroy-cap/corduroy-cap-1.jpg",
      "/products/corduroy-cap/corduroy-cap-2.jpg",
      "/products/corduroy-cap/corduroy-cap-3.jpg",
      "/products/corduroy-cap/corduroy-cap-4.jpg",
    ],
    category: getCategory("accessories"),
    collection: getCollection("work-shrt"),
    sizes: ["One Size"],
    colors: [
      { name: "Earth Brown", hex: "#8B6914" },
      { name: "Olive / Cream", hex: "#6B8E23" },
      { name: "Blue / Brown", hex: "#4A6FA5" },
      { name: "Rust / Sage", hex: "#B7410E" },
    ],
    inStock: true,
    featured: false,
    createdAt: "2025-02-20T00:00:00Z",
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
  return products.filter((product) => product.category.slug === categorySlug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter(
    (product) => product.collection.slug === collectionSlug
  );
}
