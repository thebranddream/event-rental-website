import Hero from "@/components/Hero"
import TrustStrip from "@/components/TrustStrip"
import CollectionGrid from "@/components/CollectionGrid"
import StoryBlock from "@/components/StoryBlock"
import WhyUs from "@/components/WhyUs"
import Services from "@/components/Services"
import Packages from "@/components/Packages"
import Gallery from "@/components/Gallery"
import HowItWorks from "@/components/HowItWorks"
import Sustainability from "@/components/Sustainability"
import Inspiration from "@/components/Inspiration"
import Testimonials from "@/components/Testimonials"
import CoverageMap from "@/components/CoverageMap"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <TrustStrip />
      <CollectionGrid />
      <StoryBlock />
      <WhyUs />
      <Services />
      <Packages />
      <Gallery />
      <HowItWorks />
      <Sustainability />
      <Inspiration />
      <Testimonials />
      <CoverageMap />
      <FAQ />
      <Footer />
    </main>
  )
}
