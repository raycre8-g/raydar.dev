import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import './App.css'
import GradualBlur from '@/components/animations/GradualBlur'
import LogoLoop from '@/components/animations/LogoLoop'
import Preloader from '@/components/Preloader'
import { AnimatePresence } from 'framer-motion'
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiDocker, SiAmazonwebservices } from 'react-icons/si'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Ensuring the preloader stays for a consistent premium feel
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiAmazonwebservices />, title: "AWS", href: "https://aws.amazon.com" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hide scrollbar on landing page body while preserving scroll
  useEffect(() => {
    document.body.classList.add('hide-scrollbar')
    return () => {
      document.body.classList.remove('hide-scrollbar')
    }
  }, [])


  return (
    <div className="relative min-h-screen scroll-smooth">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      <Navigation activeSection={activeSection} />
      <main>
        <HeroSection />
        {/* Logo loop showcase just below hero */}
        <section id="logos" className="py-20 bg-background border-y border-white/5">
          <div className="container mx-auto px-4">
            <LogoLoop
              logos={techLogos}
              speed={20}
              direction="left"
              logoHeight={40}
              gap={60}
              pauseOnHover
              fadeOut
              fadeOutColor='#000000'
              className="mx-auto grayscale opacity-50 hover:opacity-100 transition-opacity duration-1000"
            />
          </div>
        </section>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-white/5 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-foreground font-outfit font-black text-xl tracking-tighter">
              RAYDAR<span className="text-muted-foreground">.</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
              © 2026 Aderemi O Azeez. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      <GradualBlur
        target="page"
        position="bottom"
        height="2.5rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </div>
  )
}

export default App