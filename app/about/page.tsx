import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} and what we do.`,
};

export default function AboutPage() {
  return <AboutContent />;
}
