import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
             src="/placeholder-logo1.png" 
             alt="Aleri Group Logo" 
             width={500} 
             height={125} 
             priority
             className="h-20 w-auto"
          />
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link href="#services" className="text-base font-medium hover:text-primary">
            Services
          </Link>
          <Link href="#about" className="text-base font-medium hover:text-primary">
            About
          </Link>
          <Link href="#contact" className="text-base font-medium hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

