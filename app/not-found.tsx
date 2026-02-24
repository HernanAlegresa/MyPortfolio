import Link from "next/link";
import { cookies } from "next/headers";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { defaultLocale, localeCookieName, locales, type Locale } from "@/lib/i18n/config";

export default async function NotFound() {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(localeCookieName)?.value;
  const locale: Locale =
    cookieLocale && locales.includes(cookieLocale as Locale) ? (cookieLocale as Locale) : defaultLocale;

  const dict = await getDictionary(locale);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">{dict.notFound.title}</h2>
      <p className="mt-4 text-muted-foreground">{dict.notFound.description}</p>
      <Link href={`/${locale}`} className={buttonVariants({ className: "mt-8" })}>
        {dict.notFound.backHome}
      </Link>
    </main>
  );
}
