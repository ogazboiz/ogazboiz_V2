"use client"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Copy } from "lucide-react"
import type { ReactNode } from "react"
import { Navbar } from "./navbar"

interface PageContainerProps {
  children: ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  const { theme } = useTheme()
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [copied, setCopied] = useState(false) // State for copy feedback

  // Your wallet address (replace with your actual address)
  const walletAddress = "0xa479b8c6030cBB01f8E9F6AcB2Ad2C757C81894d"
  // Shortened display (first 6 and last 4 characters)
  const shortWalletAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`

  // Copy wallet address to clipboard
  const handleCopyWallet = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "light" ? "bg-gray-50" : "bg-[#0C0A12]"}`}>
      {/* Soft violet glows for depth */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#8B5CF6] opacity-[0.08] blur-[140px]"></div>
        <div className="absolute bottom-0 -right-48 w-[600px] h-[600px] rounded-full bg-[#6D28D9] opacity-[0.06] blur-[130px]"></div>
      </div>

      <Navbar />

      <div
        className={`container relative z-10 mx-auto px-4 md:px-8 lg:px-12 xl:px-24 py-6 ${!isHomePage ? "pt-24" : ""}`}
      >
        {children}
        <footer className="py-8 text-center text-gray-400 dark:text-gray-400 light:text-gray-600">
          <p>© {new Date().getFullYear()} Prince Akpolo. All rights reserved.</p>
          <div className="mt-4 flex flex-col items-center">
            <span
              className="text-sm"
              title="Send ETH or EVM-compatible coins to this address"
            >
              My Ethereum Address
            </span>
            <button
              onClick={handleCopyWallet}
              className="mt-2 flex items-center gap-2 text-sm font-mono hover:text-[#8B5CF6] transition-colors"
              title="Copy wallet address"
            >
              <span>{shortWalletAddress}</span>
              <Copy className="w-4 h-4" />
              {copied && (
                <span className="text-xs text-gray-400 animate-fade-in-out">Copied</span>
              )}
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}