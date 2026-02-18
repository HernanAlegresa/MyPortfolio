"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types/portfolio";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  locale: "en" | "es";
  project: Project;
};

export function ProjectCard({ locale, project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-border bg-card/70"
    >
      <Link href={`/${locale}/projects/${project.slug}`} aria-label={project.title}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.coverImage}
            alt={`${project.title} cover`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <div className="space-y-3 p-5">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.oneLiner}</p>
            </div>
            <ArrowUpRight className="mt-1 h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
