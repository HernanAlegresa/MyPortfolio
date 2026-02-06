import type { Category } from "@/lib/types/product";

// ============================================
// CATEGORIES — Edit these for your store
// ============================================
// Categories are used for filtering in the shop page.
// Keep them aligned with your collections for consistency.

export const categories: Category[] = [
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

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}
