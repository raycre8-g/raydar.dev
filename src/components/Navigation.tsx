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
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      {/* Pill container - More premium glassmorphism */}
      <div className="pointer-events-auto flex items-center gap-6 px-6 py-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-white/20">
        {/* Brand */}
        <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
          <span className="text-sm font-black tracking-tighter text-foreground font-outfit uppercase">Raydar<span className="text-muted-foreground">.</span></span>
        </button>

        {/* Separator */}
        <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-[11px] uppercase tracking-widest font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-white text-black shadow-xl shadow-white/5' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full" onClick={() => window.open('https://github.com/raycre8-g', '_blank')}>
            <Github className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full" onClick={() => window.open('https://www.linkedin.com/in/aderemiazeez?utm_source=share_via&utm_content=profile&utm_medium=member_ios', '_blank')}>
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full" onClick={() => window.open('mailto:aderemi@raydar.dev')}>
            <Mail className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <Button variant="ghost" size="icon" className="h-10 w-10 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu - More polished */}
      {isMenuOpen && (
        <>
          {/* Background Overlay */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-md md:hidden z-[-1] pointer-events-auto"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-20 w-full flex justify-center md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="pointer-events-auto w-[95%] max-w-sm bg-black/95 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] p-8">
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'bg-white text-black' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between gap-4 pt-6 mt-6 border-t border-white/5">
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-11 w-11 rounded-2xl bg-white/5" onClick={() => window.open('https://github.com/raycre8-g', '_blank')}>
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-11 w-11 rounded-2xl bg-white/5" onClick={() => window.open('https://www.linkedin.com/in/aderemiazeez?utm_source=share_via&utm_content=profile&utm_medium=member_ios', '_blank')}>
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-11 w-11 rounded-2xl bg-white/5" onClick={() => window.open('mailto:aderemi@raydar.dev')}>
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Menu</span>
            </div>
          </div>
        </div>
      </>
    )}
  </nav>
  )
}

export default Navigation