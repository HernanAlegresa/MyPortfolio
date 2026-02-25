import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/portfolio/container";
import { Section } from "@/components/portfolio/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { BackToProjects } from "@/components/portfolio/back-to-projects";
import { getCaseStudyContent, type OhShirtCaseStudyContent } from "@/data/case-studies";
import type { Locale } from "@/lib/i18n/config";

type Props = { locale: Locale };

export function OhShirtCaseStudy({ locale }: Props) {
  const c = getCaseStudyContent("oh-shirt", locale) as OhShirtCaseStudyContent;

  return (
    <Section className="pt-4 pb-16 md:pt-28 md:pb-24">
      <Container>
        <Reveal>
          <BackToProjects locale={locale} />
        </Reveal>

        <Reveal className="mt-8">
          <h1 className="mt-3 text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {c.hero.title}
          </h1>
          <p className="mt-2 text-center text-lg font-semibold text-muted-foreground md:text-xl">
            {c.hero.subtitle}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-foreground/80 md:text-lg">
            {c.hero.intro}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-sky-500/30 bg-sky-500/5 p-8 text-center shadow-lg shadow-sky-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-500">
                {c.liveCta.label}
              </p>
              <h2 className="mt-2 text-xl font-bold tracking-tight">
                {c.liveCta.heading}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {c.liveCta.desc}
              </p>
              <a
                href="https://ohshirt.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-sky-500 bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition-all duration-200 hover:bg-sky-600 hover:border-sky-600 hover:shadow-lg hover:shadow-sky-500/40"
              >
                <ExternalLink className="h-4 w-4" />
                {c.liveCta.button}
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {c.highlightsLabel}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.highlights.map((h) => (
                  <Badge key={h} variant="secondary">
                    {h}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {c.stackLabel}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.stack.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-lg">
            <video
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              poster="/projects/oh-shirt/ohshirt_desktop.png"
              aria-label={c.videoAriaLabel}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/projects/oh-shirt/ohshirt_demo.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              {c.arquitectura.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              {c.arquitectura.intro}
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {c.arquitectura.items.map((section, i) => (
              <Reveal key={section.titulo} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-border bg-card/60 p-6">
                  <h3 className="font-semibold">{section.titulo}</h3>
                  <ul className="mt-4 space-y-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-20">
          <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              {c.ux.heading}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {c.ux.intro}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {c.ux.items.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              {c.features.heading}
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.features.items.map((f, i) => (
              <Reveal key={f.titulo} delay={i * 0.04}>
                <article className="h-full rounded-2xl border border-border bg-card/60 p-5">
                  <h3 className="text-sm font-semibold">{f.titulo}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-20">
          <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {c.impacto.label}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              {c.impacto.heading}
            </h2>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {c.impacto.items.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
            <blockquote className="mt-8 border-l-2 border-primary/40 pl-4 text-sm italic leading-relaxed text-muted-foreground">
              {c.impacto.quote}
            </blockquote>
          </div>
        </Reveal>

        <Reveal className="mt-10 pb-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/${locale}/projects`}
              className={buttonVariants({ variant: "outline" })}
            >
              {c.cta.backToProjects}
            </Link>
            <Link href={`/${locale}/contact`} className={buttonVariants()}>
              {c.cta.contact}
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
