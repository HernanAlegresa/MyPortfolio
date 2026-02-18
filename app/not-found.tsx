import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-4 text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className={buttonVariants({ className: "mt-8" })}>
        Go Home
      </Link>
    </main>
  );
}
