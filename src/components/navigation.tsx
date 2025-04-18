// Create a new navigation component for smooth scrolling
"use client"
import { useTheme } from "next-themes"
import { Home, User, Briefcase, FolderOpen, MessageSquare } from "lucide-react"
import { useEffect, useState } from "react"

export function Navigation() {
  const { theme } = useTheme()
  const [activeSection, setActiveSection] = useState("home")

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "experience", "testimonials"]
      const scrollPosition = window.scrollY + 100 // Offset to trigger slightly before reaching section

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`flex items-center gap-1 px-2 py-2 rounded-full ${
          theme === "light" ? "bg-white shadow-lg" : "bg-[#111111] shadow-lg shadow-black/20"
        }`}
      >
        <button
          onClick={() => scrollToSection("home")}
          className={`p-2 rounded-full transition-all duration-300 ${
            activeSection === "home"
              ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] text-white"
              : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          aria-label="Home section"
        >
          <Home className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={`p-2 rounded-full transition-all duration-300 ${
            activeSection === "about"
              ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] text-white"
              : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          aria-label="About section"
        >
          <User className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className={`p-2 rounded-full transition-all duration-300 ${
            activeSection === "projects"
              ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] text-white"
              : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          aria-label="Projects section"
        >
          <FolderOpen className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className={`p-2 rounded-full transition-all duration-300 ${
            activeSection === "experience"
              ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] text-white"
              : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          aria-label="Experience section"
        >
          <Briefcase className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollToSection("testimonials")}
          className={`p-2 rounded-full transition-all duration-300 ${
            activeSection === "testimonials"
              ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] text-white"
              : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          aria-label="Testimonials section"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
