# Event Buddy Deployment Checklist

Complete all 8 tasks before going live:

## 1. Replace Placeholders ✅

Find & replace in all files (use your editor's global find-replace):

- `{{BUSINESS_NAME}}` → Your business name (e.g., "Raj's Event Rentals")
- `{{PHONE}}` → Your WhatsApp/tel number with country code (e.g., `+918888888888`)
- `{{ADDRESS}}` → Your full business address
- `{{CITY}}` → Your city name
- `{{LAT}}` → Latitude (decimal, e.g., `28.6139`)
- `{{LON}}` → Longitude (decimal, e.g., `77.2090`)
- `{{WEBSITE_URL}}` → Your domain (e.g., `eventbuddy.in`)
- `{{CHECKOUT_URL}}` → Your Stripe or external checkout URL (optional; for subscriptions)
- `{{SUPPORT_EMAIL}}` → Your support email

### Quick Replace Script (Node.js)

\`\`\`bash
# Install: npm install --save-dev replace
npx replace-in-files --string="{{PHONE}}" --replacement="+918888888888" "app/**/*.tsx" "components/**/*.tsx" "lib/**/*.ts"
\`\`\`

## 2. Upload Hero Media ✅

- **Poster:** Add `/public/images/hero-poster.jpg` (1920×1080 px recommended, ~500KB)
- **Video:** Add `/public/videos/hero-loop.mp4` (1920×1080, 15–30 sec loop, H.264 codec, ~2MB)
- **Test:** Run locally and verify video plays (may require HTTPS for autoplay on production)

## 3. Add Gallery Images ✅

Upload 6 high-quality images to:
- `/public/images/gallery-1.jpg` through `gallery-6.jpg`
- Recommended: 1200×800 px, golden-hour or documentary style
- Update alt text in `components/Gallery.tsx` if needed

## 4. Upload Pricing PDF ✅

- Create `/public/pricing.pdf` with your packages, pricing, terms, and WhatsApp/contact info
- Test download link from hero section

## 5. Set Environment Variables (Production) ✅

If using Stripe subscriptions, set these in Vercel or your host:

\`\`\`
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
CHECKOUT_URL=https://checkout.stripe.com/pay/xxxxx
\`\`\`

Run locally with `.env.local`:

\`\`\`bash
# .env.local (git-ignored)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
\`\`\`

## 6. Install & Test Locally ✅

\`\`\`bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Run tests
npm run test

# Open http://localhost:3000 and verify:
# - Hero section with video/image loads
# - All sections render correctly
# - WhatsApp/tel CTAs work
# - Gallery lightbox opens/closes
# - FAQ accordion works
# - No console errors (check DevTools)
# - Mobile responsiveness (DevTools > Responsive Design)
\`\`\`

## 7. Run Lighthouse & Accessibility Audit ✅

\`\`\`bash
# Build and audit
npm run build

# Option A: Lighthouse in Chrome DevTools
# 1. Open http://localhost:3000 in Chrome
# 2. DevTools > Lighthouse > Analyze
# 3. Target scores: Performance ≥85, Accessibility ≥95, SEO ≥90

# Option B: Lighthouse CLI
npm install -g lighthouse
lighthouse http://localhost:3000 --view

# Accessibility Checklist:
# ☐ Tab through all interactive elements (focus visible)
# ☐ Test with screen reader (NVDA, VoiceOver)
# ☐ Verify color contrast (WebAIM checker)
# ☐ Check alt text on all images
# ☐ Verify `aria-label` on buttons/links
\`\`\`

## 8. Deploy to Vercel ✅

\`\`\`bash
# Option A: Vercel CLI
npm install -g vercel
vercel

# Option B: GitHub Integration
# 1. Push code to GitHub (public or private repo)
# 2. Go to https://vercel.com/new
# 3. Import your repository
# 4. Vercel auto-detects Next.js, click Deploy
# 5. Add environment variables in Vercel dashboard

# Option C: Netlify
# 1. Connect your GitHub repo at https://app.netlify.com
# 2. Build command: npm run build
# 3. Publish directory: .next
\`\`\`

### Post-Deployment Verification ✅

- [ ] Visit your live URL and verify all sections load
- [ ] Test CTAs (WhatsApp, tel, PDF download)
- [ ] Check mobile responsiveness (use Chrome DevTools)
- [ ] Test form submissions (if any)
- [ ] Verify JSON-LD schema rendering (check with [Schema.org validator](https://validator.schema.org/))
- [ ] Verify Open Graph tags (use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/))
- [ ] Set up DNS (if custom domain)
- [ ] Monitor uptime with UptimeRobot or similar

## Optional: Set Up Analytics

Add your analytics tool (Google Analytics, Vercel Analytics):

### Vercel Analytics (Already Integrated)

\`\`\`tsx
// Already imported in app/layout.tsx
import { Analytics } from "@vercel/analytics/next"
\`\`\`

Visit https://vercel.com/analytics to view traffic.

### Google Analytics

\`\`\`bash
npm install next-gtag
\`\`\`

Then add to `app/layout.tsx`:

\`\`\`tsx
import { Analytics } from "next-gtag"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
\`\`\`

## Troubleshooting

| Issue | Solution |
|---|---|
| Hero video doesn't autoplay on mobile | Add muted + playsInline (already done); test on real device |
| WhatsApp link doesn't open | Check phone number format (should include +91 country code) |
| Images not loading | Verify file paths in `/public/images/` are correct |
| Build fails with TypeScript errors | Run `npm run build` locally to debug; check tsconfig.json |
| Lighthouse scores low | Run audit, fix warnings (e.g., image sizes, unused CSS) |

---

**Ready to deploy? You're all set. Go live! 🚀**
