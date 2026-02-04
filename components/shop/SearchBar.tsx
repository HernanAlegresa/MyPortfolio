"use client";

import { useShopSearch } from "@/hooks/useShopSearch";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function SearchBar() {
  const { searchQuery, updateSearch, clearSearch } = useShopSearch();

  return (
    <div className="relative w-full max-w-md">
      <Input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => updateSearch(e.target.value)}
        className="pr-10"
        aria-label="Search products"
      />
      {searchQuery && (
        <button
          onClick={clearSearch}
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2 p-1",
            "hover:bg-gray-100 rounded-sm",
            "focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
            "transition-colors"
          )}
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
