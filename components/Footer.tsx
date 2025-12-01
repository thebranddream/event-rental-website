import { buildWhatsAppLink } from "@/lib/whatsapp"

const BUSINESS_NAME = "Your Business Name"
const PHONE = "1234567890"
const ADDRESS = "123 Main St"
const CITY = "Your City"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-maroon text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">{BUSINESS_NAME}</h3>
            <p className="text-sm text-gray-200">Beautiful tents, trusted setups, booked in minutes.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-saffron transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-saffron transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-saffron transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-saffron transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${PHONE}`} className="hover:text-saffron transition-colors flex items-center gap-2">
                  📞 {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppLink(PHONE, "Hi! Tell me more about your services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-saffron transition-colors flex items-center gap-2"
                >
                  💬 WhatsApp
                </a>
              </li>
              <li className="text-gray-300">
                📍 {ADDRESS}, {CITY}
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-saffron transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-saffron transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm text-gray-300">
            © {currentYear} {BUSINESS_NAME}. All rights reserved. | Handcrafted with ❤️ for {CITY}.
          </p>
        </div>
      </div>
    </footer>
  )
}
