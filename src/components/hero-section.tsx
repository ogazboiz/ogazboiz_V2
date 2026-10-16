"use client"
import { useState, useEffect } from "react"
import { Code, Globe, Server, Database, Layout, Briefcase, FolderOpen, User, Boxes, Terminal, Wallet } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const fullText = "I build web apps and the smart contracts behind them."

  useEffect(() => {
    if (isTyping) {
      if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1))
        }, 70)
        return () => clearTimeout(timeout)
      } else {
        setIsTyping(false)
        const timeout = setTimeout(() => {
          setIsTyping(true)
          setTypedText("")
        }, 10000)
        return () => clearTimeout(timeout)
      }
    }
  }, [typedText, isTyping, fullText])

  const skills = [
    { name: "TypeScript", icon: <Code className="w-4 h-4" /> },
    { name: "React", icon: <Globe className="w-4 h-4" /> },
    { name: "Next.js", icon: <Server className="w-4 h-4" /> },
    { name: "Tailwind", icon: <Layout className="w-4 h-4" /> },
    { name: "Node.js", icon: <Server className="w-4 h-4" /> },
    { name: "Solidity", icon: <Database className="w-4 h-4" /> },
    { name: "Rust", icon: <Terminal className="w-4 h-4" /> },
    { name: "Foundry", icon: <Boxes className="w-4 h-4" /> },
    { name: "wagmi / viem", icon: <Wallet className="w-4 h-4" /> },
  ]

  return (
    <section className="py-12">
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-[1.1] text-white min-h-[2.4em] md:min-h-[1.3em]">
          {typedText}
          <span className="inline-block w-[3px] h-8 md:h-10 ml-1 align-middle bg-[#8B5CF6] animate-blink"></span>
        </h2>

        <p className="mb-8 text-lg leading-relaxed text-gray-400 max-w-2xl">
          I&apos;m a full-stack and smart contract developer. I like owning a feature from the Solidity or Rust contract
          all the way to the Next.js frontend, and I&apos;ve shipped social, fintech, real estate and gaming products.
          Along the way I&apos;ve won three hackathons on Celo, Somnia and Arbitrum Stylus.
        </p>

        <div className="mb-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#15121C] border border-white/[0.06] text-gray-200 hover:border-[#8B5CF6]/40 transition-colors duration-200"
              >
                <span className="text-[#A78BFA]">{skill.icon}</span>
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:princeogagaoghene@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-white text-base font-medium bg-[#8B5CF6] hover:bg-[#7C4DF0] transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Contact Me
          </a>
          <Link
            href="/projects"
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-base text-gray-200 border border-white/10 hover:border-[#8B5CF6]/50 hover:text-white transition-colors duration-200"
          >
            <FolderOpen className="w-4 h-4" />
            View Projects
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-base text-gray-200 border border-white/10 hover:border-[#8B5CF6]/50 hover:text-white transition-colors duration-200"
          >
            <User className="w-4 h-4" />
            About Me
          </Link>
          <Link
            href="/experience"
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-base text-gray-200 border border-white/10 hover:border-[#8B5CF6]/50 hover:text-white transition-colors duration-200"
          >
            <Briefcase className="w-4 h-4" />
            Experience
          </Link>
        </div>
      </div>
    </section>
  )
}
