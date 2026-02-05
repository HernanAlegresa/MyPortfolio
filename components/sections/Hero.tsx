"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="relative w-full">
      {/* Full-width Hero Image - preserves entire image with no cropping */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <Image
          src="/hero/hero-image.jpeg"
          alt="Oh Sh!rt"
          width={1920}
          height={1080}
          quality={95}
          priority
          className="w-full h-auto"
          sizes="100vw"
        />
      </motion.div>
    </section>
  );
}
