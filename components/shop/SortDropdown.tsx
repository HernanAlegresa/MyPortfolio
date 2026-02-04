"use client";

import { useShopSort } from "@/hooks/useShopSort";
import { useSearchParams } from "next/navigation";
import { Select } from "@/components/ui/select";
import type { SortOption } from "@/lib/types/product";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "relevance", label: "Relevance" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
  { value: "newest", label: "Newest" },
];

export function SortDropdown() {
  const { currentSort, updateSort } = useShopSort();
  const searchParams = useSearchParams();
  const hasSearch = !!searchParams.get("q");

  // Show "Relevance" only when there's a search query
  const visibleOptions = hasSearch
    ? sortOptions
    : sortOptions.filter((opt) => opt.value !== "relevance");

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700">
        Sort by:
      </label>
      <Select
        id="sort"
        value={currentSort === "relevance" && !hasSearch ? "newest" : currentSort}
        onChange={(e) => updateSort(e.target.value as SortOption)}
        className="w-48"
        aria-label="Sort products"
      >
        {visibleOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
}
