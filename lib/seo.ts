import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { Profile, Project } from "@/lib/types/portfolio";

/**
 * Returns alternate language URLs for hreflang SEO.
 * @param pathWithoutLeadingSlash - Path after locale, e.g. "" for home, "about", "projects", "projects/card-shootout"
 */
export function getAlternateLanguages(pathWithoutLeadingSlash: string): Metadata["alternates"] {
  const base = siteConfig.url.replace(/\/$/, "");
  const path = pathWithoutLeadingSlash ? `/${pathWithoutLeadingSlash}` : "";
  return {
    languages: {
      es: `${base}/es${path}`,
      en: `${base}/en${path}`,
      "x-default": `${base}/es${path}`,
    },
  };
}

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
