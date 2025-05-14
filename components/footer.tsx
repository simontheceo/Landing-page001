"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-[#080818] py-16 relative z-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <div className="flex items-center mb-4">
              <span className="text-white text-xl font-medium flex items-center">
                <span className="text-white mr-1">✧</span>
                <span className="text-white">myoprocess</span>
              </span>
            </div>
            <p className="text-white/60 text-sm">Automating patient engagement for healthcare providers since 2020.</p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1"
          >
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  API
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1"
          >
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/60 text-sm">hello@myoprocess.com</li>
              <li className="text-white/60 text-sm">+1 (555) 123-4567</li>
              <li className="text-white/60 text-sm">
                123 Innovation Way
                <br />
                San Francisco, CA 94107
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/40 text-sm">© 2025 myoprocess. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
              HIPAA Compliance
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
