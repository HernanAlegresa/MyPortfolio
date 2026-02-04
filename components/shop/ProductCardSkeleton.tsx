import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="space-y-3">
      {/* Image */}
      <Skeleton className="aspect-[3/4] w-full rounded-lg" />
      {/* Title */}
      <Skeleton className="h-4 w-3/4" />
      {/* Description */}
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-2/3" />
      {/* Price */}
      <Skeleton className="h-5 w-20" />
    </div>
  );
}
