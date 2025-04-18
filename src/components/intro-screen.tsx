"use client"
import { useTheme } from "next-themes"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

interface IntroScreenProps {
  onEnterPortfolio: () => void
}

export function IntroScreen({ onEnterPortfolio }: IntroScreenProps) {
  const { theme, systemTheme } = useTheme()
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [mounted, setMounted] = useState(false)

  const fullText = "Frontend Developer & Smart Contract Developer"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isTyping) {
      if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        setIsTyping(false)
      }
    }
  }, [typedText, isTyping, fullText])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme

  // Add your real links here:
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/ogazboiz" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ogagaoghene-akpolo/" },
    { name: "Twitter", url: "https://x.com/AkpoloOgaga" },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Background gradient */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0061E0] to-[#6A0DAD] animate-gradient"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#0061E0]/20 mx-auto">
            <img
              src="/profile.jpg?height=128&width=128"
              alt="Prince Akpolo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className={`text-4xl md:text-6xl font-bold mb-2 ${currentTheme === "light" ? "text-gray-900" : "text-white"}`}>
          Akpolo Prince
        </h1>

        <h2 className={`text-xl md:text-2xl font-light mb-6 ${currentTheme === "light" ? "text-gray-700" : "text-gray-300"}`}>
          <span className="italic text-gray-500">Also known as</span> <span className="font-semibold text-[#0061E0]">Ogazboiz</span>
        </h2>

        <h3 className={`text-xl md:text-2xl mb-8 ${currentTheme === "light" ? "text-gray-700" : "text-gray-300"}`}>
          {typedText}
          <span className="inline-block w-1 h-6 ml-1 bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] animate-blink"></span>
        </h3>

        <p className={`text-lg mb-12 max-w-2xl mx-auto ${currentTheme === "light" ? "text-gray-600" : "text-gray-400"}`}>
          Welcome to my space! I'm a Frontend Developer and Solidity Developer, creating seamless web experiences and building smart contracts that drive blockchain innovation. I'm always learning, improving, and excited to shape the future of decentralized applications.
        </p>

        <button
          onClick={onEnterPortfolio}
          className="group flex items-center gap-2 px-8 py-4 rounded-xl text-white text-lg bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] hover:opacity-90 transition-all duration-300 transform hover:scale-105 mx-auto"
        >
          View Portfolio
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        {/* Social Links */}
        <div className="flex justify-center mt-12 gap-8">
          {socialLinks.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium hover:underline transition-colors ${
                currentTheme === "light" ? "text-gray-600 hover:text-[#0061E0]" : "text-gray-400 hover:text-white"
              }`}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
