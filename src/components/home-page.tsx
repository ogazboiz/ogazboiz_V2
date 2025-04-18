"use client"
import { useState, useEffect } from "react"
import { PageContainer } from "./page-container"
import { Header } from "./header"
import { HeroSection } from "./hero-section"
import { Testimonials } from "./testimonials"
import { LoadingScreen } from "./loading-screen"
import { IntroScreen } from "./intro-screen"

export function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [viewState, setViewState] = useState<"loading" | "intro" | "portfolio">("loading")

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Check if user has already seen the loading animation
  useEffect(() => {
    if (mounted) {
      const hasSeenLoading = localStorage.getItem("hasSeenLoading")
      if (hasSeenLoading === "true") {
        setViewState("intro") // Changed from "portfolio" to "intro"
      }
    }
  }, [mounted])

  // Save that user has seen loading animation
  const handleEnterPortfolio = () => {
    localStorage.setItem("hasSeenLoading", "true")
    setViewState("portfolio")
  }

  const handleLoadingComplete = () => {
    localStorage.setItem("hasSeenLoading", "true") // Add this line
    setViewState("intro")
  }

  if (!mounted) {
    return null
  }

  if (viewState === "loading") {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  if (viewState === "intro") {
    return <IntroScreen onEnterPortfolio={handleEnterPortfolio} />
  }

  return (
    <PageContainer>
      <Header />
      <main>
        <HeroSection />
        <Testimonials />
      </main>
    </PageContainer>
  )
}