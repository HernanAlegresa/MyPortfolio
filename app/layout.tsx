import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { BackToTop } from "@/components/ui/back-to-top";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Oh Sh!rt - Premium T-Shirts",
    template: "%s | Oh Sh!rt",
  },
  description: "Discover our collection of high-quality, comfortable premium t-shirts designed for everyday wear.",
  keywords: ["t-shirts", "premium t-shirts", "clothing", "fashion", "apparel"],
  authors: [{ name: "Oh Sh!rt" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://ohshrt.com",
    siteName: "Oh Sh!rt",
    title: "Oh Sh!rt - Premium T-Shirts",
    description: "Discover our collection of high-quality, comfortable premium t-shirts designed for everyday wear.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oh Sh!rt - Premium T-Shirts",
    description: "Discover our collection of high-quality, comfortable premium t-shirts designed for everyday wear.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <CartProvider>
          <ToastProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-white"
            >
              Skip to content
            </a>
            <AnnouncementBar />
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  );
}
