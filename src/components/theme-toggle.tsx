"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${
        theme === "light"
          ? "bg-white shadow-md hover:bg-gradient-to-r hover:from-[#0061E0] hover:to-[#6A0DAD]"
          : "bg-[#1A1A1A] hover:bg-gradient-to-r hover:from-[#0061E0] hover:to-[#6A0DAD]"
      }`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun
        className={`h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ${theme === "light" ? "text-[#0061E0]" : "text-white"}`}
      />
      <Moon
        className={`absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${theme === "light" ? "text-[#0061E0]" : "text-white"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
