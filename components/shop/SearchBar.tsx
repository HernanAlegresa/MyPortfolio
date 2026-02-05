"use client";

import { useState } from "react";
import { ShopSearchModal } from "./ShopSearchModal";

export function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsSearchOpen(true)}
        className="w-full flex items-center gap-3 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-left"
      >
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="text-gray-500">Search products...</span>
      </button>

      {/* Search Modal */}
      <ShopSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
