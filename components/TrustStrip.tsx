export default function TrustStrip() {
  const stats = [
    { number: "1,200+", label: "Events Delivered" },
    { number: "98%", label: "On-Time Setup" },
    { number: "50+", label: "Venue Partners" },
    { number: "24/7", label: "Event Manager" },
  ]

  return (
    <section className="w-full bg-maroon-royale py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-royal-gold mb-2">{stat.number}</p>
              <p className="text-sm sm:text-base text-ivory-luxe/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
