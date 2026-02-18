import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { getFeaturedProjects } from "@/data/projects";
import { getSkillCategories } from "@/data/skills";
import { Reveal } from "@/components/motion/reveal";
import { StaggerReveal } from "@/components/motion/stagger-reveal";
import { Container } from "@/components/portfolio/container";
import { Heading } from "@/components/portfolio/heading";
import { ProjectShowcaseCard } from "@/components/portfolio/project-showcase-card";
import { ScrollIndicator } from "@/components/portfolio/scroll-indicator";
import { Section } from "@/components/portfolio/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
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
    title: dict.site.title,
    description: dict.site.description,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locales.includes(locale as Locale) ? (locale as Locale) : "en";
  const dict = await getDictionary(typedLocale);
  const featured = getFeaturedProjects();
  const skillCategories = getSkillCategories(typedLocale);
  const progressionText =
    typedLocale === "es"
      ? "Trayectoria profesional: de contabilidad y administración hacia desarrollo full stack orientado a producto."
      : "Career progression: from accounting and administration into full stack product development.";

  const projectsBySlug = new Map(featured.map((project) => [project.slug, project]));
  const cardShootout = projectsBySlug.get("card-shootout");
  const keyCliq = projectsBySlug.get("keycliq");
  const shopifyIntegrations = projectsBySlug.get("shopify-integrations-rebl");
  const ohShirt = projectsBySlug.get("oh-shirt");

  return (
    <>
      {/* Hero */}
      <Section className="pb-12 pt-20 md:pb-16 md:pt-28">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-14 lg:gap-20">
            {/* Text — first in DOM for LCP */}
            <div>
              <StaggerReveal index={0}>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  {profile.name}
                </h1>
              </StaggerReveal>
              <StaggerReveal index={1}>
                <p className="mt-4 text-base font-medium text-foreground/90 md:text-lg">{profile.headline}</p>
                <p className="mt-1 text-sm text-muted-foreground md:text-base">{profile.location}</p>
              </StaggerReveal>
              <StaggerReveal index={2}>
                <p className="mt-4 text-lg text-foreground/80 md:text-xl lg:text-2xl">
                  {dict.home.headline}
                </p>
              </StaggerReveal>
              <StaggerReveal index={3}>
                <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
                  {dict.home.subheadline}
                </p>
              </StaggerReveal>
              <StaggerReveal index={4}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href={`/${typedLocale}/projects`} className={buttonVariants()}>
                    {dict.common.viewProjects}
                  </Link>
                  <Link
                    href={`/${typedLocale}/contact`}
                    className={buttonVariants({ variant: "outline" })}
                  >
                    {dict.common.contact}
                  </Link>
                </div>
              </StaggerReveal>
            </div>

            <StaggerReveal index={3} className="relative">
              <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-[20rem] md:mx-0 md:max-w-[22rem] md:justify-self-end lg:max-w-[24rem]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-cyan-500/18 via-fuchsia-500/8 to-transparent blur-2xl"
                />
                <div className="relative aspect-square overflow-hidden rounded-full border border-border/60 shadow-xl shadow-cyan-500/10">
                  <Image
                    src={profile.photo ?? "/portfolio/profile-photo.svg"}
                    alt={`${profile.name} profile portrait`}
                    fill
                    priority
                    sizes="(max-width: 768px) 72vw, 26rem"
                    className="object-cover"
                  />
                </div>
              </div>
            </StaggerReveal>
          </div>

          {/* Scroll indicator */}
          <div className="mt-14 flex justify-center md:mt-16">
            <ScrollIndicator />
          </div>
        </Container>
      </Section>

      {/* Featured Projects */}
      <Section id="featured-projects">
        <Container>
          <Reveal>
            <Heading
              title={dict.home.featuredTitle}
              description={dict.home.featuredDescription}
              eyebrow={<Badge>{dict.common.featured}</Badge>}
            />
          </Reveal>
          {cardShootout && (
            <Reveal className="mt-10">
              <ProjectShowcaseCard
                locale={typedLocale}
                project={cardShootout}
                autoPlayVideo
                mediaClassName="aspect-[21/9]"
              />
            </Reveal>
          )}

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {keyCliq && (
              <Reveal>
                <ProjectShowcaseCard locale={typedLocale} project={keyCliq} mediaClassName="aspect-[16/10]" />
              </Reveal>
            )}
            {shopifyIntegrations && (
              <Reveal delay={0.05}>
                <ProjectShowcaseCard
                  locale={typedLocale}
                  project={shopifyIntegrations}
                  mediaClassName="aspect-[16/10]"
                />
              </Reveal>
            )}
          </div>

          {ohShirt && (
            <Reveal className="mt-6">
              <ProjectShowcaseCard
                locale={typedLocale}
                project={ohShirt}
                mediaClassName="aspect-[18/9]"
                className="mx-auto w-full md:max-w-4xl"
              />
            </Reveal>
          )}
        </Container>
      </Section>

      {/* Experience */}
      <Section>
        <Container>
          <Reveal>
            <Heading title={dict.home.experienceTitle} description={dict.home.experienceDescription} />
          </Reveal>
          <Reveal className="mt-4">
            <p className="max-w-3xl text-sm text-muted-foreground">{progressionText}</p>
          </Reveal>
          <div className="mt-8 space-y-6">
            {experience.map((item, index) => (
              <Reveal key={item.company} delay={index * 0.08}>
                <article className="rounded-2xl border border-border bg-card/60 p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold md:text-lg">{item.role}</h3>
                      <p className="mt-1 text-sm text-foreground/90">{item.company}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>{item.period}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>- {highlight}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Skills */}
      <Section>
        <Container>
          <Reveal>
            <Heading title={dict.home.skillsTitle} description={dict.home.skillsDescription} />
          </Reveal>
          <Reveal className="mt-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {skillCategories.map((category) => (
                <article
                  key={category.id}
                  className="rounded-2xl border border-border bg-card/60 p-5 shadow-sm backdrop-blur"
                >
                  <h3 className="text-base font-semibold tracking-tight">{category.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="pt-8">
        <Container>
          <Reveal>
            <div className="rounded-2xl border border-border bg-card/70 p-8 md:p-10">
              <h2 className="text-2xl font-semibold md:text-3xl">{dict.home.ctaTitle}</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">{dict.home.ctaDescription}</p>
              <div className="mt-6">
                <Link href={`/${typedLocale}/contact`} className={buttonVariants()}>
                  {dict.common.contact}
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
