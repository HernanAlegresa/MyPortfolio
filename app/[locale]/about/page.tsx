import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/portfolio/container";
import { Heading } from "@/components/portfolio/heading";
import { Section } from "@/components/portfolio/section";
import { Badge } from "@/components/ui/badge";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locales.includes(locale as Locale) ? (locale as Locale) : "en";
  const dict = await getDictionary(typedLocale);
  return {
    title: dict.about.title,
    description: dict.about.intro,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locales.includes(locale as Locale) ? (locale as Locale) : "en";
  const dict = await getDictionary(typedLocale);

  return (
    <>
      <Section>
        <Container>
          <Reveal>
            <Heading title={dict.about.title} description={dict.about.intro} />
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <article className="rounded-2xl border border-border bg-card/60 p-6">
                <p className="text-muted-foreground">{dict.about.paragraph1}</p>
                <p className="mt-4 text-muted-foreground">{dict.about.paragraph2}</p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="rounded-2xl border border-border bg-card/60 p-6">
                <h3 className="text-lg font-semibold">{dict.about.valuesTitle}</h3>
                <ul className="mt-4 space-y-2">
                  {dict.about.values.map((value: string) => (
                    <li key={value}>
                      <Badge variant="outline">{value}</Badge>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <article className="rounded-2xl border border-border bg-card/60 p-6">
                <h3 className="text-lg font-semibold">{dict.about.educationTitle}</h3>
                <ul className="mt-4 space-y-4">
                  {dict.about.education.map((item: { institution: string; degree: string; period: string }) => (
                    <li key={item.institution}>
                      <p className="font-medium">{item.institution}</p>
                      <p className="text-sm text-muted-foreground">{item.degree}</p>
                      {item.period && (
                        <p className="mt-1 text-xs text-muted-foreground">{item.period}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="rounded-2xl border border-border bg-card/60 p-6">
                <h3 className="text-lg font-semibold">{dict.about.languagesTitle}</h3>
                <ul className="mt-4 space-y-2">
                  {dict.about.languages.map((lang: string) => (
                    <li key={lang}>
                      <Badge variant="secondary">{lang}</Badge>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
