"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types/portfolio";
import { cn } from "@/lib/utils";

type ProjectShowcaseCardProps = {
  locale: "en" | "es";
  project: Project;
  className?: string;
  mediaClassName?: string;
  /** Controls how media fills its container. Defaults to "cover". */
  mediaObjectFit?: "cover" | "contain";
  /**
   * When set, renders this image instead of project.heroVideo.
   * Use when the homepage should show a static screenshot rather than the
   * demo video (which may still be needed on the project detail page).
   */
  previewImage?: string;
  /**
   * CSS object-position value to reposition the image/video within its container.
   * Examples: "center top", "center 30%", "50% 20%"
   * Defaults to "center center".
   */
  imagePosition?: string;
};

export function ProjectShowcaseCard({
  locale,
  project,
  className,
  mediaClassName,
  mediaObjectFit = "cover",
  previewImage,
  imagePosition = "center center",
}: ProjectShowcaseCardProps) {
  const reduceMotion = useReducedMotion();
  const mediaPoster = project.posterImage ?? project.coverImage;
  const hasVideo = Boolean(project.heroVideo) && !previewImage;
  const liveUrl = project.links?.live;

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card/70",
        "shadow-sm [transition-property:box-shadow,border-color] [transition-duration:300ms] [transition-timing-function:ease]",
        "hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:ring-1 hover:ring-primary/20",
        className
      )}
    >
      {/* Media */}
      <div
        className={cn(
          "relative overflow-hidden border-b border-border/70",
          mediaClassName ?? "aspect-[16/9]"
        )}
      >
        {hasVideo ? (
          <video
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            poster={mediaPoster}
            aria-label={`${project.title} demo`}
            style={{ objectPosition: imagePosition }}
            className={cn(
              "absolute inset-0 h-full w-full",
              mediaObjectFit === "contain" ? "object-contain" : "object-cover"
            )}
          >
            <source src={project.heroVideo} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={previewImage ?? mediaPoster}
            alt={`${project.title} cover`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectPosition: imagePosition }}
            className={cn(
              "transition duration-300 group-hover:scale-[1.02]",
              mediaObjectFit === "contain" ? "object-contain" : "object-cover"
            )}
          />
        )}
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-3 p-5">
        <div className="min-w-0">
          {/*
           * Stretched-link pattern: ::after covers the full card surface, making
           * the entire card the primary click target (project case study).
           * The Live pill sits above it via relative z-10.
           */}
          <Link
            href={`/${locale}/projects/${project.slug}`}
            aria-label={`View ${project.title} case study`}
            className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <h3 className="text-lg font-semibold tracking-tight [transition:color_200ms_ease] group-hover:text-primary">
              {project.title}
            </h3>
          </Link>
          <p className="mt-1 text-sm text-muted-foreground">{project.oneLiner}</p>
        </div>

        <div className="flex justify-end">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} – open live site`}
              className={cn(
                "relative z-10 inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-1.5",
                "border border-primary bg-primary text-sm font-semibold text-primary-foreground",
                "shadow-md shadow-sky-500/30",
                "[transition:background-color_200ms_ease,border-color_200ms_ease,box-shadow_200ms_ease]",
                "hover:bg-sky-500 hover:border-sky-700 hover:shadow-lg hover:shadow-sky-500/40",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2"
              )}
            >
              Live
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : (
            <ArrowUpRight
              className="relative z-10 h-4 w-4 shrink-0 text-muted-foreground [transition:color_200ms_ease] group-hover:text-foreground"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </motion.article>
  );
}
