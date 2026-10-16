// ProjectsSection.tsx
"use client"
import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { useTheme } from "next-themes"

export function ProjectsSection() {
  const { theme } = useTheme()
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = ["All", "Frontend", "NextJS", "Web3", "DeFi & Payments", "AI"]

  const projects = [
    {
      id: 1,
      title: "Square",
      description:
        "A standalone social discovery platform for meeting new people, with live audio rooms, communities, feeds and a wink-based discovery loop. Live at square.tsionark.com.",
      image: "/projects/square.png",
      category: ["Frontend", "NextJS"],
      overview: [
        "Square is ARK's social discovery app where people meet through winks, a one-at-a-time discovery deck (Pals), live audio rooms (Gistrooms) and communities (Houses).",
        "It runs both on its own at square.tsionark.com and embedded inside the main ARK app, and installs as a PWA with push notifications on iOS and Android.",
      ],
      myContributions: [
        "Led frontend development as the primary engineer on the app.",
        "Built the wink flow, the Pals discovery deck, Gistrooms live audio rooms, Houses communities and the public feed (posts, replies, reposts, stories).",
        "Added real-time updates for messages, notifications and live badges, plus PWA push notifications.",
        "Built creator monetization (tips, gifts, tickets and a store) on the KASH rail, with the blockchain fully hidden from users.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "LiveKit", "WebSockets"],
      features: [
        "Wink-based discovery and the Pals deck",
        "Live audio rooms (Gistrooms)",
        "Communities (Houses)",
        "Activity feed with stories",
        "Real-time chat and notifications",
        "Creator tips, gifts, tickets and store",
        "Installable PWA with push notifications",
      ],
      liveDemoLink: "https://square.tsionark.com",
      githubLink: "#",
    },
    {
      id: 2,
      title: "WorldStreet",
      description:
        "ARK's trading and finance app with buy and sell flows, portfolio balances and gasless multi-chain transactions that hide the blockchain from users.",
      image: "/projects/worldstreet.png",
      category: ["Frontend", "NextJS", "Web3", "DeFi & Payments"],
      overview: [
        "WorldStreet is ARK's trading and finance application for spot trading, token discovery and portfolio management.",
        "It abstracts blockchain complexity with gasless, sponsored transactions across many EVM chains.",
      ],
      myContributions: [
        "Built and maintained the buy and sell trading flows, token listings and portfolio balances.",
        "Implemented gasless multi-chain transactions (account abstraction / sponsored gas) so users never pay a fee.",
        "Improved performance with code-splitting and reduced API overhead, and shipped referral features.",
        "Integrated the Square social surface into the WorldStreet dashboard.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "viem", "TanStack Query", "Account Abstraction"],
      features: [
        "Spot trading (buy and sell)",
        "Multi-chain portfolio balances",
        "Gasless sponsored transactions",
        "Token discovery",
        "Invite-a-friend referrals",
      ],
      liveDemoLink: "https://www.tsionark.com",
      githubLink: "#",
    },
    {
      id: 3,
      title: "RentBuyStay",
      description:
        "A Nigerian real-estate marketplace for renting, buying and short-stays, delivered as a public site, a multi-role dashboard and an admin panel.",
      image: "/projects/rentbuystay.png",
      category: ["Frontend", "NextJS"],
      overview: [
        "RentBuyStay connects property seekers with owners, agents and agencies for long-term rentals, sales and short-stays.",
        "Delivered as three apps: a public marketing site, a multi-role dashboard, and an admin panel.",
      ],
      myContributions: [
        "Lead frontend engineer across the public site, the multi-role dashboard and the admin panel.",
        "Built real-time chat with call and WhatsApp shortcuts, and property listings with photo and video uploads.",
        "Integrated identity verification (Dojah, QoreID), Paystack subscriptions and Leaflet map-based search.",
        "Built the admin panel: moderation, verification queues, a blog CMS, staff roles and analytics (backend built by another team).",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Redux Toolkit", "RTK Query", "Leaflet", "Paystack"],
      features: [
        "Property search with maps",
        "Multi-role dashboards",
        "Real-time chat",
        "KYC identity verification",
        "Subscription payments",
        "Admin moderation and analytics",
      ],
      liveDemoLink: "https://www.rentbuystay.com",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Earth",
      description:
        "A marketplace connecting agricultural producers, food suppliers and buyers, with a public marketing site and a full seller application.",
      image: "/projects/earth.jpg",
      category: ["Frontend", "NextJS"],
      overview: [
        "Earth is a marketplace for farm and food goods, launching city-by-city in Nigeria.",
        "Includes a public marketing site and a seller application connected to the Earth backend.",
      ],
      myContributions: [
        "Built the marketing site, including the waitlist with email verification, referral links, location search and a pitch-deck page.",
        "Connected the seller app to Earth's backend: sign-up, onboarding, product listings and the public catalogue.",
        "Built the seller dashboard with orders, payouts, referrals, messaging and account settings.",
      ],
      technologies: ["React", "TypeScript", "TanStack Start", "Redux Toolkit", "RTK Query", "Vite", "Tailwind CSS"],
      features: [
        "Waitlist with email verification",
        "Seller onboarding",
        "Product listings and catalogue",
        "Orders, payouts and referrals",
        "Seller messaging",
      ],
      liveDemoLink: "https://earth-gamma-ecru.vercel.app",
      githubLink: "#",
    },
    {
      id: 5,
      title: "ArkRide",
      description:
        "Pre-launch waitlist and landing page for ARK's upcoming Lagos ride-hailing service, with an animated brand splash and live sign-ups.",
      image: "/projects/arkride.png",
      category: ["Frontend", "NextJS"],
      overview: [
        "ArkRide is ARK's upcoming ride-hailing service for Lagos, currently in pre-launch.",
        "The public site collects early sign-ups ahead of launch.",
      ],
      myContributions: [
        "Built the pre-launch waitlist and landing page: the splash/logo animation, a dialog sign-up with name and phone, and posting to the backend waitlist.",
        "Ported the ArkRide brand and design language and built a typed API client with httpOnly-cookie sessions.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      features: ["Pre-launch waitlist sign-up", "Animated brand splash", "Marketing landing page"],
      liveDemoLink: "https://arkrideweb-five.vercel.app",
      githubLink: "https://github.com/ogazboiz/arkrideweb",
    },
    {
      id: 6,
      title: "GameArena (Gamerstew)",
      description:
        "A wager-based skill gaming platform on Celo where players stake GoodDollar (G$) on skill games, compete in tournaments and help fund Universal Basic Income.",
      image: "/projects/gamearena.png",
      category: ["Frontend", "NextJS", "Web3", "DeFi & Payments"],
      overview: [
        "GameArena is a production Celo platform where players wager GoodDollar (G$) on skill games and compete weekly.",
        "A share of activity helps fund Universal Basic Income.",
      ],
      myContributions: [
        "Merged over 100 pull requests across the platform.",
        "Built Privy wallet authentication gating, Team Wars and Solo Ladder modes, and MiniPay readiness.",
        "Implemented session-ticket anti-cheat, referral onboarding and SSE-driven leaderboards.",
      ],
      technologies: ["Next.js", "Solidity", "TypeScript", "Privy", "wagmi", "MiniPay", "GoodDollar"],
      features: [
        "Wager-based skill games",
        "Weekly tournaments",
        "Anti-cheat session tickets",
        "Real-time leaderboards",
        "MiniPay integration",
      ],
      liveDemoLink: "https://gamearenahq.xyz",
      githubLink: "https://github.com/HACK3R-CRYPTO/Gamerstew",
    },
    {
      id: 7,
      title: "Pantheon Arena",
      description:
        "An autonomous multi-agent system on Somnia composing all three Somnia base agents inside a single same-block reactive callback (Agentathon 2026).",
      image: "/projects/pantheon.png",
      category: ["Web3", "AI"],
      overview: [
        "A fully autonomous multi-agent system combining Reactive Contracts, an LLM Inference Agent (Qwen3-30B) and a JSON API Agent in one reactive callback.",
        "Over 300 matches resolved live on the Shannon testnet at submission.",
      ],
      myContributions: [
        "Solo-built the entire system.",
        "Wrote 6 Solidity contracts with 86 passing Foundry tests (Arena, GodRegistry, GodMind, WorldState, NarratorAgent, PantheonToken).",
        "Implemented an on-chain Markov inference engine that predicts an opponent's next move with auditable reasoning, with no off-chain ML.",
        "Shipped a tri-source hybrid LLM narrator (Somnia validator consensus, Groq Llama-3.3 fallback, local pool).",
      ],
      technologies: ["Solidity", "Foundry", "Somnia", "Next.js", "LLM Agents"],
      features: [
        "Autonomous multi-agent gameplay",
        "On-chain inference engine",
        "Hybrid LLM narrator",
        "Same-block reactive callback",
      ],
      liveDemoLink: "https://pantheon-arena-eight.vercel.app",
      githubLink: "https://github.com/HACK3R-CRYPTO/pantheon-arena",
    },
    {
      id: 8,
      title: "StreamBeat",
      description:
        "A real-time competitive rhythm game on Somnia Data Streams with live leaderboards, NFT-gated access and anti-cheat scoring. Somnia Hackathon winner.",
      image: "/projects/streambeat.png",
      category: ["Web3", "Frontend"],
      overview: [
        "Players buy BEAT tokens, mint a Gem NFT to unlock games, score in rhythm and memory rounds, and compete on live leaderboards via Somnia Data Streams.",
      ],
      myContributions: [
        "Built the full game and real-time leaderboards on Somnia Data Streams.",
        "Implemented an anti-cheat backend that validates every score against game time and combo math before on-chain submission.",
        "Designed automated prize-pool distribution across placements.",
      ],
      technologies: ["Next.js", "Solidity", "Somnia Data Streams", "wagmi"],
      features: ["Rhythm and memory rounds", "NFT-gated access", "Live leaderboards", "Anti-cheat scoring"],
      liveDemoLink: "https://stream-beats.vercel.app",
      githubLink: "https://github.com/HACK3R-CRYPTO/StreamBeat",
    },
    {
      id: 9,
      title: "Mindchain AI",
      description:
        "An on-chain gated AI experience on Arbitrum Stylus, where users buy AI credits on chain, submit to a community knowledge registry, run MNIST inference and chat with a hybrid LLM. Arbitrum Stylus Hackathon winner.",
      image: "/projects/mindchain.png",
      category: ["Web3", "AI"],
      overview: [
        "Users buy AI usage credits on chain, submit knowledge to a community registry, run real-time MNIST inference, and access a hybrid LLM chat backed by Gemini.",
      ],
      myContributions: [
        "Wrote two Rust + Stylus contracts: ApiAuthorization (credit purchase and spend tracking) and KnowledgeShare (crowd-sourced submission and voting).",
        "Integrated a Flask MNIST classifier and a Node + Gemini chat service that validates user credits via Stylus contracts before responding.",
        "Added Privy for embedded-wallet onboarding.",
      ],
      technologies: ["React", "Vite", "Rust", "Arbitrum Stylus", "ethers v6", "Flask", "TensorFlow", "Gemini", "Privy"],
      features: ["On-chain AI credit metering", "Community knowledge registry", "Real-time MNIST inference", "Hybrid LLM chat"],
      liveDemoLink: "https://mindchainai.vercel.app",
      githubLink: "https://github.com/HACK3R-CRYPTO/mindset-ai",
    },
    {
      id: 15,
      title: "Talim",
      description:
        "A Learning Management and School Management System that simplifies online education and school operations for learners, teachers, parents and institutions.",
      image: "/Talim.svg?height=300&width=400",
      category: ["Frontend", "NextJS"],
      overview: [
        "Talim is a comprehensive LMS and school management platform that streamlines course creation, user management, school operations, and progress tracking.",
        "It provides a seamless, responsive experience across roles like students, teachers, parents and admins.",
      ],
      myContributions: [
        "Integrated Node.js API endpoints into the frontend for real-time data interaction.",
        "Designed and implemented the login system with authentication workflows.",
        "Built the student dashboard interfaces using Next.js and TypeScript.",
        "Collaborated with the backend team on timetable, assignment tracking and chat.",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      features: [
        "Course creation and management",
        "Role-based dashboards",
        "Timetable and assignment tracking",
        "Chat between students and teachers",
        "Progress tracking and analytics",
      ],
      liveDemoLink: "https://talim-student-mwab.vercel.app/",
      githubLink: "#",
    },
    {
      id: 16,
      title: "DeFi Direct",
      description:
        "A non-custodial payment protocol enabling direct spending of USDT/USDC stablecoins in fiat transactions without pre-conversion, across multiple EVM chains.",
      image: "/defi-direct-logo.png?height=300&width=400",
      category: ["Frontend", "NextJS", "Web3", "DeFi & Payments"],
      overview: [
        "DeFi Direct is a non-custodial payment solution bridging crypto and fiat economies.",
        "Users spend USDT/USDC from self-custody wallets; merchants receive local currency instantly, with real-time oracle pricing across EVM chains.",
      ],
      myContributions: [
        "Integrated wallet connectivity (MetaMask, Coinbase Wallet) using Wagmi and Next.js.",
        "Developed the dashboard for stablecoin balances and transaction actions.",
        "Built the landing page and real-time balance display with USD and Naira conversion.",
      ],
      technologies: ["Solidity", "Chainlink Oracles", "Next.js", "Wagmi", "MetaMask/Coinbase Wallet"],
      features: [
        "Direct USDT/USDC-to-fiat spending",
        "Non-custodial wallet integration",
        "Sub-1% transaction fees",
        "Time-locked settlements",
        "Merchant API for fiat payouts",
      ],
      liveDemoLink: "https://defi-direct-dapp.vercel.app",
      githubLink: "#",
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category.includes(activeFilter))

  return (
    <section id="projects" className="py-12">
      <div className="mb-8">
        <h2 className={`text-3xl font-bold mb-6 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
          Featured Projects
        </h2>

        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm ${
                activeFilter === category
                  ? "bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white"
                  : theme === "light"
                    ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    : "bg-[#1C1826] text-white hover:bg-[#26262E]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            overview={project.overview}
            myContributions={project.myContributions}
            technologies={project.technologies}
            features={project.features}
            liveDemoLink={project.liveDemoLink}
            githubLink={project.githubLink}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  )
}
