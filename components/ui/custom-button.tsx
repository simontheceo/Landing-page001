"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: "default" | "navbar" | "cta"
}

export function CustomButton({ children, className, variant = "default", ...props }: CustomButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Navbar button (smaller, gradient, no arrow)
  if (variant === "navbar") {
    return (
      <button
        className={cn(
          "h-9 px-5 rounded-full bg-gradient-to-r from-[#5D55FF] to-[#8FFF00] text-white",
          "text-sm font-medium uppercase tracking-wide",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  }

  // CTA button (glass-like transparent with arrow on right)
  if (variant === "cta") {
    return (
      <motion.button
        className={cn(
          "relative flex items-center justify-between rounded-full overflow-hidden",
          "h-12 px-6 backdrop-blur-md bg-white/10 border border-white/20",
          className,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={false}
        {...props}
      >
        {/* Text */}
        <span className="relative z-10 font-medium text-sm uppercase tracking-wide text-white">{children}</span>

        {/* Arrow container */}
        <motion.div className="relative z-10 ml-2" animate={{ x: isHovered ? 2 : 0 }} transition={{ duration: 0.2 }}>
          <ArrowRight className="h-5 w-5 text-white" />
        </motion.div>
      </motion.button>
    )
  }

  // Default button (with expanding background and gradient border)
  return (
    <motion.button
      className={cn("relative flex items-center justify-start rounded-full overflow-hidden", "h-12 px-0", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={false}
      {...props}
    >
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#5D55FF] to-[#00E5FF]">
        <div className="absolute inset-0 rounded-full bg-[#030311]"></div>
      </div>

      {/* Expanding background */}
      <motion.div
        className="absolute top-0 left-0 h-full bg-[#00E5FF] rounded-full z-0"
        initial={{ width: "48px" }}
        animate={{ width: isHovered ? "100%" : "48px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      {/* Arrow container */}
      <div className="relative z-10 flex items-center justify-center h-12 w-12">
        <motion.div animate={{ x: isHovered ? 2 : 0 }} transition={{ duration: 0.2 }}>
          <ArrowRight className="h-5 w-5 text-black" />
        </motion.div>
      </div>

      {/* Text */}
      <motion.span
        className="relative z-10 font-medium text-sm uppercase tracking-wide pr-6"
        animate={{
          color: isHovered ? "#000000" : "#ffffff",
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
    </motion.button>
  )
}
