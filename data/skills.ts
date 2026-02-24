import type { Locale } from "@/lib/i18n/config";

export type SkillCategory = {
  category: {
    en: string;
    es: string;
  };
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: {
      en: "Core Stack",
      es: "Stack Principal",
    },
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Shopify (Native & Headless)",
      "API Integrations",
      "Full Stack Architecture",
      "Flutter (Mobile)",
      "AI Integrations (OpenAI, Claude)",
    ],
  },
  {
    category: {
      en: "Backend & Data",
      es: "Backend y Datos",
    },
    items: [
      "Node.js",
      "Python",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "REST APIs",
      "SQL",
    ],
  },
  {
    category: {
      en: "Mobile Development",
      es: "Desarrollo Mobile",
    },
    items: [
      "Flutter",
      "Dart",
      "BLoC",
      "Capacitor",
      "Firebase Auth / Storage",
    ],
  },
  {
    category: {
      en: "AI & Automation",
      es: "IA y Automatización",
    },
    items: [
      "OpenAI API",
      "Claude",
      "Cursor",
      "Codex",
      "n8n",
      "AI-powered Workflows",
      "Multimodal AI Integrations",
      "Prompt Engineering",
    ],
  },
  {
    category: {
      en: "Commerce & Platforms",
      es: "Commerce y Plataformas",
    },
    items: [
      "Shopify",
      "Headless Commerce",
      "Cloudinary",
      "Vercel",
      "Heroku",
    ],
  },
  {
    category: {
      en: "Dev Workflow",
      es: "Dev Workflow",
    },
    items: [
      "Git",
      "GitHub",
      "Branching Strategies",
      "VS Code",
      "CI/CD",
      "Trello",
      "Slack",
    ],
  },
  {
    category: {
      en: "Product, UI & UX",
      es: "Producto, UI y UX",
    },
    items: [
      "UI/UX Design",
      "Design Systems",
      "Accessibility (a11y)",
      "Performance Optimization",
      "Product Thinking",
    ],
  },
  {
    category: {
      en: "Administrative & Accounting Systems",
      es: "Sistemas Administrativos y Contables",
    },
    items: [
      "Excel",
      "Financial Reporting Workflows",
      "Accounting Process Management",
      "Document Management Systems",
    ],
  },
];

export function getSkillCategories(locale: Locale) {
  return skillCategories.map((category) => ({
    id: category.category.en.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    title: category.category[locale],
    items: category.items,
  }));
}
