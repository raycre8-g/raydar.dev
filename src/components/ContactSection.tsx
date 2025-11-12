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
import { Card, CardContent } from '@/components/ui/card'
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
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and interesting projects. 
            Feel free to reach out if you'd like to connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground text-sm">john.doe@example.com</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSocialClick('email')}
                  className="border-border text-foreground hover:bg-muted"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Github className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">GitHub</h3>
                <p className="text-muted-foreground text-sm">@johndoe</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSocialClick('github')}
                  className="border-border text-foreground hover:bg-muted"
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">LinkedIn</h3>
                <p className="text-muted-foreground text-sm">John Doe</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSocialClick('linkedin')}
                  className="border-border text-foreground hover:bg-muted"
                >
                  Connect
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Dialog */}
          <div className="text-center">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-primary-foreground px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-[500px] bg-background/95 backdrop-blur-sm border-border/50">
                <form onSubmit={handleSubmit}>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-foreground">
                      Send Me a Message
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-indigo-600 focus:ring-indigo-600/20"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-indigo-600 focus:ring-indigo-600/20"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="subject" className="text-foreground">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-indigo-600 focus:ring-indigo-600/20"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="message" className="text-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or question..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="bg-background/50 border-border/50 focus:border-indigo-600 focus:ring-indigo-600/20 resize-none"
                      />
                    </div>
                  </div>
                  
                  <DialogFooter className="gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsOpen(false)}
                      className="border-border/50 hover:bg-background/80"
                      disabled={isSubmitting}
                    >
                      <X className="mr-2 h-4 w-4" />
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-primary-foreground"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection