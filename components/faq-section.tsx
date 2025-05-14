"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqItems = [
  {
    question: "How long does setup take?",
    answer: "You'll be fully operational in under 72 hours. Our team handles the setup, no IT team required.",
  },
  {
    question: "Is my patient data secure?",
    answer:
      "Yes. We're fully HIPAA-compliant and use end-to-end encryption (AES-256) to protect all patient information.",
  },
  {
    question: "What if I need custom features?",
    answer:
      "We offer flexible integrations and will work directly with your team to build custom workflows, reports, or automations.",
  },
  {
    question: "Can I integrate with my EHR?",
    answer:
      "Absolutely. We support integrations with all major EHR systems—our platform connects via secure APIs in just minutes.",
  },
  {
    question: "Will this increase my team's workload?",
    answer:
      "No—our automation tools are designed to save your staff time, not add tasks. Most practices report saving 20+ hours/month.",
  },
  {
    question: "Do you offer support after onboarding?",
    answer: "Yes. You'll have access to 24/7 AI support for patients, plus a dedicated success manager for your team.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-black py-32 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-white">Commonly asked questions</h3>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="border-b border-white/10 pb-8 last:border-b-0"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left text-xl md:text-2xl font-medium text-white hover:text-[#8FFF00] transition-colors duration-300 flex justify-between items-center"
                >
                  <span>{item.question}</span>
                  {openIndex === index && <span className="ml-2 text-[#5D55FF]">−</span>}
                  {openIndex !== index && <span className="ml-2 text-[#5D55FF]">+</span>}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-6 text-xl text-white/70">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
