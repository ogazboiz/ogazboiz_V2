// ProjectModal.tsx
"use client"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { X, Github, ExternalLink } from "lucide-react"
import { useTheme } from "next-themes"

interface ProjectModalProps {
  title: string
  description: string
  image: string
  overview: string[]
  myContributions?: string[]
  technologies: string[]
  features: string[]
  liveDemoLink: string
  githubLink: string
  onClose: () => void
}

export function ProjectModal({
  title,
  description,
  image,
  overview,
  myContributions,
  technologies,
  features,
  liveDemoLink,
  githubLink,
  onClose
}: ProjectModalProps) {
  const { theme } = useTheme()
  const modalRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscKey)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  // Prevent SSR issues with portal
  if (typeof window === "undefined") {
    return null
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "contributions", label: "Contributions" },
    { id: "technologies", label: "Tech" },
    { id: "features", label: "Features" }
  ]

  return createPortal(
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/100">
      <div
        ref={modalRef}
        className={`w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[560px] lg:max-w-[640px] rounded-xl max-h-[80vh] overflow-hidden bg-gradient-to-b ${
          theme === "light"
            ? "from-white to-gray-50 shadow-xl"
            : "from-[#111111] to-[#1A1A1A] shadow-xl shadow-black/50"
        } transform transition-all duration-300 scale-95 sm:scale-100 animate-fade-in`}
      >
        <div className="relative">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-28 sm:h-36 md:h-40 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/60 rounded-full p-1.5 sm:p-2 text-white hover:bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] transition-all duration-300"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        <div className="p-3 sm:p-5">
          <h2
            className={`text-lg sm:text-xl font-bold mb-2 ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-xs sm:text-sm mb-3 ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {description}
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-1 sm:gap-2 border-b border-gray-200 dark:border-gray-700 mb-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-t-md transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] text-white"
                    : theme === "light"
                      ? "text-gray-500 hover:bg-gray-100"
                      : "text-gray-400 hover:bg-gray-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Scrollable Tab Content */}
          <div className="h-[150px] sm:h-[180px] overflow-y-auto pr-2">
            {activeTab === "overview" && (
              <div>
                {overview.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-xs sm:text-sm mb-2 ${
                      theme === "light" ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {activeTab === "contributions" && myContributions && (
              <ul
                className={`list-disc list-inside space-y-1 text-xs sm:text-sm ${
                  theme === "light" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {myContributions.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ul>
            )}

            {activeTab === "technologies" && (
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 rounded-full text-xs sm:text-sm transition-all duration-200 ${
                      theme === "light"
                        ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        : "bg-[#1A1A1A] text-gray-300 hover:bg-[#2A2A2A]"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {activeTab === "features" && (
              <ul
                className={`list-disc list-inside space-y-1 text-xs sm:text-sm ${
                  theme === "light" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-wrap justify-end gap-2 sm:gap-3 mt-3">
            <button
              onClick={onClose}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm transition-all duration-200 ${
                theme === "light"
                  ? "border border-gray-300 text-gray-800 hover:bg-gray-100 hover:border-[#0061E0]"
                  : "border border-gray-700 text-white hover:bg-gray-800 hover:border-[#6A0DAD]"
              }`}
            >
              Close
            </button>
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm text-white bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] hover:from-[#004BB3] hover:to-[#540886] transition-all duration-200 flex items-center gap-1 sm:gap-2"
            >
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              Live Demo
            </a>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm flex items-center gap-1 sm:gap-2 transition-all duration-200 ${
                  theme === "light"
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}