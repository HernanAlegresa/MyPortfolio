"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function PreviewBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 py-2 text-center text-sm">
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>
            <span className="font-medium">Preview Mode</span>
          </span>
          <span className="hidden sm:inline text-gray-400">—</span>
          <span className="hidden sm:inline text-gray-300">
            Store is under development. Checkout coming soon.
          </span>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-2 p-1 text-gray-400 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
