import Link from "next/link"

export default function Inspiration() {
  const articles = [
    {
      title: "Choosing Mandap Styles",
      tag: "Design Guide",
      excerpt: "Traditional vs modern: Find the perfect mandap style for your celebration.",
    },
    {
      title: "Sangeet Seating Layouts",
      tag: "Event Planning",
      excerpt: "Expert tips on arranging seating for comfort and interaction.",
    },
    {
      title: "Corporate Décor Trends 2024",
      tag: "Corporate",
      excerpt: "Modern, minimalist styles that elevate professional events.",
    },
    {
      title: "How To Pick A Theme",
      tag: "Inspiration",
      excerpt: "Step-by-step guide to choosing a theme that reflects your vision.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-luxury mb-4 text-center">Inspiration & Tips</h2>
        <p className="subheading-luxury text-center mb-12">Learn from our celebration experts</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, idx) => (
            <div key={idx} className="card-luxury">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-celebration-saffron/20 text-celebration-saffron rounded-full">
                  {article.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-maroon-royale mb-3">{article.title}</h3>
              <p className="text-sm text-charcoal/70 mb-4">{article.excerpt}</p>
              <Link
                href="#"
                className="text-royal-gold font-semibold hover:text-maroon-royale transition-colors text-sm"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
