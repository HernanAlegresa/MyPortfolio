import type { Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";

export function withLocale(pathname: string, locale: Locale = defaultLocale) {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (normalizedPath === "/") {
    return `/${locale}`;
  }

  return `/${locale}${normalizedPath}`;
}
