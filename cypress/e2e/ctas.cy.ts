import { describe, beforeEach, it, cy } from "cypress"

/**
 * Cypress E2E tests for CTAs
 * Run with: npx cypress open
 */

describe("Event Buddy CTAs", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("should navigate to WhatsApp on CTA click", () => {
    cy.get("a:contains('Chat on WhatsApp')").first().should("have.attr", "href").and("include", "wa.me/")
  })

  it("should download pricing PDF on click", () => {
    cy.get("a:contains('Download Pricing')").first().should("have.attr", "href", "/pricing.pdf")
  })

  it("should have accessible focus states on buttons", () => {
    cy.get("button").first().focus().should("have.css", "outline")
  })

  it("should render hero headline correctly", () => {
    cy.contains("Beautiful tents & trusted setups — booked in minutes.").should("be.visible")
  })

  it("should have keyboard-accessible carousel in testimonials", () => {
    cy.get("section#testimonials").within(() => {
      cy.get("button[aria-label*='Show testimonial']").first().focus().type("{enter}")
      cy.get("button[aria-current='true']").should("exist")
    })
  })
})
