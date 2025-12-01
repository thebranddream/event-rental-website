import Image from "next/image"

export default function StoryBlock() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/artisan-craftsman-working-with-fabrics-and-florals.jpg"
              alt="Event Buddy craftspeople working on décor"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-celebration-saffron mb-2">OUR STORY</p>
            <h2 className="heading-luxury mb-4">Celebrating Life, Crafting Dreams</h2>
            <p className="text-charcoal/80 mb-6 leading-relaxed">
              Event Buddy was born from a simple belief: every celebration deserves the finest details. For years, we've
              worked with couples, corporates, and families to transform their visions into unforgettable moments.
            </p>
            <p className="text-charcoal/80 mb-6 leading-relaxed">
              Our team of artisans and designers meticulously craft every piece, from hand-draped mandaps to custom
              floral installations. We believe in sustainable luxury—reusable décor, eco-friendly processes, and
              timeless designs.
            </p>
            <blockquote className="border-l-4 border-royal-gold pl-6 py-4 mb-6 bg-ivory-luxe p-4 rounded-r-lg italic text-charcoal/70">
              "We bring your celebration vision to life—flawlessly, joyfully, and with unwavering dedication to detail."
            </blockquote>
            <div className="flex gap-4">
              <div>
                <p className="text-2xl font-bold text-royal-gold">15+</p>
                <p className="text-sm text-charcoal/60">Years in Events</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-royal-gold">500+</p>
                <p className="text-sm text-charcoal/60">Expert Team</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-royal-gold">2000+</p>
                <p className="text-sm text-charcoal/60">Happy Celebrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
