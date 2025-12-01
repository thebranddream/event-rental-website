"use client"

import { useState } from "react"
import Image from "next/image"

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/luxury-wedding-mandap-with-florals.jpg",
      alt: "Luxury white tent setup with golden lighting and floral centerpieces for wedding reception",
      caption: "Wedding Mandap",
    },
    {
      src: "/ornate-mandap-stage-setup-indian-wedding.jpg",
      alt: "Outdoor corporate event tent with branded signage, round tables, and professional stage lighting",
      caption: "Stage Setup",
    },
    {
      src: "/premium-seating-furniture-wedding-gold-accents.jpg",
      alt: "Elegant seating arrangement with premium furniture and gold accents",
      caption: "Premium Seating",
    },
    {
      src: "/crystal-chandelier-warm-golden-lighting-event.jpg",
      alt: "Crystal chandelier with warm golden lighting creating ambient atmosphere",
      caption: "Luxury Lighting",
    },
    {
      src: "/elaborate-floral-arch-rose-peony-arrangement.jpg",
      alt: "Elaborate floral arch with rose and peony arrangements for ceremonies",
      caption: "Floral Installation",
    },
    {
      src: "/artisan-craftsman-working-with-fabrics-and-florals.jpg",
      alt: "Artisan craftsman working with fabrics and florals",
      caption: "Craftsmanship",
    },
  ]

  return (
    <section id="gallery" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-luxury mb-4 text-center">Our Work</h2>
        <p className="subheading-luxury text-center mb-12">Celebrations we've brought to life</p>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className="relative group overflow-hidden rounded-lg h-64 cursor-pointer focus-ring"
              aria-label={`Open gallery image: ${img.caption}`}
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">{img.caption}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedIdx !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedIdx(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={galleryImages[selectedIdx].src || "/placeholder.svg"}
                alt={galleryImages[selectedIdx].alt}
                width={1200}
                height={800}
                className="w-full rounded-lg"
              />
              <p className="text-white text-center mt-4 text-sm">{galleryImages[selectedIdx].caption}</p>

              {/* Navigation */}
              <button
                onClick={() => setSelectedIdx(selectedIdx === 0 ? galleryImages.length - 1 : selectedIdx - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all focus-ring"
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                onClick={() => setSelectedIdx(selectedIdx === galleryImages.length - 1 ? 0 : selectedIdx + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all focus-ring"
                aria-label="Next image"
              >
                ›
              </button>

              <button
                onClick={() => setSelectedIdx(null)}
                className="absolute -top-10 right-0 text-white text-2xl hover:text-celebration-saffron transition-colors focus-ring"
                aria-label="Close gallery"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
