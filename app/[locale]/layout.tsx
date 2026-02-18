import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { BackgroundDecor } from "@/components/portfolio/background-decor";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";
import { profile } from "@/data/profile";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generatePersonStructuredData } from "@/lib/seo";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) {
    return {};
  }

  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.site.title,
    description: dict.site.description,
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const dict = await getDictionary(typedLocale);
  const personJsonLd = generatePersonStructuredData(profile);

  return (
    <div className="relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <BackgroundDecor />
      <SiteHeader locale={typedLocale} dict={dict} />
      <main id="main-content" lang={typedLocale}>
        {children}
      </main>
      <SiteFooter locale={typedLocale} dict={dict} />
    </div>
  );
}
