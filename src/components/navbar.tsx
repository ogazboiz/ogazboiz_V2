"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Home, User, Briefcase, FolderOpen } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  const pathname = usePathname()
  const { theme } = useTheme()

  // Don't show navbar on homepage
  if (pathname === "/") {
    return null
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-md bg-black/20 dark:bg-black/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#0061E0]/20">
              <img
                src="/profile.jpg?height=40&width=40"
                alt="Prince Akpolo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`font-bold text-lg ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              Prince Akpolo
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <nav
              className={`hidden md:flex items-center gap-1 px-2 py-2 rounded-full ${
                theme === "light" ? "bg-white shadow-lg" : "bg-[#111111] shadow-lg shadow-black/20"
              }`}
            >
              <Link
                href="/"
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive("/")
                    ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] text-white"
                    : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                href="/about"
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive("/about")
                    ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] text-white"
                    : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <User className="w-4 h-4" />
                <span>About</span>
              </Link>
              <Link
                href="/projects"
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive("/projects")
                    ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] text-white"
                    : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <FolderOpen className="w-4 h-4" />
                <span>Projects</span>
              </Link>
              <Link
                href="/experience"
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive("/experience")
                    ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] text-white"
                    : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Experience</span>
              </Link>
            </nav>

            {/* Mobile navigation */}
            <div className="md:hidden flex items-center gap-1 px-2 py-2 rounded-full bg-[#111111] shadow-lg shadow-black/20">
              <Link
                href="/"
                className={`p-2 rounded-full ${isActive("/") ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] text-white" : "text-gray-500"}`}
              >
                <Home className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className={`p-2 rounded-full ${isActive("/about") ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] text-white" : "text-gray-500"}`}
              >
                <User className="w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className={`p-2 rounded-full ${isActive("/projects") ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] text-white" : "text-gray-500"}`}
              >
                <FolderOpen className="w-5 h-5" />
              </Link>
              <Link
                href="/experience"
                className={`p-2 rounded-full ${isActive("/experience") ? "bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] text-white" : "text-gray-500"}`}
              >
                <Briefcase className="w-5 h-5" />
              </Link>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}
