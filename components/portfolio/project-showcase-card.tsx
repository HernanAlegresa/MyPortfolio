import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types/portfolio";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type ProjectShowcaseCardProps = {
  locale: "en" | "es";
  project: Project;
  className?: string;
  mediaClassName?: string;
  autoPlayVideo?: boolean;
};

export function ProjectShowcaseCard({
  locale,
  project,
  className,
  mediaClassName,
  autoPlayVideo = false,
}: ProjectShowcaseCardProps) {
  const mediaPoster = project.posterImage ?? project.coverImage;
  const hasVideo = Boolean(project.heroVideo);

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-card/70 shadow-sm transition-colors hover:border-primary/40",
        className
      )}
    >
      <Link href={`/${locale}/projects/${project.slug}`} aria-label={project.title} className="block">
        <div className={cn("relative aspect-[16/9] overflow-hidden border-b border-border/70", mediaClassName)}>
          {hasVideo ? (
            <video
              muted={autoPlayVideo}
              autoPlay={autoPlayVideo}
              loop
              playsInline
              preload="metadata"
              poster={mediaPoster}
              controls={!autoPlayVideo}
              aria-label={`${project.title} demo`}
              className="h-full w-full object-cover"
            >
              <source src={project.heroVideo} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={mediaPoster}
              alt={`${project.title} cover`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          )}
        </div>

        <div className="space-y-4 p-5">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.oneLiner}</p>
            </div>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-foreground" />
          </div>
        </div>
      </Link>
    </article>
  );
}
