"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

type HeroVideoProps = {
  src: string;
  poster?: string;
};

export function HeroVideo({ src, poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-card/40 shadow-2xl shadow-cyan-500/5">
        {poster ? (
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            aria-hidden="true"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-xs text-muted-foreground">Card Shootout</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60 shadow-2xl shadow-cyan-500/5 transition-transform duration-300 hover:scale-[1.02]">
      {/* Subtle glow behind video */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10 blur-2xl"
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-hidden="true"
        className="h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
