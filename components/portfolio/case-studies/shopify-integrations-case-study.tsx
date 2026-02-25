import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Code2,
  Settings2,
  ShieldCheck,
  Users,
  Zap,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/portfolio/container";
import { Section } from "@/components/portfolio/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { BackToProjects } from "@/components/portfolio/back-to-projects";
import { getCaseStudyContent, type ShopifyCaseStudyContent } from "@/data/case-studies";
import type { Locale } from "@/lib/i18n/config";

const ICON_MAP = {
  Users,
  Code2,
  Zap,
  Settings2,
  BarChart3,
  ShieldCheck,
  Globe,
} as const;

type Props = { locale: Locale };

export function ShopifyIntegrationsCaseStudy({ locale }: Props) {
  const c = getCaseStudyContent("shopify-integrations-rebl", locale) as ShopifyCaseStudyContent;

  return (
    <Section>
      <Container>
        <Reveal>
          <BackToProjects locale={locale} />
        </Reveal>

        <Reveal className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            {c.hero.label}
          </p>
          <h1 className="mt-3 text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {c.hero.title}
          </h1>
          <p className="mt-2 text-center text-lg font-semibold text-muted-foreground md:text-xl">
            {c.hero.subtitle}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="flex flex-wrap justify-center gap-2">
            {c.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className="relative mx-auto max-w-2xl aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/projects/shopify-integrations/shopify_integrations.jpeg"
              alt={c.heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="mt-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {c.contexto.label}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              {c.contexto.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {c.contexto.para1}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {c.contexto.para2.split("\n\n").map((para, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {para}
                </span>
              ))}
            </p>
          </div>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {c.responsabilidades.label}
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {c.responsabilidades.items.map((r, i) => {
              const Icon = ICON_MAP[r.iconId as keyof typeof ICON_MAP] ?? Users;
              return (
                <Reveal key={r.titulo} delay={i * 0.04}>
                  <article className="h-full rounded-2xl border border-border bg-card/60 p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold">{r.titulo}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {c.entornos.label}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              {c.entornos.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              {c.entornos.intro}
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {c.entornos.items.map((env, i) => (
              <Reveal key={env.etiqueta} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card/60 p-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {env.etiqueta}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground/60">{env.subtitulo}</p>
                  <ul className="mt-5 space-y-3">
                    {env.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {c.nosto.label}
            </p>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              {c.nosto.intro}
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {c.nosto.modulos.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {c.crecimiento.label}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              {c.crecimiento.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              {c.crecimiento.intro}
            </p>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {c.crecimiento.items.map((item, i) => (
              <Reveal key={item} delay={i * 0.03}>
                <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/40 p-4 text-sm text-foreground/80">
                  <ArrowUpRight
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {c.impacto.label}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              {c.impacto.heading}
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {c.impacto.items.map((d, i) => (
              <Reveal key={d.titulo} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-border bg-card/60 p-6">
                  <h3 className="font-semibold">{d.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <blockquote className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
              <p className="border-l-2 border-primary/40 pl-4 text-sm italic leading-relaxed text-muted-foreground">
                {c.impacto.quote}
              </p>
            </blockquote>
          </Reveal>
        </div>

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
