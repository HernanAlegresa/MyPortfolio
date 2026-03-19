"use client";

import * as React from "react";
import { ProjectHeroVideo } from "@/components/portfolio/project-hero-video";

type ProjectHeroMediaProps = {
  src: string;
  poster?: string;
  ariaLabel: string;
  playbackRate?: number;
};

export function ProjectHeroMedia({ src, poster, ariaLabel, playbackRate }: ProjectHeroMediaProps) {
  const [aspectRatio, setAspectRatio] = React.useState<number>(16 / 9);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-border shadow-lg"
      style={{ aspectRatio }}
    >
      <ProjectHeroVideo
        src={src}
        poster={poster}
        ariaLabel={ariaLabel}
        playbackRate={playbackRate}
        onAspectRatio={setAspectRatio}
        className="absolute inset-0 h-full w-full object-contain"
      />
    </div>
  );
}

