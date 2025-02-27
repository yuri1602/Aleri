import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 sm:h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 -my-4 sm:-my-8">
          <Image
             src="/placeholder-logo1.png" 
             alt="Aleri Group Logo" 
             width={2000} 
             height={500} 
             priority
             className="h-20 sm:h-28 md:h-36 w-auto"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#services" className="text-base sm:text-lg font-medium hover:text-primary">
            Services
          </Link>
          <Link href="#about" className="text-base sm:text-lg font-medium hover:text-primary">
            About
          </Link>
          <Link href="#contact" className="text-base sm:text-lg font-medium hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

