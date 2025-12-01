"use client"

import { useState } from "react"
import Link from "next/link"
import { buildWhatsAppLink } from "@/lib/whatsapp"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Collections", href: "#collections" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQs", href: "#faq" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-muted-rose/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-royal-gold to-maroon-royale rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">EB</span>
            </div>
            <span className="hidden sm:block font-display text-lg font-bold text-maroon-royale">Event Buddy</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-royal-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={buildWhatsAppLink(undefined, "Hi Event Buddy, I'm interested in booking premium event rentals!")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-4 py-2 bg-royal-gold text-charcoal font-semibold rounded-lg hover:bg-maroon-royale hover:text-white transition-all duration-200"
            >
              WhatsApp
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-ivory-luxe rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-muted-rose/20 bg-white/95">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm font-medium text-charcoal hover:text-royal-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={buildWhatsAppLink(undefined, "Hi Event Buddy, I'm interested in booking premium event rentals!")}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-3 px-4 py-2 bg-royal-gold text-charcoal font-semibold rounded-lg text-center hover:bg-maroon-royale hover:text-white transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
