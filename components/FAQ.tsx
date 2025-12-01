"use client"

import { useState } from "react"

export default function FAQ() {
  const faqs = [
    {
      q: "How far in advance should I book?",
      a: "We recommend 2–4 weeks for weddings and large events. For smaller parties, 1 week is fine. Last-minute bookings possible upon availability.",
    },
    {
      q: "What if the weather turns bad?",
      a: "Our tents are waterproof and weather-resistant. We can deploy side panels if needed. Indoor venue options also available.",
    },
    {
      q: "Can you customize the tent color and décor?",
      a: "We offer custom lighting, drapes, floral themes, and branded setups. Just tell us your vision.",
    },
    {
      q: "Is setup included in the price?",
      a: "Yes! Full setup and teardown are included in all packages. Our crew arrives early and handles everything.",
    },
    {
      q: "What's your cancellation policy?",
      a: "Full refund if you cancel 14+ days before. 50% refund for 7–14 days. Less than 7 days, no refund (deposit forfeited).",
    },
    {
      q: "Can I see a sample quote?",
      a: "Yes! Download our pricing PDF or message us on WhatsApp for a personalized quote in minutes.",
    },
  ]

  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-maroon mb-12 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-2 border-saffron/20 rounded-lg overflow-hidden hover:border-saffron transition-colors"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-semibold text-peacock hover:bg-cream transition-colors flex items-center justify-between focus-ring"
                aria-expanded={open === idx}
              >
                <span>{faq.q}</span>
                <span className="text-2xl">{open === idx ? "−" : "+"}</span>
              </button>

              {open === idx && <div className="px-6 py-4 bg-cream text-gray-700 text-sm leading-relaxed">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
