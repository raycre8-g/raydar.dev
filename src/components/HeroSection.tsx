import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ArrowDown, Download } from 'lucide-react'
import { TextLoop } from '@/components/motion-primitives/text-loop'
import LetterGlitch from '@/components/backgrounds/LetterGlitch'

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-10 sm:py-12 md:py-16">
      {/* Letter Glitch Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <LetterGlitch glitchColors={['#2b4539', '#61dca3', '#61b3dc']} outerVignette={false} centerVignette={true} smooth={true} />
      </div>
      {/* Image Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/aderemi.png"
          alt="Hero overlay background"
          className="w-full h-full object-cover object-[50%_60%] sm:object-[50%_55%] md:object-[80%_30%] opacity-55 sm:opacity-25 md:opacity-80 mix-blend-normal sm:mix-blend-overlay select-none"
          loading="eager"
          decoding="async"
          aria-hidden="true"
          draggable="false"
        />
      </div>
      {/* Subtle radial overlay */}
      <div className="absolute inset-0 bg-[#141414]/40 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <Avatar className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 ring-4 ring-border transition-all duration-300">
              <AvatarImage 
                src="/adeAvatar.png" 
                alt="Aderemi Avatar" 
                className="object-cover object-top"
              />
              <AvatarFallback className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-2xl font-bold">
                AA
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name and Title */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Hi, I'm Raydar
            </h1>
            {/* Bio */}
          <div className="mb-8 max-w-2xl mx-auto px-4 sm:px-6 md:px-0">
            {/* <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I build scalable systems that power modern startups.
            </p> */}
          </div>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium mb-3 h-7 sm:h-8 md:h-10 text-foreground">
              I specialize in{' '}
              <TextLoop interval={2}>
                <span>Web Apps & Dashboards</span>
                <span>API Integrations</span>
                <span>Automation Tools</span>
                <span>Payment Platforms</span>
                <span>Data-driven Systems</span>
              </TextLoop>
            </div>
            <div className="text-muted-foreground">
              <p className="text-base sm:text-lg leading-relaxed px-4 sm:px-8 md:px-0 max-w-2xl mx-auto text-justify sm:text-left">
              From fintech to SaaS, I help businesses launch and scale products that
              handle real-world transactions — fast, secure, and reliable.
              </p>
            </div>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              aria-label="Contact me"
              className="bg-gradient-to-r rounded-full from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-primary-foreground px-6 py-4 text-base sm:px-8 sm:py-6 sm:text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Let's Work Together
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              aria-label="Download resume"
              className="border-border rounded-full text-foreground hover:bg-muted px-6 py-4 text-base sm:px-8 sm:py-6 sm:text-lg font-semibold transition-all duration-300"
              onClick={async (e) => {
                e.preventDefault()
                try {
                  const res = await fetch('/AderemiAzeezResume.pdf')
                  if (!res.ok) throw new Error('Failed to fetch resume')
                  const blob = await res.blob()
                  const url = window.URL.createObjectURL(blob)
                  const link = document.createElement('a')
                  link.href = url
                  link.download = 'Aderemi_Azeez_Resume.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                  window.URL.revokeObjectURL(url)
                } catch (e) {
                  // Fallback: open in a new tab if direct download fails
                  window.open('/AderemiAzeezResume.pdf', '_blank')
                }
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection('skills')}
              aria-label="Scroll to skills section"
              className="text-foreground hover:text-primary"
            >
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll to skills section</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

export default HeroSection