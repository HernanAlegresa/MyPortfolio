import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { getFeaturedProjects } from "@/data/projects";
import { skills } from "@/data/skills";
import { Reveal } from "@/components/motion/reveal";
import { StaggerReveal } from "@/components/motion/stagger-reveal";
import { Container } from "@/components/portfolio/container";
import { Heading } from "@/components/portfolio/heading";
import { HeroVideo } from "@/components/portfolio/hero-video";
import { ProjectCard } from "@/components/portfolio/project-card";
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
  const heroProject = featured.find((p) => p.heroVideo) ?? featured[0];

  return (
    <>
      {/* Hero */}
      <Section className="pb-12 pt-20 md:pb-16 md:pt-28">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-14 lg:gap-20">
            {/* Text — first in DOM for LCP */}
            <div>
              <StaggerReveal index={0}>
                <Badge variant="outline">{dict.home.badge}</Badge>
              </StaggerReveal>
              <StaggerReveal index={1}>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  {profile.name}
                </h1>
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

            {/* Demo media — uses heroVideo when available, otherwise fallback image */}
            {heroProject && (
              <StaggerReveal index={3} className="relative">
                {heroProject.heroVideo ? (
                  <HeroVideo
                    src={heroProject.heroVideo}
                    poster={heroProject.posterImage ?? heroProject.coverImage}
                  />
                ) : (
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-card/40 shadow-2xl shadow-cyan-500/5">
                    <Image
                      src={heroProject.posterImage ?? heroProject.coverImage}
                      alt={`${heroProject.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </StaggerReveal>
            )}
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
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featured.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <ProjectCard locale={typedLocale} project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Experience */}
      <Section>
        <Container>
          <Reveal>
            <Heading title={dict.home.experienceTitle} description={dict.home.experienceDescription} />
          </Reveal>
          <div className="mt-8 grid gap-4">
            {experience.slice(0, 2).map((item, index) => (
              <Reveal key={item.company} delay={index * 0.08}>
                <article className="rounded-xl border border-border bg-card/60 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-medium">
                      {item.role} - {item.company}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{item.highlights[0]}</p>
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
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
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
