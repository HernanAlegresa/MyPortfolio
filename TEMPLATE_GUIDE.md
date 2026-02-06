# Template Guide — Start Here

This guide explains how to customize, extend, and adapt this starter template for different project types. It is written for both human developers and AI coding agents.

---

## Table of Contents

1. [Quick Branding (5 minutes)](#1-quick-branding)
2. [Routing Structure](#2-routing-structure)
3. [Data Layer](#3-data-layer)
4. [Shop Features](#4-shop-features)
5. [Cart & Checkout](#5-cart--checkout)
6. [Supabase Forms](#6-supabase-forms)
7. [Feature Boundaries](#7-feature-boundaries)
8. [Recipes](#8-recipes)
   - [Turn store into portfolio](#recipe-a-turn-store-into-portfolio)
   - [Create a new store vertical](#recipe-b-create-a-new-store-vertical)
   - [Create a business/brand site](#recipe-c-create-a-businessbrand-site)
   - [Add MDX blog](#recipe-d-add-mdx-blog)
   - [Add Stripe payments](#recipe-e-add-stripe-payments)
   - [Add authentication](#recipe-f-add-authentication)
9. [Deployment Checklist](#9-deployment-checklist)

---

## 1. Quick Branding

**Time: 5 minutes.** Everything you need is in one file.

### Step 1: Edit `config/site.ts`

```typescript
export const siteConfig = {
  name: "Your Brand Name",
  shortName: "Brand",
  description: "Your brand description for SEO.",
  tagline: "Your catchy tagline.",
  url: "https://yourdomain.com",
  email: "hello@yourdomain.com",
  location: "Your City, Country",
  social: {
    twitter: "https://twitter.com/yourbrand",
    instagram: "https://instagram.com/yourbrand",
    github: "",
    linkedin: "",
  },
  mainNav: [
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  announcement: "Free shipping on orders over $100", // empty string to hide
  currency: "USD",
  currencySymbol: "$",
};
```

### Step 2: Update `.env.local`

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Step 3: Replace placeholder images

- `public/hero/` — Hero images (desktop + mobile)
- `public/placeholders/` — Default product placeholder
- Add a `favicon.ico` and `og-image.png` to `public/`

### Step 4: Update `app/globals.css` for custom colors

The template uses CSS custom properties for theming. Edit the `:root` variables:

```css
:root {
  --background: 0 0% 100%;      /* white */
  --foreground: 0 0% 3.9%;      /* near-black */
  --border: 0 0% 89.8%;         /* light grey */
}
```

### Step 5: Change the font

In `app/layout.tsx`, replace the `Inter` import with your preferred Google Font.

---

## 2. Routing Structure

All routes live in `app/` using the Next.js App Router convention.

| Route | Description | Mode |
|-------|-------------|------|
| `/` | Homepage | All |
| `/about` | About page | All |
| `/contact` | Contact form + FAQ | All |
| `/shop` | Product listing with filters | Store |
| `/shop/[slug]` | Product detail page (PDP) | Store |
| `/collections` | Collection overview | Store |
| `/checkout` | Checkout flow | Store |
| `/shipping` | Shipping & returns info | Store |

**Adding new routes:** Create a folder in `app/` with a `page.tsx` file. Example: `app/projects/page.tsx` for a projects listing.

**Metadata:** Each page exports a `metadata` object (or `generateMetadata` function for dynamic pages). The root layout uses `config/site.ts` for the title template: `%s | Your Brand`.

---

## 3. Data Layer

The template uses **static TypeScript files** for data. No database needed for the catalog.

### Products: `data/products.ts`

```typescript
export const products: Product[] = [
  {
    id: "my-product",
    name: "My Product",
    slug: "my-product",
    description: "...",
    price: 49,
    images: ["/products/my-product/image-1.jpg"],
    category: getCollection("shirts"),
    collection: getCollection("shirts"),
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#1A1A1A" }],
    inStock: true,
    featured: true,
    createdAt: "2026-01-01T00:00:00Z",
  },
];
```

**Image convention:** Place images in `public/products/<slug>/` and reference as `/products/<slug>/filename.jpg`.

### Categories & Collections: `data/categories.ts`, `data/collections.ts`

These define the filter options and collection pages. Keep them in sync.

### Projects (Portfolio): `data/projects.ts`

Pre-built dataset for portfolio mode. Includes title, description, tech stack, links.

### Type Definitions: `lib/types/product.ts`

All types (`Product`, `Category`, `Collection`, `Size`, `Color`, `ShopFilters`, `SortOption`) are defined here. Extend as needed (e.g., add `weight`, `material`, `tags`).

---

## 4. Shop Features

### Filtering

The shop uses URL search params for filters. This pattern is server-friendly and shareable.

**How it works:**
1. `app/shop/page.tsx` reads `searchParams` from the URL
2. `lib/shop/normalize.ts` parses params into a `ShopFilters` object
3. `lib/shop/filters.ts` filters and sorts the product array
4. Components update the URL via `useRouter().push()` with new params

**Filter types:** Category, collection, size, color, price range, search query.

**Adding a new filter:** 
1. Add the field to `ShopFilters` type in `lib/types/product.ts`
2. Add parsing logic in `lib/shop/normalize.ts`
3. Add filtering logic in `lib/shop/filters.ts`
4. Add UI control in `components/shop/FilterPanel.tsx`

### Sorting

Sort options: relevance, price (asc/desc), name (asc/desc), newest.

### Search

Full-text search across product name, description, category, and collection. Works both in the shop page and the global search modal (Cmd+K).

---

## 5. Cart & Checkout

### Cart Persistence

The cart uses `React Context` + `localStorage` for persistence.

**Key file:** `contexts/CartContext.tsx`

The cart context provides:
- `items` — Current cart items
- `addItem(product, size, color, quantity)` — Add to cart
- `removeItem(itemId)` — Remove from cart
- `updateQuantity(itemId, quantity)` — Update quantity
- `clearCart()` — Clear all items
- `total` — Computed total price

### Cart UI

- `CartWidget` — Header icon with item count badge
- `CartDrawer` — Slide-out cart panel (Radix Dialog)

### Checkout

The checkout page (`components/checkout/`) is a **placeholder flow** with:
- Shipping form
- Order summary
- Step indicator

**To add real payments:** See [Recipe E: Add Stripe](#recipe-e-add-stripe-payments).

---

## 6. Supabase Forms

Supabase is **optional** and used only for server-side form handling.

### Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create the required tables:

```sql
-- Contact messages
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Waitlist signups
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  product_id TEXT,
  product_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(email, product_id)
);
```

3. Add environment variables to `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### API Routes

- `POST /api/contact` — Handles contact form submissions
- `POST /api/waitlist` — Handles waitlist/newsletter signups

Both routes include:
- Input validation
- Honeypot fields for spam protection
- In-memory rate limiting (use Redis in production)
- Error handling with appropriate HTTP status codes

### Without Supabase

If you don't set Supabase environment variables, the forms will return a server error. You can:
1. Replace the API routes with any other backend (email service, Airtable, etc.)
2. Remove the forms entirely
3. Use a static form service like Formspree

---

## 7. Feature Boundaries

The codebase is organized so store features can be safely removed without breaking the core layout.

### What you can safely delete for a non-store site:

| Files/Folders | Purpose |
|--------------|---------|
| `app/shop/` | Shop pages |
| `app/collections/` | Collections page |
| `app/checkout/` | Checkout page |
| `app/shipping/` | Shipping info page |
| `components/shop/` | Shop components |
| `components/pdp/` | Product detail components |
| `components/cart/` | Cart components |
| `components/checkout/` | Checkout components |
| `components/waitlist/` | Waitlist components |
| `contexts/CartContext.tsx` | Cart state |
| `hooks/useShop*.ts` | Shop hooks |
| `hooks/useWaitlist.ts` | Waitlist hook |
| `lib/shop/` | Shop utilities |
| `lib/products/` | Product fetching |
| `data/products.ts` | Product data |
| `data/categories.ts` | Category data |
| `data/collections.ts` | Collection data |

### What to update after removing store features:

1. **`config/site.ts`** — Remove shop-related nav items
2. **`app/layout.tsx`** — Remove `CartProvider` wrapper if removing cart
3. **`components/layout/Header.tsx`** — Remove `CartWidget` import if removing cart
4. **`app/sitemap.ts`** — Remove product/category URL generation
5. **`components/layout/Footer.tsx`** — Remove `WaitlistForm` if removing waitlist
6. **`components/layout/SearchModal.tsx`** — Remove product/collection search

### What is always safe to keep:

- `components/ui/*` — Design system primitives
- `components/layout/*` — Layout shell
- `components/contact/*` — Contact form
- `components/about/*` — About page
- `components/sections/*` — Homepage sections
- `contexts/ToastContext.tsx` — Toast notifications
- `config/site.ts` — Branding config
- `lib/utils.ts` — Utility functions

---

## 8. Recipes

### Recipe A: Turn Store into Portfolio

**Time: ~30 minutes**

1. **Create project pages:**

   ```
   app/projects/page.tsx        # Projects listing
   app/projects/[slug]/page.tsx  # Project detail
   ```

2. **Use the included project data:**

   The file `data/projects.ts` already has example projects with types. Import and use it.

3. **Update navigation in `config/site.ts`:**

   ```typescript
   mainNav: [
     { href: "/projects", label: "Projects" },
     { href: "/about", label: "About" },
     { href: "/contact", label: "Contact" },
   ],
   ```

4. **Delete store files** (see Feature Boundaries above).

5. **Update the homepage:**
   - Replace `FeaturedProducts` with a `FeaturedProjects` section
   - Replace `CategoryShowcase` with a skills/tech section
   - Update `Hero` and `BrandStory` content

6. **Remove `CartProvider`** from `app/layout.tsx`.

7. **Update sitemap** in `app/sitemap.ts` to include project URLs instead of products.

---

### Recipe B: Create a New Store Vertical

**Time: ~1 hour**

Example: Converting to a furniture store.

1. **Update `data/collections.ts`:**

   ```typescript
   export const collections: Collection[] = [
     { id: "living-room", name: "Living Room", slug: "living-room", description: "..." },
     { id: "bedroom", name: "Bedroom", slug: "bedroom", description: "..." },
     { id: "office", name: "Office", slug: "office", description: "..." },
   ];
   ```

2. **Update `data/categories.ts`** to match.

3. **Update `data/products.ts`** with your products. Keep the same `Product` type.

4. **Extend the Product type** if needed (in `lib/types/product.ts`):

   ```typescript
   export type Product = {
     // ... existing fields
     material?: string;
     dimensions?: { width: number; height: number; depth: number };
     weight?: number;
   };
   ```

5. **Update filters** in `lib/shop/filters.ts` if you add new filterable fields.

6. **Add product images** to `public/products/<slug>/`.

7. **Update `config/site.ts`** with new branding, categories, etc.

8. **Update sizes** — If your products don't use clothing sizes, update the `Size` type in `lib/types/product.ts`:

   ```typescript
   export type Size = "Small" | "Medium" | "Large" | "King" | "Queen";
   ```

---

### Recipe C: Create a Business/Brand Site

**Time: ~20 minutes**

1. **Update `config/site.ts`** with your brand info and simplified navigation:

   ```typescript
   mainNav: [
     { href: "/about", label: "About" },
     { href: "/contact", label: "Contact" },
   ],
   ```

2. **Delete store files** (see Feature Boundaries).

3. **Update homepage sections:**
   - Keep `Hero` and `BrandStory` (update copy)
   - Remove `FeaturedProducts` and `CategoryShowcase`
   - Add custom sections as needed

4. **Remove `CartProvider`** from `app/layout.tsx`.

---

### Recipe D: Add MDX Blog

**Time: ~1-2 hours**

1. **Install dependencies:**

   ```bash
   npm install @next/mdx @mdx-js/loader @mdx-js/react
   ```

2. **Update `next.config.ts`:**

   ```typescript
   import createMDX from '@next/mdx';

   const withMDX = createMDX({});

   const nextConfig = { /* existing config */ };
   export default withMDX(nextConfig);
   ```

3. **Create blog structure:**

   ```
   app/blog/page.tsx              # Blog listing
   app/blog/[slug]/page.tsx       # Blog post (MDX)
   content/blog/                  # MDX files
   ```

4. **Add blog data** in `data/blog.ts` with frontmatter metadata.

5. **Alternative: Use a headless CMS** (Sanity, Contentful, Notion) — create API handlers or use their SDK directly in Server Components.

---

### Recipe E: Add Stripe Payments

**Time: ~2-4 hours**

1. **Install Stripe:**

   ```bash
   npm install stripe @stripe/stripe-js @stripe/react-stripe-js
   ```

2. **Add environment variables:**

   ```
   STRIPE_SECRET_KEY=sk_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

3. **Create API route** `app/api/checkout/route.ts`:

   ```typescript
   import Stripe from 'stripe';
   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

   export async function POST(req: Request) {
     const { items } = await req.json();
     const session = await stripe.checkout.sessions.create({
       line_items: items.map(item => ({
         price_data: {
           currency: 'usd',
           product_data: { name: item.name },
           unit_amount: Math.round(item.price * 100),
         },
         quantity: item.quantity,
       })),
       mode: 'payment',
       success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success`,
       cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
     });
     return Response.json({ url: session.url });
   }
   ```

4. **Update checkout page** to redirect to Stripe Checkout.

5. **Add webhook handler** for order confirmation.

---

### Recipe F: Add Authentication

**Time: ~2-3 hours**

**Option 1: Supabase Auth** (if already using Supabase)

```bash
npm install @supabase/ssr
```

Create `lib/supabase/` with server/client helpers, middleware for session management.

**Option 2: NextAuth.js / Auth.js**

```bash
npm install next-auth
```

Create `app/api/auth/[...nextauth]/route.ts` with your preferred providers.

**Option 3: Clerk** (fastest, managed)

```bash
npm install @clerk/nextjs
```

Wrap app in `<ClerkProvider>` and add middleware.

---

## 9. Deployment Checklist

Before deploying to production:

- [ ] Update `config/site.ts` with real brand info
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production domain
- [ ] Replace placeholder images with real assets
- [ ] Add `favicon.ico` and `og-image.png` to `public/`
- [ ] Set up Supabase tables if using forms
- [ ] Configure environment variables in Vercel
- [ ] Run `npm run build` locally to verify no errors
- [ ] Run `npm run lint` to check for issues
- [ ] Test all pages and forms
- [ ] Verify SEO metadata (title, description, Open Graph)
- [ ] Check responsive design on mobile
- [ ] Verify sitemap.xml and robots.txt
- [ ] Remove any example/placeholder data
- [ ] Delete unused product images from `public/products/`
