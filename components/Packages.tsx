import Button from "./ui/Button"
import { buildWhatsAppLink } from "@/lib/whatsapp"

export default function Packages() {
  const packages = [
    {
      name: "Basic Garden Party",
      price: "₹15,000",
      items: ["1 Large Tent (30x40 ft)", "Basic Lighting", "Tables & Chairs", "Setup & Teardown"],
    },
    {
      name: "Premium Wedding Tent",
      price: "₹45,000",
      featured: true,
      items: ["2 Luxury Tents", "Professional Lighting", "Themed Décor", "Bar Setup", "Full-Day Crew"],
    },
    {
      name: "Corporate Event",
      price: "₹30,000",
      items: ["1 Executive Tent", "Projection & Audio", "Catering Station", "Branded Signage Setup"],
    },
  ]

  return (
    <section id="packages" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-maroon mb-12 text-center">Popular Packages</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-xl transition-all duration-300 ${
                pkg.featured
                  ? "bg-maroon text-white shadow-xl scale-105"
                  : "bg-white border-2 border-saffron/20 hover:border-saffron"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-saffron text-maroon px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular ⭐
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className={`text-3xl font-bold mb-6 ${pkg.featured ? "text-soft-gold" : "text-saffron"}`}>
                {pkg.price}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`text-xl ${pkg.featured ? "text-soft-gold" : "text-peacock"}`}>✓</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                as="a"
                href={buildWhatsAppLink(undefined, `Hi! I'm interested in your ${pkg.name} package (${pkg.price}).`)}
                target="_blank"
                rel="noopener noreferrer"
                variant={pkg.featured ? "secondary" : "primary"}
                className="w-full text-center"
              >
                Get Quote
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
