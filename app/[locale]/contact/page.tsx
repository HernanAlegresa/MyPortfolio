import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/portfolio/container";
import { Heading } from "@/components/portfolio/heading";
import { Section } from "@/components/portfolio/section";
import { buttonVariants } from "@/components/ui/button";
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
  const typedLocale = locales.includes(locale as Locale) ? (locale as Locale) : "en";
  const dict = await getDictionary(typedLocale);
  return {
    title: dict.contactPage.title,
    description: dict.contactPage.description,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locales.includes(locale as Locale) ? (locale as Locale) : "en";
  const dict = await getDictionary(typedLocale);

  return (
    <Section>
      <Container>
        <Reveal>
          <Heading title={dict.contactPage.title} description={dict.contactPage.description} />
        </Reveal>
        <Reveal className="mt-8">
          <article className="rounded-2xl border border-border bg-card/60 p-8">
            <p className="text-muted-foreground">{dict.contactPage.cta}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className={buttonVariants()}>
                {profile.email}
              </a>
              <a
                href="tel:+598099898342"
                className={buttonVariants({ variant: "outline" })}
              >
                <Phone className="mr-2 h-4 w-4" />
                +598 099 898 342
              </a>
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
          </article>
        </Reveal>

        {supabaseEnabled && (
          <Reveal className="mt-8">
            <article className="rounded-2xl border border-border bg-card/60 p-8">
              <h3 className="text-lg font-semibold">Contact Form</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Supabase environment variables detected. Form submissions are enabled.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </article>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}
