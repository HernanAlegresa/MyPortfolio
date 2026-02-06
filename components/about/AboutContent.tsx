"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Gem, Leaf, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";

// ============================================
// ABOUT PAGE — Replace this content with your own
// ============================================
// This component is the entire about page.
// For a portfolio site, you could rename sections to:
//   "My Background", "Skills", "Experience"
// For a business site:
//   "Our Mission", "Our Team", "Our Values"

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
      "We focus on quality where it actually matters. Thoughtful engineering, clean design, and carefully considered user experiences.",
  },
  {
    icon: Leaf,
    title: "Thoughtful Design",
    description:
      "We design with intention, not trends. Our work combines proven patterns with modern sensibilities, creating solutions that feel natural.",
  },
  {
    icon: Heart,
    title: "Built to Last",
    description:
      "Everything we make is built for the long term. Maintainable code, scalable architecture, and experiences that stand the test of time.",
  },
];

export function AboutContent() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-50 py-28 sm:py-36">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            {...fadeUp}
            className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-gray-400"
          >
            Our Story
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Built with intention
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-600"
          >
            <span className="font-medium text-gray-900">{siteConfig.name}</span> was
            created with a simple goal: deliver great products with honest
            quality.{" "}
            <span className="font-medium text-gray-900">No shortcuts.</span>
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-[1.8] text-gray-500"
          >
            We believe the best work speaks for itself. Clear communication,
            clean execution, and a commitment to doing things right.
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300"
            >
              <div className="flex h-full items-center justify-center text-gray-400">
                <span className="text-sm">Replace with your image</span>
              </div>
            </motion.div>

            {/* Text */}
            <div className="space-y-6">
              <motion.h2
                {...fadeUp}
                className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
              >
                From idea to reality
              </motion.h2>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="text-xl font-medium leading-relaxed text-gray-800"
              >
                We started because we saw a gap between what existed and what could be.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                className="text-base leading-[1.85] text-gray-500"
              >
                Every project begins with understanding. We take the time to
                learn what matters, then build solutions that are both beautiful
                and practical.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.2 }}
                className="text-base leading-[1.85] text-gray-500"
              >
                Our approach is iterative and collaborative. We believe the best
                results come from combining technical excellence with creative
                thinking.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.25 }}
                className="text-base font-medium leading-[1.85] text-gray-700"
              >
                No overcomplication. No unnecessary complexity. Just thoughtful
                work, delivered with care.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              What we stand for
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-500">
              Three principles that guide everything we make.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-sm sm:p-10"
              >
                <value.icon className="mb-5 h-7 w-7 text-gray-800" strokeWidth={1.5} />
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">{value.title}</h3>
                <p className="text-sm leading-[1.8] text-gray-500">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            {...fadeUp}
            className="mx-auto max-w-xl text-xl font-medium leading-relaxed text-gray-800 sm:text-2xl"
          >
            Ready to see what we can build together?
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mx-auto mt-3 max-w-xl text-base tracking-wide text-gray-400"
          >
            Quality work. Clean design. Built with purpose.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-10 text-sm font-medium tracking-wide text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
