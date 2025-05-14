"use client"

import { motion } from "framer-motion"
import { Calendar, Shield, Zap, BarChart3 } from "lucide-react"

export function StatsSection() {
  return (
    <section className="w-full py-12 relative z-10">
      <div className="container mx-auto px-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-16">
          {/* Stat Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0F0F2A]/80 border border-[#5D55FF]/30 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(93,85,255,0.15)] hover:shadow-[0_8px_30px_rgba(93,85,255,0.25)] transition-all duration-300"
          >
            <div className="flex items-center h-full p-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#5D55FF] to-[#8FFF00] bg-clip-text text-transparent whitespace-nowrap mr-3">
                +20%
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white whitespace-nowrap border-b border-[#5D55FF] pb-1 mb-1">
                  More Patients
                </h3>
                <p className="text-white/80 text-xs sm:text-sm whitespace-nowrap">Increased Patient Flow</p>
              </div>
            </div>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0F0F2A]/80 border border-[#5D55FF]/30 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(93,85,255,0.15)] hover:shadow-[0_8px_30px_rgba(93,85,255,0.25)] transition-all duration-300"
          >
            <div className="flex items-center h-full p-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#5D55FF] to-[#8FFF00] bg-clip-text text-transparent whitespace-nowrap mr-3">
                -40%
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white whitespace-nowrap border-b border-[#5D55FF] pb-1 mb-1">
                  Reduce No-Shows
                </h3>
                <p className="text-white/80 text-xs sm:text-sm whitespace-nowrap">Saves $2K+ Per Month</p>
              </div>
            </div>
          </motion.div>

          {/* Stat Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#0F0F2A]/80 border border-[#5D55FF]/30 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(93,85,255,0.15)] hover:shadow-[0_8px_30px_rgba(93,85,255,0.25)] transition-all duration-300"
          >
            <div className="flex items-center h-full p-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#5D55FF] to-[#8FFF00] bg-clip-text text-transparent whitespace-nowrap mr-3">
                +15%
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white whitespace-nowrap border-b border-[#5D55FF] pb-1 mb-1">
                  Patient Satisfaction
                </h3>
                <p className="text-white/80 text-xs sm:text-sm whitespace-nowrap">More Repeat Visits</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Icons Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center text-center space-y-2"
          >
            <div className="w-12 h-12 rounded-full border border-white/80 flex items-center justify-center bg-white/10 backdrop-filter backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <Calendar className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-white font-semibold text-sm md:text-base">See Results In 30 DAYS</h3>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center text-center space-y-2"
          >
            <div className="w-12 h-12 rounded-full border border-white/80 flex items-center justify-center bg-white/10 backdrop-filter backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <Shield className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-white font-semibold text-sm md:text-base">Secure Data</h3>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center text-center space-y-2"
          >
            <div className="w-12 h-12 rounded-full border border-white/80 flex items-center justify-center bg-white/10 backdrop-filter backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <Zap className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-white font-semibold text-sm md:text-base">Easy Setup</h3>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col items-center text-center space-y-2"
          >
            <div className="w-12 h-12 rounded-full border border-white/80 flex items-center justify-center bg-white/10 backdrop-filter backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <BarChart3 className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-white font-semibold text-sm md:text-base">Regular Check-Ins</h3>
          </motion.div>
        </div>
      </div>
    </section>
  )
}