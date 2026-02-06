"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

// ============================================
// HERO SECTION — Customize for your project
// ============================================
// Option A (Store): Full-bleed product image with CTA
// Option B (Portfolio): Text-based hero with tagline
// Option C (Business): Split layout with image + copy
//
// Replace the placeholder below with your hero image:
//   /public/hero/hero-image.jpeg (desktop)
//   /public/hero/hero_mobile.jpeg (mobile)

export function Hero() {
  return (
    <section id="hero" className="relative w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full min-h-[60vh] md:min-h-[70vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center"
      >
        {/* Placeholder hero — replace with Image component when you have images */}
        <div className="text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            {siteConfig.name}
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto">
            {siteConfig.tagline}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
