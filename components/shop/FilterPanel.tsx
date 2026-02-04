"use client";

import { useMemo } from "react";
import { useShopFilters } from "@/hooks/useShopFilters";
import { getAvailableFilters } from "@/lib/shop/filters";
import { getAllProducts } from "@/data/products";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Size } from "@/lib/types/product";

const SIZES: Size[] = ["S", "M", "L", "XL"];

export function FilterPanel() {
  const {
    filters,
    toggleCategory,
    toggleSize,
    toggleColor,
    setPriceRange,
    clearFilters,
    hasFilters,
  } = useShopFilters();

  const allProducts = useMemo(() => getAllProducts(), []);
  const availableFilters = useMemo(
    () => getAvailableFilters(allProducts),
    [allProducts]
  );

  const sizes = SIZES;

  return (
    <aside className="w-full md:w-64 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-sm"
          >
            Clear all
          </Button>
        )}
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-medium mb-3">Category</h3>
        <div className="space-y-2">
          {availableFilters.categories.map((categorySlug) => {
            const isChecked = filters.category?.includes(categorySlug) || false;
            return (
              <label
                key={categorySlug}
                className={cn(
                  "flex items-center gap-2 cursor-pointer",
                  "hover:text-gray-900 transition-colors"
                )}
              >
                <Checkbox
                  checked={isChecked}
                  onChange={() => toggleCategory(categorySlug)}
                  aria-label={`Filter by ${categorySlug}`}
                />
                <span className="text-sm capitalize">
                  {categorySlug.replace(/-/g, " ")}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="text-sm font-medium mb-3">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => {
            const isChecked = filters.size?.includes(size) || false;
            return (
              <label
                key={size}
                className={cn(
                  "flex items-center justify-center w-10 h-10 border rounded-md cursor-pointer",
                  "hover:border-gray-900 transition-colors",
                  isChecked && "border-black bg-black text-white"
                )}
              >
                <Checkbox
                  checked={isChecked}
                  onChange={() => toggleSize(size)}
                  className="sr-only"
                  aria-label={`Filter by size ${size}`}
                />
                <span className="text-sm font-medium">{size}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="text-sm font-medium mb-3">Color</h3>
        <div className="space-y-2">
          {availableFilters.colors.map((colorName) => {
            const isChecked = filters.color?.includes(colorName) || false;
            return (
              <label
                key={colorName}
                className={cn(
                  "flex items-center gap-2 cursor-pointer",
                  "hover:text-gray-900 transition-colors"
                )}
              >
                <Checkbox
                  checked={isChecked}
                  onChange={() => toggleColor(colorName)}
                  aria-label={`Filter by color ${colorName}`}
                />
                <span className="text-sm capitalize">{colorName}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="text-sm font-medium mb-3">Price</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="Min"
              min="0"
              step="0.01"
              value={filters.minPrice || ""}
              onChange={(e) => {
                const value = e.target.value
                  ? parseFloat(e.target.value)
                  : undefined;
                setPriceRange(value, filters.maxPrice);
              }}
              className="w-full"
              aria-label="Minimum price"
            />
            <span className="text-sm text-gray-500">to</span>
            <Input
              type="number"
              placeholder="Max"
              min="0"
              step="0.01"
              value={filters.maxPrice || ""}
              onChange={(e) => {
                const value = e.target.value
                  ? parseFloat(e.target.value)
                  : undefined;
                setPriceRange(filters.minPrice, value);
              }}
              className="w-full"
              aria-label="Maximum price"
            />
          </div>
          <p className="text-xs text-gray-500">
            ${availableFilters.priceRange.min.toFixed(2)} - $
            {availableFilters.priceRange.max.toFixed(2)}
          </p>
        </div>
      </div>
    </aside>
  );
}
