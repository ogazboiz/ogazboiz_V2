"use client"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import { Navbar } from "./navbar"
import { ThemeToggle } from "./theme-toggle"

interface PageContainerProps {
  children: ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  const { theme } = useTheme()
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "light" ? "bg-gray-50" : "bg-black"}`}>
      {/* Animated background gradient */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0061E0] to-[#6A0DAD] animate-gradient"></div>
      </div>

      <Navbar />

      {/* Only show theme toggle on homepage since navbar is hidden there */}
      {isHomePage && (
        <div className="absolute top-6 right-6 md:right-12 z-10">
          <ThemeToggle />
        </div>
      )}

      <div
        className={`container relative z-10 mx-auto px-4 md:px-8 lg:px-12 xl:px-24 py-6 ${!isHomePage ? "pt-24" : ""}`}
      >
        {children}
        <footer className="py-8 text-center text-gray-400 dark:text-gray-400 light:text-gray-600">
          <p>© {new Date().getFullYear()} Prince Akpolo. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
