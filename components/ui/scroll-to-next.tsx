"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollToNextProps {
  targetId: string;
  label?: string;
  className?: string;
}

export function ScrollToNext({ targetId, label = "Continue", className }: ScrollToNextProps) {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className={cn(
        "group absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 rounded-full",
        className
      )}
      aria-label={`Scroll to ${label}`}
    >
      {/* Label - appears on hover */}
      <span className="text-xs font-medium text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {label}
      </span>

      {/* Animated arrow */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="p-2 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm transition-colors group-hover:border-gray-400 group-hover:bg-white"
      >
        <ChevronDown className="h-5 w-5 text-gray-500 transition-colors group-hover:text-gray-700" />
      </motion.div>
    </motion.button>
  );
}
