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
import type { Locale } from "@/lib/i18n/config";

// ─── Contenido ────────────────────────────────────────────────────────────────

const tags = [
  "IA / Visión por computadora",
  "Procesamiento de imágenes",
  "Matching y similitud",
  "Remix + React",
  "Prisma + Postgres",
  "Cloudinary",
  "Ingeniería de producto",
];

const features = [
  {
    icon: Key,
    titulo: "Inventario de llaves",
    desc: "Crear, editar y gestionar llaves por usuario. Cada llave guarda su firma en la base de datos. Al borrar una llave se limpia automáticamente, datos, firma e imagen en Cloudinary para mantener el almacenamiento consistente.",
    tags: ["CRUD", "Limpieza en Cloudinary", "Scope por usuario", "Firma de llave",],
  },
  {
    icon: Scan,
    titulo: "Escaneo y reconocimiento",
    desc: "Procesa la imagen subida por el usuario y generá una firma compacta. Compará contra el inventario del usuario y obtenés un resultado: Match Found, Possible Match o No Match.",
    tags: ["Model AI", "Extracción de firma", "Puntuación de confianza"],
  },
  {
    icon: SlidersHorizontal,
    titulo: "Firma de llave y matching",
    desc: "La firma de la llave esta compuesta de parámetros como dientes, color, marca, mango, etc. Se compara la firma de la llave con las firmas de las llaves guardadas previamente en el inventario del usuario usando la API de Open AI.",
    tags: ["Similitud coseno", "Umbrales configurables", "Matching"],
  },
  {
    icon: FlaskConical,
    titulo: "Pruebas y reportes",
    desc: "Suites de prueba reproducibles. Seguimiento de falsos positivos y negativos.",
    tags: ["Tests reproducibles", "Busqueda de FP y FN",],
  },
];

const keyscanEtapas = [
  {
    etiqueta: "V1",
    titulo: "Prueba de concepto",
    subtitulo: "Firma híbrida + similitud coseno",
    desc: "La primera versión definió la arquitectura central: extraer una firma compacta de una imagen de llave y compararla contra el inventario usando la API de Open AI. El objetivo era simple: demostrar que el concepto funcionaba y establecer umbrales base.",
    tags: ["Firma híbrida", "Similitud coseno", "Umbrales base"],
  },
  {
    etiqueta: "V3",
    titulo: "Shape-first y lógica de veto",
    subtitulo: "Reducción de falsos positivos",
    desc: "Se introdujo un enfoque shape-first para detectar llaves claramente distintas antes de ejecutar el matching completo. Mejoró significativamente la discriminación entre llaves diferentes.",
    tags: ["Shape-first", "Momentos de Hu", "Hausdorff", "Lógica de veto"],
  },
  {
    etiqueta: "V6",
    titulo: "Open AI API multimodal",
    subtitulo: "Pipeline moderno",
    desc: "Los documentos base anteriores se descartaron por no llegar a un resultado valido y se me ocurrio que se podía usar la API de Open AI para extraer la firma de la llave y compararla contra el inventario. Use un prompt optimizado para que OPEN AI acceda a la imagen, extraiga las caracteristicas de la misma y la compare contra las caracteristicas de las llaves guardadas previamente en el inventario.",
    tags: ["IA multimodal", "Pipeline en staging", "Enfoque moderno"],
  },
];

const stackItems = [
  { etiqueta: "Frontend", valor: "Remix / React + Tailwind CSS" },
  { etiqueta: "Backend", valor: "Node.js / rutas de servidor en Remix" },
  { etiqueta: "Base de datos", valor: "Supabase + Postgres + Prisma" },
  { etiqueta: "Media", valor: "Cloudinary — almacenamiento de imagenes" },
  { etiqueta: "Despliegue", valor: "Heroku staging — deploy automático desde main" },
  { etiqueta: "Seguridad", valor: "Desarrollo local con .env y deployment en Heroku" },
];

const rolItems = [
  "Fui el encargado de todo el desarrollo del proyecto, desde la arquitectura hasta el despliegue.",
  "Construí el pipeline de extracción y matcheo de principio a fin, desde la captura de la imagen hasta el resultado de matching.",
  "Integré el pipeline en la app con el routing completo de API",
  "Estructuré los modelos de base de datos para firmas, consultas y registros de matcheo",
  "Foco en confiabilidad, pruebas reproducibles y un flujo listo para producción",
];

const desafios = [
  {
    titulo: "La misma llave, fotos distintas",
    desc: "Luz, ángulo, desenfoque: una sola llave puede verse completamente diferente en cada foto.",
  },
  {
    titulo: "Calibración de umbrales",
    desc: "Demasiado estricto y se pierden matcheos válidos. Demasiado flexible y se generan falsos positivos.",
  },
  {
    titulo: "Prompt optimizado para Open AI API",
    desc: "Se optimizo el prompt para que Open AI extraiga las caracteristicas de la llave y la compare contra las caracteristicas de las llaves guardadas previamente en el inventario. No fue facil encontrar el prompt optimo para que Open AI entendiera la tarea y devolviera un resultado con los menores errores posibles, pero al final lo logre.",
  },
];

const resultados = [
  "Entregué un flujo de reconocimiento funcional: escaneo, firma, comparación y resultado",
  "Reduje falsos positivos entre versiones mejorando la lógica de discriminación",
  "Construí la base para matching de inventario escalable",
  "Creé documentación clara y una metodología de prueba reproducible",
];

// ─── Componente ───────────────────────────────────────────────────────────────

type Props = { locale: Locale };

export function KeyCliqCaseStudy({ locale }: Props) {
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
            KeyCliq
          </h1>
          <p className="mt-2 text-center text-lg font-semibold text-muted-foreground md:text-xl">
            Sistema de escaneo de llaves asistido por IA para identificarlas desde fotos y
            matchearlas contra el inventario de un usuario.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-foreground/80 md:text-lg">
            Construido mientras trabajaba en Rebl Tech, para resolver una necesidad de un cliente real:
            identificar llaves físicas desde fotos, matchearlas contra un inventario y llevar el
            historial completo de cada escaneo. El núcleo del sistema es un pipeline de visión
            personalizado, KeyScan, que evolucionó en varias versiones para mejorar la precisión y
            reducir los falsos positivos.
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
                Podés ver KeyCliq funcionando ahora mismo
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                La app está desplegada en Vercel y disponible para explorar.
              </p>
              <a
                href="https://keycliq-personal.vercel.app/"
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

        {/* ── Problema y solución ───────────────────────────────────────────── */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Problema
              </p>
              <h2 className="mt-3 text-xl font-bold tracking-tight">
                No identificar llaves físicas a simple vista
              </h2>
              <ul className="mt-5 space-y-3">
                {[
                  "Los equipos que manejan muchas llaves físicas pierden tiempo identificándolas manualmente.",
                  "Por ejemplo, un portero encuentra una llave sin etiqueta y no sabe si es la correcta.",
                  "O un dueño de casa encuentra una llave en el suelo y no sabe si es la correcta.",
                ].map((item) => (
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
                Solución
              </p>
              <h2 className="mt-3 text-xl font-bold tracking-tight">
                Un pipeline de visión personalizado para reconocimiento de llaves a través de imágenes
              </h2>
              <ul className="mt-5 space-y-3">
                {[
                  "Una web app para capturar fotos de llaves, guardar registros e identificar llaves físicas a través de imágenes.",
                  "KeyScan: un pipeline de visión con Model AI personalizado que extrae una firma compacta de la llave y la matchea contra las firmas de las llaves guardadas previamente en el inventario del usuario.",
                  "Matching entre llaves: Match Found, Possible Match (mas de un match found, usuario decide cual es la correcta) o No Match.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* ── Funcionalidades ───────────────────────────────────────────────── */}
        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Funcionalidades
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">Qué hace</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {features.map((f, i) => {
              const Icon = f.icon;
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

        {/* ── KeyScan: evolución ────────────────────────────────────────────── */}
        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Sistema de reconocimiento
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              KeyScan — Logica de escaneo y matching
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              El algoritmo de matcheo no se publicó una sola vez y quedó ahí. Cada versión atacó
              un problema específico de la anterior.
            </p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {keyscanEtapas.map((etapa, i) => (
              <Reveal key={etapa.etiqueta} delay={i * 0.05}>
                <div className="flex gap-5 rounded-2xl border border-border bg-card/60 p-6">
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-xs font-bold text-primary-foreground">
                      {etapa.etiqueta}
                    </div>
                    {i < keyscanEtapas.length - 1 && (
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

        {/* ── Stack ─────────────────────────────────────────────────────────── */}
        <div className="mt-20">
          <Reveal>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">Stack</h2>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {stackItems.map((item, i) => (
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

        {/* ── Desafíos ──────────────────────────────────────────────────────── */}
        <div className="mt-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              DESAFIOS Y DESICIONES
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {desafios.map((d, i) => (
              <Reveal key={d.titulo} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-border bg-card/60 p-6">
                  <h3 className="font-semibold">{d.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Mi rol ────────────────────────────────────────────────────────── */}
        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Responsabilidad
              </p>
            </div>
            <ul className="mt-5 space-y-2">
              {rolItems.map((item) => (
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

        {/* ── Resultados ────────────────────────────────────────────────────── */}
        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Resultados
            </p>
            <h2 className="mt-3 text-xl font-bold tracking-tight md:text-2xl">
              Qué logré
            </h2>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {resultados.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
            <blockquote className="mt-8 border-l-2 border-primary/40 pl-4 text-sm italic leading-relaxed text-muted-foreground">
              KeyCliq es el tipo de proyecto que lleve mis capacidades al limite, me obligo a pensar fuera de la caja y a resolver problemas complejos de manera inteligente y eficiente.
            </blockquote>
          </div>
        </Reveal>

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
