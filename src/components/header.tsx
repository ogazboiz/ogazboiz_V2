"use client"

import Link from "next/link"
import { MapPin, FileText, Mail } from "lucide-react"

const socials = [
  {
    label: "X (Twitter)",
    handle: "@AkpoloOgaga",
    href: "https://x.com/AkpoloOgaga",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    handle: "@Prince_akpolo",
    href: "https://www.instagram.com/Prince_akpolo/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "ogagaoghene-akpolo",
    href: "https://www.linkedin.com/in/ogagaoghene-akpolo/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    handle: "ogazboiz",
    href: "https://github.com/ogazboiz",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1C5.924 1 1 5.924 1 12c0 4.867 3.163 8.992 7.547 10.435.552.102.753-.24.753-.533 0-.263-.01-1.127-.015-2.043-3.072.668-3.719-1.48-3.719-1.48-.502-1.277-1.227-1.618-1.227-1.618-.997-.682.075-.668.075-.668 1.103.078 1.683 1.134 1.683 1.134.979 1.676 2.566 1.191 3.192.911.099-.709.384-1.191.698-1.465-2.452-.278-5.032-1.226-5.032-5.456 0-1.205.429-2.188 1.134-2.958-.114-.278-.492-1.397.108-2.912 0 0 .927-.297 3.036 1.134A10.63 10.63 0 0 1 12 6.845c.939.004 1.885.127 2.768.372 2.107-1.431 3.032-1.134 3.032-1.134.602 1.515.224 2.634.11 2.912.707.77 1.133 1.753 1.133 2.958 0 4.24-2.584 5.175-5.043 5.447.395.34.748 1.012.748 2.04 0 1.472-.014 2.656-.014 3.017 0 .295.198.64.758.531C19.84 20.988 23 16.865 23 12c0-6.076-4.924-11-11-11z" />
      </svg>
    ),
  },
]

export function Header() {
  const handleCvDownload = () => {
    window.open("/Akpolo_Ogagaoghene_Prince_CV.pdf", "_blank")
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-6">
      {/* Left column - Profile Card */}
      <div className="rounded-3xl p-8 bg-[#15121C] border border-white/[0.06]">
        <div className="flex flex-col items-start space-y-6">
          <div className="w-28 h-28 rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img
              src="/profile.jpg?height=128&width=128"
              alt="Prince Akpolo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <MapPin className="h-4 w-4 text-[#8B5CF6]" />
            <span>Lagos, Nigeria</span>
          </div>

          <div className="flex flex-wrap justify-between items-end gap-4 w-full">
            <div className="space-y-1">
              <h1 className="text-4xl font-bold text-white tracking-tight">Akpolo Prince</h1>
              <p className="text-lg text-[#A78BFA]">Full-Stack &amp; Smart Contract Engineer</p>
            </div>

            <button
              onClick={handleCvDownload}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-base font-medium bg-[#8B5CF6] hover:bg-[#7C4DF0] transition-colors duration-200"
            >
              <FileText className="h-4 w-4" />
              <span>CV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right column - Social & Contact Cards */}
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-5 bg-[#15121C] border border-white/[0.06] hover:border-[#8B5CF6]/40 transition-colors duration-200"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#8B5CF6]/12 text-[#A78BFA] group-hover:bg-[#8B5CF6]/20 transition-colors duration-200 mb-4">
                {s.icon}
              </div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-0.5">{s.label}</p>
              <p className="text-sm text-gray-200 truncate">{s.handle}</p>
            </Link>
          ))}
        </div>

        {/* Contact Card */}
        <div className="rounded-2xl p-5 bg-[#15121C] border border-white/[0.06]">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 mb-2">
            <Mail className="h-4 w-4 text-[#8B5CF6]" />
            Get in touch
          </div>
          <a
            href="mailto:princeogagaoghene@gmail.com"
            className="text-lg text-white hover:text-[#A78BFA] transition-colors duration-200 break-all"
          >
            princeogagaoghene@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
