export default function Sustainability() {
  const initiatives = [
    {
      icon: "♻️",
      title: "Reusable Décor",
      desc: "All items are designed for longevity and reuse, reducing waste significantly.",
    },
    {
      icon: "🌱",
      title: "Eco-Friendly Florals",
      desc: "We partner with sustainable farms for fresh, responsibly sourced flowers.",
    },
    {
      icon: "💡",
      title: "LED Technology",
      desc: "100% LED lighting systems reduce energy consumption by 80%.",
    },
    {
      icon: "🔄",
      title: "Material Recycling",
      desc: "Post-event materials are recycled or donated to community projects.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ivory-luxe to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-luxury mb-4 text-center">Sustainable Celebrations</h2>
        <p className="subheading-luxury text-center mb-12">Premium events with a conscience</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((item, idx) => (
            <div key={idx} className="card-luxury text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-maroon-royale mb-2">{item.title}</h3>
              <p className="text-sm text-charcoal/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
