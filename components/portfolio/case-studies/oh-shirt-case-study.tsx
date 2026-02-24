import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/portfolio/container";
import { Section } from "@/components/portfolio/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BackToProjects } from "@/components/portfolio/back-to-projects";
import type { Locale } from "@/lib/i18n/config";

// ─── Contenido ────────────────────────────────────────────────────────────────

const stack = [
  "Next.js 15",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "CVA",
  "Framer Motion",
  "Supabase",
  "Vercel",
];

const highlights = [
  "Desarrollo full stack",
  "Arquitectura escalable",
  "SEO como prioridad",
  "Sistema de filtrado personalizado",
  "Modelado de datos de producto",
  "Deploy en producción",
];

const arquitectura = [
  {
    titulo: "Modelo de datos escalable",
    items: [
      "Catálogo de productos tipado en TypeScript",
      "Productos, categorías y colecciones estructurados para reutilización",
      "Expandible sin refactorizar el backend",
    ],
  },
  {
    titulo: "Filtrado y estado en la URL",
    items: [
      "Sistema de filtrado dinámico con estado en la URL",
      "Vistas filtradas que se pueden compartir por link",
      "Separación clara entre lógica de UI y capa de datos",
    ],
  },
  {
    titulo: "Arquitectura del carrito",
    items: [
      "Carrito con localStorage y flujo de checkout modular",
      "Pensado para integrar Stripe en el futuro",
      "Estado persistente entre navegaciones",
    ],
  },
  {
    titulo: "Capa de SEO",
    items: [
      "Metadata dinámica por producto y colección",
      "Datos estructurados de producto en JSON-LD",
      "Sitemap dinámico y configuración de robots",
    ],
  },
];

const uxItems = [
  "UI orientada a la marca",
  "Layout responsive-first",
  "Optimización mobile",
  "Atención al rendimiento",
  "Tipografía y espaciado cuidados",
  "Transiciones con Framer Motion",
];

const features = [
  {
    titulo: "Filtrado dinámico de productos",
    desc: "Estado en la URL para vistas filtradas que se pueden guardar y compartir.",
  },
  {
    titulo: "Navegación por colecciones",
    desc: "Colecciones estructuradas para una exploración limpia del catálogo.",
  },
  {
    titulo: "Tarjetas de producto reutilizables",
    desc: "Sistema de componentes tipado para escalar junto al catálogo.",
  },
  {
    titulo: "Carrito persistente",
    desc: "Estado del carrito en localStorage, listo para integrar Stripe.",
  },
  {
    titulo: "Páginas optimizadas para SEO",
    desc: "Metadata dinámica, datos estructurados JSON-LD y generación de sitemap.",
  },
  {
    titulo: "Deploy en producción",
    desc: "Publicado en Vercel con integraciones de formularios en Supabase.",
  },
  {
    titulo: "Gestión de metadatos",
    desc: "Metadata OpenGraph y Twitter Card por página para compartir en redes.",
  },
  {
    titulo: "Integración con Supabase",
    desc: "Formulario de contacto y lista de espera, separados de la lógica de comercio.",
  },
];

const demostraciones = [
  "Pensamiento de producto",
  "Habilidades de arquitectura frontend",
  "Diseño de componentes limpio",
  "Conciencia de rendimiento",
  "Conocimiento de SEO",
  "Capacidad de publicar apps en producción",
  "Sensibilidad UI/UX",
];

// ─── Componente ───────────────────────────────────────────────────────────────

type Props = { locale: Locale };

export function OhShirtCaseStudy({ locale }: Props) {
  return (
    <Section>
      <Container>
        {/* Volver */}
        <Reveal>
          <BackToProjects locale={locale} />
        </Reveal>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <Reveal className="mt-8">
          <h1 className="mt-3 text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Oh Sh!rt Web
          </h1>
          <p className="mt-2 text-center text-lg font-semibold text-muted-foreground md:text-xl">
            Plataforma de e-commerce moderna para una marca de ropa streetwear masculina
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-foreground/80 md:text-lg">
            Diseñé y desarrollé una plataforma de e-commerce moderna para una marca de ropa
            streetwear masculina. El objetivo era construir una experiencia de compra limpia y
            premium, con buen rendimiento, SEO bien hecho y una arquitectura pensada para crecer.
          </p>
        </Reveal>

        {/* ── Live CTA ──────────────────────────────────────────────────────── */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-sky-500/30 bg-sky-500/5 p-8 text-center shadow-lg shadow-sky-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-500">
                App en producción
              </p>
              <h2 className="mt-2 text-xl font-bold tracking-tight">
                Podés ver Oh Sh!rt funcionando ahora mismo
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                La app está desplegada en Vercel y disponible para explorar.
              </p>
              <a
                href="https://ohshirt.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-sky-500 bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition-all duration-200 hover:bg-sky-600 hover:border-sky-600 hover:shadow-lg hover:shadow-sky-500/40"
              >
                <ExternalLink className="h-4 w-4" />
                Ver app en vivo
              </a>
            </div>
          </div>
        </Reveal>

        {/* Highlights + Stack */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Puntos clave
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {highlights.map((h) => (
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
                Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Hero Media ───────────────────────────────────────────────────── */}
        <Reveal className="mt-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-lg">
            <video
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              poster="/projects/oh-shirt/ohshirt_desktop.png"
              aria-label="Demo de la plataforma Oh Sh!rt"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/projects/oh-shirt/ohshirt_demo.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>

        {/* ── Arquitectura ──────────────────────────────────────────────────── */}
        <div className="mt-20">
          <Reveal>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Decisiones técnicas
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Cada decisión se tomó pensando en la escalabilidad y mantenibilidad de la plataforma.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {arquitectura.map((section, i) => (
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

        {/* ── Diseño y UX ───────────────────────────────────────────────────── */}
        <Reveal className="mt-20">
          <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              UX - UI orientado a la marca
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              El diseño no fue un agregado al final. Cada decisión de layout fue intencional,
              construida alrededor del producto y la experiencia del cliente. Creando una tienda web minimalista y moderna.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {uxItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Funcionalidades ───────────────────────────────────────────────── */}
        <div className="mt-20">
          <Reveal>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Funcionalidades clave
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.titulo} delay={i * 0.04}>
                <article className="h-full rounded-2xl border border-border bg-card/60 p-5">
                  <h3 className="text-sm font-semibold">{f.titulo}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Impacto ───────────────────────────────────────────────────────── */}
        <Reveal className="mt-20">
          <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Impacto
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Qué demuestra este proyecto
            </h2>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {demostraciones.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
            <blockquote className="mt-8 border-l-2 border-primary/40 pl-4 text-sm italic leading-relaxed text-muted-foreground">
              Este proyecto refleja cómo busco desarrollar productos: estructurado,
              escalable y orientado al detalle, pensando siempre tanto en la experiencia del usuario
              como en la base técnica a largo plazo. Mi objetivo es crear productos que sean eficientes, escalables y que cumplan con los requisitos de la marca y el cliente.
            </blockquote>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
