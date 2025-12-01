import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/Navbar"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Event Buddy - Premium Event Rentals & Luxury Décor | Wedding & Corporate",
  description:
    "Premium event rentals, mandaps, luxury décor, wedding setups, and corporate event styling. Trusted Indian celebration experts.",
  metadataBase: new URL("https://{{WEBSITE_URL}}"),
  alternates: {
    canonical: "https://{{WEBSITE_URL}}",
  },
  generator: "v0.app",
  openGraph: {
    title: "Event Buddy - Premium Event Rentals & Luxury Décor",
    description: "Luxury wedding décor, mandaps, furniture, and event rentals in {{CITY}}.",
    url: "https://{{WEBSITE_URL}}",
    siteName: "Event Buddy",
    images: [
      {
        url: "https://{{WEBSITE_URL}}/images/hero-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Event Buddy Premium Event Setup",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Buddy - Premium Event Rentals",
    description: "Luxury décor & trusted event setups for celebrations.",
    images: ["https://{{WEBSITE_URL}}/images/hero-poster.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#5b1f28",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Event Buddy",
              image: "https://{{WEBSITE_URL}}/images/hero-poster.jpg",
              description: "Premium event rentals, mandaps, luxury décor, wedding setups, and corporate event styling.",
              telephone: "{{PHONE}}",
              url: "https://{{WEBSITE_URL}}",
              address: {
                "@type": "PostalAddress",
                streetAddress: "{{ADDRESS}}",
                addressLocality: "{{CITY}}",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "City",
                name: "{{CITY}}",
              },
              serviceArea: {
                "@type": "City",
                name: "{{CITY}}",
              },
              priceRange: "₹₹",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "145",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Navbar />
        <div className="pt-16 sm:pt-20">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
