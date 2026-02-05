"use client";

import { ProductImage } from "@/components/ui/product-image";
import Link from "next/link";
import { ShoppingBag, Clock, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

const FREE_SHIPPING_THRESHOLD = 100;

export function CheckoutContent() {
  const { cart } = useCart();

  const shippingCost =
    cart.total >= FREE_SHIPPING_THRESHOLD ? 0 : 4.99;
  const orderTotal = cart.total + shippingCost;

  if (cart.items.length === 0) {
    return (
      <div className="mx-auto max-w-md py-16 text-center">
        <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-gray-300" />
        <h1 className="mb-2 text-2xl font-bold">Your cart is empty</h1>
        <p className="mb-6 text-gray-600">Add some products to get started</p>
        <Link href="/shop">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl pt-8">
      <div className="grid gap-8 md:grid-cols-5">
        {/* Left: Coming Soon Message */}
        <div className="md:col-span-3">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-900">
              <Clock className="h-8 w-8 text-white" />
            </div>

            <h1 className="mb-3 text-2xl font-semibold text-gray-900">
              Checkout Coming Soon
            </h1>

            <p className="mb-6 text-gray-500 leading-relaxed">
              We&apos;re putting the finishing touches on our store.
              <br />
              Online purchases will be available very soon.
            </p>

            <div className="mb-8 rounded-lg bg-gray-100 p-4">
              <p className="text-sm text-gray-600">
                Want to be notified when we launch?
              </p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                Follow us or check back soon!
              </p>
            </div>

            <Link href="/shop">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Continue Browsing
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Order Summary (Preview) */}
        <div className="md:col-span-2">
          <div className="sticky top-32 rounded-lg border border-gray-200 p-5">
            <h2 className="mb-4 text-lg font-semibold">Your Cart</h2>
            <div className="space-y-3">
              {cart.items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-gray-100">
                    <ProductImage
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-[10px] font-bold text-white">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex flex-1 items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{item.product.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.size} / {item.color.name}
                      </p>
                    </div>
                    <p className="text-sm font-medium">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2 border-t pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${cart.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>
                  {shippingCost === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    `$${shippingCost.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2 text-base font-bold">
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-4 rounded-md bg-amber-50 p-3 text-center">
              <p className="text-xs text-amber-800">
                Checkout not available in preview mode
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
