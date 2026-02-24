import Image from "next/image";
import Link from "next/link";
import {
  Store,
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
import type { Locale } from "@/lib/i18n/config";

// ─── Contenido ────────────────────────────────────────────────────────────────

const tags = [
  "Shopify",
  "Nosto",
  "Headless Commerce",
  "Integración de APIs",
  "Onboarding de clientes",
  "E-commerce",
  "Rebl Tech",
];

const responsabilidades = [
  {
    icon: Users,
    titulo: "Liderazgo del onboarding",
    desc: "Dirigí sesiones de onboarding técnico para comerciantes Shopify, reuniones en vivo en inglés donde explicaba los requisitos de integración, los tiempos y los próximos pasos. El cliente y sus desarrolladores necesitaban claridad, no jerga técnica.",
  },
  {
    icon: Store,
    titulo: "Conexión de tiendas",
    desc: "Conecté tiendas Shopify a Nosto en arquitecturas tanto nativas (Liquid) como headless. Cada configuración tenía requisitos distintos y tuve que adaptar el enfoque según el stack del cliente.",
  },
  {
    icon: Code2,
    titulo: "Revisión de repositorios y auditoría",
    desc: "Revisé los repositorios de los clientes para entender su configuración técnica antes de tocar nada. Identificar los problemas de integración temprano, antes de que se conviertan en incidentes en producción, era parte central del trabajo.",
  },
  {
    icon: Zap,
    titulo: "Implementación de tracking",
    desc: "Me aseguré de que el tracking de eventos, la validación del feed de productos y la ubicación de scripts estuvieran implementados correctamente. Un evento mal configurado es invisible hasta que algo falla, así que validé todo contra los flujos de datos esperados.",
  },
  {
    icon: Settings2,
    titulo: "Activación y configuración de funcionalidades",
    desc: "Activé y configuré las funcionalidades de Nosto según el plan de suscripción de cada cliente. Eso implicaba entender qué estaba incluido, qué no, y comunicar esas restricciones con claridad para evitar malentendidos.",
  },
  {
    icon: BarChart3,
    titulo: "Módulos de personalización",
    desc: "Configuré recomendaciones de productos, merchandising por categoría, optimización de búsqueda, personalización on-site y pop-ups. Cada módulo requería entender los objetivos de la marca y traducirlos en la configuración correcta.",
  },
  {
    icon: ShieldCheck,
    titulo: "Troubleshooting en producción",
    desc: "Diagnostiqué y resolví problemas de integración en entornos en vivo. No eran problemas de staging: comerciantes reales, tráfico real, revenue en juego. Un diagnóstico rápido y preciso era la única opción.",
  },
  {
    icon: Globe,
    titulo: "Coordinación entre equipos",
    desc: "Coordiné entre desarrolladores del comerciante, equipos de marketing y stakeholders internos de Rebl Tech. Cada persona necesitaba un nivel de detalle distinto, y adapté el estilo de comunicación según el interlocutor.",
  },
];

const entornos = [
  {
    etiqueta: "Shopify Nativo",
    subtitulo: "Temas basados en Liquid",
    items: [
      "Inyección estándar del script de Nosto mediante archivos del tema",
      "Tracking de eventos de producto y carrito vía Liquid templating",
      "Validación del feed y sincronización del catálogo con la estructura nativa de Shopify",
      "Configuración de funcionalidades desde el panel de Nosto",
    ],
  },
  {
    etiqueta: "Shopify Headless",
    subtitulo: "Arquitecturas API-first",
    items: [
      "Frontends personalizados con frameworks basados en React",
      "Implementación manual de tracking de eventos vía Nosto JS API",
      "Auditoría más profunda de la capa de datos para validar qué está disponible y qué falta",
      "Onboarding más complejo: requería colaboración estrecha con el equipo técnico del cliente",
    ],
  },
];

const modulosNosto = [
  "Recomendaciones de productos",
  "Merchandising por categoría",
  "Optimización de búsqueda",
  "Personalización on-site",
  "Pop-ups y disparadores por comportamiento",
  "Personalización de contenido",
];

const aprendizajes = [
  "Auditar codebases desconocidas rápido y con precisión",
  "Trabajar con APIs y capas de datos de e-commerce reales",
  "Traducir objetivos de negocio en pasos técnicos de implementación",
  "Comunicar restricciones técnicas con claridad a stakeholders no técnicos",
  "Gestionar el scope de funcionalidades según los planes de suscripción SaaS",
  "Resolver problemas en producción bajo presión real del cliente",
  "Optimizar configuraciones de personalización para UX y conversión",
  "Operar en entornos internacionales con múltiples equipos",
];

const demostraciones = [
  {
    titulo: "Experiencia real en producción",
    desc: "No fue un proyecto personal: comerciantes en vivo, revenue real, responsabilidad real. Operé en entornos donde los errores tenían consecuencias inmediatas.",
  },
  {
    titulo: "Comunicación técnica orientada al cliente",
    desc: "Fui la persona que explicaba requisitos complejos de integración en lenguaje claro, liderando reuniones con desarrolladores y stakeholders no técnicos al mismo tiempo.",
  },
  {
    titulo: "Conocimiento de plataforma",
    desc: "Suficientemente profundo en Shopify y Nosto para diagnosticar casos extremos de integración en configuraciones nativas y headless. El tipo de conocimiento que solo viene de trabajarlo en tiendas reales.",
  },
  {
    titulo: "Adaptabilidad",
    desc: "Cada cliente tenía un stack distinto, un equipo distinto y un nivel de preparación técnica distinto. El trabajo era adaptarse y lograr que la integración funcionara sin importar las condiciones.",
  },
];

// ─── Componente ───────────────────────────────────────────────────────────────

type Props = { locale: Locale };

export function ShopifyIntegrationsCaseStudy({ locale }: Props) {
  return (
    <Section>
      <Container>
        {/* Volver */}
        <Reveal>
          <BackToProjects locale={locale} />
        </Reveal>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <Reveal className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Trabajo profesional · Rebl Tech · 2024
          </p>
          <h1 className="mt-3 text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Integraciones Shopify y Onboarding de Clientes
          </h1>
          <p className="mt-2 text-center text-lg font-semibold text-muted-foreground md:text-xl">
            Integración técnica para comerciantes en Shopify usando Nosto, en entornos nativos y
            headless, con clientes reales y en producción.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </Reveal>

        {/* ── Imagen hero ───────────────────────────────────────────────────── */}
        <Reveal className="mt-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/projects/shopify-integrations/shopify_integrations.jpeg"
              alt="Integraciones Shopify y onboarding de clientes"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* ── Contexto ──────────────────────────────────────────────────────── */}
        <Reveal className="mt-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Contexto
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              No fue un rol de desarrollo estándar
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              No fue un rol donde construí un producto de cero. Fue una posición técnica y
              orientada al cliente dentro de entornos de e-commerce reales en producción. Fui
              responsable de liderar los onboardings técnicos de comerciantes Shopify que
              integraban Nosto: asegurarme de que sus tiendas estuvieran bien conectadas, que
              todas las funcionalidades estuvieran configuradas correctamente y que nada estuviera
              roto en producción.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              En muchos casos no modifiqué directamente el código del cliente. Lo revisé,
              identifiqué los problemas y les di a sus desarrolladores la guía precisa que
              necesitaban para resolverlo bien. El valor estaba en la precisión del análisis y
              la claridad de la comunicación, no en escribir cada línea yo mismo.
            </p>
          </div>
        </Reveal>

        {/* ── Responsabilidades ─────────────────────────────────────────────── */}
        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Responsabilidades
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              De qué era responsable
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {responsabilidades.map((r, i) => {
              const Icon = r.icon;
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

        {/* ── Entornos ──────────────────────────────────────────────────────── */}
        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Entornos de integración
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Shopify Nativo vs. Headless
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              No todos los clientes eran iguales. Algunos usaban temas estándar en Liquid. Otros
              tenían frontends headless completamente personalizados. El enfoque de integración y
              el nivel de trabajo requerido era completamente distinto en cada caso.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {entornos.map((env, i) => (
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

        {/* ── Módulos Nosto ─────────────────────────────────────────────────── */}
        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Plataforma
            </p>
            <h2 className="mt-3 text-xl font-bold tracking-tight md:text-2xl">
              Nosto — Módulos de personalización
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Nosto es una plataforma de personalización para e-commerce. Parte del onboarding era
              asegurarse de que cada funcionalidad que el comerciante contrató estuviera correctamente
              activada y entregando valor. Eso implicaba configurar los módulos correctos, validar
              su funcionamiento y asegurarse de que encajaran con los objetivos de la marca.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {modulosNosto.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Qué me dejó ───────────────────────────────────────────────────── */}
        <div className="mt-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Crecimiento
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Qué me dejó este rol
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Trabajar en un rol técnico orientado al cliente y a nivel producción me enseñó
              cosas que construir proyectos personales no puede.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {aprendizajes.map((item, i) => (
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

        {/* ── Qué demuestra ─────────────────────────────────────────────────── */}
        <div className="mt-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Impacto
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Qué demuestra esta experiencia
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {demostraciones.map((d, i) => (
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
                Este rol me llevó más allá del código. Tuve que entender el contexto del negocio,
                gestionar las expectativas del cliente y resolver problemas reales en entornos en
                vivo, a veces bajo presión y siempre con precisión. Esa combinación de profundidad
                técnica y claridad orientada al cliente es algo que llevo a cada proyecto en el
                que trabajo.
              </p>
            </blockquote>
          </Reveal>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <Reveal className="mt-10 pb-4">
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/projects`}
              className={buttonVariants({ variant: "outline" })}
            >
              ← Ver todos los proyectos
            </Link>
            <Link href={`/${locale}/contact`} className={buttonVariants()}>
              Contacto
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
