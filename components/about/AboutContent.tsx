"use client";

import Image from "next/image";
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
      "We focus on quality where it actually matters. Good fabrics, clean stitching, and carefully considered fits. Every piece is designed to feel right on the body and hold its shape over time.",
  },
  {
    icon: Leaf,
    title: "Thoughtful Design",
    description:
      "We design with intention, not trends. Our garments are calm, versatile, and well-balanced. They combine classic elements with a streetwear mindset that doesn't feel forced or exaggerated.",
  },
  {
    icon: Heart,
    title: "Made to Be Worn",
    description:
      "Our clothes are made to fit into your life. Whether you dress classic or lean more urban, our pieces adapt to your style. So you can look good without feeling dressed up or disguised.",
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
            Streetwear made with intention
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-600"
          >
            <span className="font-medium text-gray-900">Oh Sh!rt</span> was born in Uruguay with a clear idea in mind: create menswear that blends classic style with urban attitude.{" "}
            <span className="font-medium text-gray-900">Without exaggeration.</span>
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-[1.8] text-gray-500"
          >
            We believe streetwear doesn&apos;t need loud graphics, forced hype, or extreme designs to stand out. It should feel natural, wearable, and confident.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-[1.8] text-gray-500"
          >
            Our focus is simple: well-designed pieces, quality fabrics, and fits that look good without feeling like a costume.
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            {/* Brand Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src="/about/WhatsApp Image 2026-02-04 at 5.45.05 PM (2).jpeg"
                alt="Oh Sh!rt brand"
                fill
                className="object-cover object-[center_70%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Text */}
            <div className="space-y-6">
              <motion.h2
                {...fadeUp}
                className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
              >
                From concept to closet
              </motion.h2>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="text-xl font-medium leading-relaxed text-gray-800"
              >
                Oh Sh!rt started because we couldn&apos;t find what we wanted to wear.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                className="text-base leading-[1.85] text-gray-500"
              >
                Born in Uruguay, but built for everywhere. We create pieces for men who share the same mindset, no matter where they are.{" "}
                <span className="font-medium text-gray-700">Style without borders.</span>
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.2 }}
                className="text-base leading-[1.85] text-gray-500"
              >
                Our pieces combine classic silhouettes with a modern, urban feel. Designed to work just as well with straight jeans as with relaxed, oversized fits.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.25 }}
                className="text-base font-medium leading-[1.85] text-gray-700"
              >
                No overbranding. No unnecessary details. Just thoughtful design, clean construction, and garments made to be worn anywhere in the world.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="pb-20 sm:pb-28 lg:-mt-48">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            {/* Text - appears first on mobile, second on desktop */}
            <div className="order-2 space-y-5 text-center lg:order-1 lg:mt-[120px]">
              <motion.p
                {...fadeUp}
                className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400"
              >
                Meet the Founder
              </motion.p>
              <motion.h2
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
              >
                Hernan Alegresa
              </motion.h2>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.12 }}
                className="text-base text-gray-400"
              >
                24 years old. Uruguay.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                className="text-lg leading-[1.85] text-gray-500"
              >
                I play football and I enjoy dressing well, but I don&apos;t overthink it.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.18 }}
                className="text-lg leading-[1.85] text-gray-500"
              >
                I like clothes that feel comfortable, natural, and easy to wear. I care about style, but I also care about everything around it. Spending time with friends, being active, and enjoying everyday life.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.21 }}
                className="text-lg leading-[1.85] text-gray-500"
              >
                <span className="font-medium text-gray-700">Oh Sh!rt</span> is a personal project that reflects that balance. Simple pieces, made with intention, designed to fit naturally into real life, on and off the pitch.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.24 }}
                className="text-lg font-medium italic text-gray-600"
              >
                I believe good style should feel effortless.
              </motion.p>
            </div>

            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 lg:-mt-[140px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/about/myself.jpeg"
                  alt="Founder of Oh Sh!rt"
                  fill
                  className="object-cover object-[center_30%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
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
            Discover urban menswear designed for everyday wear.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mx-auto mt-3 max-w-xl text-base tracking-wide text-gray-400"
          >
            Made to last. Easy to style. Built with purpose.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className="mt-10"
          >
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-10 text-sm font-medium tracking-wide text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
