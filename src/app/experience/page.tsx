import { ThemeProvider } from "@/components/theme-provider"
import { ExperiencePage } from "@/components/experience-page"

export default function Experience() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark" storageKey="portfolio-theme-v2">
      <ExperiencePage />
    </ThemeProvider>
  )
}
