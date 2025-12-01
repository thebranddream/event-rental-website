const CITY = "Your City Name" // Declare the CITY variable here
const LAT = 0 // Declare the LAT variable here
const LON = 0 // Declare the LON variable here

export default function CoverageMap() {
  return (
    <section id="coverage" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-maroon mb-4 text-center">Serving {CITY}</h2>
        <p className="text-center text-gray-600 mb-8">We cover all major neighborhoods and venues in {CITY}.</p>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-saffron/10 h-96">
          {/* Placeholder for embedded map */}
          <iframe
            title={`Service area map for ${CITY}`}
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d${LON}!3d${LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3!2s${CITY}!5e0!3m2!1sen!2sin!4v1234567890`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-saffron mb-2">50+</div>
            <p className="text-gray-700">Successful Events</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-saffron mb-2">12</div>
            <p className="text-gray-700">Neighborhoods Covered</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-saffron mb-2">98%</div>
            <p className="text-gray-700">On-Time Delivery</p>
          </div>
        </div>
      </div>
    </section>
  )
}
