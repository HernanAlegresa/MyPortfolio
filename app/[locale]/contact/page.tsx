import type { Metadata } from "next";
import { FileDown } from "lucide-react";
import { profile } from "@/data/profile";
import { ContactForm } from "@/components/contact/ContactForm";
import { CopyButton } from "@/components/contact/CopyButton";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/portfolio/container";
import { Heading } from "@/components/portfolio/heading";
import { Section } from "@/components/portfolio/section";
import { buttonVariants } from "@/components/ui/button";
import { getAlternateLanguages } from "@/lib/seo";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

// TODO: Enable Supabase contact form
// 1. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
// 2. The page will automatically render the form below the CTA
// 3. Create a "contact_submissions" table in Supabase with columns:
//    id (uuid), name (text), email (text), message (text), created_at (timestamptz)

const supabaseEnabled =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locales.includes(locale as Locale) ? (locale as Locale) : "es";
  const dict = await getDictionary(typedLocale);
  return {
    title: dict.contactPage.title,
    description: dict.contactPage.description,
    alternates: getAlternateLanguages("contact"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locales.includes(locale as Locale) ? (locale as Locale) : "es";
  const dict = await getDictionary(typedLocale);

  return (
    <Section className="pt-4 pb-16 md:pt-28 md:pb-24">
      <Container>
        <Reveal>
          <Heading title={dict.contactPage.title} align="center" />
        </Reveal>
        <Reveal className="mt-8">
          <article className="rounded-2xl border border-border bg-card/60 p-8">
            <p className="text-muted-foreground">{dict.contactPage.cta}</p>

            {/* Email + Teléfono con botón copiar */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-xl border border-border bg-background/40 px-4 py-3">
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="mt-0.5 text-sm font-medium">{profile.email}</p>
                </div>
                <CopyButton value={profile.email} />
              </div>

              <div className="flex items-center justify-between rounded-xl border border-border bg-background/40 px-4 py-3">
                <div>
                  <p className="text-xs text-muted-foreground">{dict.contactPage.phone}</p>
                  <p className="mt-0.5 text-sm font-medium">+598 099 898 342</p>
                </div>
                <CopyButton value="+598099898342" />
              </div>
            </div>

            {/* Redes sociales */}
            <div className="mt-4 flex flex-wrap gap-3">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={buttonVariants({ variant: "outline" })}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>

            {/* Descargar CV */}
            {/* ── Colocá tu CV en: public/cv/cv-hernan-alegresa.pdf ── */}
            <div className="mt-6 border-t border-border pt-6">
              <a
                href="/api/cv"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "outline" })}
              >
                <FileDown className="mr-2 h-4 w-4" />
                {dict.contactPage.cvDownload}
              </a>
            </div>
          </article>
        </Reveal>

        {supabaseEnabled && (
          <Reveal className="mt-8">
            <article className="rounded-2xl border border-border bg-card/60 p-8">
              <h3 className="text-lg font-semibold">{dict.contactPage.formTitle}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {dict.contactPage.formEnabled}
              </p>
              <div className="mt-6">
                <ContactForm dict={dict.contactForm} />
              </div>
            </article>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}
