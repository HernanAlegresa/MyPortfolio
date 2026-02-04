"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Gem, Leaf, Heart } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const values = [
  {
    icon: Gem,
    title: "Quality First",
    description:
      "Every piece is crafted from premium fabrics, designed to look sharp and feel comfortable — wash after wash, wear after wear.",
  },
  {
    icon: Leaf,
    title: "Conscious Craft",
    description:
      "We believe great clothing shouldn't cost the earth. Our manufacturing partners share our commitment to responsible production.",
  },
  {
    icon: Heart,
    title: "Built for You",
    description:
      "No hype cycles, no disposable trends. We design versatile pieces that fit seamlessly into your everyday wardrobe.",
  },
];

export function AboutContent() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            {...fadeUp}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500"
          >
            Our Story
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Streetwear that speaks for itself
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600"
          >
            Oh Sh!rt was born from a simple idea: premium quality streetwear
            shouldn&apos;t be complicated. We strip away the noise and let the
            craftsmanship do the talking.
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200"
            >
              <div className="flex h-full items-center justify-center text-gray-400">
                <span className="text-sm">Brand image</span>
              </div>
            </motion.div>

            {/* Text */}
            <div className="space-y-6">
              <motion.h2
                {...fadeUp}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                From concept to closet
              </motion.h2>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="text-lg leading-relaxed text-gray-600"
              >
                We started Oh Sh!rt because we were tired of choosing between
                quality and price. Too many brands charge a premium for a logo,
                not the product. We flipped that equation.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                className="text-lg leading-relaxed text-gray-600"
              >
                Every piece in our collection starts with the fabric. We source
                premium cotton blends and work with skilled manufacturers to
                ensure every stitch, hem, and finish meets our standard. The
                result is clothing that looks intentional and lasts.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.2 }}
                className="text-lg leading-relaxed text-gray-600"
              >
                Our designs are rooted in streetwear culture but built for
                real life — clean lines, versatile palettes, and fits that
                work whether you&apos;re out or staying in.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What we stand for
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Three principles that guide everything we make.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <value.icon className="mb-4 h-8 w-8" strokeWidth={1.5} />
                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            {...fadeUp}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            See it for yourself
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-lg text-gray-600"
          >
            Browse our collection and find your next go-to piece.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href="/shop"
              className="inline-flex h-11 items-center justify-center rounded-md bg-black px-8 font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
