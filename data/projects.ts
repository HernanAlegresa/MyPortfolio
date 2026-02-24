import type { Locale } from "@/lib/i18n/config";
import type { Project, ProjectMedia } from "@/lib/types/portfolio";

type LocaleString = { es: string; en: string };
type LocaleStringArray = { es: string[]; en: string[] };

const projectsData: Array<
  Omit<Project, "oneLiner" | "tags" | "overview" | "role" | "stack" | "highlights"> & {
    oneLiner: LocaleString;
    tags: LocaleStringArray;
    overview: LocaleString;
    role: LocaleString;
    stack: LocaleStringArray;
    highlights: LocaleStringArray;
  }
> = [
  {
    slug: "card-shootout",
    title: "Card Shootout",
    oneLiner: {
      es: "Juego de penales de fútbol con cartas coleccionables, lógica de equipo y arquitectura de producto a largo plazo.",
      en: "Football penalty game with collectible cards, team logic, and long-term product architecture.",
    },
    overview: {
      es: "Desarrollado inicialmente como proyecto final de bootcamp con Flutter, Firebase y BLoC. Luego lo reconstruí y amplié de forma independiente como producto personal a largo plazo con un stack web moderno. Construí y iteré la lógica de juego, el estado de partida, la UI/UX y los servicios de backend. MVP original: Flutter, Dart, Firebase, BLoC.",
      en: "Initially developed as a bootcamp final project using Flutter, Firebase, and BLoC. Later independently rebuilt and expanded as a long-term personal product using a modern web stack. Built and iterated gameplay logic, state management, UI/UX, and backend services. Original MVP: Flutter, Dart, Firebase, BLoC.",
    },
    role: { es: "Full Stack / Desarrollador Mobile", en: "Full Stack / Mobile Developer" },
    stack: {
      es: ["Remix", "React", "TypeScript", "Tailwind CSS", "Supabase", "Capacitor", "Git", "Figma"],
      en: ["Remix", "React", "TypeScript", "Tailwind CSS", "Supabase", "Capacitor", "Git", "Figma"],
    },
    tags: {
      es: ["Videojuego", "Mobile", "Full Stack"],
      en: ["Game", "Mobile", "Full Stack"],
    },
    highlights: {
      es: [
        "Construí la lógica de partida y la arquitectura de estado para sesiones fluidas.",
        "Diseñé feedback de UI con animaciones para claridad y experiencia del jugador.",
        "Reconstruí desde el MVP en Flutter a un stack web moderno para mayor alcance.",
        "Integré Supabase para auth, persistencia de datos y almacenamiento.",
      ],
      en: [
        "Built gameplay loop logic and match state architecture for smooth sessions.",
        "Designed motion-driven UI feedback for player clarity and delight.",
        "Rebuilt from Flutter MVP to modern web stack for broader reach.",
        "Integrated Supabase for auth, data persistence, and storage.",
      ],
    },
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
    oneLiner: {
      es: "App web con IA para reconocimiento de llaves físicas y gestión de inventario, desarrollada para cliente real en Canadá.",
      en: "AI-powered web app for physical key recognition and inventory management, built for a real client in Canada.",
    },
    overview: {
      es: "Diseñé y desarrollé la arquitectura full stack: frontend, APIs de backend, base de datos e integración con IA. Implementé flujos de reconocimiento de imágenes para matchear fotos de llaves con el inventario del usuario. Construí modelos de datos escalables y auditables y APIs seguras para gestión de llaves y escaneos. Iteré la lógica de producto según pruebas reales y métricas de rendimiento.",
      en: "Designed and developed full-stack architecture including frontend, backend APIs, database, and AI integration. Implemented image recognition workflows to match uploaded key images against user inventories. Built scalable and auditable data models and secure APIs for key management and scanning flows. Iterated product logic based on real testing and performance metrics.",
    },
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    stack: {
      es: ["React", "Remix", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Prisma", "PostgreSQL", "Cloudinary"],
      en: ["React", "Remix", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Prisma", "PostgreSQL", "Cloudinary"],
    },
    tags: {
      es: ["IA", "Full Stack", "Cliente Real"],
      en: ["AI", "Full Stack", "Real Client"],
    },
    highlights: {
      es: [
        "Diseñé la arquitectura full stack de punta a punta, desde base de datos hasta UI.",
        "Implementé reconocimiento de imágenes con IA para flujos de matching de llaves.",
        "Construí APIs seguras y auditables para inventario y operaciones de escaneo.",
        "Iteré la lógica de producto según pruebas reales y métricas de rendimiento.",
      ],
      en: [
        "Designed end-to-end full-stack architecture from database to UI.",
        "Implemented AI-powered image recognition for key matching workflows.",
        "Built secure, auditable APIs for inventory and scanning operations.",
        "Iterated on product logic based on real testing and performance metrics.",
      ],
    },
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
    oneLiner: {
      es: "E-commerce headless para marca de ropa con SEO avanzado, carrito y arquitectura lista para escalar.",
      en: "Headless e-commerce for a clothing brand with advanced SEO, cart, and scalable architecture.",
    },
    overview: {
      es: "Construí y lancé una plataforma de e-commerce moderna con Next.js 15, React, TypeScript y Tailwind. Implementé modelos de datos de producto reutilizables, filtrado por URL, optimización SEO (metadata, JSON-LD, sitemap), lógica de carrito con localStorage, checkout modular, integraciones con Supabase y despliegue en producción en Vercel.",
      en: "Built and launched a modern e-commerce platform with Next.js 15, React, TypeScript, and Tailwind. Implemented reusable product data models, URL-based filtering, SEO optimization (metadata, JSON-LD, sitemap), cart logic with localStorage, modular checkout placeholder, Supabase form integrations, and production deployment on Vercel.",
    },
    role: { es: "Fundador y Desarrollador Full Stack", en: "Founder & Full Stack Developer" },
    stack: {
      es: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
      en: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    },
    tags: {
      es: ["E-Commerce", "Headless", "SEO"],
      en: ["E-Commerce", "Headless", "SEO"],
    },
    highlights: {
      es: [
        "Diseñé storefront headless con Next.js 15 App Router.",
        "Implementé optimización SEO con metadata, JSON-LD y generación de sitemap.",
        "Construí lógica de carrito con localStorage y flujo de checkout modular.",
        "Desplegué en producción en Vercel con integraciones de formularios en Supabase.",
      ],
      en: [
        "Architected headless storefront with Next.js 15 App Router.",
        "Implemented SEO optimization with metadata, JSON-LD, and sitemap generation.",
        "Built cart logic with localStorage and modular checkout flow.",
        "Deployed to production on Vercel with Supabase form integrations.",
      ],
    },
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
    oneLiner: {
      es: "Onboardings e integraciones Shopify nativas y headless en producción real para marcas internacionales desde Rebl Tech.",
      en: "Native and headless Shopify onboardings and integrations in live production for international brands at Rebl Tech.",
    },
    overview: {
      es: "Trabajo profesional apoyando integraciones, procesos de onboarding y adaptación a codebases de clientes. Colaboré con stakeholders internacionales para marcas como Monica + Andy, SKKN, Greyson, Vici y UTV. Enfocado en APIs, integraciones y comunicación técnica clara.",
      en: "Professional work supporting integrations, onboarding processes, and adaptation to existing client codebases. Collaborated with international stakeholders for brands including Monica + Andy, SKKN, Greyson, Vici, and UTV. Focused on APIs, integrations, and clear technical communication.",
    },
    role: { es: "Desarrollador Full Stack @ Rebl Tech", en: "Full Stack Developer @ Rebl Tech" },
    stack: {
      es: ["Shopify", "Headless Commerce", "APIs", "TypeScript", "React"],
      en: ["Shopify", "Headless Commerce", "APIs", "TypeScript", "React"],
    },
    tags: {
      es: ["Shopify", "Headless", "Onboardings"],
      en: ["Shopify", "Headless", "Onboardings"],
    },
    highlights: {
      es: [
        "Soporte a arquitecturas Shopify nativas y headless para múltiples marcas.",
        "Integré APIs y adapté repositorios existentes de clientes.",
        "Coordiné entrega cross-functional con stakeholders internacionales.",
        "Estandaricé patrones de onboarding para reducir fricción en la configuración.",
      ],
      en: [
        "Supported Shopify native and headless architectures for multiple brands.",
        "Integrated APIs and adapted existing client repositories.",
        "Coordinated cross-functional delivery with international stakeholders.",
        "Standardized onboarding patterns to reduce client setup friction.",
      ],
    },
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

export function getAllProjects(locale: Locale): Project[] {
  return projectsData.map((item) => ({
    ...item,
    oneLiner: item.oneLiner[locale],
    tags: item.tags[locale],
    overview: item.overview[locale],
    role: item.role[locale],
    stack: item.stack[locale],
    highlights: item.highlights[locale],
  }));
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return getAllProjects(locale).filter((project) => project.featured);
}

export function getProjectBySlug(slug: string, locale: Locale): Project | undefined {
  const item = projectsData.find((project) => project.slug === slug);
  if (!item) return undefined;
  return {
    ...item,
    oneLiner: item.oneLiner[locale],
    tags: item.tags[locale],
    overview: item.overview[locale],
    role: item.role[locale],
    stack: item.stack[locale],
    highlights: item.highlights[locale],
  };
}
