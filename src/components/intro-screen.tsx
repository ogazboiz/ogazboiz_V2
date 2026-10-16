"use client"
import { useTheme } from "next-themes"
import { ArrowRight, Copy } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

interface IntroScreenProps {
  onEnterPortfolio: () => void
}

export function IntroScreen({ onEnterPortfolio }: IntroScreenProps) {
  const { theme, systemTheme } = useTheme()
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [copied, setCopied] = useState(false) // State for copy feedback

  const fullText = "Full-Stack & Smart Contract Engineer"

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

  // Your wallet address (replace with your actual address)
  const walletAddress = "0xa479b8c6030cBB01f8E9F6AcB2Ad2C757C81894d"
  // Shortened display (first 6 and last 4 characters)
  const shortWalletAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`

  // Social links
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/ogazboiz" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ogagaoghene-akpolo/" },
    { name: "Twitter", url: "https://x.com/AkpoloOgaga" },
  ]

  // Copy wallet address to clipboard
  const handleCopyWallet = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Soft violet glows for depth */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#8B5CF6] opacity-[0.10] blur-[150px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#8B5CF6]/20 mx-auto">
            <Image
              src="/profile.jpg"
              alt="Prince Akpolo"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <h1 className={`text-4xl md:text-6xl font-bold mb-2 ${currentTheme === "light" ? "text-gray-900" : "text-white"}`}>
          Akpolo Prince
        </h1>

        <h2 className={`text-xl md:text-2xl font-light mb-6 ${currentTheme === "light" ? "text-gray-700" : "text-gray-300"}`}>
          <span className="italic text-gray-500">Also known as</span>{" "}
          <span className="font-semibold text-[#8B5CF6]">Ogazboiz</span>
        </h2>

        <h3 className={`text-xl md:text-2xl mb-8 ${currentTheme === "light" ? "text-gray-700" : "text-gray-300"}`}>
          {typedText}
          <span className="inline-block w-1 h-6 ml-1 bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] animate-blink"></span>
        </h3>
        <p className={`text-lg mb-12 max-w-2xl mx-auto ${currentTheme === "light" ? "text-gray-600" : "text-gray-400"}`}>
          Welcome to my space! I build web apps and smart contracts, and I like taking a feature from the Solidity or Rust
          contract all the way to the Next.js frontend people actually use. I&apos;ve won three hackathons on Celo, Somnia and
          Arbitrum Stylus, I maintain an open-source library called Compose, and right now I&apos;m building Square and GameArena.
        </p>

        <button
          onClick={onEnterPortfolio}
          className="group flex items-center gap-2 px-8 py-4 rounded-xl text-white text-lg bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] hover:opacity-90 transition-all duration-300 transform hover:scale-105 mx-auto"
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
              className={`text-sm font-medium hover:underline transition-colors ${currentTheme === "light" ? "text-gray-600 hover:text-[#8B5CF6]" : "text-gray-400 hover:text-white"
                }`}
            >
              {name}
            </a>
          ))}
        </div>

        {/* Wallet Address */}
        <div className="mt-6 flex flex-col items-center">
          <span
            className={`text-sm font-medium ${currentTheme === "light" ? "text-gray-600" : "text-gray-400"}`}
            title="Send ETH or EVM-compatible coins to this address"
          >
            My Ethereum Address
          </span>
          <button
            onClick={handleCopyWallet}
            className={`mt-2 flex items-center gap-2 text-sm font-mono transition-colors pb-4 ${currentTheme === "light" ? "text-gray-700 hover:text-[#8B5CF6]" : "text-gray-300 hover:text-white "
              }`}
            title="Copy wallet address"
          >
            <span>{shortWalletAddress}</span>
            <Copy className="w-4 h-4" />
            {copied && (
              <span
                className={`text-xs ${currentTheme === "light" ? "text-gray-600" : "text-gray-400"} animate-fade-in-out`}
              >
                Copied
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}