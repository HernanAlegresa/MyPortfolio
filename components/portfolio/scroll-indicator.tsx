"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const reduceMotion = useReducedMotion();

  const Wrapper = reduceMotion ? "div" : motion.div;
  const animateProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.2, duration: 0.6 },
      };

  return (
    <Wrapper
      {...animateProps}
      className="flex flex-col items-center gap-1 text-muted-foreground/40"
    >
      <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      <ChevronDown className="h-4 w-4 animate-bounce" />
    </Wrapper>
  );
}
