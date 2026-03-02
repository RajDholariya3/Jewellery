# Maison Aurore — Fine Jewellery E-Commerce

> A luxury jewellery storefront built with React, Vite, and Tailwind CSS.
> Features a landing page, product listing with filters, and a full product detail view.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Pages & Features](#pages--features)
- [Component Reference](#component-reference)
- [Data Structure](#data-structure)
- [Design System](#design-system)
- [Routing](#routing)
- [Customisation Guide](#customisation-guide)
- [Scripts](#scripts)

---

## Project Overview

**Maison Aurore** is a client-facing luxury jewellery website built as a frontend-only React application. It presents a curated collection of fine jewellery across four categories — Rings, Necklaces, Earrings, and Bracelets — with realistic product data, scroll-triggered animations, and a fully responsive layout at every breakpoint.

The project is static — no backend, no API calls, no authentication. All product data lives in `src/data/products.js` and can be swapped out or extended at any time.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^19.2.4 | UI library |
| React DOM | ^19.2.4 | DOM rendering |
| React Router DOM | ^7.13.1 | Client-side routing |
| Vite | ^7.3.1 | Dev server + build tool |
| Tailwind CSS | ^3.4.19 | Utility-first styling |
| PostCSS | ^8.5.6 | CSS processing |
| Autoprefixer | ^10.4.27 | CSS vendor prefixes |
| ESLint | latest | Code linting |

**Fonts (Google Fonts — loaded via `index.css`):**
- `Playfair Display` — headings (italic & regular, weights 400–700)
- `Inter` — body text (weights 300–500)

---

## Folder Structure

```
frontendtask/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/                        # Static assets (images, icons)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Container.jsx          # Max-width page wrapper
│   │   │   ├── Navbar.jsx             # Fixed top nav + mobile overlay menu
│   │   │   └── Footer.jsx             # Dark footer with links
│   │   │
│   │   ├── product/
│   │   │   ├── FeaturedProducts.jsx   # Editorial 4-up featured grid
│   │   │   ├── ProductGrid.jsx        # Responsive 4/2/1 col product grid
│   │   │   └── ProductSpecs.jsx       # Spec key-value table (jewellery)
│   │   │
│   │   └── ui/
│   │       ├── Button.jsx             # Reusable button (4 variants)
│   │       ├── ProductCard.jsx        # Card with hover slide-up CTA
│   │       └── SectionTitle.jsx       # Scroll-animated section heading
│   │
│   ├── data/
│   │   └── products.js                # All product data (8 items)
│   │
│   ├── hooks/
│   │   └── useScrollFade.js           # IntersectionObserver fade-in hook
│   │
│   ├── pages/
│   │   ├── Home.jsx                   # Landing page
│   │   ├── Products.jsx               # Product listing + filter + sort
│   │   ├── ProductDetail.jsx          # Single product view
│   │   └── NotFound.jsx               # 404 fallback page
│   │
│   ├── utils/
│   │   └── formatCurrency.js          # Intl.NumberFormat USD formatter
│   │
│   ├── App.jsx                        # Router + layout wrapper
│   ├── index.css                      # Tailwind layers + font import
│   └── main.jsx                       # React entry point
│
├── index.html                         # HTML shell
├── tailwind.config.js                 # Custom colours + fonts
├── postcss.config.js                  # PostCSS plugin config
├── vite.config.js                     # Vite + React plugin config
├── eslint.config.js                   # ESLint rules
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** — v18 or higher ([download](https://nodejs.org))
- **npm** — comes with Node.js (or use `pnpm` / `yarn` as a drop-in)

Verify your versions:

```bash
node -v    # should be v18+
npm -v     # should be v9+
```

---

### Installation

**1. Clone or download the repository:**

```bash
git clone https://github.com/your-username/maison-aurore.git
cd maison-aurore
```

Or if you downloaded a ZIP, extract it and `cd` into the folder.

---

**2. Install dependencies:**

```bash
npm install
```

This installs React, React Router, Vite, Tailwind CSS, and all dev dependencies listed in `package.json`.

---

**3. Start the development server:**

```bash
npm run dev
```

Vite will start a local dev server. Open your browser at:

```
http://localhost:5173
```

The page hot-reloads automatically whenever you save a file.

---

### Production Build

To compile an optimised production bundle:

```bash
npm run build
```

Output is written to the `dist/` folder. To preview the production build locally before deploying:

```bash
npm run preview
```

---

## Pages & Features

### 1. Landing Page — `/`

The main entry point of the site. Consists of five sections:

| Section | Description |
|---|---|
| **Hero** | Full-screen background image, brand name with staggered fade-up animation, tagline, and a CTA button linking to `/products` |
| **Featured Products** | 4-up editorial grid showing items where `featured: true`, each with an on-image gradient, price, and hover state |
| **Brand Story** | Dark background section with brand philosophy copy and decorative ornament dividers |
| **Category Banners** | 2×2 image grid linking to filtered product listings (`/products?category=rings` etc.) |
| **Trust Row** | Four trust signals — Ethically Sourced, Hand Finished, Signed by Artisan, Lifetime Guarantee |

---

### 2. Product Listing — `/products`

A filterable, sortable grid of all products.

**Features:**
- **Category filter** — All Pieces / Rings / Necklaces / Earrings / Bracelets (synced to URL query param `?category=`)
- **Sort** — Featured (default), Price Low→High, Price High→Low, Name A→Z
- **Responsive grid** — 4 columns desktop, 2 tablet, 1 mobile
- **Consistent image proportions** — `aspect-[3/4]` with `object-cover` — no stretching
- **Product count** — shows how many pieces match the current filter
- **Empty state** — graceful message if no products match

Navigating to `/products?category=rings` from any page will pre-select the Rings filter automatically.

---

### 3. Product Detail — `/products/:id`

Individual product view, accessible by clicking any product card.

**Layout:**
- Desktop: large image left (sticky), product info right
- Mobile: image stacks above info

**Content blocks:**
- Breadcrumb navigation (Home → Collection → Category → Product name)
- Product name + price
- Short description (styled as an italic pull quote)
- Full description paragraph
- Specifications table (Material, Stone, Weight, Craftsmanship note)
- Enquire CTA + Back to Collection button
- Three trust icons
- Related pieces grid (same category, up to 3 items)

**Invalid product ID:**
If a user navigates to `/products/999` (an ID that doesn't exist), a graceful error page appears with a clear message and navigation options — not a blank screen or a crash.

---

### 4. Not Found — `*`

Any unmatched route renders the 404 page with a decorative large "404", a heading, and two navigation buttons.

---

## Component Reference

### Layout Components

**`Container.jsx`**
Wraps content in a max-width centred div with responsive horizontal padding.

```jsx
<Container className="py-16">
  {/* page content */}
</Container>
```

---

**`Navbar.jsx`**
Fixed top navigation bar. Turns opaque with a shadow after scrolling 40px. On mobile (< `lg` breakpoint), collapses to a burger icon that opens a full-screen overlay menu.

- Links to Home, Collection, and all four category pages
- Active link is highlighted via React Router's `NavLink`

---

**`Footer.jsx`**
Dark (`#1e1e1e`) footer with brand copy, category navigation, and an info links column. Renders the current year dynamically.

---

### UI Components

**`Button.jsx`**

Four variants, three sizes. Always uppercase, always tracked.

```jsx
<Button variant="primary" size="lg" onClick={fn}>Shop Now</Button>
<Button variant="outline" size="md">View Collection</Button>
<Button variant="ghost" size="sm">Back</Button>
<Button variant="dark">Enquire</Button>
```

| Prop | Values | Default |
|---|---|---|
| `variant` | `primary` `outline` `ghost` `dark` | `primary` |
| `size` | `sm` `md` `lg` | `md` |
| `onClick` | function | — |

---

**`ProductCard.jsx`**
Used in the main product grid. Renders a `3:4` image with a slide-up "View Details" bar on hover, product name, short description, and price. Clicking navigates to `/products/:id`.

---

**`SectionTitle.jsx`**
Scroll-triggered animated heading block. Fades up when scrolled into view.

```jsx
<SectionTitle
  eyebrow="Curated Selection"
  title="Featured Pieces"
  subtitle="Optional subtitle text here."
  align="center"   // or "left"
/>
```

---

### Product Components

**`FeaturedProducts.jsx`**
Filters `products` for items with `featured: true` and renders them as tall `4:5` cards with an on-image gradient overlay. Used exclusively on the Home page.

---

**`ProductGrid.jsx`**
Wraps `ProductCard` in a 4-column responsive CSS Grid with a scroll-fade entrance animation.

---

**`ProductSpecs.jsx`**
Renders a product's `specs` object as a labelled table. Expects keys: `material`, `stone`, `weight`, `craftsmanshipNote`.

---

### Custom Hook

**`useScrollFade(threshold = 0.15)`**

Uses `IntersectionObserver` to return `[ref, isVisible]`. Attach `ref` to any element — `isVisible` flips to `true` once the element scrolls into the viewport. Automatically unobserves after triggering (fires once per element).

```jsx
import useScrollFade from "../hooks/useScrollFade";

const MyComponent = () => {
  const [ref, isVisible] = useScrollFade(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      Content fades in on scroll
    </div>
  );
};
```

---

### Utility

**`formatCurrency.js`**

Formats a number as a USD currency string using the browser's `Intl.NumberFormat` API. No decimal places for whole numbers.

```js
import { formatCurrency } from "../utils/formatCurrency";
formatCurrency(4800);  // → "$4,800"
```

---

## Data Structure

All products are defined in `src/data/products.js` as a default-exported array. Each product must follow this shape:

```js
{
  id: 1,                          // number — unique, used in URL /products/:id
  name: "Lumière Solitaire Ring", // string
  category: "rings",              // "rings" | "necklaces" | "earrings" | "bracelets"
  price: 4800,                    // number — in USD, no decimals
  shortDescription: "...",        // string — shown on cards, used as pull quote on detail
  fullDescription: "...",         // string — full paragraph on detail page
  image: "https://...",           // string — URL to product image (3:4 ratio recommended)
  featured: true,                 // boolean — shows in FeaturedProducts on Home page
  specs: {
    material: "18k Yellow Gold",
    stone: "1.2ct Round Brilliant Diamond...",
    weight: "4.8g",
    craftsmanshipNote: "Hand-set by...",
  },
}
```

To add a new product, append an object to the array in `products.js`. The listing page, filters, and detail page will all update automatically.

---

## Design System

All design tokens are defined in `tailwind.config.js` and used consistently across every component via Tailwind utility classes.

### Colours

| Token | Hex | Usage |
|---|---|---|
| `primaryBg` | `#FFFDD0` | Page background (warm cream) |
| `gold` | `#D4AF37` | Accent — buttons, badges, labels, borders |
| `cream` | `#F5F5F0` | Card backgrounds, image containers |
| `softGrey` | `#BFBFBF` | Secondary text, borders, meta labels |
| `#2a2a2a` | — | Primary text (near-black) |
| `#1e1e1e` | — | Dark sections (brand story, footer, hero) |

No new colours are added outside this set. The dark sections use `#1e1e1e` directly in Tailwind's JIT arbitrary value syntax.

---

### Typography

| Token | Font | Usage |
|---|---|---|
| `font-heading` | Playfair Display | All `h1`–`h6`, product names, prices, display text |
| `font-body` | Inter | All body copy, labels, buttons, meta text |

Font sizes follow Tailwind's default scale. Letter-spacing (`tracking-`) is used extensively on uppercase labels to maintain elegance at small sizes.

---

### Spacing Scale

All spacing uses Tailwind's default scale (multiples of 4px). Sections use `py-14` to `py-24`. Cards use `gap-5` to `gap-8`. No arbitrary spacing values are used.

---

### Motion

All transitions use `duration-300` to `duration-700` with `ease-out` or Tailwind's `ease`. Nothing uses `bounce` or spring physics. Scroll animations use `duration-700` with `delay` for stagger effects.

---

## Routing

| URL | Component | Description |
|---|---|---|
| `/` | `Home.jsx` | Landing page |
| `/products` | `Products.jsx` | Full product grid |
| `/products?category=rings` | `Products.jsx` | Pre-filtered by category |
| `/products/:id` | `ProductDetail.jsx` | Single product view |
| `/products/999` (invalid) | `ProductDetail.jsx` | Graceful error state (no crash) |
| `/*` | `NotFound.jsx` | 404 fallback |

Routing is handled by React Router v7. The `BrowserRouter` wraps the entire app in `App.jsx`. Category filter state is synced to the URL via `useSearchParams` so filtered URLs are shareable and bookmarkable.

---

## Customisation Guide

### Adding a New Product

Open `src/data/products.js` and add an object to the array:

```js
{
  id: 9,
  name: "Aurora Signet Ring",
  category: "rings",
  price: 1400,
  shortDescription: "Engraved 18k gold signet ring",
  fullDescription: "Full description here...",
  image: "https://images.unsplash.com/photo-xxxx?w=900&q=85",
  featured: false,
  specs: {
    material: "18k Yellow Gold",
    stone: "None",
    weight: "6.2g",
    craftsmanshipNote: "Hand-engraved monogram...",
  },
},
```

The new product will appear automatically in the listing, filters, and is accessible via `/products/9`.

---

### Changing Brand Name

Search and replace `Maison Aurore` across these files:

- `src/components/layout/Navbar.jsx`
- `src/components/layout/Footer.jsx`
- `src/pages/Home.jsx`
- `index.html` (the `<title>` tag)

---

### Changing the Colour Palette

Edit `tailwind.config.js`:

```js
colors: {
  primaryBg: "#YOUR_COLOR",
  gold: "#YOUR_ACCENT",
  cream: "#YOUR_CARD_BG",
  softGrey: "#YOUR_SECONDARY",
},
```

All components reference these tokens — updating them here changes the entire site.

---

### Adding a New Category

1. Add the new category string to the `CATEGORIES` array in `src/pages/Products.jsx`
2. Add a corresponding banner in the `categories` array inside `CategoryBanners` in `src/pages/Home.jsx`
3. Tag new products with that category in `products.js`

---

### Swapping Product Images

Replace the `image` URL in `products.js`. Images should be:
- Consistent in tone (light, neutral backgrounds work best)
- At least 900px wide for sharp display on retina screens
- Close to `3:4` portrait ratio for cards or `1:1` for the detail page

---

## Scripts

```bash
# Start development server at http://localhost:5173
npm run dev

# Compile optimised production build → dist/
npm run build

# Preview the production build locally
npm run preview

# Run ESLint across all .js and .jsx files
npx eslint .
```

---

## Browser Support

Vite targets modern browsers by default. The `IntersectionObserver` API used in `useScrollFade` is supported in all modern browsers (Chrome 58+, Firefox 55+, Safari 12.1+, Edge 16+). No polyfills are required.

---

## License

This project was built as a client frontend task. All product data is fictional. Images are sourced from [Unsplash](https://unsplash.com) for demonstration purposes only and must be replaced with licensed imagery for commercial use.