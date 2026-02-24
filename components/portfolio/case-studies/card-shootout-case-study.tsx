import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/portfolio/container";
import { Section } from "@/components/portfolio/section";
import { Badge } from "@/components/ui/badge";
import { BackToProjects } from "@/components/portfolio/back-to-projects";
import type { Locale } from "@/lib/i18n/config";

// ─── Contenido ────────────────────────────────────────────────────────────────

const stack = [
  "Next.js 15",
  "React 18",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Supabase",
  "Capacitor",
];

const rolItems = [
  "Diseño de la arquitectura completa del juego",
  "Modelado de la lógica de penales y sistema de turnos",
  "Diseño del sistema de cartas (rareza, atributos, estructura de datos)",
  "Gestión de estado y flujo de partida",
  "Modelado de base de datos con Supabase",
  "Diseño de experiencia mobile-first y decisiones de UI/UX",
  "Dirección del roadmap y visión de producto a largo plazo",
];

const features = [
  {
    titulo: "Sistema de equipo y formaciones",
    desc: "Los usuarios arman su equipo antes de cada partido. Gestión de jugadores con drag & drop entre titulares, suplentes y reservas. La formación afecta directamente el juego. La validación del equipo impide empezar un partido sin una alineación válida.",
    tags: ["Armador de equipo", "Drag & drop", "Lógica de formaciones", "Validación"],
  },
  {
    titulo: "Penales contra la CPU",
    desc: "Simulación estructurada de tanda de penales con turnos alternados y reglas reales. A diferencia de los juegos tradicionales basados únicamente en gestos deslizables, Card Shootout tiene una mecánica híbrida: las cartas del jugador influyen en atributos y probabilidades, pero la ejecución final depende siempre de la decisión del usuario. No es automatización, es estrategia + decisión.",
    tags: ["Reglas de penales", "Sistema de turnos", "Matriz de tiros",],
  },
  {
    titulo: "Sistema de cartas",
    desc: "Diferentes niveles de rareza (Bronce, Plata, Oro, Especial) y estructura de atributos que afectan el rendimiento en penales. Las cartas no juegan por sí solas: potencian las decisiones del jugador, manteniendo el control estratégico en manos del usuario.",
    tags: ["Niveles de rareza", "Supabase Storage",],
  },
  {
    titulo: "UI y experiencia",
    desc: "Diseño mobile-first con transiciones fluidas utilizando Framer Motion. Identidad visual inspirada en cartas deportivas y coleccionismo de fútbol. Arquitectura de pantallas pensada para escalabilidad futura (economía, tienda, perfiles y multiplayer).",
    tags: ["Mobile-first", "Framer Motion", "Responsive", 'Arquitectura de pantallas'],
  },
];

const visionItems = [
  "Sistema de monedas y recompensas",
  "Apertura de sobres y tienda interna",
  "Progresión y mejora de jugadores",
  "Partidas online y modo contra amigos",
  "Intercambio y mercado de cartas",
  "Torneos y competencias",
  "Sistema social y perfiles de usuario",
];

const demostraciones = [
  "Pensamiento de producto full stack",
  "Diseño de sistemas interactivos complejos",
  "Arquitectura escalable con stack moderno",
  "Gestión de estado y modelado de base de datos",
  "Capacidad de reconstrucción técnica y evolución de versiones",
  "Mentalidad iterativa y visión a largo plazo",
];

// ─── Componente ───────────────────────────────────────────────────────────────

type Props = { locale: Locale };

export function CardShootoutCaseStudy({ locale }: Props) {
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
            Card Shootout
          </h1>
          <p className="mt-2 text-center text-lg font-semibold text-muted-foreground md:text-xl">
            Juego Mobile de penales de fútbol con sistema de cartas de jugadores y visión de producto a largo plazo.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-foreground/80 md:text-lg">
          Card Shootout comenzó como mi proyecto final de bootcamp, pero rápidamente se convirtió en algo mucho más grande. Descubrí que con programación podía crear experiencias que mezclaran mis propios intereses, como el fútbol, con sistemas complejos diseñados desde cero.
          <br />
          <br />
          No es un simple minijuego de penales, es una propuesta original que combina estrategia, cartas coleccionables y toma de decisiones del usuario en tiempo real, pensada como un producto escalable con potencial de negocio.
          </p>
        </Reveal>

        {/* Rol + Stack */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Mi rol
              </p>
              <ul className="mt-4 space-y-2">
                {rolItems.map((item) => (
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
                Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              El proyecto fue originalmente desarrollado en Flutter, Firebase y Bloc como parte del bootcamp.
              <br />
              Luego de finalizarlo, decidí reconstruirlo completamente utilizando un stack web moderno (Next.js, React, TypeScript y Supabase) con el objetivo de explorar mayor escalabilidad, arquitectura más robusta y posibilidad de expansión multiplataforma.
              <br />
              <br />
Esta reconstrucción fue un desafío técnico intencional para validar que el concepto pudiera sostenerse como producto real.              </p>
            </div>
          </Reveal>
        </div>

        {/* ── Imagen hero ───────────────────────────────────────────────────── */}
        <Reveal className="mt-10">
          <div className="relative mx-auto max-w-2xl aspect-[2/1] overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/projects/card-shootout/cardshootout_projectpage.png"
              alt="Card Shootout — vista general del proyecto"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* ── Resumen ───────────────────────────────────────────────────────── */}
        <Reveal className="mt-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            ORIGEN
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            De idea personal a concepto de producto            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
            La idea nació cuando entendí que la programación no solo era una herramienta técnica, sino una forma de crear cosas que realmente me entusiasman. Quise combinar dos mundos: el desarrollo de software y el fútbol.
            <br />
            <br />
            Así surgió Card Shootout: un juego de penales diferente a los existentes en el mercado. No es un juego basado únicamente en deslizar el dedo para ejecutar un tiro. Introduce un sistema híbrido donde las cartas influyen en cada jugada, pero la decisión final siempre pertenece al jugador.
            <br />
            <br />
            La carta potencia, el usuario decide. Esa combinación estratégica es el núcleo del proyecto.
            </p>
          </div>
        </Reveal>

        {/* ── Funcionalidades principales ───────────────────────────────────── */}
        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Funcionalidades
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Qué hace el juego
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {features.map((f, i) => (
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

        {/* ── Pantallas ─────────────────────────────────────────────────────── */}
        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Pantallas
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Algunas pantallas del juego
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Una selección de pantallas que muestran distintos momentos de la experiencia.
            </p>
          </Reveal>

          {/* Fila 1 — Inicio + Equipo */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Reveal>
              <div className="space-y-2">
                <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/projects/card-shootout/cardshootout_homescreen.png"
                    alt="Card Shootout — pantalla de inicio"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-fill object-top"
                  />
                </div>
                <p className="text-center text-xs text-muted-foreground">Pantalla de inicio</p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="space-y-2">
                <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/projects/card-shootout/cardshootout_teammanagement_screen.png"
                    alt="Card Shootout — gestión de equipo"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-fill object-top"
                  />
                </div>
                <p className="text-center text-xs text-muted-foreground">Gestión de equipo</p>
              </div>
            </Reveal>
          </div>

          {/* Fila 2 — Pre-partida + Resultados */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Reveal>
              <div className="space-y-2">
                <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/projects/card-shootout/preview_pre-partida.png"
                    alt="Card Shootout — vista previa pre-partida"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-fill object-top"
                  />
                </div>
                <p className="text-center text-xs text-muted-foreground">Vista previa pre-partida</p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="space-y-2">
                <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/projects/card-shootout/tandapenales_turnogolero.png"
                    alt="Card Shootout — turno del golero en penales"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-fill object-top"
                  />
                </div>
                <p className="text-center text-xs text-muted-foreground">Tanda de penales — turno del golero</p>
              </div>
            </Reveal>
          </div>

          {/* Fila 3 — Tanda de penales + Resultados */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Reveal>
              <div className="space-y-2">
                <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/projects/card-shootout/tandapenalesturnojugador.png"
                    alt="Card Shootout — turno del jugador en penales"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-fill object-top"
                  />
                </div>
                <p className="text-center text-xs text-muted-foreground">Tanda de penales — turno del jugador</p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="space-y-2">
                <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/projects/card-shootout/pantalladeresultados.png"
                    alt="Card Shootout — pantalla de resultados"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-fill object-top"
                  />
                </div>
                <p className="text-center text-xs text-muted-foreground">Pantalla de resultados</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Visión del producto ───────────────────────────────────────────── */}
        <Reveal className="mt-20">
          <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Visión
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Hoja de ruta del producto
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            El objetivo es llevar Card Shootout más allá de partidas contra la CPU.
            <br />
            El diseño del sistema fue pensado desde el inicio con potencial de expansión hacia una economía completa de cartas y un ecosistema competitivo.            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {visionItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Qué demuestra ─────────────────────────────────────────────────── */}
        <Reveal className="mt-10">
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
            Card Shootout demuestra que no solo desarrollo funcionalidades: diseño productos con visión, estructura y potencial real de crecimiento. Es un proyecto en el que creo profundamente y que, con el equipo y el tiempo adecuados, podría convertirse en un producto comercial sólido.            </blockquote>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
