"use client"

import { motion } from "framer-motion"

const services = [
  {
    number: "1",
    title: "Automated Appointment Scheduler",
    description:
      "Syncs your calendar, confirms bookings, and prevents double-books—so you spend less time on scheduling and see fewer no-shows.",
  },
  {
    number: "2",
    title: "Smart Reminder System",
    description:
      "Sends timely SMS and email nudges before every appointment—keeping clients on time and your day running smoothly.",
  },
  {
    number: "3",
    title: "Instant FAQ Bot",
    description:
      "Delivers accurate answers to common questions in seconds—reducing basic support tickets and letting your team focus on higher-value work.",
  },
]

export function ServicesSection() {
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
      >
        Services
      </motion.h2>

      <div className="space-y-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start group"
          >
            <div className="flex-shrink-0 w-20 text-center mr-6">
              <div className="text-[#00E5FF] text-6xl md:text-7xl font-bold leading-none">{service.number}</div>
            </div>
            <div className="backdrop-blur-sm p-6 rounded-md flex-1 border border-[#00E5FF]/20 border-l-4 border-l-[#00E5FF]/50 group-hover:border-l-[#00E5FF] transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
