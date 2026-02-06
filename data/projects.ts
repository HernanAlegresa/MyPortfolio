// ============================================
// PROJECTS — Portfolio mode example data
// ============================================
// Use this dataset when building a portfolio site.
// Each project has a title, description, tech stack,
// image, and optional links.
//
// To enable portfolio mode:
//   1. Create /app/projects/page.tsx (listing)
//   2. Create /app/projects/[slug]/page.tsx (detail)
//   3. Update config/site.ts navigation to include "Projects"
//   4. Remove or hide store-related nav items

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    slug: "e-commerce-platform",
    description:
      "A full-stack e-commerce platform with cart, checkout, and payment processing.",
    longDescription:
      "Built a complete e-commerce solution featuring product catalog management, shopping cart with persistent state, Stripe checkout integration, and an admin dashboard for order management. Optimized for performance with server-side rendering and image optimization.",
    image: "/placeholders/product.svg",
    tags: ["Full Stack", "E-Commerce"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourhandle/project",
    featured: true,
    year: "2026",
  },
  {
    id: "project-2",
    title: "Task Management App",
    slug: "task-management-app",
    description:
      "A collaborative task management tool with real-time updates and team workspaces.",
    longDescription:
      "Designed and built a project management application featuring Kanban boards, real-time collaboration through WebSockets, team workspace management, and automated notifications. Focused on intuitive UX with drag-and-drop interactions.",
    image: "/placeholders/product.svg",
    tags: ["Full Stack", "SaaS"],
    techStack: ["React", "Node.js", "PostgreSQL", "Socket.io", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourhandle/project",
    featured: true,
    year: "2025",
  },
  {
    id: "project-3",
    title: "Design System",
    slug: "design-system",
    description:
      "A comprehensive component library and design system for consistent UI development.",
    longDescription:
      "Created a reusable design system with 30+ components, complete with documentation, accessibility testing, and Storybook integration. Used by multiple teams across the organization to maintain visual consistency.",
    image: "/placeholders/product.svg",
    tags: ["Frontend", "Design"],
    techStack: [
      "React",
      "TypeScript",
      "Storybook",
      "Tailwind CSS",
      "Radix UI",
    ],
    liveUrl: "https://example.com",
    featured: true,
    year: "2025",
  },
  {
    id: "project-4",
    title: "Analytics Dashboard",
    slug: "analytics-dashboard",
    description:
      "A real-time analytics dashboard with interactive charts and data visualization.",
    longDescription:
      "Built a performant analytics dashboard displaying real-time metrics with interactive charts, date range filtering, CSV export, and customizable widgets. Handles millions of data points with virtualized rendering.",
    image: "/placeholders/product.svg",
    tags: ["Frontend", "Data Viz"],
    techStack: ["Next.js", "D3.js", "TypeScript", "Recharts", "Vercel"],
    featured: false,
    year: "2024",
  },
];

// ── Helper Functions ─────────────────────────────

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
