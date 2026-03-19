"use client";

import * as React from "react";

type ProjectHeroVideoProps = {
  src: string;
  poster?: string;
  ariaLabel: string;
  playbackRate?: number;
  className?: string;
};

export function ProjectHeroVideo({
  src,
  poster,
  ariaLabel,
  playbackRate = 1.4,
  className,
}: ProjectHeroVideoProps) {
  const ref = React.useRef<HTMLVideoElement | null>(null);
  const [failed, setFailed] = React.useState(false);

  return (
    <>
      <video
        ref={ref}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={ariaLabel}
        className={className}
        onLoadedMetadata={() => {
          const el = ref.current;
          if (!el) return;
          // Keep it subtle: just set a slightly faster playback for the demo.
          el.playbackRate = playbackRate;
          // Ensure autoplay kicks in even if the browser delays it.
          void el.play().catch(() => {});
        }}
        onError={() => setFailed(true)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {failed ? (
        <div className="absolute inset-0 grid place-items-center bg-background/60 p-6 text-center">
          <div className="max-w-md rounded-2xl border border-border bg-card/80 p-5 backdrop-blur">
            <p className="text-sm font-semibold">No se pudo reproducir el video</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Probablemente el archivo esté codificado con un formato que tu navegador no soporta. Podés abrirlo
              directamente para verificar.
            </p>
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Abrir video
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}

