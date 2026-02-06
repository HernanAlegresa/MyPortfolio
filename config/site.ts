// ============================================
// SITE CONFIGURATION — Edit this file to rebrand
// ============================================
// This is the single source of truth for your site's
// identity, navigation, social links, and contact info.
// Change these values first when starting a new project.

export const siteConfig = {
  // ── Brand ──────────────────────────────────────
  name: "Starter Template",
  shortName: "Starter",
  description:
    "A modern, production-ready Next.js starter template for portfolios, business sites, and e-commerce stores.",
  tagline: "Build something great.",

  // ── URLs ───────────────────────────────────────
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  ogImage: "/og-image.png",

  // ── Contact ────────────────────────────────────
  email: "hello@example.com",
  location: "Your City, Country",
  responseTime: "Within 24 hours",

  // ── Social Links (set to "" to hide) ───────────
  social: {
    twitter: "https://twitter.com/yourhandle",
    instagram: "https://instagram.com/yourhandle",
    github: "https://github.com/yourhandle",
    linkedin: "",
  },

  // ── Navigation ─────────────────────────────────
  // Modify these arrays to change what appears in the header/footer.
  // For a portfolio site, you might use:
  //   { href: "/projects", label: "Projects" }
  // For a store:
  //   { href: "/shop", label: "Shop" }
  mainNav: [
    { href: "/shop", label: "Shop" },
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],

  footerNav: {
    shop: [{ href: "/shop", label: "All Products" }],
    company: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/shipping", label: "Shipping" },
    ],
  },

  // ── SEO / Metadata ─────────────────────────────
  keywords: [
    "starter template",
    "next.js",
    "react",
    "tailwind css",
    "e-commerce",
    "portfolio",
  ],
  authors: [{ name: "Your Name" }],
  locale: "en_US",

  // ── Announcement Bar ───────────────────────────
  // Set to "" to hide the announcement bar.
  announcement: "Free shipping on orders over $100",

  // ── Feature Flags ──────────────────────────────
  // Toggle major site sections on/off.
  // When disabled, related nav links, sitemap entries,
  // and layout providers are excluded automatically.
  features: {
    store: true, // Shop pages, cart, product catalog
    waitlist: true, // Newsletter / waitlist signup form
    portfolio: false, // Portfolio / projects section
  },

  // ── Store Settings ─────────────────────────────
  // Currency symbol used in product displays.
  currency: "USD",
  currencySymbol: "$",
} as const;

// Type helper for consuming the config
export type SiteConfig = typeof siteConfig;
