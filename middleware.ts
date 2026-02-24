import { NextResponse, type NextRequest } from "next/server";
import {
  defaultLocale,
  isValidLocale,
  localeCookieName,
  locales,
  type Locale,
} from "@/lib/i18n/config";

function getPreferredLocale(request: NextRequest): Locale {
  // 1. Explicit cookie (set by language toggle)
  const cookieLocale = request.cookies.get(localeCookieName)?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Browser accept-language header — match against registered locales
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage
    .split(",")
    .map((item) => item.trim().split(";")[0].toLowerCase());

  for (const lang of preferred) {
    const match = locales.find((locale) => lang.startsWith(locale));
    if (match) return match;
  }

  // 3. Default
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    const localeFromPath = pathname.split("/")[1];
    const locale =
      localeFromPath && locales.includes(localeFromPath as Locale) ? localeFromPath : defaultLocale;
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", locale);
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Run on all routes except:
    // - Next.js internals (_next/static, _next/image)
    // - API routes (api/)
    // - Static files identified by extension (.ico, .png, .jpg, .svg, .mp4, .pdf, etc.)
    "/((?!api|_next/static|_next/image|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|zip|webmanifest|mp4|mp3|pdf)).*)",
  ],
};
