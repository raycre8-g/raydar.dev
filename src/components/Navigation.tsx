import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavigationProps {
  activeSection: string
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      {/* Pill container */}
      <div className="pointer-events-auto flex items-center gap-4 px-4 py-3 rounded-full border border-border/50 bg-background/70 backdrop-blur shadow-lg">
        {/* Brand */}
        <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Website Logo"
            className="w-10 h-10 object-contain rounded-full"
          />
          <span className="text-sm font-semibold text-foreground">Raydar</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm px-3 py-1 rounded-full transition-colors ${
                activeSection === item.id ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" onClick={() => window.open('https://github.com', '_blank')}>
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" onClick={() => window.open('https://linkedin.com', '_blank')}>
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" onClick={() => window.open('mailto:aderemi@raydar.dev')}>
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 w-full flex justify-center md:hidden">
          <div className="pointer-events-auto w-[90%] max-w-md bg-background/90 backdrop-blur border border-border/50 rounded-2xl shadow-lg p-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg ${
                    activeSection === item.id ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-3">
              <Button variant="ghost" size="icon" onClick={() => window.open('https://github.com', '_blank')}>
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => window.open('https://linkedin.com', '_blank')}>
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => window.open('mailto:aderemi@raydar.dev')}>
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation