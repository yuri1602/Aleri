'use client'

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function SiteHeader() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 sm:h-20 items-center justify-between">
        <Link href="/" className="flex items-center -my-4 sm:-my-8 font-bold text-xl">
          <Image
             src="/Logo.png" 
             alt="Aleri Group Logo" 
             width={500} 
             height={500} 
             priority
             className="h-24 sm:h-28 w-auto"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="#services" className="text-sm sm:text-base font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="#about" className="text-sm sm:text-base font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#contact" className="text-sm sm:text-base font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="ml-2 p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}

