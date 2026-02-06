import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse our full product catalog.",
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
