"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [imageError, setImageError] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="brand-story" ref={sectionRef} className="min-h-screen flex items-center overflow-hidden bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image with parallax */}
          <motion.div
            style={{ y: imageY }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300"
          >
            {!imageError ? (
              <Image
                src="/lifestyle/lifestyle-1.jpeg"
                alt="Premium t-shirt craftsmanship and quality"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="flex h-full items-center justify-center text-gray-400">
                <span className="text-sm">Lifestyle image</span>
              </div>
            )}
          </motion.div>

          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500"
            >
              Our Philosophy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Less hype.
              <br />
              More substance.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-4 text-lg leading-relaxed text-gray-600"
            >
              We believe the best clothing doesn&apos;t need to shout. Every
              piece in our collection is designed to be versatile, durable,
              and effortlessly styled.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-lg leading-relaxed text-gray-600"
            >
              Premium fabrics, clean silhouettes, and a commitment to quality
              that you can feel from the first wear.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-gray-600"
              >
                Read Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
