"use client"

import Image from "next/image"
import Button from "./ui/Button"
import { useState } from "react"

const collections = [
  {
    id: 1,
    title: "Wedding Décor",
    price: "₹5,000 - ₹50,000",
    image: "/luxury-wedding-mandap-with-florals.jpg",
    tags: ["Handcrafted", "Premium Fabrics"],
    description: "Elegant mandaps, floral installations, and draping",
  },
  {
    id: 2,
    title: "Mandaps & Stages",
    price: "₹10,000 - ₹100,000",
    image: "/ornate-mandap-stage-setup-indian-wedding.jpg",
    tags: ["Premium Quality", "Weather-Proof"],
    description: "Custom mandaps with decorative designs",
  },
  {
    id: 3,
    title: "Luxury Furniture",
    price: "₹3,000 - ₹30,000",
    image: "/premium-seating-furniture-wedding-gold-accents.jpg",
    tags: ["Premium Fabric", "Vintage Gold"],
    description: "Handcrafted seating, tables, and lounge areas",
  },
  {
    id: 4,
    title: "Chandeliers & Lights",
    price: "₹2,000 - ₹25,000",
    image: "/crystal-chandelier-warm-golden-lighting-event.jpg",
    tags: ["LED Efficient", "Energy-Saving"],
    description: "Crystal chandeliers and ambient lighting",
  },
  {
    id: 5,
    title: "Floral Installations",
    price: "₹4,000 - ₹40,000",
    image: "/elaborate-floral-arch-rose-peony-arrangement.jpg",
    tags: ["Eco-Friendly", "Fresh Daily"],
    description: "Custom floral arches and arrangements",
  },
  {
    id: 6,
    title: "Corporate Décor",
    price: "₹3,000 - ₹35,000",
    image: "/corporate-event-stage-backdrop-professional-setup.jpg",
    tags: ["Minimalist", "Professional"],
    description: "Modern corporate event styling",
  },
]

export default function CollectionGrid() {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  return (
    <section className="w-full bg-ivory-luxe py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-luxury mb-4">Our Collection</h2>
          <p className="subheading-luxury">Handcrafted luxury for your celebration</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((item) => (
            <div key={item.id} className="card-luxury group cursor-pointer overflow-hidden">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => toggleWishlist(item.id)}
                  className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-white transition-all"
                  aria-label={`Add ${item.title} to wishlist`}
                >
                  <svg
                    className={`w-5 h-5 ${wishlist.includes(item.id) ? "fill-celebration-saffron" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="text-xl font-semibold text-maroon-royale mb-2">{item.title}</h3>
              <p className="text-sm text-charcoal/70 mb-3">{item.description}</p>
              <p className="text-royal-gold font-bold mb-3">{item.price}</p>
              <div className="flex gap-2 mb-4 flex-wrap">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-muted-rose/20 text-maroon-royale px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button as="a" href="#contact" className="btn-primary flex-1 text-center text-sm py-2">
                  Check Availability
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
