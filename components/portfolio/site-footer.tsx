import Link from "next/link";
import { profile } from "@/data/profile";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/portfolio/container";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteFooter({ locale, dict }: FooterProps) {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {new Date().getFullYear()} {profile.name}. {dict.footer.rights}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href={`/${locale}/projects`} className="text-sm text-muted-foreground hover:text-foreground">
            {dict.nav.projects}
          </Link>
          <Link href={`/${locale}/contact`} className="text-sm text-muted-foreground hover:text-foreground">
            {dict.nav.contact}
          </Link>
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-sm text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
