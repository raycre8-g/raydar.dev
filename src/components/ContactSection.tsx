import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Github, Linkedin, Mail, Send, X } from 'lucide-react'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsOpen(false)
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Show success message (you can add toast notification here)
      alert('Thank you for your message! I\'ll get back to you soon.')
    }, 2000)
  }

  const handleSocialClick = (platform: string) => {
    const urls = {
      github: 'https://github.com/raycre8-g',
      linkedin: 'https://www.linkedin.com/in/aderemiazeez?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      email: 'mailto:aderemi@raydar.dev'
    }
    window.open(urls[platform as keyof typeof urls], '_blank')
  }

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-5/12 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold font-outfit">Contact</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-foreground font-outfit leading-tight">
                Let's build something great.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Open for new opportunities, collaborations, or just a chat about system architecture and product engineering.
            </p>
            
            <div className="space-y-6 pt-8">
              {[
                { label: 'Email', value: 'aderemi@raydar.dev', icon: <Mail className="w-4 h-4" />, action: () => handleSocialClick('email') },
                { label: 'LinkedIn', value: 'Aderemi Azeez', icon: <Linkedin className="w-4 h-4" />, action: () => handleSocialClick('linkedin') },
                { label: 'GitHub', value: '@raycre8-g', icon: <Github className="w-4 h-4" />, action: () => handleSocialClick('github') }
              ].map((item, i) => (
                <button 
                  key={i} 
                  onClick={item.action}
                  className="flex items-center gap-6 group w-full text-left"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{item.label}</span>
                    <span className="text-sm font-medium text-foreground">{item.value}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full md:w-7/12">
            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-sm shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/[0.03] border-white/5 rounded-2xl p-6 h-auto placeholder:text-white/20 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/[0.03] border-white/5 rounded-2xl p-6 h-auto placeholder:text-white/20 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-white/[0.03] border-white/5 rounded-2xl p-6 h-auto placeholder:text-white/20 focus:bg-white/[0.05] transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your vision..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/[0.03] border-white/5 rounded-2xl p-6 h-auto placeholder:text-white/20 focus:bg-white/[0.05] transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-white/90 rounded-full py-8 text-sm font-bold shadow-xl shadow-white/5 transition-all active:scale-[0.98]"
                >
                  {isSubmitting ? 'Sending Request...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection