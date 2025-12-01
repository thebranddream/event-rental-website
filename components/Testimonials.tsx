"use client"

import { useState, useEffect } from "react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya & Abhishek",
      event: "Wedding Reception",
      text: "The tent was stunning, and their team was so professional. Everything was perfect!",
      rating: 5,
    },
    {
      name: "Rajesh Sharma",
      event: "Corporate Dinner",
      text: "Booked in minutes, delivered flawlessly. Highly recommend for any event.",
      rating: 5,
    },
    {
      name: "Neha Gupta",
      event: "Birthday Bash",
      text: "Amazing setup, fantastic lighting, and the team was so helpful. Kids loved it!",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      event: "Festival Celebration",
      text: "They understood exactly what I needed. Traditional décor met modern setup perfectly.",
      rating: 5,
    },
    {
      name: "Ananya Patel",
      event: "Engagement Party",
      text: "Beautiful work, transparent pricing, zero hidden charges. Will book again!",
      rating: 5,
    },
    {
      name: "Ajay Verma",
      event: "Anniversary Dinner",
      text: "Intimate setup, elegant lighting, and the ambiance was just right. Magical!",
      rating: 5,
    },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-maroon mb-12 text-center">Loved by 145+ Families</h2>

        <div
          className="relative bg-gradient-to-br from-maroon to-red-900 text-white p-8 sm:p-12 rounded-xl shadow-lg"
          role="region"
          aria-live="polite"
          aria-label="Testimonials carousel"
        >
          <div className="flex items-start gap-4 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl">
                ⭐
              </span>
            ))}
          </div>

          <p className="text-lg sm:text-xl mb-6 italic leading-relaxed">"{testimonials[current].text}"</p>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center font-bold text-maroon">
              {testimonials[current].name[0]}
            </div>
            <div>
              <p className="font-bold">{testimonials[current].name}</p>
              <p className="text-sm text-soft-gold">{testimonials[current].event}</p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all focus-ring ${
                  idx === current ? "bg-soft-gold w-6" : "bg-white/50"
                }`}
                aria-label={`Show testimonial ${idx + 1}`}
                aria-current={idx === current ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
