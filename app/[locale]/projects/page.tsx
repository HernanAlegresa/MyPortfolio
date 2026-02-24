import type { Metadata } from "next";
import { getAllProjects } from "@/data/projects";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/portfolio/container";
import { Heading } from "@/components/portfolio/heading";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Section } from "@/components/portfolio/section";
import { getAlternateLanguages } from "@/lib/seo";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locales.includes(locale as Locale) ? (locale as Locale) : "es";
  const dict = await getDictionary(typedLocale);
  return {
    title: dict.projects.title,
    description: dict.projects.description,
    alternates: getAlternateLanguages("projects"),
  };
}

type ProjectsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  const typedLocale = locales.includes(locale as Locale) ? (locale as Locale) : "es";
  const dict = await getDictionary(typedLocale);
  const projects = getAllProjects(typedLocale);

  // ASPECT RATIO per project — all cards uniform at 16:9
  // Change any value to adjust that card's height (e.g. "aspect-[4/3]", "aspect-[16/10]")
  const aspectClasses: Record<string, string> = {
    "card-shootout":             "aspect-[16/9]",
    "keycliq":                   "aspect-[16/9]",
    "oh-shirt":                  "aspect-[16/9]",
    "shopify-integrations-rebl": "aspect-[16/9]",
  };

  // IMAGE POSITION per project — adjust "X% Y%" to reposition within the card
  // X = horizontal (0%=left, 50%=center, 100%=right)
  // Y = vertical   (0%=top,  50%=center, 100%=bottom)
  const imagePositions: Record<string, string> = {
    "keycliq":                   "center 10%",   // ← move KeyCliq image down
    "oh-shirt":                  "center center", // ← reposition Oh Sh!rt
    "card-shootout":             "center center", // ← reposition Card Shootout
    "shopify-integrations-rebl": "center center", // ← already fine
  };

  // IMAGE SCALE (ZOOM) per project — 1 = no zoom, 1.2 = 20% in, 0.9 = zoom out
  const imageScales: Record<string, number> = {
    "card-shootout":             1,    // ← adjust zoom
    "oh-shirt":                  1.01, // ← adjust zoom
    "keycliq":                   1,
    "shopify-integrations-rebl": 1,
  };

  return (
    <Section>
      <Container>
        <Reveal>
          <Heading title={dict.projects.title} description={dict.projects.description} />
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <ProjectCard
                locale={typedLocale}
                project={project}
                aspectClassName={aspectClasses[project.slug]}
                imagePosition={imagePositions[project.slug]}
                imageScale={imageScales[project.slug]}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
