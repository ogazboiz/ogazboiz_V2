// ProjectsSection.tsx
"use client"
import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { useTheme } from "next-themes"

export function ProjectsSection() {
  const { theme } = useTheme()
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = ["All", "Frontend", "NextJS", "DeFi & Payments"]

  const projects = [
    {
      id: 1,
      title: "Talim",
      description:
        "Talim is a powerful Learning Management and School Management System platform designed to simplify, manage, and enhance online education and school operations for learners, teachers, parents, and institutions alike.",
      image: "/Talim.svg?height=300&width=400",
      category:["Frontend", "NextJS"],
      overview: [
        "Talim is a comprehensive LMS and school management platform that streamlines course creation, user management, school operations, and progress tracking.",
        "It integrates with modern frontend technologies to provide a seamless and responsive user experience across different user roles like students, teachers, parents, and admins."
      ],
      myContributions: [
        "Integrated Node.js API endpoints into the frontend to enable real-time data interaction and updates.",
        "Designed and implemented the login system with authentication workflows.",
        "Built the dashboard interfaces for students using Nextjs and TypeScript.",
        "Collaborated with the backend team to ensure smooth data flow for features like timetable viewing, assignment tracking, and chat functionalities."
      ],
      technologies: ["NextJs", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      features: [
        "Course creation and management",
        "User authentication and role-based dashboards (student, teacher, parent, admin)",
        "Timetable viewing and assignment tracking",
        "Chat functionality between students and teachers",
        "Progress tracking and analytics",
        "Responsive design for mobile and desktop"
      ],
      liveDemoLink: "https://talim-student-mwab.vercel.app/",
      githubLink: "#"
    },    
    {
      id: 2,
      title: "DeFi Direct",
      description:
        "A decentralized payment protocol enabling direct spending of USDT/USDC stablecoins in fiat transactions without pre-conversion, powered by multiple Ethereum EVM chains.",
      image: "/defi-direct-logo.png?height=300&width=400",
      category: ["Frontend", "NextJS","DeFi & Payments"],
      overview: [
        "DeFi Direct is a non-custodial payment solution bridging crypto and fiat economies.",
        "Users spend USDT/USDC directly from self-custody wallets; merchants receive local currency instantly.",
        "Supports multiple Ethereum EVM chains (e.g., Scroll zkEVM, Polygon, Optimism) for low-cost, secure transactions with real-time oracle pricing."
      ],
      myContributions: [
        "Integrated wallet connectivity (MetaMask, Coinbase Wallet) using Wagmi and Next.js.",
        "Developed the dashboard interface for displaying stablecoin balances and transaction actions.",
        "Assisted in building the landing page for improved user onboarding.",
        "Implemented real-time stablecoin balance display with USD and Naira (NGN) conversion."
      ],
      technologies: [
        "Solidity (Ethereum EVM Chains)",
        "Chainlink Oracles",
        "Next.js",
        "Wagmi",
        "MetaMask/Coinbase Wallet"
      ],
      features: [
        "Direct USDT/USDC-to-fiat conversion",
        "Non-custodial wallet integration",
        "Sub-1% transaction fees",
        "Time-locked smart contract settlements",
        "Merchant API for fiat payouts"
      ],
      liveDemoLink: "https://defi-direct-dapp.vercel.app",
      githubLink: "#"
    }
    
    
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category.includes(activeFilter))

  return (
    <section id="projects" className="py-12">
      <div className="mb-8">
        <h2 className={`text-3xl font-bold mb-6 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
          Featured Projects
        </h2>

        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm ${
                activeFilter === category
                  ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] text-white"
                  : theme === "light"
                    ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    : "bg-[#1A1A1A] text-white hover:bg-[#2A2A2A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            overview={project.overview}
            myContributions={project.myContributions}
            technologies={project.technologies}
            features={project.features}
            liveDemoLink={project.liveDemoLink}
            githubLink={project.githubLink}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  )
}