export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "NEXT_LOCALE";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
