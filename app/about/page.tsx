import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Oh Sh!rt and our mission to deliver premium streetwear built for everyday life.",
};

export default function AboutPage() {
  return <AboutContent />;
}
