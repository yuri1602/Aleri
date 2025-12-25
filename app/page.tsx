import { SiteHeader } from "@/components/site-header"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Server, Settings, Zap, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
        {/* Background gradient effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent dark:from-blue-950/20 dark:via-transparent"></div>
        
        <div className="container flex flex-col items-center gap-4 hero-content">
          <div className="space-y-4 text-center">
            <div className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-950/30 dark:text-blue-400">
              ✨ Welcome to the future of your business
            </div>
            <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]">
              Building Digital Solutions
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">for Modern Business</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-center text-lg text-muted-foreground md:text-xl">
              Professional IT services, software development, and innovative solutions tailored to transform your business.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row pt-4">
            <Button size="lg" asChild className="gap-2">
              <a href="#contact">
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-12 md:py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10"></div>
        
        <div className="container">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our Services</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Comprehensive IT solutions tailored to your business requirements
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-16">
            <div className="service-card group relative rounded-xl border bg-gradient-to-br from-background to-muted/50 p-6 transition-all hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
              <div className="flex h-full flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-blue-50 p-3 dark:bg-blue-950/30">
                    <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">Software Development</h3>
                    <p className="text-sm text-muted-foreground">Custom software solutions and applications built to scale.</p>
                  </div>
                </div>
                <div className="pt-4">
                  <ArrowRight className="h-4 w-4 text-blue-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-400" />
                </div>
              </div>
            </div>
            <div className="service-card group relative rounded-xl border bg-gradient-to-br from-background to-muted/50 p-6 transition-all hover:shadow-lg hover:border-purple-200 dark:hover:border-purple-800">
              <div className="flex h-full flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-purple-50 p-3 dark:bg-purple-950/30">
                    <Server className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">IT Infrastructure</h3>
                    <p className="text-sm text-muted-foreground">Modern infrastructure solutions and cloud services.</p>
                  </div>
                </div>
                <div className="pt-4">
                  <ArrowRight className="h-4 w-4 text-purple-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-purple-400" />
                </div>
              </div>
            </div>
            <div className="service-card group relative rounded-xl border bg-gradient-to-br from-background to-muted/50 p-6 transition-all hover:shadow-lg hover:border-cyan-200 dark:hover:border-cyan-800">
              <div className="flex h-full flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-cyan-50 p-3 dark:bg-cyan-950/30">
                    <Settings className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">Technical Support</h3>
                    <p className="text-sm text-muted-foreground">24/7 technical support and maintenance services.</p>
                  </div>
                </div>
                <div className="pt-4">
                  <ArrowRight className="h-4 w-4 text-cyan-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-12 md:py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent dark:from-blue-950/20"></div>
        
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
            <div className="space-y-6">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Why Choose Aleri Group?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine cutting-edge technology with exceptional customer service to deliver solutions that drive real business results.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">Experienced professionals with years of industry expertise</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Custom Solutions</h3>
                    <p className="text-sm text-muted-foreground">Tailored to your specific business needs and goals</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">24/7 Support</h3>
                    <p className="text-sm text-muted-foreground">Always here when you need us, around the clock</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center animate-float">
                <Zap className="h-32 w-32 text-blue-400/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-12 md:py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-50/30 via-transparent to-transparent dark:from-purple-950/10"></div>
        
        <div className="container">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Get In Touch</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Ready to transform your business? Let's talk about your project.
            </p>
          </div>
          <div className="mx-auto max-w-[58rem] mt-16">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-auto bg-muted/30">
        <div className="container flex flex-col items-center justify-between gap-8 py-12 md:flex-row md:py-16">
          <div className="flex flex-col items-center justify-center gap-2 md:items-start">
            <p className="text-sm font-semibold">Aleri Group</p>
            <p className="text-xs text-muted-foreground">
              Building Digital Solutions for Modern Business
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <p className="text-center text-xs text-muted-foreground md:text-right">
            © 2024 Aleri Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

