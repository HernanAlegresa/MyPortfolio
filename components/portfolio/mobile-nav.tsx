"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavItem = { href: string; label: string };

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition hover:text-foreground"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open && (
        <nav
          className="absolute left-0 right-0 top-16 z-50 border-b border-border bg-background/95 backdrop-blur-md"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
