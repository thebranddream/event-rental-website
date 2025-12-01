"use client"

import { useRef, useEffect, useState } from "react"

export default function HowItWorks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const steps = [
    {
      num: "1",
      title: "Send a Message",
      desc: "Message us on WhatsApp or call. Tell us your date, venue, and budget.",
    },
    {
      num: "2",
      title: "Get a Quote",
      desc: "We'll send you a custom quote with package options and pricing breakdown.",
    },
    {
      num: "3",
      title: "Confirm & Prepay",
      desc: "Choose your package. Pay 50% deposit to secure your date.",
    },
    {
      num: "4",
      title: "Site Visit",
      desc: "Our team visits your venue to plan setup, lighting, and décor placement.",
    },
    {
      num: "5",
      title: "Event Day Setup",
      desc: "We arrive early, set up everything, and your event is ready to go.",
    },
    {
      num: "6",
      title: "Cleanup & Done",
      desc: "Post-event, we teardown, cleanup, and handle all logistics. No stress.",
    },
  ]

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      setCanScrollLeft(scrollContainerRef.current.scrollLeft > 0)
      setCanScrollRight(
        scrollContainerRef.current.scrollLeft <
          scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth - 10,
      )
    }
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    container?.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", checkScroll)
    return () => {
      container?.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-ivory-luxe">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-luxury mb-4 text-center">How It Works</h2>
        <p className="subheading-luxury text-center mb-12">Six simple steps to your perfect celebration</p>

        {/* Scroll Container with horizontal layout */}
        <div className="relative">
          {/* Scroll Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-all lg:hidden"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-all lg:hidden"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-x-visible scrollbar-hide"
            style={{ display: "flex", gap: "1.5rem" }}
          >
            {steps.map((step, idx) => (
              <div key={idx} className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-auto relative">
                {/* Step Card */}
                <div className="flex flex-col items-start gap-3 bg-white rounded-lg p-6 border border-muted-rose/20 h-full">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-royal-gold to-celebration-saffron text-maroon-royale rounded-full flex items-center justify-center font-bold text-lg">
                    {step.num}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-maroon-royale">{step.title}</h3>

                  {/* Step Description */}
                  <p className="text-sm text-charcoal/70">{step.desc}</p>
                </div>

                {/* Connection Arrow (desktop only) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-8 top-6">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#c9a363" strokeWidth="2">
                      <path d="M8 16h16M20 10l6 6-6 6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile scroll hint */}
        <p className="text-center text-sm text-charcoal/60 mt-6 lg:hidden">← Swipe or use buttons to scroll →</p>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
