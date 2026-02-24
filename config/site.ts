// ============================================
// SITE CONFIGURATION — Edit this file to rebrand
// ============================================
// This is the single source of truth for your site's
// identity, navigation, social links, and contact info.
// Change these values first when starting a new project.

export const siteConfig = {
  // ── Brand ──────────────────────────────────────
  name: "Hernán Alegresa",
  shortName: "Hernán",
  description:
    "Portfolio Personal de Hernán Alegresa, Desarrollador Full Stack de Uruguay. Construyo soluciones completas con foco en el producto, buena UI/UX y tecnologías web modernas.",
  tagline: "Construyo productos completos, no partes sueltas.",

  // ── URLs ───────────────────────────────────────
  // Set NEXT_PUBLIC_SITE_URL in .env.local for your real domain.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  ogImage: "/og-image.png",

  // ── Contact ────────────────────────────────────
  email: "alegresah@gmail.com",
  location: "Montevideo, Uruguay",
  responseTime: "Dentro de 24 horas",

  // ── Social Links (set to "" to hide) ───────────
  social: {
    twitter: "",
    instagram: "",
    github: "https://github.com/HernanAlegresa",
    linkedin: "https://www.linkedin.com/in/HernanAlegresa",
  },

  // ── Navigation ─────────────────────────────────
  // Not used directly — SiteHeader reads from the i18n dictionary.
  // Keep in sync as a reference.
  mainNav: [
    { href: "/projects", label: "Proyectos" },
    { href: "/about", label: "Sobre mí" },
    { href: "/contact", label: "Contacto" },
  ],

  footerNav: {
    portfolio: [
      { href: "/projects", label: "Proyectos" },
      { href: "/about", label: "Sobre mí" },
      { href: "/contact", label: "Contacto" },
    ],
    shop: [] as Array<{ href: string; label: string }>,
    company: [
      { href: "/projects", label: "Proyectos" },
      { href: "/about", label: "Sobre mí" },
      { href: "/contact", label: "Contacto" },
    ],
  },

  // ── SEO / Metadata ─────────────────────────────
  keywords: [
    "desarrollador full stack",
    "portfolio",
    "next.js",
    "react",
    "typescript",
    "uruguay",
    "hernán alegresa",
  ],
  authors: [{ name: "Hernán Alegresa" }],
  locale: "es_UY",

  // ── Announcement Bar ───────────────────────────
  // Set to "" to hide the announcement bar.
  announcement: "",

  // ── Feature Flags ──────────────────────────────
  // Toggle major site sections on/off.
  // When disabled, related nav links, sitemap entries,
  // and layout providers are excluded automatically.
  features: {
    store: false,     // Shop pages, cart, product catalog
    waitlist: false,  // Newsletter / waitlist signup form
    portfolio: true,  // Portfolio / projects section
  },

  // ── Store Settings ─────────────────────────────
  // Currency symbol used in product displays.
  currency: "USD",
  currencySymbol: "$",
} as const;

// Type helper for consuming the config
export type SiteConfig = typeof siteConfig;
