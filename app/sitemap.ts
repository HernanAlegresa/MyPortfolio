import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllProjects } from "@/data/projects";
import { locales, type Locale } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // Root / home
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    });

    // Static pages
    for (const [path, priority] of [
      ["/about", 0.7],
      ["/contact", 0.7],
    ] as [string, number][]) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority,
      });
    }

    // Portfolio pages — only when portfolio feature is enabled
    if (siteConfig.features.portfolio) {
      entries.push({
        url: `${baseUrl}/${locale}/projects`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });

      const projects = getAllProjects(locale as Locale);
      for (const project of projects) {
        entries.push({
          url: `${baseUrl}/${locale}/projects/${project.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }
  }

  return entries;
}
