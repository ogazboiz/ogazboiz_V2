"use client"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(progress + 1)
      } else {
        onLoadingComplete()
      }
    }, 20) // Adjust speed as needed

    return () => clearTimeout(timer)
  }, [progress, onLoadingComplete])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0061E0] to-[#6A0DAD] animate-gradient"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo animation */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 rounded-full border-4 border-[#0061E0] flex items-center justify-center animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-spin-slow"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0061E0" />
                  <stop offset="100%" stopColor="#6A0DAD" />
                </linearGradient>
              </defs>
              <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#6A0DAD] animate-bounce-slow delay-300"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-[#0061E0] animate-bounce-slow"></div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-8">Prince Akpolo</h1>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-gradient-to-r from-[#0061E0] to-[#6A0DAD] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-400 text-sm">Loading Experience {progress}%</p>
      </div>
    </div>
  )
}
