import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/portfolio/container";
import { Section } from "@/components/portfolio/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { BackToProjects } from "@/components/portfolio/back-to-projects";
import { getCaseStudyContent, type CardShootoutCaseStudyContent } from "@/data/case-studies";
import type { Locale } from "@/lib/i18n/config";

const SCREEN_IMAGES: Array<{ src: string; altKey: number }> = [
  { src: "/projects/card-shootout/cardshootout_homescreen.png", altKey: 0 },
  { src: "/projects/card-shootout/cardshootout_teammanagement_screen.png", altKey: 1 },
  { src: "/projects/card-shootout/preview_pre-partida.png", altKey: 2 },
  { src: "/projects/card-shootout/tandapenales_turnogolero.png", altKey: 3 },
  { src: "/projects/card-shootout/tandapenalesturnojugador.png", altKey: 4 },
  { src: "/projects/card-shootout/pantalladeresultados.png", altKey: 5 },
];

type Props = { locale: Locale };

export function CardShootoutCaseStudy({ locale }: Props) {
  const c = getCaseStudyContent("card-shootout", locale) as CardShootoutCaseStudyContent;

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
            {c.hero.intro.split("\n\n").map((para, i) => (
              <span key={i}>
                {i > 0 && <><br /><br /></>}
                {para}
              </span>
            ))}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {c.rolLabel}
              </p>
              <ul className="mt-4 space-y-2">
                {c.rolItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-base text-foreground/80"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    {item}
                  </li>
                ))}
              </ul>
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
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {c.stackNote.split("\n\n").map((para, i) => (
                  <span key={i}>
                    {i > 0 && <><br /><br /></>}
                    {para}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="relative mx-auto max-w-2xl aspect-[2/1] overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/projects/card-shootout/cardshootout_projectpage.png"
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
              {c.origen.label}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              {c.origen.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {c.origen.body.split("\n\n").map((para, i) => (
                <span key={i}>
                  {i > 0 && <><br /><br /></>}
                  {para}
                </span>
              ))}
            </p>
          </div>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {c.funcionalidades.label}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              {c.funcionalidades.heading}
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {c.funcionalidades.items.map((f, i) => (
              <Reveal key={f.titulo} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-border bg-card/60 p-6">
                  <h3 className="font-semibold">{f.titulo}</h3>
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
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {c.pantallas.label}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              {c.pantallas.heading}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {c.pantallas.intro}
            </p>
          </Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {SCREEN_IMAGES.slice(0, 2).map((img, i) => (
              <Reveal key={img.src} delay={i * 0.05}>
                <div className="space-y-2">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-border">
                    <Image
                      src={img.src}
                      alt={`${c.hero.title} — ${c.pantallas.captions[img.altKey]}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-fill object-top"
                    />
                  </div>
                  <p className="text-center text-xs text-muted-foreground">{c.pantallas.captions[img.altKey]}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {SCREEN_IMAGES.slice(2, 4).map((img, i) => (
              <Reveal key={img.src} delay={i * 0.05}>
                <div className="space-y-2">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-border">
                    <Image
                      src={img.src}
                      alt={`${c.hero.title} — ${c.pantallas.captions[img.altKey]}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-fill object-top"
                    />
                  </div>
                  <p className="text-center text-xs text-muted-foreground">{c.pantallas.captions[img.altKey]}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {SCREEN_IMAGES.slice(4, 6).map((img, i) => (
              <Reveal key={img.src} delay={i * 0.05}>
                <div className="space-y-2">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-border">
                    <Image
                      src={img.src}
                      alt={`${c.hero.title} — ${c.pantallas.captions[img.altKey]}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-fill object-top"
                    />
                  </div>
                  <p className="text-center text-xs text-muted-foreground">{c.pantallas.captions[img.altKey]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-20">
          <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {c.vision.label}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              {c.vision.heading}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {c.vision.intro.split("\n\n").map((para, i) => (
                <span key={i}>
                  {i > 0 && <><br /><br /></>}
                  {para}
                </span>
              ))}
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {c.vision.items.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10">
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
