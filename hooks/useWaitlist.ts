"use client";

import { useState, useCallback } from "react";

export type WaitlistStatus = "idle" | "loading" | "success" | "error";

interface UseWaitlistOptions {
  productId?: string;
  productName?: string;
}

export function useWaitlist({ productId, productName }: UseWaitlistOptions = {}) {
  const [status, setStatus] = useState<WaitlistStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const submitWaitlist = useCallback(
    async (email: string) => {
      setStatus("loading");
      setError(null);

      try {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          throw new Error("Please enter a valid email address");
        }

        // API call to waitlist endpoint
        const response = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, productId, productName }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Something went wrong");
        }

        setStatus("success");
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Something went wrong";
        setError(errorMessage);
        setStatus("error");
      }
    },
    [productId, productName]
  );

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
  }, []);

  return {
    status,
    error,
    submitWaitlist,
    reset,
    isLoading: status === "loading",
    isSuccess: status === "success",
    isError: status === "error",
  };
}
