import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop - Oh Sh!rt",
  description: "Browse our collection of premium t-shirts",
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
