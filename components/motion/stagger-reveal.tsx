"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type StaggerRevealProps = {
  children: ReactNode;
  index?: number;
  className?: string;
};

export function StaggerReveal({ children, index = 0, className }: StaggerRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0.15 + index * 0.12,
      }}
    >
      {children}
    </motion.div>
  );
}
