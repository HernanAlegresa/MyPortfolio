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
      en: "Frontend Engineering",
      es: "Ingenieria Frontend",
    },
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Remix",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: {
      en: "Mobile Development",
      es: "Desarrollo Mobile",
    },
    items: ["Flutter", "Dart", "FlutterFlow", "Bloc"],
  },
  {
    category: {
      en: "Backend & Data",
      es: "Backend y Datos",
    },
    items: [
      "Node.js",
      "Python",
      "REST APIs",
      "Prisma",
      "PostgreSQL",
      "SQL",
      "Supabase",
      "Firebase",
      "C",
    ],
  },
  {
    category: {
      en: "AI & Advanced Integrations",
      es: "IA e Integraciones Avanzadas",
    },
    items: [
      "OpenAI API Integration",
      "AI-powered Workflows",
      "LLM-based Features",
      "API Integrations",
      "Headless Commerce",
    ],
  },
  {
    category: {
      en: "Commerce & Platforms",
      es: "Commerce y Plataformas",
    },
    items: ["Shopify", "Cloudinary", "Vercel"],
  },
  {
    category: {
      en: "Dev Tools & Workflow",
      es: "Herramientas de Desarrollo y Workflow",
    },
    items: ["Git", "GitHub", "VS Code", "Trello", "Slack", "Figma", "Microsoft Office"],
  },
  {
    category: {
      en: "Product & UX",
      es: "Producto y UX",
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
      "Sigma",
      "Padi",
      "Bkper",
      "Magma",
      "Financial Reporting Workflows",
      "Accounting Process Management",
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
