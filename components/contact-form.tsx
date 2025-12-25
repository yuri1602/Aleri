"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.")
        event.currentTarget.reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <div className="grid gap-12 md:grid-cols-2 animate-fadeInUp">
      {/* Form */}
      <form onSubmit={onSubmit} className="space-y-6 bg-gradient-to-br from-muted/30 to-muted/50 p-8 rounded-xl border">
        <h3 className="text-xl font-semibold">Send us a Message</h3>
        
        <div className="space-y-2">
          <Label htmlFor="name" className="text-base font-semibold">Name</Label>
          <Input 
            id="name"
            name="name" 
            placeholder="Your full name" 
            required 
            disabled={isLoading}
            className="h-10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base font-semibold">Email</Label>
          <Input 
            id="email"
            name="email" 
            type="email" 
            placeholder="your@email.com" 
            required 
            disabled={isLoading}
            className="h-10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-base font-semibold">Subject</Label>
          <Input 
            id="subject"
            name="subject" 
            placeholder="What is this about?" 
            required 
            disabled={isLoading}
            className="h-10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-base font-semibold">Message</Label>
          <Textarea 
            id="message"
            name="message" 
            placeholder="Tell us about your project and needs..." 
            required 
            disabled={isLoading} 
            className="min-h-[180px] resize-none"
          />
        </div>
        <Button type="submit" size="lg" disabled={isLoading} className="w-full">
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </form>

      {/* Contact Info */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <p className="text-muted-foreground mb-8">
            Have questions or ready to start your project? We'd love to hear from you. Fill out the form and we'll respond as soon as possible.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors">
            <div className="rounded-lg bg-blue-100 dark:bg-blue-950 p-3 h-fit">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-muted-foreground">contact@alerigroup.com</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 rounded-lg bg-purple-50/50 dark:bg-purple-950/20 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-colors">
            <div className="rounded-lg bg-purple-100 dark:bg-purple-950 p-3 h-fit">
              <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 rounded-lg bg-cyan-50/50 dark:bg-cyan-950/20 hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition-colors">
            <div className="rounded-lg bg-cyan-100 dark:bg-cyan-950 p-3 h-fit">
              <MapPin className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Location</h4>
              <p className="text-muted-foreground">Sofia, Bulgaria</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-6 border border-blue-200 dark:border-blue-900">
          <p className="text-sm text-muted-foreground">
            <strong>Response time:</strong> We typically respond within 24 hours during business days.
          </p>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 border border-green-200 dark:border-green-900">
          <p className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">✨ Available Now</p>
          <p className="text-sm text-muted-foreground">
            Ready to discuss your project. Let's create something amazing together!
          </p>
        </div>
      </div>
    </div>
  )
}

