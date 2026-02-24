"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { localeCookieName, locales, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

const localeLabels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};

export function LanguageToggle({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchToLocale = (nextLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    const nextPathname = segments.join("/") || `/${nextLocale}`;

    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => router.push(nextPathname));
  };

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1"
      role="group"
      aria-label="Idioma / Language"
    >
      <Globe className="ml-2 h-3.5 w-3.5 text-muted-foreground" aria-hidden />
      {locales.map((locale) => {
        const active = currentLocale === locale;

        return (
          <button
            key={locale}
            type="button"
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium transition",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
            onClick={() => switchToLocale(locale)}
            aria-pressed={active}
            disabled={isPending}
          >
            {localeLabels[locale]}
          </button>
        );
      })}
    </div>
  );
}
