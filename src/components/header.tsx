"use client"

import Link from "next/link"
import { MapPin, FileText } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const { theme } = useTheme()

  // Function to handle CV download
  // const handleCvDownload = () => {
  //   const link = document.createElement('a');
  //   link.href = '/Akpolo_Prince_CV.pdf';
  //   link.target = '_blank'; // Open in new tab
  //   link.download = 'Akpolo_Prince_CV.pdf'; // Suggest download name
  
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  const handleCvDownload = () => {
    window.open('/Akpolo_Prince_CV.pdf', '_blank');
  };
  
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-6">
      {/* Left column - Profile Card */}
      <div className={`rounded-3xl p-8 ${theme === "light" ? "bg-white shadow-lg" : "bg-[#111111]"}`}>
        <div className="flex flex-col items-start space-y-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#0061E0]/20">
            <img
              src="/profile.jpg?height=128&width=128"
              alt="Prince Akpolo"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className={`flex items-center text-base space-x-3 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}
          >
            <MapPin className="h-6 w-6 text-[#0061E0]" />
            <span> Lagos, Nigeria</span>
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="space-y-1">
              <h1 className={`text-4xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                Akpolo prince
              </h1>
              <p className={`text-xl ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>Frontend Developer</p>
            </div>

            <button
              onClick={handleCvDownload}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl text-white text-lg bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="h-5 w-5" />
              <span>Cv</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right column - Social & Contact Cards */}
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Twitter Card 1 */}
          <div
            className={`rounded-3xl p-6 hover:shadow-lg hover:shadow-[#0061E0]/10 transition-all duration-300 ${theme === "light" ? "bg-white shadow" : "bg-[#111111]"}`}
          >
            <p className={`text-lg mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>My X(twitter)</p>
            <Link
              href="https://x.com/AkpoloOgaga"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform duration-300 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke={theme === "light" ? "#0061E0" : "white"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
          </div>

          {/* Instagram Card 1 */}
          <div
            className={`rounded-3xl p-6 hover:shadow-lg hover:shadow-[#6A0DAD]/10 transition-all duration-300 ${theme === "light" ? "bg-white shadow" : "bg-[#111111]"}`}
          >
            <p className={`text-lg mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>My Instagram</p>
            <Link
              href="https://www.instagram.com/Prince_akpolo/#"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform duration-300 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke={theme === "light" ? "#6A0DAD" : "white"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
          </div>

          {/* Linkedin Card 2 */}
          <div
            className={`rounded-3xl p-6 hover:shadow-lg hover:shadow-[#0061E0]/10 transition-all duration-300 ${theme === "light" ? "bg-white shadow" : "bg-[#111111]"}`}
          >
            <p className={`text-lg mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>My Linkedin</p>
            <Link
              href="https://www.linkedin.com/in/ogagaoghene-akpolo/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform duration-300 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke={theme === "light" ? "#0061E0" : "white"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>

            </Link>
          </div>

          {/* Github Card 2 */}
          <div
            className={`rounded-3xl p-6 hover:shadow-lg hover:shadow-[#6A0DAD]/10 transition-all duration-300 ${theme === "light" ? "bg-white shadow" : "bg-[#111111]"}`}
          >
            <p className={`text-lg mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>My Github</p>
            <Link
              href="https://github.com/ogazboiz"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform duration-300 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke={theme === "light" ? "#6A0DAD" : "white"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 1C5.924 1 1 5.924 1 12c0 4.867 3.163 8.992 7.547 10.435.552.102.753-.24.753-.533 0-.263-.01-1.127-.015-2.043-3.072.668-3.719-1.48-3.719-1.48-.502-1.277-1.227-1.618-1.227-1.618-.997-.682.075-.668.075-.668 1.103.078 1.683 1.134 1.683 1.134.979 1.676 2.566 1.191 3.192.911.099-.709.384-1.191.698-1.465-2.452-.278-5.032-1.226-5.032-5.456 0-1.205.429-2.188 1.134-2.958-.114-.278-.492-1.397.108-2.912 0 0 .927-.297 3.036 1.134A10.63 10.63 0 0 1 12 6.845c.939.004 1.885.127 2.768.372 2.107-1.431 3.032-1.134 3.032-1.134.602 1.515.224 2.634.11 2.912.707.77 1.133 1.753 1.133 2.958 0 4.24-2.584 5.175-5.043 5.447.395.34.748 1.012.748 2.04 0 1.472-.014 2.656-.014 3.017 0 .295.198.64.758.531C19.84 20.988 23 16.865 23 12c0-6.076-4.924-11-11-11z"></path>
              </svg>

            </Link>
          </div>
        </div>

        {/* Contact Card */}
        <div
          className={`rounded-3xl p-6 hover:shadow-lg hover:shadow-[#0061E0]/10 transition-all duration-300 ${theme === "light" ? "bg-white shadow" : "bg-[#111111]"}`}
        >
          <p className={`text-lg mb-2 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>Get in Touch:</p>
          <a
            href="mailto:princeogagaoghene@gmail.com"
            className={`text-xl hover:text-gradient-to-r hover:from-[#0061E0] hover:to-[#6A0DAD] transition-colors duration-300 ${theme === "light" ? "text-gray-900" : "text-white"}`}
          >
            princeogagaoghene@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
