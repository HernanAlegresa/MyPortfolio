import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
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
import { BackToProjects } from "@/components/portfolio/back-to-projects";
import { ProjectHeroVideo } from "@/components/portfolio/project-hero-video";

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

  if (slug === "despensa-natural") {
    const hasLinks = project.links?.live || project.links?.repo || project.links?.caseStudy;

    return (
      <Section className="pt-4 pb-16 md:pt-28 md:pb-24">
        <Container>
          {jsonLdScript}

          <Reveal>
            <BackToProjects locale={typedLocale} />
          </Reveal>

          <Reveal className="mt-6">
            <div className="flex flex-col items-center gap-4">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {project.overview}
                </p>
              </div>
            </div>
          </Reveal>

          {project.links?.live && (
            <Reveal className="mt-8">
              <div className="relative overflow-hidden rounded-2xl border border-sky-500/30 bg-sky-500/5 p-8 text-center shadow-lg shadow-sky-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-500">
                    {typedLocale === "es" ? "Tienda en producción" : "Store in production"}
                  </p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight">
                    {typedLocale === "es"
                      ? "Podés ver la tienda de Despensa Natural funcionando ahora mismo"
                      : "You can see the Despensa Natural store running right now"}
                  </h2>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl border border-sky-500 bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition-all duration-200 hover:bg-sky-600 hover:border-sky-600 hover:shadow-lg hover:shadow-sky-500/40"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {typedLocale === "es" ? "Ver tienda" : "View store"}
                  </a>
                </div>
              </div>
            </Reveal>
          )}

          <Reveal className="mt-10">
            {project.heroVideo ? (
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <ProjectHeroVideo
                  src={project.heroVideo}
                  poster={project.posterImage}
                  ariaLabel={dict.projects.demoVideoAriaLabel}
                  playbackRate={1.4}
                  className="block h-auto w-full"
                />
              </div>
            ) : (
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-lg">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} hero`}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            )}
          </Reveal>

          <div className="mt-10 space-y-6">
            <Reveal>
              <article className="rounded-2xl border border-border bg-card/60 p-6">
                <h3 className="text-lg font-semibold">
                  {typedLocale === "es" ? "Mi rol" : "My role"}
                </h3>
                {typedLocale === "es" ? (
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>Fui responsable del diseño y desarrollo end-to-end del producto.</p>
                    <p>
                      Definí la estructura del catálogo digital, diseñé la experiencia de usuario enfocada
                      en conversión y desarrollé el frontend completo. También gestioné el despliegue a
                      producción y la configuración de dominio, asegurando un entorno real listo para uso
                      por clientes.
                    </p>
                  </div>
                ) : (
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>I was responsible for the end-to-end design and development of the product.</p>
                    <p>
                      I defined the structure of the digital catalog, designed a conversion-focused user
                      experience, and built the full frontend. I also handled deployment to production and
                      domain setup, ensuring a real environment ready for actual users.
                    </p>
                  </div>
                )}
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="rounded-2xl border border-border bg-card/60 p-6">
                <h3 className="text-lg font-semibold">
                  {typedLocale === "es" ? "Problema" : "Problem"}
                </h3>
                {typedLocale === "es" ? (
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      Antes del sitio web, el catálogo de productos se compartía principalmente a través de
                      mensajes o documentos, lo que dificultaba que los clientes pudieran explorar fácilmente
                      las opciones disponibles.
                    </p>
                    <p>
                      El objetivo era crear un espacio digital donde los clientes pudieran descubrir los
                      productos de forma clara y organizada.
                    </p>
                  </div>
                ) : (
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      Before the website, the product catalog was mainly shared through messages or documents,
                      making it harder for customers to easily explore the available products.
                    </p>
                    <p>
                      The goal was to create a digital space where customers could discover the products in a
                      clear and organized way.
                    </p>
                  </div>
                )}
              </article>
            </Reveal>

            <Reveal delay={0.075}>
              <article className="rounded-2xl border border-border bg-card/60 p-6">
                <h3 className="text-lg font-semibold">
                  {typedLocale === "es" ? "Enfoque de producto" : "Product approach"}
                </h3>
                {typedLocale === "es" ? (
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      En lugar de implementar un checkout tradicional, se optó por un flujo de compra vía
                      WhatsApp, alineado con el comportamiento real de los clientes y el modelo operativo del
                      negocio.
                    </p>
                    <p>
                      Esta decisión reduce fricción, simplifica el proceso de compra y permite validar el
                      negocio con un MVP funcional en producción.
                    </p>
                  </div>
                ) : (
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      Instead of implementing a traditional checkout, a WhatsApp-based purchase flow was
                      chosen, aligned with real user behavior and the business operational model.
                    </p>
                    <p>
                      This decision reduces friction, simplifies the buying process, and enables validation
                      of the business with a functional MVP in production.
                    </p>
                  </div>
                )}
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="rounded-2xl border border-border bg-card/60 p-6">
                <h3 className="text-lg font-semibold">
                  {typedLocale === "es" ? "Decisiones técnicas" : "Technical decisions"}
                </h3>
                {typedLocale === "es" ? (
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      Se utilizó Next.js 15 para aprovechar generación estática, rendimiento y una arquitectura
                      moderna orientada a producción.
                    </p>
                    <p>
                      La interfaz fue construida con Tailwind CSS bajo un enfoque mobile-first, priorizando
                      claridad y usabilidad.
                    </p>
                    <p>
                      El sitio fue desplegado en Vercel con dominio personalizado, e incluye configuración SEO
                      (sitemap, metadata, Open Graph) para asegurar visibilidad en buscadores y redes sociales.
                    </p>
                  </div>
                ) : (
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      Next.js 15 was used to leverage static generation, performance, and a modern
                      production-ready architecture.
                    </p>
                    <p>
                      The interface was built with Tailwind CSS using a mobile-first approach, prioritizing
                      clarity and usability.
                    </p>
                    <p>
                      The site was deployed on Vercel with a custom domain and includes SEO setup (sitemap,
                      metadata, Open Graph) to ensure visibility in search engines and social platforms.
                    </p>
                  </div>
                )}
              </article>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              <Reveal delay={0.15}>
                <article className="rounded-2xl border border-border bg-card/60 p-6">
                  <h3 className="text-lg font-semibold">
                    {typedLocale === "es" ? "Tecnologías" : "Tech stack"}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </article>
              </Reveal>

              <Reveal delay={0.2}>
                <article className="rounded-2xl border border-border bg-card/60 p-6">
                  <h3 className="text-lg font-semibold">
                    {typedLocale === "es" ? "Puntos clave" : "Key highlights"}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {typedLocale === "es" ? (
                      <>
                        <li>• Catálogo digital optimizado para conversión en negocio real</li>
                        <li>• Flujo de compra simplificado mediante integración con WhatsApp</li>
                        <li>• Diseño mobile-first enfocado en experiencia de usuario real</li>
                        <li>• Deploy en producción con dominio propio y SEO configurado</li>
                        <li>• Arquitectura moderna con Next.js 15 y Tailwind CSS</li>
                        <li>• Proyecto desarrollado para un cliente real en Uruguay</li>
                      </>
                    ) : (
                      <>
                        <li>• Conversion-focused digital catalog for a real business</li>
                        <li>• Simplified purchase flow via WhatsApp integration</li>
                        <li>• Mobile-first design focused on real user experience</li>
                        <li>• Production deployment with custom domain and SEO setup</li>
                        <li>• Modern architecture with Next.js 15 and Tailwind CSS</li>
                        <li>• Built for a real client in Uruguay</li>
                      </>
                    )}
                  </ul>
                </article>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <article className="rounded-2xl border border-border bg-card/60 p-6">
                <h3 className="text-lg font-semibold">
                  {typedLocale === "es" ? "Estado del proyecto" : "Project status"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {typedLocale === "es"
                    ? "El sitio se encuentra en producción y es utilizado como canal activo para la visualización del catálogo y coordinación de pedidos."
                    : "The site is live in production and actively used as a channel for product discovery and order coordination."}
                </p>
              </article>
            </Reveal>
          </div>

        </Container>
      </Section>
    );
  }

  // ── Generic fallback layout ──────────────────────────────────────────────
  const hasLinks = project.links?.live || project.links?.repo || project.links?.caseStudy;

  return (
    <Section className="pt-4 pb-16 md:pt-28 md:pb-24">
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
