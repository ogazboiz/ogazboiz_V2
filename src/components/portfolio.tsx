"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Testimonials } from "./testimonials"
import { ExperienceTimeline } from "./experience-timeline"
import { AboutMe } from "./about-me"
import { LoadingScreen } from "./loading-screen"
import { IntroScreen } from "./intro-screen"
import { Navigation } from "./navigation"

export function Portfolio() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [viewState, setViewState] = useState<"loading" | "intro" | "portfolio">("loading")

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (viewState === "loading") {
    return <LoadingScreen onLoadingComplete={() => setViewState("intro")} />
  }

  if (viewState === "intro") {
    return <IntroScreen onEnterPortfolio={() => setViewState("portfolio")} />
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "light" ? "bg-gray-50" : "bg-black"}`}>
      {/* Animated background gradient */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0061E0] to-[#6A0DAD] animate-gradient"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12 xl:px-24 py-6">
        <div className="absolute top-6 right-6 md:right-12 z-10">
          <ThemeToggle />
        </div>
        <Header />
        <main>
          <section id="home">
            <HeroSection />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="projects">
            <ProjectsSection />
          </section>
          <section id="experience">
            <ExperienceTimeline />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
        </main>
        <footer className="py-8 text-center text-gray-400 dark:text-gray-400 light:text-gray-600">
          <p>© {new Date().getFullYear()} Prince Akpolo. All rights reserved.</p>
        </footer>
      </div>

      {/* Floating navigation */}
      <Navigation />
    </div>
  )
}
