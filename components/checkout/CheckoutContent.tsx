"use client";

import { useState } from "react";
import { ProductImage } from "@/components/ui/product-image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/contexts/ToastContext";
import { Button } from "@/components/ui/button";
import { CheckoutSteps } from "@/components/checkout/CheckoutSteps";
import { ShippingForm } from "@/components/checkout/ShippingForm";

const FREE_SHIPPING_THRESHOLD = 100;

interface ShippingData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}

const emptyShipping: ShippingData = {
  email: "",
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
};

export function CheckoutContent() {
  const { cart, clearCart } = useCart();
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [shippingData, setShippingData] = useState<ShippingData>(emptyShipping);

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

  const handleContactSubmit = (data: ShippingData) => {
    setShippingData(data);
    setStep(2);
  };

  const handleShippingSubmit = (data: ShippingData) => {
    setShippingData(data);
    setStep(3);
  };

  const handlePlaceOrder = () => {
    toast.success("Order placed! This is a demo — no payment was charged.");
    clearCart();
  };

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-4 text-3xl font-bold">Checkout</h1>

      <div className="mb-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-center text-xs text-gray-500">
        Demo checkout — no payment will be processed
      </div>

      <CheckoutSteps currentStep={step} />

      <div className="grid gap-8 md:grid-cols-5">
        {/* Left: Form */}
        <div className="md:col-span-3">
          {step === 1 && (
            <ShippingForm
              initialData={shippingData}
              onSubmit={handleContactSubmit}
              onBack={() => {}}
              step="contact"
            />
          )}

          {step === 2 && (
            <ShippingForm
              initialData={shippingData}
              onSubmit={handleShippingSubmit}
              onBack={() => setStep(1)}
              step="shipping"
            />
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Contact
                </h3>
                <p className="text-sm">
                  {shippingData.firstName} {shippingData.lastName}
                </p>
                <p className="text-sm text-gray-600">{shippingData.email}</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Ship to
                </h3>
                <p className="text-sm">{shippingData.address}</p>
                <p className="text-sm text-gray-600">
                  {shippingData.city}, {shippingData.state} {shippingData.zip}
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button onClick={handlePlaceOrder} className="flex-1" size="lg">
                  Place Order
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Right: Order Summary */}
        <div className="md:col-span-2">
          <div className="sticky top-24 rounded-lg border border-gray-200 p-5">
            <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
}
