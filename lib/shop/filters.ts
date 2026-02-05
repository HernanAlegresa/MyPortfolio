import type { Product, ShopFilters, SortOption } from "@/lib/types/product";

export function filterProducts(
  products: Product[],
  filters: ShopFilters,
  searchQuery?: string
): Product[] {
  let filtered = [...products];

  // Search filter
  if (searchQuery && searchQuery.trim()) {
    const query = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category?.name?.toLowerCase().includes(query) ||
        product.collection?.name?.toLowerCase().includes(query)
    );
  }

  // Category/Collection filter
  if (filters.category && filters.category.length > 0) {
    filtered = filtered.filter((product) =>
      filters.category!.includes(product.category?.slug) ||
      filters.category!.includes(product.collection?.slug)
    );
  }

  // Size filter
  if (filters.size && filters.size.length > 0) {
    filtered = filtered.filter((product) =>
      product.sizes.some((size) => filters.size!.includes(size))
    );
  }

  // Color filter
  if (filters.color && filters.color.length > 0) {
    filtered = filtered.filter((product) =>
      product.colors.some((color) => filters.color!.includes(color.name))
    );
  }

  // Price range filter
  if (filters.minPrice !== undefined) {
    filtered = filtered.filter((product) => product.price >= filters.minPrice!);
  }

  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter((product) => product.price <= filters.maxPrice!);
  }

  return filtered;
}

export function sortProducts(
  products: Product[],
  sortOption: SortOption,
  searchQuery?: string
): Product[] {
  const sorted = [...products];

  switch (sortOption) {
    case "relevance":
      // If there's a search query, relevance is already handled by filtering
      // Otherwise, show featured products first
      if (!searchQuery) {
        return sorted.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
      }
      return sorted;

    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);

    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);

    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));

    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));

    case "newest":
      return sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    default:
      return sorted;
  }
}

export function getAvailableFilters(products: Product[]): {
  categories: string[];
  sizes: string[];
  colors: string[];
  priceRange: { min: number; max: number };
} {
  const categories = new Set<string>();
  const sizes = new Set<string>();
  const colors = new Set<string>();
  let minPrice = Infinity;
  let maxPrice = -Infinity;

  products.forEach((product) => {
    // Use collection slug (category and collection are now the same)
    if (product.collection?.slug) {
      categories.add(product.collection.slug);
    }
    product.sizes.forEach((size) => sizes.add(size));
    product.colors.forEach((color) => colors.add(color.name));
    minPrice = Math.min(minPrice, product.price);
    maxPrice = Math.max(maxPrice, product.price);
  });

  return {
    categories: Array.from(categories).sort(),
    sizes: Array.from(sizes).sort(),
    colors: Array.from(colors).sort(),
    priceRange: {
      min: minPrice === Infinity ? 0 : minPrice,
      max: maxPrice === -Infinity ? 100 : maxPrice,
    },
  };
}
