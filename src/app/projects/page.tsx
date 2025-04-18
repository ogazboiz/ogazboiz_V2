import { ThemeProvider } from "@/components/theme-provider"
import { ProjectsPage } from "@/components/projects-page"

export default function Projects() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <ProjectsPage />
    </ThemeProvider>
  )
}
