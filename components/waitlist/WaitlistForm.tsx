"use client";

import { useState, FormEvent } from "react";
import { useWaitlist } from "@/hooks/useWaitlist";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  productId?: string;
  productName?: string;
  onSuccess?: () => void;
  variant?: "default" | "inline";
}

export function WaitlistForm({
  productId,
  productName,
  onSuccess,
  variant = "default",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const { submitWaitlist, status, error, isLoading, isSuccess } = useWaitlist({
    productId,
    productName,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    await submitWaitlist(email.trim());
    if (status === "success") {
      setEmail("");
      onSuccess?.();
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-4">
        <p className="text-green-600 font-medium mb-2">
          ✓ You've been added to the waitlist!
        </p>
        <p className="text-sm text-gray-600">
          We'll notify you when this product is available.
        </p>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          required
          className="flex-1"
          aria-label="Email address"
        />
        <Button type="submit" disabled={isLoading || !email.trim()}>
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
        {error && (
          <p className="text-sm text-red-600 mt-1 col-span-2">{error}</p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="waitlist-email" className="block text-sm font-medium mb-2">
          Email Address
        </label>
        <Input
          id="waitlist-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          required
          aria-label="Email address"
          aria-invalid={!!error}
          aria-describedby={error ? "waitlist-error" : undefined}
        />
        {error && (
          <p id="waitlist-error" className="text-sm text-red-600 mt-1">
            {error}
          </p>
        )}
      </div>
      <Button type="submit" disabled={isLoading || !email.trim()} className="w-full">
        {isLoading ? "Subscribing..." : "Notify Me When Available"}
      </Button>
    </form>
  );
}
