# Event Rentals Landing Site

A mobile-first, single-page landing site for an Indian event-rentals business built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Features

- **Hero Section** with video/image fallback
- **10 Sections** — Why Us, Services, Packages, Gallery (lightbox carousel), How It Works, Testimonials, Coverage Map, FAQ, Footer
- **Custom Tent-Grid SVG Pattern** with subtle animations
- **WhatsApp & Tel CTAs** — no web forms
- **Hinglish Microcopy** options
- **JSON-LD LocalBusiness Schema** for SEO
- **WCAG AA Accessible** — focus states, ARIA labels, keyboard navigation
- **Responsive Design** — mobile-first, optimized for all screens

## Quick Start

\`\`\`bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
\`\`\`

## Customization Checklist

Before deploying, replace these placeholders:

1. **`{{BUSINESS_NAME}}`** — Your business name
2. **`{{PHONE}}`** — Your WhatsApp/tel number (with country code, e.g., +918888888888)
3. **`{{ADDRESS}}`** — Your business address
4. **`{{CITY}}`** — Your city name
5. **`{{LAT}}`** & **`{{LON}}`** — Latitude & longitude for map embed
6. **`{{WEBSITE_URL}}`** — Your domain (e.g., eventrentals.com)
7. **Hero Media:**
   - Replace `/public/images/hero-poster.jpg` with your poster image
   - Replace `/public/videos/hero-loop.mp4` with your background video
8. **Gallery Images:**
   - Add 6 images to `/public/images/gallery-1.jpg` through `gallery-6.jpg`
9. **Pricing PDF:**
   - Upload your `/public/pricing.pdf` file
10. **Color Customization (optional):**
    - Edit `tailwind.config.js` color tokens for your brand

## Build & Deploy

\`\`\`bash
# Build for production
npm run build

# Start production server
npm start
\`\`\`

### Deploy to Vercel

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Deploy to Netlify

Connect your GitHub repository to Netlify. It will auto-detect Next.js and deploy.

## Accessibility & Performance

- ✅ WCAG AA compliant (color contrast, keyboard navigation, ARIA labels)
- ✅ Mobile-first responsive design
- ✅ Optimized images with Next.js Image component
- ✅ Prefers-reduced-motion support
- ✅ JSON-LD structured data for SEO
- ✅ Open Graph & Twitter Card meta tags

## Color Palette (WCAG AA Compliant)

- **Maroon** (`#6b0f0f`) — Primary (brand, headings)
- **Saffron** (`#f59e0b`) — Accent (CTAs, highlights)
- **Peacock** (`#0f4c6b`) — Secondary (details)
- **Soft Gold** (`#f2c94c`) — Highlight (featured items)
- **Cream** (`#fffaf7`) — Background (light)

All combinations meet or exceed WCAG AA contrast requirements.

## File Structure

\`\`\`
event-rentals-landing/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # App layout with SEO meta
│   └── globals.css       # Tailwind + custom utilities
├── components/
│   ├── Hero.tsx
│   ├── WhyUs.tsx
│   ├── Services.tsx
│   ├── Packages.tsx
│   ├── Gallery.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── CoverageMap.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   └── ui/
│       └── Button.tsx    # Reusable button component
├── lib/
│   └── whatsapp.ts       # WhatsApp link builder & templates
├── public/
│   ├── images/           # Gallery & hero images
│   ├── videos/           # Hero video
│   ├── pricing.pdf       # Pricing document
│   └── favicon.ico
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
\`\`\`

## Copy & Messaging

### Hero Headline (Exact)

> Beautiful tents & trusted setups — booked in minutes.

### Hinglish Subheadline

> तुम्हारे विशेष पल के लिए परफेक्ट सेटअप। | Perfect setups for your special moments.

### CTA Microcopy (EN + Hindi)

See `lib/whatsapp.ts` for full list of 8 EN + 8 Hindi variants.

### Testimonials (6 snippets)

1. Priya & Abhishek — "The tent was stunning, and their team was so professional."
2. Rajesh Sharma — "Booked in minutes, delivered flawlessly."
3. Neha Gupta — "Amazing setup, fantastic lighting, and the team was so helpful."
4. Vikram Singh — "They understood exactly what I needed."
5. Ananya Patel — "Beautiful work, transparent pricing, zero hidden charges."
6. Ajay Verma — "Intimate setup, elegant lighting, and the ambiance was just right."

## SVG Tent-Grid Pattern

The background pattern is a compact SVG data-URI with:
- Tent-rib / chevron design in maroon (`#6b0f0f`)
- Cream background (`#fffaf7`)
- 6–10% opacity for subtlety
- `.tent-pan` animation for gentle movement

See `app/globals.css` for implementation details.

## Support

For issues, optimizations, or customization help, refer to the inline code comments or the Next.js documentation: https://nextjs.org/docs

---

Built with ❤️ for Indian event rentals. Ready to deploy, scale, and customize.
