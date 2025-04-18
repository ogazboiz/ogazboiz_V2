import { ThemeProvider } from "@/components/theme-provider"
import { ExperiencePage } from "@/components/experience-page"

export default function Experience() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <ExperiencePage />
    </ThemeProvider>
  )
}
