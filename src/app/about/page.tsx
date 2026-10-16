import { ThemeProvider } from "@/components/theme-provider"
import { AboutPage } from "@/components/about-page"

export default function About() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark" storageKey="portfolio-theme-v2">
      <AboutPage />
    </ThemeProvider>
  )
}
