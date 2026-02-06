import type { Collection } from "@/lib/types/product";

// ============================================
// COLLECTIONS — Edit these for your store
// ============================================
// Collections group products for browsing/marketing.
// Change names, slugs, and descriptions to match your vertical.
//
// Examples by vertical:
//   Furniture: "Living Room", "Bedroom", "Office"
//   Health:    "Supplements", "Skincare", "Wellness"
//   Clothing:  "T-Shirts", "Outerwear", "Accessories"

export const collections: Collection[] = [
  {
    id: "shirts",
    name: "Shirts",
    slug: "shirts",
    description: "Classic shirts for everyday wear.",
  },
  {
    id: "outerwear",
    name: "Outerwear",
    slug: "outerwear",
    description: "Jackets and layers for any season.",
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    description: "Hats, bags, and everyday essentials.",
  },
  {
    id: "basics",
    name: "Basics",
    slug: "basics",
    description: "Everyday staples in premium fabrics.",
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((col) => col.slug === slug);
}

export function getCollectionById(id: string): Collection | undefined {
  return collections.find((col) => col.id === id);
}
