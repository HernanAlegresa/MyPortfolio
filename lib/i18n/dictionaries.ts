import "server-only";
import type { Locale } from "@/lib/i18n/config";

const dictionaries = {
  es: () => import("@/messages/es.json").then((module) => module.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
