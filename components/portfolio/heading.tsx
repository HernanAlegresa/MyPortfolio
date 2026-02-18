import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
  title: string;
  description?: string;
  eyebrow?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function Heading({
  title,
  description,
  eyebrow,
  align = "left",
  className,
}: HeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? <div className="mb-3">{eyebrow}</div> : null}
      <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">{description}</p>
      ) : null}
    </div>
  );
}
