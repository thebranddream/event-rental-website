/**
 * Client-side helper to generate hosted checkout URLs
 * For use with Stripe or external checkout providers
 */

export function getCheckoutUrl(plan: "community" | "festival" | "enterprise"): string {
  const baseUrl = "{{CHECKOUT_URL}}"
  const planParams = {
    community: "?plan=community",
    festival: "?plan=festival",
    enterprise: "?plan=enterprise",
  }

  if (!baseUrl || baseUrl.includes("{{")) {
    console.warn("[v0] CHECKOUT_URL not configured. Update .env.local with your Stripe checkout URL.")
    return "#"
  }

  return `${baseUrl}${planParams[plan]}`
}

/**
 * Encode WhatsApp message for enterprise inquiries
 */
export function buildEnterpriseWhatsAppLink(phone: string): string {
  const message =
    "Hi! I'm interested in your Enterprise plan. Can we schedule a call to discuss custom pricing and options?"
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encoded}`
}
