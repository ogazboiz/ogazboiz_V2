import { ThemeProvider } from "@/components/theme-provider"
import { HomePage } from "@/components/home-page"

export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <HomePage />
    </ThemeProvider>
  )
}
