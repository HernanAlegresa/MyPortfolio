import Link from "next/link";
import { profile } from "@/data/profile";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/portfolio/container";
import { LanguageToggle } from "@/components/portfolio/language-toggle";
import { MobileNav } from "@/components/portfolio/mobile-nav";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: HeaderProps) {
  const nav = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/projects`, label: dict.nav.projects },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href={`/${locale}`} className="text-sm font-semibold tracking-wide text-foreground">
          {profile.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle currentLocale={locale} />
          <MobileNav items={nav} />
        </div>
      </Container>
    </header>
  );
}
