import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";

export function BackToProjects({ locale }: { locale: Locale }) {
  return (
    <Link
      href={`/${locale}/projects`}
      className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
    >
      <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
      Volver a proyectos
    </Link>
  );
}
