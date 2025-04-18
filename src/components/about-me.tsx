"use client"
import { useTheme } from "next-themes"
import { Code, Heart, Gamepad2, Headphones, BookOpen, Globe } from "lucide-react"

export function AboutMe() {
  const { theme } = useTheme()

  const hobbies = [
    { icon: <Gamepad2 className="w-5 h-5" />, name: "Basketball" },
    { icon: <Headphones className="w-5 h-5" />, name: "Music" },
    { icon: <BookOpen className="w-5 h-5" />, name: "Scrabble" },
  ]

  const webSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Next.js", level: 70 },
    { name: "Tailwind CSS", level: 85 },
  ]

  const web3Skills = [
    { name: "Solidity", level: 60 },
    { name: "Web3.js", level: 65 },
    { name: "Ethers.js", level: 60 },
    { name: "Hardhat", level: 55 },
    { name: "MetaMask Integration", level: 70 },
  ]

  return (
    <section id="about" className="py-12">
      <h2 className={`text-3xl font-bold mb-8 ${theme === "light" ? "text-gray-900" : "text-white"}`}>About Me</h2>

      <div className={`rounded-3xl p-6 md:p-8 ${theme === "light" ? "bg-white shadow-lg" : "bg-[#111111]"}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Info */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${theme === "light" ? "text-gray-900" : "text-white"}`}>Who I Am</h3>
            <p className={`mb-4 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
              Hi, I’m Prince Akpolo, also known as Ogazboiz. I’m a Frontend Developer and Solidity Developer. I create
              seamless web experiences and build smart contracts that drive blockchain innovation. I'm always learning, improving,
              and excited to shape the future of decentralized applications.
            </p>
            <p className={`mb-4 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
              I’m a graduate of Edo State University Uzairue. I started coding during my first year in university, driven by my love
              for video games. Over the years, I have gained substantial knowledge in web design and mobile applications, which
              has led me to specialize in blending clean design with powerful blockchain functionality. From crafting responsive
              websites to integrating smart contracts with Solidity, I bring modern, secure, and engaging experiences to life across
              Web2 and Web3 platforms.
            </p>
            <p className={`mb-4 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
              My goal is to continue improving, expand my skills in both frontend and smart contract development, and shape the
              future of the web.
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
                      theme === "light" ? "bg-gray-200 text-gray-900" : "bg-[#1A1A1A] text-white"
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
