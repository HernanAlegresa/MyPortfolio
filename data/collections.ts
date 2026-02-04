import type { Collection } from "@/lib/types/product";

export const collections: Collection[] = [
  {
    id: "core-shrt",
    name: "Core Sh!rt",
    slug: "core-shrt",
    description: "Everyday pieces, essential styles.",
  },
  {
    id: "work-shrt",
    name: "Work Sh!rt",
    slug: "work-shrt",
    description: "Workwear-inspired, heavier fabrics, patchwork, outerwear, accessories.",
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((col) => col.slug === slug);
}

export function getCollectionById(id: string): Collection | undefined {
  return collections.find((col) => col.id === id);
}
