import { ProductCardSkeleton } from "@/components/shop/ProductCardSkeleton";

export function ProductGridSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header skeleton */}
      <div className="mb-8 space-y-4">
        <div className="h-10 w-32 animate-pulse rounded-md bg-gray-200" />
        <div className="h-10 w-full max-w-md animate-pulse rounded-md bg-gray-200" />
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
