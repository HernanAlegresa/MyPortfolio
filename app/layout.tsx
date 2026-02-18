import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// TODO: Enable Vercel Analytics
// import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.vercel.app"),
  title: {
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description:
    "Modern bilingual portfolio built with Next.js 15, TypeScript, and Tailwind.",
  openGraph: {
    title: "Portfolio",
    description:
      "Modern bilingual portfolio built with Next.js 15, TypeScript, and Tailwind.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description:
      "Modern bilingual portfolio built with Next.js 15, TypeScript, and Tailwind.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
        {/* TODO: Enable Vercel Analytics */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
