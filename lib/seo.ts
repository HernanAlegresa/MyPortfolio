import type { Profile, Project } from "@/lib/types/portfolio";

export function generatePersonStructuredData(profile: Profile) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.headline,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    sameAs: profile.socials.map((s) => s.href),
  };
}

export function generateProjectStructuredData(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.oneLiner,
    creator: {
      "@type": "Person",
      name: "Hernán Alegresa",
    },
    dateCreated: project.year,
    keywords: project.tags.join(", "),
    ...(project.links?.live ? { url: project.links.live } : {}),
  };
}

// Backward-compatible aliases while migrating call sites.
export const generatePersonJsonLd = generatePersonStructuredData;
export const generateProjectJsonLd = generateProjectStructuredData;
