"use client"
import { useTheme } from "next-themes"
import { Code, Heart, Gamepad2, Headphones, BookOpen } from "lucide-react"

export function AboutMe() {
  const { theme } = useTheme()

  const hobbies = [
    { icon: <Gamepad2 className="w-5 h-5" />, name: "Basketball" },
    { icon: <Headphones className="w-5 h-5" />, name: "Music" },
    { icon: <BookOpen className="w-5 h-5" />, name: "Scrabble" },
  ]

  const webSkills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "JavaScript", level: 88 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Redux / RTK Query", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "PostgreSQL", level: 70 },
  ]

  const web3Skills = [
    { name: "Solidity", level: 85 },
    { name: "Rust (Stylus / Soroban / ink!)", level: 75 },
    { name: "Foundry", level: 80 },
    { name: "Hardhat", level: 75 },
    { name: "wagmi / viem", level: 85 },
    { name: "ethers.js", level: 75 },
    { name: "Privy / MiniPay", level: 80 },
  ]

  return (
    <section id="about" className="py-12">
      <h2 className={`text-3xl font-bold mb-8 ${theme === "light" ? "text-gray-900" : "text-white"}`}>About Me</h2>

      <div className={`rounded-3xl p-6 md:p-8 ${theme === "light" ? "bg-white shadow-lg" : "bg-[#15121C]"}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Info */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${theme === "light" ? "text-gray-900" : "text-white"}`}>Who I Am</h3>
            <p className={`mb-4 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
              Hi, I&apos;m Prince Akpolo, also known as Ogazboiz. I&apos;m a full-stack and smart contract developer, which really
              just means I like building the whole thing: the Solidity or Rust contracts underneath and the Next.js frontend on
              top. I care about actually shipping, so I take features all the way to production on Vercel and Railway.
            </p>
            <p className={`mb-4 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
              I studied Computer Science at Edo State University Uzairue, and I got into coding in my first year because I loved
              video games. Since then I&apos;ve worked on social, fintech, real estate and gaming products, including Square (a
              social app for meeting people), WorldStreet (a trading app) and GameArena. Along the way I&apos;ve won three
              hackathons on Celo, Somnia and Arbitrum Stylus, and I maintain an open-source smart contract library called Compose.
            </p>
            <p className={`mb-4 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
              Mostly I just like building things that work well and feel good to use, and getting a little better at it with
              every project.
            </p>

            <h3
              className={`text-xl font-bold mt-6 mb-4 flex items-center gap-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}
            >
              <Heart className="w-5 h-5 text-red-500" /> Things I Love
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.name}
                  className={`p-3 rounded-xl flex items-center gap-2 transition-all duration-300 hover:transform hover:scale-105 ${
                    theme === "light" ? "bg-gray-100 hover:bg-gray-200" : "bg-gray-900/50 hover:bg-gray-800/50"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      theme === "light" ? "bg-white" : "bg-gray-800"
                    }`}
                  >
                    {hobby.icon}
                  </div>
                  <span className={theme === "light" ? "text-gray-800" : "text-gray-200"}>{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              My Skills
            </h3>

            <div className="mb-6">
              <h4 className={`text-lg font-medium mb-3 ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>
                Web Development
              </h4>
              <div className="flex flex-wrap gap-2">
                {webSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      theme === "light" ? "bg-gray-200 text-gray-900" : "bg-[#1C1826] text-white"
                    } hover:transform hover:scale-105`}
                  >
                    <Code className={`h-4 w-4 ${theme === "light" ? "text-gray-600" : "text-gray-400"}`} />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className={`text-lg font-medium mb-3 ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>
                Web3 Development
              </h4>
              <div className="flex flex-wrap gap-2">
                {web3Skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      theme === "light" ? "bg-blue-100 text-blue-800" : "bg-blue-900/30 text-blue-300"
                    } hover:transform hover:scale-105`}
                  >
                    <Code className={`h-4 w-4 ${theme === "light" ? "text-blue-600" : "text-blue-400"}`} />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}