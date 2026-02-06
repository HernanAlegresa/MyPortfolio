"use client";

import { Accordion } from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";

const faqItems = [
  {
    title: "What is your return policy?",
    content: `We offer a 30-day return policy on all unworn items with original tags attached. Simply contact us at ${siteConfig.email} with your order number and we'll send you a return label.`,
  },
  {
    title: "How long does shipping take?",
    content:
      "Standard shipping takes 5-7 business days within the US. Express shipping (2-3 business days) is available at checkout. International orders typically take 10-15 business days.",
  },
  {
    title: "Do you ship internationally?",
    content:
      "Yes, we ship to most countries worldwide. International shipping rates and delivery times are calculated at checkout based on your location.",
  },
  {
    title: "How do I find my size?",
    content:
      "Each product page includes a size guide with detailed measurements. If you're between sizes, we recommend sizing up for a more relaxed fit. You can also contact us for personalized sizing advice.",
  },
  {
    title: "Can I modify or cancel my order?",
    content:
      "Orders can be modified or cancelled within 2 hours of placement. After that, the order enters our fulfillment process. Contact us as soon as possible and we'll do our best to help.",
  },
];

export function ContactFAQ() {
  return <Accordion items={faqItems} />;
}
