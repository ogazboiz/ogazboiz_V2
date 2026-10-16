// ProjectCard.tsx
"use client"
import { useState } from "react"
import { Eye } from "lucide-react"
import { ProjectModal } from "./project-modal"
import { useTheme } from "next-themes"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  overview: string[]
  myContributions?: string[] // Optional for robustness
  technologies: string[]
  features: string[]
  liveDemoLink: string
  githubLink: string
  delay?: number
}

export function ProjectCard({
  title,
  description,
  image,
  overview,
  myContributions,
  technologies,
  features,
  liveDemoLink,
  githubLink,
  delay = 0
}: ProjectCardProps) {
  const { theme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className={`relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ${
          theme === "light" ? "shadow-gray-200" : ""
        }`}
        style={{
          animationDelay: `${delay}s`,
          transform: isHovered ? "translateY(-5px)" : "translateY(0)",
          transition: "transform 0.3s ease-in-out"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-64 object-cover brightness-50 group-hover:brightness-40 transition-all duration-300"
        />

        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <div className="mb-4">
            <h4 className="text-sm text-gray-400 mb-1">About the Project:</h4>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className={`flex items-center gap-2 px-4 py-2 w-fit rounded-xl text-white bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] hover:opacity-90 transition-all duration-300 ${
              isHovered ? "transform translate-y-0 opacity-100" : "transform translate-y-2 opacity-90"
            }`}
          >
            <Eye className="h-4 w-4" />
            View
          </button>
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal
          title={title}
          description={description}
          image={image}
          overview={overview}
          myContributions={myContributions}
          technologies={technologies}
          features={features}
          liveDemoLink={liveDemoLink}
          githubLink={githubLink}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}