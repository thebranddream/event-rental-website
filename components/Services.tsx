export default function Services() {
  const services = [
    { name: "Luxury Tents", price: "₹500–2000/day" },
    { name: "Outdoor Furniture & Seating", price: "₹50–200/seat" },
    { name: "Lighting & Décor", price: "₹5000–20000" },
    { name: "Catering Setup", price: "Custom quote" },
    { name: "Bar & Beverage Station", price: "₹3000–8000" },
    { name: "Sound & Microphone", price: "₹2000–5000" },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-maroon mb-4 text-center">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Everything you need for a flawless event — from elegant tents to full-service setups.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-br from-cream to-white rounded-lg border border-saffron/10 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-peacock mb-2">{service.name}</h3>
              <p className="text-saffron font-semibold text-sm">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
