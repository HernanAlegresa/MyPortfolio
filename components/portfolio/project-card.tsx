"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  locale: "en" | "es";
  project: Project;
  /**
   * CSS object-position to reposition the image within the card.
   * Examples: "center center", "center 20%", "50% 30%"
   */
  imagePosition?: string;
  /**
   * Zoom multiplier for the image. 1 = no zoom, 1.2 = 20% zoom in, 0.9 = zoom out.
   * The parent has overflow-hidden so zoom crops the edges inward.
   */
  imageScale?: number;
  /**
   * Tailwind aspect-ratio class for the image area.
   * Examples: "aspect-[16/9]", "aspect-[20/9]", "aspect-[4/3]"
   */
  aspectClassName?: string;
};

export function ProjectCard({
  locale,
  project,
  imagePosition = "center center",
  imageScale = 1,
  aspectClassName = "aspect-[16/10]",
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const liveUrl = project.links?.live;

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/70"
    >
      {/* Media */}
      <div className={`relative overflow-hidden ${aspectClassName}`}>
        <Image
          src={project.coverImage}
          alt={`${project.title} cover`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectPosition: imagePosition,
            transform: `scale(${imageScale})`,
            transformOrigin: "center center",
          }}
          className="object-cover transition-transform duration-300"
        />
      </div>

      {/* Footer */}
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            {/* Stretched link — covers full card as primary click target */}
            <Link
              href={`/${locale}/projects/${project.slug}`}
              aria-label={`View ${project.title} case study`}
              className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <h3 className="text-lg font-semibold [transition:color_200ms_ease] group-hover:text-primary">
                {project.title}
              </h3>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">{project.oneLiner}</p>
          </div>

          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} – open live site`}
              className={cn(
                "relative z-10 inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1",
                "border border-border bg-card text-xs font-medium text-foreground/80",
                "[transition:background-color_200ms_ease,border-color_200ms_ease,color_200ms_ease,box-shadow_200ms_ease]",
                "hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-sm hover:shadow-primary/30",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              )}
            >
              Live
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          ) : (
            <ArrowUpRight
              className="relative z-10 mt-1 h-4 w-4 shrink-0 text-muted-foreground [transition:color_200ms_ease] group-hover:text-foreground"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </motion.article>
  );
}
