import type { Project } from "@/lib/types/portfolio";

export const projects: Project[] = [
  {
    slug: "card-shootout",
    title: "Card Shootout",
    oneLiner: "Juego de penales de fútbol con cartas coleccionables, lógica de equipo y arquitectura de producto a largo plazo.",
    overview:
      "Initially developed as a bootcamp final project using Flutter, Firebase, and BLoC. Later independently rebuilt and expanded as a long-term personal product using a modern web stack. Built and iterated gameplay logic, state management, UI/UX, and backend services. Original MVP: Flutter, Dart, Firebase, BLoC.",
    role: "Full Stack / Mobile Developer",
    stack: ["Remix", "React", "TypeScript", "Tailwind CSS", "Supabase", "Capacitor", "Git", "Figma"],
    tags: ["Videojuego", "Mobile", "Full Stack"],
    highlights: [
      "Built gameplay loop logic and match state architecture for smooth sessions.",
      "Designed motion-driven UI feedback for player clarity and delight.",
      "Rebuilt from Flutter MVP to modern web stack for broader reach.",
      "Integrated Supabase for auth, data persistence, and storage.",
    ],
    coverImage: "/projects/card-shootout/cardshootout_projectpage.png",
    heroVideo: "/portfolio/card-shootout-demo.mp4",
    posterImage: "/projects/card-shootout/cardshootout_projectpage.png",
    gallery: [
      {
        type: "video",
        src: "/portfolio/card-shootout-demo.mp4",
        poster: "/projects/card-shootout/cardshootout_homescreen.png",
      },
      { type: "image", src: "/portfolio/gallery-1.svg", alt: "Card Shootout gameplay" },
      { type: "image", src: "/portfolio/gallery-2.svg", alt: "Card Shootout UI" },
    ],
    links: {},
    featured: true,
    year: "2025",
  },
  {
    slug: "keycliq",
    title: "KeyCliq",
    oneLiner: "App web con IA para reconocimiento de llaves físicas y gestión de inventario, desarrollada para cliente real en Canadá.",
    overview:
      "Designed and developed full-stack architecture including frontend, backend APIs, database, and AI integration. Implemented image recognition workflows to match uploaded key images against user inventories. Built scalable and auditable data models and secure APIs for key management and scanning flows. Iterated product logic based on real testing and performance metrics.",
    role: "Full Stack Developer",
    stack: ["React", "Remix", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Prisma", "PostgreSQL", "Cloudinary"],
    tags: ["IA", "Full Stack", "Cliente Real"],
    highlights: [
      "Designed end-to-end full-stack architecture from database to UI.",
      "Implemented AI-powered image recognition for key matching workflows.",
      "Built secure, auditable APIs for inventory and scanning operations.",
      "Iterated on product logic based on real testing and performance metrics.",
    ],
    coverImage: "/projects/keycliq/keycliq_welcome_screen.jpeg",
    heroVideo: "/portfolio/keycliq-demo.mp4",
    posterImage: "/projects/keycliq/keycliq_welcome_screen.jpeg",
    gallery: [
      {
        type: "video",
        src: "/portfolio/keycliq-demo.mp4",
        poster: "/projects/keycliq/keycliq_welcome_screen.jpeg",
      },
      { type: "image", src: "/portfolio/gallery-1.svg", alt: "KeyCliq dashboard" },
      { type: "image", src: "/portfolio/gallery-2.svg", alt: "KeyCliq scanning flow" },
    ],
    links: {
      live: "https://keycliq-personal.vercel.app/",
    },
    featured: true,
    year: "2025",
  },
  {
    slug: "oh-shirt",
    title: "Oh Sh!rt",
    oneLiner: "E-commerce headless para marca de ropa con SEO avanzado, carrito y arquitectura lista para escalar.",
    overview:
      "Built and launched a modern e-commerce platform with Next.js 15, React, TypeScript, and Tailwind. Implemented reusable product data models, URL-based filtering, SEO optimization (metadata, JSON-LD, sitemap), cart logic with localStorage, modular checkout placeholder, Supabase form integrations, and production deployment on Vercel.",
    role: "Founder & Full Stack Developer",
    stack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    tags: ["E-Commerce", "Headless", "SEO"],
    highlights: [
      "Architected headless storefront with Next.js 15 App Router.",
      "Implemented SEO optimization with metadata, JSON-LD, and sitemap generation.",
      "Built cart logic with localStorage and modular checkout flow.",
      "Deployed to production on Vercel with Supabase form integrations.",
    ],
    coverImage: "/projects/oh-shirt/ohshirt_desktop.png",
    heroVideo: "/projects/oh-shirt/ohshirt_demo.mp4",
    posterImage: "/projects/oh-shirt/ohshirt_desktop.png",
    gallery: [
      {
        type: "video",
        src: "/projects/oh-shirt/ohshirt_demo.mp4",
        poster: "/projects/oh-shirt/ohshirt_desktop.png",
      },
      { type: "image", src: "/portfolio/gallery-1.svg", alt: "Oh Sh!rt storefront" },
      { type: "image", src: "/portfolio/gallery-2.svg", alt: "Oh Sh!rt product page" },
    ],
    links: {
      live: "https://ohshirt.vercel.app/",
    },
    featured: true,
    year: "2025",
  },
  {
    slug: "shopify-integrations-rebl",
    title: "Shopify & Headless Integrations — Client Onboardings",
    oneLiner: "Onboardings e integraciones Shopify nativas y headless en producción real para marcas internacionales desde Rebl Tech.",
    overview:
      "Professional work supporting integrations, onboarding processes, and adaptation to existing client codebases. Collaborated with international stakeholders for brands including Monica + Andy, SKKN, Greyson, Vici, and UTV. Focused on APIs, integrations, and clear technical communication.",
    role: "Full Stack Developer @ Rebl Tech",
    stack: ["Shopify", "Headless Commerce", "APIs", "TypeScript", "React"],
    tags: ["Shopify", "Headless", "Onboardings"],
    highlights: [
      "Supported Shopify native and headless architectures for multiple brands.",
      "Integrated APIs and adapted existing client repositories.",
      "Coordinated cross-functional delivery with international stakeholders.",
      "Standardized onboarding patterns to reduce client setup friction.",
    ],
    coverImage: "/projects/shopify-integrations/shopify_integrations.jpeg",
    posterImage: "/projects/shopify-integrations/shopify_integrations.jpeg",
    gallery: [
      { type: "image", src: "/portfolio/gallery-1.svg", alt: "Shopify integration flow" },
      { type: "image", src: "/portfolio/gallery-2.svg", alt: "Client onboarding UI" },
    ],
    links: {},
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
