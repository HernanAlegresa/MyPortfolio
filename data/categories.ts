import type { Category } from "@/lib/types/product";

export const categories: Category[] = [
  {
    id: "polos",
    name: "Polos",
    slug: "polos",
  },
  {
    id: "flannel-long-sleeve",
    name: "Flannel Shirts – Long Sleeve",
    slug: "flannel-long-sleeve",
  },
  {
    id: "flannel-short-sleeve",
    name: "Flannel Shirts – Short Sleeve",
    slug: "flannel-short-sleeve",
  },
  {
    id: "jackets",
    name: "Jackets",
    slug: "jackets",
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}
