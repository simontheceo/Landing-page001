"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Dummy case study data
const caseStudies = [
  {
    id: 1,
    quote: "We cut our no‑shows by 48% in Week 1—and added $12K/mo in billings.",
    name: "Dr. Sarah Nguyen",
    position: "SmileBright Dental",
    highlight1: "48%",
    highlight2: "$12K/mo",
  },
  {
    id: 2,
    quote: "Patient satisfaction scores jumped 32% after implementing the automated reminder system.",
    name: "Dr. Michael Chen",
    position: "Wellness Medical Group",
    highlight1: "32%",
    highlight2: "4.9/5",
  },
  {
    id: 3,
    quote: "Our staff saves 15 hours per week on scheduling, allowing us to see 20% more patients.",
    name: "Dr. Jessica Williams",
    position: "Family Care Clinic",
    highlight1: "15 hours",
    highlight2: "20%",
  },
  {
    id: 4,
    quote: "We've reduced patient wait times by 40% and increased our Google reviews by 3x.",
    name: "Dr. Robert Johnson",
    position: "Premier Health Partners",
    highlight1: "40%",
    highlight2: "3x",
  },
]

export function CaseStudiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (currentIndex < caseStudies.length - 1) {
      setCurrentIndex(currentIndex + 1)
      scrollToIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
      scrollToIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      scrollToIndex(currentIndex - 1)
    } else {
      setCurrentIndex(caseStudies.length - 1)
      scrollToIndex(caseStudies.length - 1)
    }
  }

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      })
    }
  }

  // Function to safely escape regex special characters
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  }

  return (
    <div className="relative w-full">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A40]/80 backdrop-blur-sm border border-[#5D55FF]/30 text-white hover:bg-[#5D55FF]/30 transition-all duration-300"
        aria-label="Previous case study"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A40]/80 backdrop-blur-sm border border-[#5D55FF]/30 text-white hover:bg-[#5D55FF]/30 transition-all duration-300"
        aria-label="Next case study"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Container */}
      <div ref={carouselRef} className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ width: `${caseStudies.length * 100}%` }}
        >
          {caseStudies.map((study, index) => (
            <div key={study.id} className="w-full flex-shrink-0" style={{ width: `${100 / caseStudies.length}%` }}>
              <div className="bg-gradient-to-r from-[#131330]/80 to-[#1A1A40]/80 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-[#5D55FF]/20 shadow-xl relative overflow-hidden mx-4">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D55FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8FFF00]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </div>

                {/* Quote marks */}
                <div className="absolute top-8 left-8 text-[#5D55FF]/20 text-9xl font-serif">"</div>

                <div className="relative">
                  <div className="mb-8 text-center">
                    <h2
                      className="text-2xl md:text-4xl font-light italic text-white leading-relaxed max-w-4xl mx-auto"
                      dangerouslySetInnerHTML={{
                        __html: study.quote
                          .replace(
                            new RegExp(escapeRegExp(study.highlight1), "g"),
                            `<span class="font-bold text-[#8FFF00]">${study.highlight1}</span>`,
                          )
                          .replace(
                            new RegExp(escapeRegExp(study.highlight2), "g"),
                            `<span class="font-bold text-[#8FFF00]">${study.highlight2}</span>`,
                          ),
                      }}
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#5D55FF]/30 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-white font-medium">{study.name}</p>
                        <p className="text-white/70 text-sm">{study.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {caseStudies.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              scrollToIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#5D55FF] w-6" : "bg-white/30"
            }`}
            aria-label={`Go to case study ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
