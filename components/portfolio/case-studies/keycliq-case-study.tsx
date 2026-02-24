import Link from "next/link";
import {
  Key,
  Scan,
  SlidersHorizontal,
  FlaskConical,
  ArrowUpRight,
  Shield,
  ExternalLink,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/portfolio/container";
import { Section } from "@/components/portfolio/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { BackToProjects } from "@/components/portfolio/back-to-projects";
import { getCaseStudyContent, type KeycliqCaseStudyContent } from "@/data/case-studies";
import type { Locale } from "@/lib/i18n/config";

const ICON_MAP = {
  Key,
  Scan,
  SlidersHorizontal,
  FlaskConical,
} as const;

type Props = { locale: Locale };

export function KeyCliqCaseStudy({ locale }: Props) {
  const c = getCaseStudyContent("keycliq", locale) as KeycliqCaseStudyContent;

  return (
    <Section>
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
                href="https://keycliq-personal.vercel.app/"
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

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {c.problema.label}
              </p>
              <h2 className="mt-3 text-xl font-bold tracking-tight">
                {c.problema.heading}
              </h2>
              <ul className="mt-5 space-y-3">
                {c.problema.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {c.solucion.label}
              </p>
              <h2 className="mt-3 text-xl font-bold tracking-tight">
                {c.solucion.heading}
              </h2>
              <ul className="mt-5 space-y-3">
                {c.solucion.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {c.funcionalidades.label}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{c.funcionalidades.heading}</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {c.funcionalidades.items.map((f, i) => {
              const Icon = ICON_MAP[f.iconId as keyof typeof ICON_MAP] ?? Key;
              return (
                <Reveal key={f.titulo} delay={i * 0.05}>
                  <article className="h-full rounded-2xl border border-border bg-card/60 p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold">{f.titulo}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {f.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {c.keyscan.label}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              {c.keyscan.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              {c.keyscan.intro}
            </p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {c.keyscan.etapas.map((etapa, i) => (
              <Reveal key={etapa.etiqueta} delay={i * 0.05}>
                <div className="flex gap-5 rounded-2xl border border-border bg-card/60 p-6">
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-xs font-bold text-primary-foreground">
                      {etapa.etiqueta}
                    </div>
                    {i < c.keyscan.etapas.length - 1 && (
                      <div className="h-full w-px bg-border" />
                    )}
                  </div>
                  <div className="min-w-0 pb-2">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-semibold">{etapa.titulo}</h3>
                      <span className="text-xs text-muted-foreground">{etapa.subtitulo}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {etapa.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{c.stack.heading}</h2>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.stack.items.map((item, i) => (
              <Reveal key={item.etiqueta} delay={i * 0.04}>
                <div className="rounded-2xl border border-border bg-card/60 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {item.etiqueta}
                  </p>
                  <p className="mt-1.5 text-sm text-foreground/80">{item.valor}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {c.desafios.label}
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {c.desafios.items.map((d, i) => (
              <Reveal key={d.titulo} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-border bg-card/60 p-6">
                  <h3 className="font-semibold">{d.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {c.rol.label}
              </p>
            </div>
            <ul className="mt-5 space-y-2">
              {c.rol.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <ArrowUpRight
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {c.resultados.label}
            </p>
            <h2 className="mt-3 text-xl font-bold tracking-tight md:text-2xl">
              {c.resultados.heading}
            </h2>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {c.resultados.items.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
            <blockquote className="mt-8 border-l-2 border-primary/40 pl-4 text-sm italic leading-relaxed text-muted-foreground">
              {c.resultados.quote}
            </blockquote>
          </div>
        </Reveal>

        <Reveal className="mt-10 pb-4">
          <div className="flex flex-wrap gap-3">
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
