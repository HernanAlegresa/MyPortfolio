import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static pages (always present)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Store pages — only included when store feature is enabled
  let storePages: MetadataRoute.Sitemap = [];
  if (siteConfig.features.store) {
    try {
      const { getAllProducts } = require("@/data/products");
      const { categories } = require("@/data/categories");

      storePages.push({
        url: `${baseUrl}/shop`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
      });

      storePages.push({
        url: `${baseUrl}/shipping`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });

      // Category pages
      if (Array.isArray(categories)) {
        for (const category of categories) {
          storePages.push({
            url: `${baseUrl}/shop?category=${category.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
          });
        }
      }

      // Product pages
      const products = getAllProducts();
      if (Array.isArray(products)) {
        for (const product of products) {
          storePages.push({
            url: `${baseUrl}/shop/${product.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
          });
        }
      }
    } catch {
      // Store data not available — skip store pages silently
    }
  }

  // Portfolio pages — only included when portfolio feature is enabled
  let portfolioPages: MetadataRoute.Sitemap = [];
  if (siteConfig.features.portfolio) {
    portfolioPages.push({
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  return [...staticPages, ...storePages, ...portfolioPages];
}
