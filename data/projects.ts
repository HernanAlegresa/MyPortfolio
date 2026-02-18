import type { Project } from "@/lib/types/portfolio";

export const projects: Project[] = [
  {
    slug: "card-shootout",
    title: "Card Shootout",
    oneLiner: "Football penalty shootout game inspired by collectible player cards.",
    overview:
      "Initially developed as a bootcamp final project using Flutter, Firebase, and BLoC. Later independently rebuilt and expanded as a long-term personal product using a modern web stack. Built and iterated gameplay logic, state management, UI/UX, and backend services. Original MVP: Flutter, Dart, Firebase, BLoC.",
    role: "Full Stack / Mobile Developer",
    stack: ["Remix", "React", "TypeScript", "Tailwind CSS", "Supabase", "Capacitor", "Git", "Figma"],
    tags: ["Game", "Mobile", "Full Stack"],
    highlights: [
      "Built gameplay loop logic and match state architecture for smooth sessions.",
      "Designed motion-driven UI feedback for player clarity and delight.",
      "Rebuilt from Flutter MVP to modern web stack for broader reach.",
      "Integrated Supabase for auth, data persistence, and storage.",
    ],
    coverImage: "/portfolio/card-shootout-cover.svg",
    heroVideo: "/portfolio/card-shootout-demo.mp4",
    posterImage: "/portfolio/card-shootout-poster.jpg",
    gallery: [
      // TODO: Replace with real screenshots/videos
      {
        type: "video",
        src: "/portfolio/card-shootout-demo.mp4",
        poster: "/portfolio/card-shootout-poster.jpg",
      },
      { type: "image", src: "/portfolio/gallery-1.svg", alt: "Card Shootout gameplay" },
      { type: "image", src: "/portfolio/gallery-2.svg", alt: "Card Shootout UI" },
    ],
    links: {
      // TODO: Add live/repo URLs when available
    },
    featured: true,
    year: "2025",
  },
  {
    slug: "keycliq",
    title: "KeyCliq",
    oneLiner: "AI-powered web app for physical key recognition and inventory management.",
    overview:
      "Designed and developed full-stack architecture including frontend, backend APIs, database, and AI integration. Implemented image recognition workflows to match uploaded key images against user inventories. Built scalable and auditable data models and secure APIs for key management and scanning flows. Iterated product logic based on real testing and performance metrics.",
    role: "Full Stack Developer",
    stack: ["React", "Remix", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Prisma", "PostgreSQL", "Cloudinary"],
    tags: ["AI", "Full Stack", "SaaS"],
    highlights: [
      "Designed end-to-end full-stack architecture from database to UI.",
      "Implemented AI-powered image recognition for key matching workflows.",
      "Built secure, auditable APIs for inventory and scanning operations.",
      "Iterated on product logic based on real testing and performance metrics.",
    ],
    coverImage: "/portfolio/keycliq-cover.svg",
    gallery: [
      // TODO: Replace with real screenshots
      { type: "image", src: "/portfolio/gallery-1.svg", alt: "KeyCliq dashboard" },
      { type: "image", src: "/portfolio/gallery-2.svg", alt: "KeyCliq scanning flow" },
    ],
    links: {
      // TODO: Add live/repo URLs when available
    },
    featured: true,
    year: "2025",
  },
  {
    slug: "oh-shirt",
    title: "Oh Sh!rt",
    oneLiner: "Headless e-commerce web platform for a men's streetwear brand.",
    overview:
      "Built and launched a modern e-commerce platform with Next.js 15, React, TypeScript, and Tailwind. Implemented reusable product data models, URL-based filtering, SEO optimization (metadata, JSON-LD, sitemap), cart logic with localStorage, modular checkout placeholder, Supabase form integrations, and production deployment on Vercel.",
    role: "Founder & Full Stack Developer",
    stack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    tags: ["E-Commerce", "Full Stack", "Brand"],
    highlights: [
      "Architected headless storefront with Next.js 15 App Router.",
      "Implemented SEO optimization with metadata, JSON-LD, and sitemap generation.",
      "Built cart logic with localStorage and modular checkout flow.",
      "Deployed to production on Vercel with Supabase form integrations.",
    ],
    coverImage: "/portfolio/oh-shirt-cover.svg",
    gallery: [
      // TODO: Replace with real screenshots
      { type: "image", src: "/portfolio/gallery-1.svg", alt: "Oh Sh!rt storefront" },
      { type: "image", src: "/portfolio/gallery-2.svg", alt: "Oh Sh!rt product page" },
    ],
    links: {
      // TODO: Add live/repo URLs when available
    },
    featured: true,
    year: "2025",
  },
  {
    slug: "shopify-integrations-rebl",
    title: "Shopify & Headless Integrations",
    oneLiner: "Shopify native + headless integrations and technical onboarding for client brands.",
    overview:
      "Professional work supporting integrations, onboarding processes, and adaptation to existing client codebases. Collaborated with international stakeholders for brands including Monica + Andy, SKKN, Greyson, Vici, and UTV. Focused on APIs, integrations, and clear technical communication.",
    role: "Full Stack Developer @ Rebl Tech",
    stack: ["Shopify", "Headless Commerce", "APIs", "TypeScript", "React"],
    tags: ["Integrations", "Shopify", "Client Work"],
    highlights: [
      "Supported Shopify native and headless architectures for multiple brands.",
      "Integrated APIs and adapted existing client repositories.",
      "Coordinated cross-functional delivery with international stakeholders.",
      "Standardized onboarding patterns to reduce client setup friction.",
    ],
    coverImage: "/portfolio/rebl-cover.svg",
    gallery: [
      // TODO: Replace with real screenshots
      { type: "image", src: "/portfolio/gallery-1.svg", alt: "Shopify integration flow" },
      { type: "image", src: "/portfolio/gallery-2.svg", alt: "Client onboarding UI" },
    ],
    links: {
      // TODO: Add live/repo URLs when available
    },
    featured: true,
    year: "2024",
  },
];

export function getAllProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
