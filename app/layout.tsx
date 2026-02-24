import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";
import { ToastProvider } from "@/contexts/ToastContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: {
    default: "Hernán Alegresa — Portfolio Personal",
    template: "%s | Hernán Alegresa",
  },
  description:
    "Portfolio Personal de Hernán Alegresa, Desarrollador Full Stack de Uruguay. Construyo soluciones completas con foco en el producto, buena UI/UX y tecnologías web modernas.",
  openGraph: {
    title: "Hernán Alegresa — Portfolio Personal",
    description:
      "Portfolio Personal de Hernán Alegresa, Desarrollador Full Stack de Uruguay.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hernán Alegresa — Portfolio Personal",
    description:
      "Portfolio Personal de Hernán Alegresa, Desarrollador Full Stack de Uruguay.",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const localeHeader = headersList.get("x-locale");
  const lang: Locale =
    localeHeader && locales.includes(localeHeader as Locale) ? (localeHeader as Locale) : defaultLocale;

  return (
    <html lang={lang} className={inter.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
