export default function WhyUs() {
  const city = process.env.NEXT_PUBLIC_CITY || "{{CITY}}"
  const reasons = [
    {
      icon: "⚡",
      title: "Book in Minutes",
      desc: "No long forms. One WhatsApp and done.",
    },
    {
      icon: "🎪",
      title: "Stunning Setups",
      desc: "Tent styles for every festival and celebration.",
    },
    {
      icon: "👥",
      title: "Local & Trusted",
      desc: `We know ${city}. 4.8★ from 145+ families.`,
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      desc: "No hidden charges. All-inclusive packages.",
    },
    {
      icon: "🛠️",
      title: "Setup & Teardown",
      desc: "Expert crew handles everything. Stress-free.",
    },
    {
      icon: "🎨",
      title: "Custom Décor",
      desc: "Lights, drapes, and theming on request.",
    },
  ]

  return (
    <section id="why-us" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-maroon mb-12 text-center">Why Choose Us?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg border-2 border-saffron/20 hover:border-saffron hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-3">{reason.icon}</div>
              <h3 className="text-xl font-bold text-peacock mb-2">{reason.title}</h3>
              <p className="text-gray-700 text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
