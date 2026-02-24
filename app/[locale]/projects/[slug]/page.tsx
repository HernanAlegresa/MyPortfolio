import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/portfolio/container";
import { Heading } from "@/components/portfolio/heading";
import { Section } from "@/components/portfolio/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generateProjectStructuredData, getAlternateLanguages } from "@/lib/seo";
import type { ProjectMedia } from "@/lib/types/portfolio";
import { OhShirtCaseStudy } from "@/components/portfolio/case-studies/oh-shirt-case-study";
import { CardShootoutCaseStudy } from "@/components/portfolio/case-studies/card-shootout-case-study";
import { KeyCliqCaseStudy } from "@/components/portfolio/case-studies/keycliq-case-study";
import { ShopifyIntegrationsCaseStudy } from "@/components/portfolio/case-studies/shopify-integrations-case-study";

type DetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const typedLocale = locales.includes(locale as Locale) ? (locale as Locale) : "es";
  const project = getProjectBySlug(slug, typedLocale);
  if (!project) return {};
  const ogImagePath = `/og/${slug}.jpg`;
  const hasOgImage = existsSync(join(process.cwd(), "public", "og", `${slug}.jpg`));

  return {
    title: project.title,
    description: project.oneLiner,
    alternates: getAlternateLanguages(`projects/${slug}`),
    ...(hasOgImage
      ? {
          openGraph: {
            images: [ogImagePath],
          },
          twitter: {
            images: [ogImagePath],
          },
        }
      : {}),
  };
}

export async function generateStaticParams() {
  const params: Array<{ locale: Locale; slug: string }> = [];

  for (const locale of locales) {
    const projects = getAllProjects(locale);
    for (const project of projects) {
      params.push({ locale, slug: project.slug });
    }
  }

  return params;
}

function GalleryItem({ media, videoAriaLabel }: { media: ProjectMedia; videoAriaLabel: string }) {
  if (media.type === "video") {
    const shouldAutoplay = media.autoplay === true;
    const shouldLoop = media.loop === true;

    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border">
        <video
          muted={shouldAutoplay}
          autoPlay={shouldAutoplay}
          loop={shouldLoop}
          playsInline
          preload="metadata"
          poster={media.poster}
          controls
          aria-label={videoAriaLabel}
          className="h-full w-full object-cover"
        >
          <source src={media.src} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border">
      <Image src={media.src} alt={media.alt} fill sizes="50vw" className="object-cover" />
    </div>
  );
}

export default async function ProjectDetailPage({ params }: DetailPageProps) {
  const { locale, slug } = await params;
  const typedLocale = locales.includes(locale as Locale) ? (locale as Locale) : "es";
  const dict = await getDictionary(typedLocale);
  const project = getProjectBySlug(slug, typedLocale);

  if (!project) {
    notFound();
  }

  const projectJsonLd = generateProjectStructuredData(project);
  const jsonLdScript = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
    />
  );

  // ── Custom case study pages ──────────────────────────────────────────────
  if (slug === "oh-shirt") {
    return (
      <>
        {jsonLdScript}
        <OhShirtCaseStudy locale={typedLocale} />
      </>
    );
  }

  if (slug === "card-shootout") {
    return (
      <>
        {jsonLdScript}
        <CardShootoutCaseStudy locale={typedLocale} />
      </>
    );
  }

  if (slug === "keycliq") {
    return (
      <>
        {jsonLdScript}
        <KeyCliqCaseStudy locale={typedLocale} />
      </>
    );
  }

  if (slug === "shopify-integrations-rebl") {
    return (
      <>
        {jsonLdScript}
        <ShopifyIntegrationsCaseStudy locale={typedLocale} />
      </>
    );
  }

  // ── Generic fallback layout ──────────────────────────────────────────────
  const hasLinks = project.links?.live || project.links?.repo || project.links?.caseStudy;

  return (
    <Section>
      <Container>
        {jsonLdScript}
        <Reveal>
          <Link
            href={`/${typedLocale}/projects`}
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            {dict.common.backToProjects}
          </Link>
        </Reveal>
        <Reveal className="mt-5">
          <Heading title={project.title} description={project.oneLiner} />
        </Reveal>

        <Reveal className="mt-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-border">
            <Image
              src={project.coverImage}
              alt={`${project.title} hero`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="rounded-2xl border border-border bg-card/60 p-6">
              <h3 className="text-lg font-semibold">{dict.projects.overview}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{project.overview}</p>
            </article>
          </Reveal>
          <Reveal delay={0.05}>
            <article className="rounded-2xl border border-border bg-card/60 p-6">
              <h3 className="text-lg font-semibold">{dict.projects.role}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{project.role}</p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="rounded-2xl border border-border bg-card/60 p-6">
              <h3 className="text-lg font-semibold">{dict.projects.stack}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.15}>
            <article className="rounded-2xl border border-border bg-card/60 p-6">
              <h3 className="text-lg font-semibold">{dict.projects.highlights}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {project.highlights.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        {project.gallery.length > 0 && (
          <Reveal className="mt-10">
            <h3 className="text-lg font-semibold">{dict.projects.gallery}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{dict.projects.galleryPlaceholder}</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {project.gallery.map((media, index) => (
                <GalleryItem key={index} media={media} videoAriaLabel={dict.projects.demoVideoAriaLabel} />
              ))}
            </div>
          </Reveal>
        )}

        {hasLinks && (
          <Reveal className="mt-10">
            <h3 className="text-lg font-semibold">{dict.projects.links}</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants()}
                >
                  {dict.projects.liveDemo}
                </a>
              )}
              {project.links?.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "outline" })}
                >
                  {dict.projects.repository}
                </a>
              )}
              {project.links?.caseStudy && (
                <a
                  href={project.links.caseStudy}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "outline" })}
                >
                  {dict.projects.caseStudy}
                </a>
              )}
            </div>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}
