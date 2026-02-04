import type { Metadata } from "next";
import { CheckoutContent } from "@/components/checkout/CheckoutContent";

export const metadata: Metadata = {
  title: "Checkout - Oh Sh!rt",
  description: "Complete your purchase",
};

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <CheckoutContent />
    </div>
  );
}
