"use client"

import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"

export function CTASection() {
  return (
    <section className="py-32 relative z-10 bg-gradient-to-b from-[#0a0a1a] to-[#0f1a3a]">
      <div className="container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white/70 mb-4"
        >
          No credit card required.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 max-w-4xl mx-auto leading-tight text-white"
        >
          Book Your 20-Min Call Today
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block"
        >
          {/* CTA button - using cta variant */}
          <CustomButton variant="cta">Book Now</CustomButton>
        </motion.div>
      </div>
    </section>
  )
}
