/**
 * Unit tests for WhatsApp link builder
 */

import { buildWhatsAppLink, whatsAppTemplates } from "@/lib/whatsapp"

describe("WhatsApp utilities", () => {
  it("builds a valid WhatsApp link", () => {
    const link = buildWhatsAppLink("+918888888888", "Hi there!")
    expect(link).toContain("https://wa.me/918888888888")
    expect(link).toContain("text=Hi%20there%21")
  })

  it("encodes special characters", () => {
    const link = buildWhatsAppLink("8888888888", "Hi! I'm interested in tent rentals.")
    expect(link).toContain("text=Hi%21%20I%27m%20interested%20in%20tent%20rentals.")
  })

  it("provides English templates", () => {
    expect(whatsAppTemplates.en.short).toBeDefined()
    expect(whatsAppTemplates.en.wedding).toBeDefined()
    expect(whatsAppTemplates.en.corporate).toBeDefined()
  })

  it("provides Hindi templates", () => {
    expect(whatsAppTemplates.hi.short).toBeDefined()
    expect(whatsAppTemplates.hi.wedding).toBeDefined()
    expect(whatsAppTemplates.hi.corporate).toBeDefined()
  })
})
