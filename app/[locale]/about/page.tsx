import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { getExperience } from "@/data/experience";
import { getAboutContent } from "@/data/about";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/portfolio/container";
import { Section } from "@/components/portfolio/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getAlternateLanguages } from "@/lib/seo";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

// ─── Placeholder de imagen ────────────────────────────────────────────────────

function ImagePlaceholder({
  caption,
  className = "",
}: {
  caption: string;
  className?: string;
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-border bg-muted/20 px-4 text-center text-xs text-muted-foreground">
        {caption}
      </div>
      <p className="text-center text-xs text-muted-foreground/60">{caption}</p>
    </div>
  );
}

// ─── Página ───────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locales.includes(locale as Locale) ? (locale as Locale) : "es";
  const dict = await getDictionary(typedLocale);
  return {
    title: dict.about.title,
    description: dict.about.intro,
    alternates: getAlternateLanguages("about"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locales.includes(locale as Locale) ? (locale as Locale) : "es";

  const about = getAboutContent(typedLocale);
  const experience = getExperience(typedLocale);

  // ─── Ajustes de espaciado y tamaño ──────────────────────────────────────────
  // Modificá estos valores para ajustar el layout sin tocar el código.

  // Espacio entre secciones (padding inferior de cada sección)
  // Opciones: "pb-4" muy poco · "pb-6" · "pb-8" · "pb-10" · "pb-12" · "pb-16" (por defecto del tema)
  const secGap = "pb-8";

  // Imágenes — unidades: "240px", "18rem", "100%" — cualquier valor CSS válido.

  // Imagen 1 — Foto programando (hero, columna derecha)
  const img1Width    = "350px";          // ancho del contenedor
  const img1Height   = "450px";          // alto del contenedor
  const img1Position = "center 70%";     // recorte: "center center" · "center top" · "50% 20%"
  const img1Scale    = 1.1;                // zoom: 1 = sin zoom · 1.1 = 10% más · 0.95 = zoom out

  // Imagen 2 — Contexto remoto (panorámica, ocupa todo el ancho)
  const img2Height   = "420px";          // alto del contenedor (ancho = 100% siempre)
  const img2Position = "center 60%";     // recorte
  const img2Scale    = 1;                // zoom

  // Imagen 3 — Lifestyle (ocupa toda la columna izquierda)
  const img3Height   = "610px";          // alto del contenedor (ancho = 100% de la columna)
  const img3Position = "center 15%";     // recorte
  const img3Scale    = 1;                // zoom
  // ────────────────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Hero: texto + foto de perfil ──────────────────────────────────── */}
      <Section className={`${secGap} pt-20 md:pt-28`}>
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-[1fr_auto]">

            {/* Texto */}
            <div>
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {about.hero.label}
                </p>
              </Reveal>
              <Reveal className="mt-4">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  {about.hero.heading.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br className="hidden sm:block" />}
                    </span>
                  ))}
                </h1>
              </Reveal>
              <Reveal className="mt-6">
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {about.hero.subheading}
                </p>
              </Reveal>
              <Reveal className="mt-6">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {profile.location}
                  </span>
                  {profile.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {s.label}
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Foto de perfil programando */}
            <Reveal className="hidden md:block" delay={0.1}>
              <div
                className="relative overflow-hidden rounded-2xl border border-border"
                style={{ width: img1Width, height: img1Height }}
              >
                <Image
                  src="/about/profile_programming.jpeg"
                  alt={about.hero.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 208px, 240px"
                  className="object-cover"
                  style={{ objectPosition: img1Position, transform: `scale(${img1Scale})`, transformOrigin: "center center" }}
                />
              </div>
            </Reveal>

          </div>
        </Container>
      </Section>

      {/* ── La trayectoria ────────────────────────────────────────────────────── */}
      <Section className={`pt-8 md:pt-12 ${secGap}`}>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card/60 p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {about.trayectoria.originLabel}
                </p>
                <h2 className="mt-3 text-xl font-bold tracking-tight">
                  {about.trayectoria.originHeading}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {about.trayectoria.originText}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="h-full rounded-2xl border border-border bg-card/60 p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {about.trayectoria.currentLabel}
                </p>
                <h2 className="mt-3 text-xl font-bold tracking-tight">
                  {about.trayectoria.currentHeading}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {about.trayectoria.currentText}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Foto contexto remoto */}
      <Section className={`pt-8 md:pt-12 ${secGap}`}>
        <Container>
          <Reveal>
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-border shadow-lg"
              style={{ height: img2Height }}
            >
              <Image
                src="/about/remote_context.jpeg"
                alt={about.trayectoria.remoteImageAlt}
                fill
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: img2Position, transform: `scale(${img2Scale})`, transformOrigin: "center center" }}
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── Principios ────────────────────────────────────────────────────────── */}
      <Section className={`pt-8 md:pt-12 ${secGap}`}>
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {about.principios.sectionLabel}
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {about.principios.items.map((item, i) => (
              <Reveal key={item.titulo} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-border bg-card/60 p-6">
                  <h3 className="font-semibold">{item.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Lo que construí ───────────────────────────────────────────────────── */}
      <Section className={`pt-8 md:pt-12 ${secGap}`}>
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {about.proyectos.sectionLabel}
            </p>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              {about.proyectos.sublabel}
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {about.proyectos.items.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link
                  href={`/${typedLocale}/projects/${p.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40 hover:bg-card/80"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {p.etiqueta}
                      </Badge>
                      <ArrowUpRight
                        className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-3 font-semibold group-hover:text-primary [transition:color_200ms_ease]">
                      {p.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.nota}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Experiencia ───────────────────────────────────────────────────────── */}
      <Section className={`pt-8 md:pt-12 ${secGap}`}>
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {about.experiencia.sectionLabel}
            </p>
          </Reveal>
          <div className="mt-6 space-y-3">
            {experience.map((item, i) => (
              <Reveal key={item.company} delay={i * 0.05}>
                <article className="flex flex-wrap items-start justify-between gap-4 rounded-2xl border border-border bg-card/60 p-6">
                  <div className="min-w-0">
                    <h3 className="font-semibold">{item.role}</h3>
                    <p className="mt-0.5 text-sm text-foreground/70">{item.company}</p>
                  </div>
                  <div className="shrink-0 text-right text-xs text-muted-foreground">
                    <p>{item.period}</p>
                    <p>{item.location}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Out Of Office ─────────────────────────────────────────────────────── */}
      <Section className={`pt-8 md:pt-12 ${secGap}`}>
        <Container>
          <Reveal>
            <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {about.outOfOffice.sectionLabel}
              </p>
              <h2 className="mt-3 text-xl font-bold tracking-tight md:text-2xl">
                {about.outOfOffice.heading}
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground whitespace-pre-line">
                {about.outOfOffice.text}
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── Educación + Idiomas + Foto lifestyle ──────────────────────────────── */}
      <Section className={`pt-8 md:pt-12 ${secGap}`}>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">

            {/* Foto lifestyle */}
            <Reveal>
              <div
                className="relative w-full overflow-hidden rounded-2xl border border-border"
                style={{ height: img3Height }}
              >
                <Image
                  src="/about/lifestyle.jpeg"
                  alt={about.lifestyleImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: img3Position, transform: `scale(${img3Scale})`, transformOrigin: "center center" }}
                />
              </div>
            </Reveal>

            {/* Educación + Idiomas apilados */}
            <div className="flex flex-col gap-4">
              <Reveal delay={0.05}>
                <div className="rounded-2xl border border-border bg-card/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {about.educacion.sectionLabel}
                  </p>
                  <ul className="mt-5 space-y-5">
                    {about.educacion.items.map((item) => (
                      <li key={item.institucion}>
                        <p className="font-medium">{item.institucion}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{item.titulo}</p>
                        {item.periodo && (
                          <p className="mt-1 text-xs text-muted-foreground/70">{item.periodo}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-2xl border border-border bg-card/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {about.idiomas.sectionLabel}
                  </p>
                  <ul className="mt-5 space-y-4">
                    {about.idiomas.items.map((l) => (
                      <li key={l.idioma} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{l.idioma}</span>
                        <Badge variant="secondary" className="text-xs">
                          {l.nivel}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {about.idiomas.availabilityLabel}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {about.idiomas.availabilityTags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </Container>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <Section className={`pt-0 pb-16`}>
        <Container>
          <Reveal>
            <div className="mx-auto max-w-lg rounded-2xl border border-border bg-card/70 p-8 text-center md:p-10">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                {about.cta.heading}
              </h2>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href={`/${typedLocale}/contact`} className={buttonVariants()}>
                  {about.cta.contactButton}
                </Link>
                <Link
                  href={`/${typedLocale}/projects`}
                  className={buttonVariants({ variant: "outline" })}
                >
                  {about.cta.projectsButton}
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
