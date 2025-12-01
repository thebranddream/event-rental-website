"use client"

import Image from "next/image"
import Button from "./ui/Button"
import { buildWhatsAppLink } from "@/lib/whatsapp"

export default function Hero() {
  const whatsappLink = buildWhatsAppLink(
    "{{PHONE}}",
    "Hi Event Buddy! I'd like to book premium décor for my celebration.",
  )

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-maroon-royale flex items-center justify-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>

        {/* Fallback Image */}
        <Image
          src="/images/hero-poster.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={85}
          aria-hidden="true"
        />

        {/* Luxury overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-royale/50 via-maroon-royale/40 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-ivory-luxe mb-4 leading-tight text-balance">
          Premium Event Rentals + Craftsmanship
        </h1>
        <p className="text-lg sm:text-xl text-ivory-luxe/90 mb-2 font-light max-w-2xl mx-auto">
          Indian celebrations elevated with luxury décor, mandaps, and reliable setups
        </p>
        <p className="text-base sm:text-lg text-celebration-saffron/90 mb-8 font-light">
          आपके समारोह को शानदार बनाएं | Bring your celebration vision to life
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button as="a" href="/pricing.pdf" className="btn-primary" title="Download Event Buddy Pricing PDF">
            Book Your Event
          </Button>
          <Button
            as="a"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            title="Chat with Event Buddy on WhatsApp"
          >
            Explore Collections
          </Button>
        </div>

        <div className="inline-flex gap-4 text-sm text-ivory-luxe/80 flex-wrap justify-center">
          <span>✨ Wedding Décor</span>
          <span>•</span>
          <span>🏛️ Mandaps</span>
          <span>•</span>
          <span>💡 Luxury Lighting</span>
          <span>•</span>
          <span>🎊 Corporate Events</span>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute top-8 right-8 z-30 bg-celebration-saffron/20 border border-celebration-saffron text-celebration-saffron px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
        Pan-India Rentals
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-ivory-luxe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
