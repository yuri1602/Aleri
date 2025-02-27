import { SiteHeader } from "@/components/site-header"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Server, Settings } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container flex flex-col items-center gap-4 pt-24 pb-8 md:pt-32 md:pb-12">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Building Digital Solutions
          <br />
          for Modern Business
        </h1>
        <p className="max-w-[600px] text-center text-muted-foreground md:text-xl">
          Professional IT services, software development, and innovative solutions for your business needs.
        </p>
        <Button size="lg" asChild>
          <a href="#contact">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>

      {/* Services Section */}
      <section id="services" className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Our Services</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Comprehensive IT solutions tailored to your business requirements
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-16">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Code className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">Software Development</h3>
                <p className="text-sm text-muted-foreground">Custom software solutions and applications development.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Server className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">IT Infrastructure</h3>
                <p className="text-sm text-muted-foreground">Modern infrastructure solutions and cloud services.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Settings className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">Technical Support</h3>
                <p className="text-sm text-muted-foreground">24/7 technical support and maintenance services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Contact Us</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Get in touch with us to discuss your project
          </p>
        </div>
        <div className="mx-auto max-w-[58rem] mt-16">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center justify-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <p className="text-center text-sm leading-loose md:text-center">
                   © 2024 Aleri Group. All rights reserved.
              </p>
           </div>
        </div>
      </footer>

    </div>
  )
}

