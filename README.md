# Starter Template (2026)

A modern, production-ready **Next.js 15** starter template for building portfolios, business sites, and e-commerce stores. Clone it, rebrand it, ship it.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, Server Components) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 3 + cva + clsx + tailwind-merge |
| Animations | Framer Motion |
| UI Primitives | Radix UI (Dialog) |
| Icons | Lucide React |
| Backend (optional) | Supabase (forms only — contact & waitlist) |
| Deployment | Vercel |

## Quick Start

```bash
# 1. Clone the repo
git clone <your-repo-url> my-project
cd my-project

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Modes

This template supports three modes out of the box. Choose one (or combine them).

### Mode A — Store (default)

An e-commerce store with shop, product pages, cart, filters, and checkout placeholder.

**Included routes:** `/`, `/shop`, `/shop/[slug]`, `/collections`, `/checkout`, `/about`, `/contact`, `/shipping`

### Mode B — Portfolio

A developer/designer portfolio with projects showcase and contact.

**To activate:** See [TEMPLATE_GUIDE.md](./TEMPLATE_GUIDE.md) for step-by-step instructions on converting to portfolio mode, including adding `/projects` routes.

### Mode C — Business/Brand Site

A marketing website with landing page, about, and contact.

**To activate:** Simply remove store-specific routes (`/shop`, `/collections`, `/checkout`) and update navigation in `config/site.ts`.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/                # API routes (contact, waitlist)
│   ├── shop/               # Store pages (removable)
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   └── ...
├── components/
│   ├── ui/                 # Design system (button, dialog, input, etc.)
│   ├── layout/             # Header, Footer, MobileNav, etc.
│   ├── sections/           # Homepage sections (Hero, Featured, etc.)
│   ├── shop/               # Store components (removable)
│   ├── pdp/                # Product detail page (removable)
│   ├── cart/               # Cart drawer & widget (removable)
│   ├── checkout/           # Checkout flow (removable)
│   ├── contact/            # Contact form & FAQ
│   ├── about/              # About page content
│   └── waitlist/           # Waitlist form & modal
├── config/
│   └── site.ts             # ⭐ Central branding config (START HERE)
├── contexts/               # React contexts (Cart, Toast)
├── data/                   # Static datasets (products, categories, projects)
├── hooks/                  # Custom React hooks
├── lib/
│   ├── types/              # TypeScript type definitions
│   ├── shop/               # Shop filtering & sorting logic
│   ├── products/           # Product data fetching
│   └── utils.ts            # Utility functions (cn)
└── public/                 # Static assets
    └── placeholders/       # Placeholder images
```

## Configuration

All branding is centralized in **`config/site.ts`**:

```typescript
export const siteConfig = {
  name: "Your Brand",           // Site name (header, footer, metadata)
  description: "...",           // SEO description
  email: "hello@example.com",  // Contact email
  url: "https://example.com",  // Production URL
  mainNav: [...],              // Navigation links
  announcement: "...",         // Top banner text (empty to hide)
  // ... more options
};
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL for SEO |
| `NEXT_PUBLIC_SUPABASE_URL` | No | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | No | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | No | Supabase service role key |

## Deployment (Vercel)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy

## Scripts

```bash
npm run dev          # Start dev server (Turbopack)
npm run dev:webpack  # Start dev server (Webpack)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Documentation

See **[TEMPLATE_GUIDE.md](./TEMPLATE_GUIDE.md)** for detailed customization recipes including:

- How to change branding
- How to convert between modes (store / portfolio / business)
- How data and routing works
- How to add Supabase forms
- How to add Stripe, MDX blog, authentication, and more

## License

MIT
