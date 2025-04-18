"use client"
import { useTheme } from "next-themes"
import { Briefcase, GraduationCap } from "lucide-react"

export function ExperienceTimeline() {
  const { theme } = useTheme()

  const experiences = [
    {
      id: 1,
      title: "Blockchain Development Bootcamp",
      company: "Web3Bridge",
      period: "Jan 2025 - Present",
      description: "Learning blockchain fundamentals including Ethereum, Solidity, smart contracts, and integrating blockchain with frontend applications.",
      type: "education",
    },
    {
      id: 2,
      title: "IT Support Specialist Intern",
      company: "KPMG Nigeria",
      period: "Mar 2024 - Nov 2024",
      description: "Maintained IT documentation, reduced downtime through troubleshooting, supported remote employees, and enhanced overall IT support delivery.",
      type: "work",
    },
    {
      id: 3,
      title: "Lead Frontend Engineer",
      company: "Belsoft Systems",
      period: "Jan 2024 - Aug 2024",
      description: "Improved dashboard performance by 20%, integrated RESTful APIs, and transformed Figma designs into high-performing landing pages using React and Tailwind CSS.",
      type: "work",
    },
    {
      id: 4,
      title: "Frontend Developer Intern",
      company: "Scrimba",
      period: "Sep 2023 - Mar 2024",
      description: "Built hands-on frontend projects using HTML, CSS, JavaScript, and React to create responsive and dynamic web applications.",
      type: "work",
    },
    {
      id: 5,
      title: "Network Support Intern",
      company: "UNOTELOS",
      period: "Jun 2022 - Nov 2022",
      description: "Initiated energy-efficient networking strategies and evaluated new technologies to improve network infrastructure.",
      type: "work",
    },
    {
      id: 6,
      title: "Computer Science Degree",
      company: "Edo State University Uzairue",
      period: "2016 - 2020",
      description: "Graduated with a degree in Computer Science, focusing on software development and web technologies.",
      type: "education",
    },
  ]

  return (
    <section className="py-12">
      <h2 className={`text-3xl font-bold mb-8 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
        Experience & Education
      </h2>

      <div className={`rounded-3xl p-6 ${theme === "light" ? "bg-white shadow-lg" : "bg-[#111111]"}`}>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`p-4 rounded-xl border-l-4 ${exp.type === "work" ? "border-[#0061E0]" : "border-[#6A0DAD]"} ${
                theme === "light" ? "bg-gray-50" : "bg-[#1A1A1A]"
              } hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-full ${
                    exp.type === "work"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                  }`}
                >
                  {exp.type === "work" ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className={`text-lg font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                      {exp.title}
                    </h3>
                    <span className={`text-sm font-medium ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                      • {exp.company}
                    </span>
                    <span className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-500"}`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className={`${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
