import Link from "next/link";
import { Button } from "@/components/ui/button";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <h2 className="text-2xl font-semibold mb-2">No products found</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        We couldn&apos;t find any products matching your filters. Try adjusting your search or filters.
      </p>
      <Link href="/shop">
        <Button variant="outline">Clear all filters</Button>
      </Link>
    </div>
  );
}
