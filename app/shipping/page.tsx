import type { Metadata } from "next";
import { Truck, Package, RefreshCw, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description: `Shipping rates, delivery times, and return policy for ${siteConfig.name} orders.`,
};

const shippingRates = [
  {
    method: "Standard Shipping",
    time: "5-7 business days",
    price: "$4.99",
    note: "Free on orders over $100",
  },
  {
    method: "Express Shipping",
    time: "2-3 business days",
    price: "$12.99",
    note: null,
  },
  {
    method: "Overnight Shipping",
    time: "1 business day",
    price: "$24.99",
    note: "Order by 2pm EST",
  },
  {
    method: "International Shipping",
    time: "10-15 business days",
    price: "Calculated at checkout",
    note: "Duties & taxes may apply",
  },
];

const policies = [
  {
    icon: Truck,
    title: "Fast Fulfillment",
    description:
      "Orders placed before 2pm EST on business days are processed the same day. You'll receive a tracking number via email once your order ships.",
  },
  {
    icon: Package,
    title: "Eco-Friendly Packaging",
    description:
      "All orders are shipped in recyclable packaging. We minimize waste without compromising the protection of your items.",
  },
  {
    icon: RefreshCw,
    title: "30-Day Returns",
    description:
      "Not the right fit? Return any unworn item with original tags within 30 days for a full refund. We provide a prepaid return label.",
  },
  {
    icon: Globe,
    title: "Worldwide Delivery",
    description:
      "We ship to most countries. International delivery times vary by location. Import duties and taxes are the responsibility of the buyer.",
  },
];

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Shipping & Returns
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about getting your order to your door.
          </p>
        </div>

        {/* Shipping Rates Table */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Shipping Rates</h2>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-semibold sm:px-6">
                    Method
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold sm:px-6">
                    Delivery Time
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold sm:px-6">
                    Cost
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {shippingRates.map((rate) => (
                  <tr key={rate.method}>
                    <td className="px-4 py-4 sm:px-6">
                      <p className="font-medium">{rate.method}</p>
                      {rate.note && (
                        <p className="mt-0.5 text-sm text-gray-500">
                          {rate.note}
                        </p>
                      )}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 sm:px-6">
                      {rate.time}
                    </td>
                    <td className="px-4 py-4 text-sm font-medium sm:px-6">
                      {rate.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Policies Grid */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Our Policies</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="rounded-lg border border-gray-200 p-6"
              >
                <policy.icon className="mb-3 h-6 w-6" strokeWidth={1.5} />
                <h3 className="mb-2 text-lg font-semibold">{policy.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {policy.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Return Process */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">How Returns Work</h2>
          <div className="space-y-4">
            {[
              `Contact us at ${siteConfig.email} with your order number`,
              "We'll send you a prepaid return shipping label",
              "Pack the item(s) in their original condition with tags attached",
              "Drop off the package at any carrier location",
              "Refund is processed within 5-7 business days of receiving the return",
            ].map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-medium text-white">
                  {index + 1}
                </div>
                <p className="pt-1 text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
