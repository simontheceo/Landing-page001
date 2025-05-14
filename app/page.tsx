"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { CustomButton } from "@/components/ui/custom-button"
import { CaseStudiesCarousel } from "@/components/case-studies-carousel"

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null)
  const caseStudiesRef = useRef<HTMLDivElement>(null)
  const faqsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    // Add stars/particles to background
    const createStars = () => {
      const starsContainer = document.getElementById("stars-container")
      if (!starsContainer) return

      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div")
        star.classList.add("star")
        star.style.width = `${Math.random() * 2}px`
        star.style.height = star.style.width
        star.style.left = `${Math.random() * 100}%`
        star.style.top = `${Math.random() * 100}%`
        star.style.animationDuration = `${Math.random() * 50 + 10}s`
        star.style.animationDelay = `${Math.random() * 50}s`
        starsContainer.appendChild(star)
      }
    }

    createStars()
  }, [])

  return (
    <div className="min-h-screen bg-[#030311] text-white overflow-hidden relative">
      <div id="stars-container" className="absolute inset-0 z-0 overflow-hidden"></div>

      {/* New background glow effect */}
      <div className="bg-glow-container">
        <div className="bg-glow-effect"></div>
        <div className="bg-glow-streaks"></div>
      </div>

      {/* Hero Section with full viewport height */}
      <div className="min-h-screen flex flex-col relative">
        {/* Navigation */}
        <motion.nav
          className="w-full max-w-[1440px] mx-auto py-6 px-4 relative z-10 flex justify-between items-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo on the left */}
          <div className="flex items-center">
            <span className="text-white text-xl font-medium flex items-center">
              <span className="text-white mr-1">✧</span>
              <span className="text-white">myoprocess</span>
            </span>
          </div>

          {/* Navigation links in the middle */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection(caseStudiesRef)}
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              Case studies
            </button>
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection(faqsRef)}
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              FAQs
            </button>
          </div>

          {/* CTA button on the right - using navbar variant */}
          <CustomButton variant="navbar">Book a Call</CustomButton>
        </motion.nav>

        {/* Main Hero Content - Reduced spacing */}
        <div className="flex-grow flex flex-col mt-8">
          <section className="w-full max-w-[1440px] mx-auto text-center relative z-10 pt-8 px-4">
            {/* Dotted grid background */}
            <div
              className="absolute inset-0 z-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(#5D55FF 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>

            {/* Purple glow effects */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5D55FF]/20 rounded-full blur-[100px] -z-0"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#5D55FF]/20 rounded-full blur-[100px] -z-0"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#5D55FF]/10 rounded-full blur-[120px] -z-0"></div>

            <div className="flex flex-col items-center">
              <motion.div
                className="inline-block mb-4 relative z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="px-6 py-2 rounded-full border border-[#5D55FF]/50 bg-[#0D0D20] hover:border-[#5D55FF]/80 transition-all duration-300">
                  <span className="text-sm font-medium bg-gradient-to-r from-[#5D55FF] to-[#8FFF00] bg-clip-text text-transparent"></span>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {/* Capsule-shaped glow effect behind headline */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[130%] bg-[#692B92] opacity-60 rounded-full blur-[60px] z-0"></div>

                <h1 className="text-5xl md:text-6xl font-medium mb-6 max-w-5xl mx-auto leading-tight px-4 relative z-10">
                  <span className="text-white">Maximize Clinic Revenue by</span>
                  <br />
                  <span className="text-white">Automating Patient Acquisition</span>
                </h1>
              </motion.div>

              <motion.p
                className="text-white/70 max-w-3xl mx-auto mb-8 text-lg px-4 relative z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Our automation solutions reduce no-shows, boost patient satisfaction, and drive clinic revenue
                effortlessly.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative z-10 mb-10"
              >
                {/* Main CTA button - using default variant with animation */}
                <CustomButton>Book a Call</CustomButton>
              </motion.div>
            </div>

            {/* Stats Section - Moved down with more spacing */}
            <div className="mt-16">
              <StatsSection />
            </div>
          </section>
        </div>
      </div>

      {/* Case Study Carousel Section */}
      <section ref={caseStudiesRef} className="w-full max-w-[1440px] mx-auto py-20 px-4 relative z-10 bg-[#080818]">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Success Stories</h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            See how healthcare providers are transforming their practices with our automation solutions.
          </p>
        </motion.div>

        <CaseStudiesCarousel />
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="w-full py-24 relative z-10 bg-[#0a0a1a]">
        <ServicesSection />
      </section>

      {/* FAQ Section */}
      <div ref={faqsRef}>
        <FAQSection />
      </div>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
