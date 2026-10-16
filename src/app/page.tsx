import { ThemeProvider } from "@/components/theme-provider"
import { HomePage } from "@/components/home-page"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark" storageKey="portfolio-theme-v2">
      <HomePage />
    </ThemeProvider>
  )
}
