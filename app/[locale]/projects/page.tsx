import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/data/projects";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/portfolio/container";
import { Heading } from "@/components/portfolio/heading";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Section } from "@/components/portfolio/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locales.includes(locale as Locale) ? (locale as Locale) : "en";
  const dict = await getDictionary(typedLocale);
  return {
    title: dict.projects.title,
    description: dict.projects.description,
  };
}

type ProjectsPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tag?: string }>;
};

export default async function ProjectsPage({ params, searchParams }: ProjectsPageProps) {
  const { locale } = await params;
  const { tag } = await searchParams;
  const typedLocale = locales.includes(locale as Locale) ? (locale as Locale) : "en";
  const dict = await getDictionary(typedLocale);
  const projects = getAllProjects();
  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();
  const activeTag = tag ?? "all";
  const filteredProjects =
    activeTag === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag));

  return (
    <Section>
      <Container>
        <Reveal>
          <Heading title={dict.projects.title} description={dict.projects.description} />
        </Reveal>

        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">{dict.common.filters}</span>
            <Link
              href={`/${typedLocale}/projects`}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                activeTag === "all" && "bg-muted"
              )}
            >
              {dict.common.all}
            </Link>
            {allTags.map((currentTag) => (
              <Link
                key={currentTag}
                href={`/${typedLocale}/projects?tag=${encodeURIComponent(currentTag)}`}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  activeTag === currentTag && "bg-muted"
                )}
              >
                {currentTag}
              </Link>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <ProjectCard locale={typedLocale} project={project} />
            </Reveal>
          ))}
        </div>
        {filteredProjects.length === 0 ? (
          <p className="mt-6 text-sm text-muted-foreground">No projects found for this filter.</p>
        ) : null}
        <div className="mt-8">
          <Badge variant="outline">{filteredProjects.length} results</Badge>
        </div>
      </Container>
    </Section>
  );
}
