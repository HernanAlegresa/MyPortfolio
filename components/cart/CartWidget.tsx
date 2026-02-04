"use client";

import { useCart } from "@/contexts/CartContext";
import { ShoppingBag, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CartDrawer } from "./CartDrawer";
import { cn } from "@/lib/utils";

export function CartWidget() {
  const { cart, toggleCart, isOpen } = useCart();

  return (
    <>
      <button
        onClick={toggleCart}
        className={cn(
          "relative p-2 rounded-full transition-colors",
          "hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
          "flex items-center justify-center"
        )}
        aria-label="Shopping cart"
      >
        <ShoppingBag className="h-6 w-6" />
        {cart.itemCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={cn(
              "absolute -top-1 -right-1 h-5 w-5 rounded-full",
              "bg-black text-white text-xs font-bold",
              "flex items-center justify-center"
            )}
          >
            {cart.itemCount > 9 ? "9+" : cart.itemCount}
          </motion.span>
        )}
      </button>

      <CartDrawer isOpen={isOpen} onClose={toggleCart} />
    </>
  );
}
