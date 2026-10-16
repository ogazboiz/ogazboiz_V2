import { ThemeProvider } from "@/components/theme-provider"
import { ProjectsPage } from "@/components/projects-page"

export default function Projects() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark" storageKey="portfolio-theme-v2">
      <ProjectsPage />
    </ThemeProvider>
  )
}
