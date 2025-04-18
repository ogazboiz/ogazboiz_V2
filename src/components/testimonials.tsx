"use client"
import { useState } from "react"
import { useTheme } from "next-themes"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function Testimonials() {
  const { theme } = useTheme()
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "Prince delivered an exceptional website that exceeded our expectations. His attention to detail and ability to translate our vision into a functional, beautiful design was impressive.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder of StartupX",
      content:
        "Working with Prince was a game-changer for our startup. He created a responsive, modern website that perfectly represents our brand and has significantly increased our conversion rates.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Olivia Rodriguez",
      role: "Marketing Director at CreativeAgency",
      content:
        "Prince's technical skills combined with his eye for design make him a rare talent. He understood our needs perfectly and delivered a website that has received countless compliments.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-12">
      <h2 className={`text-3xl font-bold mb-6 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
        Client Testimonials
      </h2>

      <div className="relative">
        <div className={`rounded-3xl p-6 md:p-8 ${theme === "light" ? "bg-white shadow-lg" : "bg-[#111111]"}`}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex flex-col items-center md:items-start">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-[#0061E0]/20">
                <img
                  src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className={`text-lg font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                  {testimonials[activeIndex].name}
                </h3>
                <p className={`text-xs ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>

            <div className="md:w-3/4 relative">
              <Quote
                className={`absolute -top-4 -left-4 w-8 h-8 opacity-20 ${
                  theme === "light" ? "text-[#0061E0]" : "text-[#6A0DAD]"
                }`}
              />
              <p className={`text-base md:text-lg italic ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
                {testimonials[activeIndex].content}
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] w-6"
                    : theme === "light"
                      ? "bg-gray-300"
                      : "bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={prevTestimonial}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full flex items-center justify-center ${
            theme === "light" ? "bg-white shadow-lg text-gray-800" : "bg-[#1A1A1A] text-white"
          } hover:bg-gradient-to-r hover:from-[#0061E0] hover:to-[#6A0DAD] hover:text-white transition-all duration-300`}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextTestimonial}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full flex items-center justify-center ${
            theme === "light" ? "bg-white shadow-lg text-gray-800" : "bg-[#1A1A1A] text-white"
          } hover:bg-gradient-to-r hover:from-[#0061E0] hover:to-[#6A0DAD] hover:text-white transition-all duration-300`}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
