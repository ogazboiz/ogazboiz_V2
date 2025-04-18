import { ThemeProvider } from "@/components/theme-provider"
import { AboutPage } from "@/components/about-page"

export default function About() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <AboutPage />
    </ThemeProvider>
  )
}
