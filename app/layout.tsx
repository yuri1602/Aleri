import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aleri Group - Professional IT Solutions & Software Development",
  description: "Transform your business with professional IT services, custom software development, and innovative tech solutions from Aleri Group.",
  keywords: "IT services, software development, cloud solutions, technical support, web development",
  authors: [{ name: "Aleri Group" }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Aleri Group - Professional IT Solutions & Software Development",
    description: "Transform your business with our cutting-edge IT services and innovative solutions.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

