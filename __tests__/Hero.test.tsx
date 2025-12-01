/**
 * Jest + React Testing Library test for Hero component
 */

import { render, screen } from "@testing-library/react"
import Hero from "@/components/Hero"

describe("Hero Component", () => {
  it("renders the exact headline", () => {
    render(<Hero />)
    const headline = screen.getByText(/Beautiful tents & trusted setups — booked in minutes/i)
    expect(headline).toBeInTheDocument()
  })

  it("renders both CTA buttons", () => {
    render(<Hero />)
    const downloadBtn = screen.getByText(/Download Pricing/i)
    const whatsappBtn = screen.getByText(/Chat on WhatsApp/i)

    expect(downloadBtn).toBeInTheDocument()
    expect(whatsappBtn).toBeInTheDocument()
  })

  it("has accessible video element with aria-hidden", () => {
    render(<Hero />)
    const video = screen.getByRole("img", { hidden: true })
    expect(video).toHaveAttribute("aria-hidden", "true")
  })

  it("primary CTA links to pricing PDF", () => {
    render(<Hero />)
    const link = screen.getByText(/Download Pricing/i)
    expect(link).toHaveAttribute("href", "/pricing.pdf")
  })

  it("secondary CTA links to WhatsApp", () => {
    render(<Hero />)
    const link = screen.getByText(/Chat on WhatsApp/i)
    expect(link.getAttribute("href")).toContain("https://wa.me/")
  })
})
