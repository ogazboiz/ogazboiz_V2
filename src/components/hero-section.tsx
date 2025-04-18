"use client"
import { useState, useEffect } from "react"
import { Code, Globe, Server, Database, Layout, Briefcase, FolderOpen, User } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export function HeroSection() {
  const { theme } = useTheme()
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const fullText = "Shaping the Future of Web Experiences with Blockchain Technology."

  useEffect(() => {
    if (isTyping) {
      if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        setIsTyping(false)
        const timeout = setTimeout(() => {
          setIsTyping(true)
          setTypedText("")
        }, 10000) // Wait 10 seconds before restarting
        return () => clearTimeout(timeout)
      }
    }
  }, [typedText, isTyping, fullText])

  // Combined Web2 and Web3 skills
  const skills = [
    { name: "HTML/CSS", icon: <Layout className="w-5 h-5" />, category: "web2" },
    { name: "JAVASCRIPT", icon: <Code className="w-5 h-5" />, category: "web2" },
    { name: "REACT", icon: <Globe className="w-5 h-5" />, category: "web2" },
    { name: "NEXT.JS", icon: <Server className="w-5 h-5" />, category: "web2" },
    { name: "SOLIDITY", icon: <Database className="w-5 h-5" />, category: "web3" },
    { name: "HARDHAT", icon: <Code className="w-5 h-5" />, category: "web3" },
  ]

  return (
    <section className="py-12">
      <div className="max-w-3xl">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-8 leading-tight ${theme === "light" ? "text-gray-900" : "text-white"} min-h-[3em] md:min-h-[2em]`}
        >
          {typedText}
          <span className="inline-block w-1 h-8 ml-1 bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] animate-blink"></span>
        </h2>

        <p className={`mb-8 text-xl ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
          I&apos;m a frontend developer blending clean design with powerful blockchain functionality.  
          From crafting responsive websites to integrating smart contracts with Solidity, I bring modern, secure, and engaging experiences to life across Web2 and Web3 platforms.
        </p>

        <div className="mb-8">
          <h3 className={`text-xl font-semibold mb-4 ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>
            My Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-white transition-all duration-300 ${
                  hoveredSkill === skill.name ? "transform scale-105" : ""
                } ${
                  skill.category === "web3"
                    ? theme === "light"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-blue-900/30 text-blue-300"
                    : theme === "light"
                      ? "bg-gray-200 text-gray-900"
                      : "bg-[#1A1A1A]"
                }`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {skill.icon}
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:princeakpolo@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-base bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Contact Me
          </a>
          <Link
            href="/projects"
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-base border transition-all duration-300 transform hover:scale-105 ${
              theme === "light"
                ? "text-gray-900 border-gray-300 hover:border-[#0061E0]"
                : "text-white border-gray-700 hover:border-[#0061E0]"
            }`}
          >
            <FolderOpen className="w-4 h-4" />
            View Projects
          </Link>
          <Link
            href="/about"
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-base border transition-all duration-300 transform hover:scale-105 ${
              theme === "light"
                ? "text-gray-900 border-gray-300 hover:border-[#0061E0]"
                : "text-white border-gray-700 hover:border-[#0061E0]"
            }`}
          >
            <User className="w-4 h-4" />
            About Me
          </Link>
          <Link
            href="/experience"
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-base border transition-all duration-300 transform hover:scale-105 ${
              theme === "light"
                ? "text-gray-900 border-gray-300 hover:border-[#0061E0]"
                : "text-white border-gray-700 hover:border-[#0061E0]"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Experience
          </Link>
        </div>
      </div>
    </section>
  )
}