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
import ProfileCardSection from '@/components/ProfileCardSection'
import {SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiDocker, SiAmazonwebservices} from 'react-icons/si'

function App() {
  const [activeSection, setActiveSection] = useState('home')

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
      <Navigation activeSection={activeSection} />
      <main>
        <HeroSection />
        {/* Logo loop showcase just below hero */}
        <section id="logos" className="py-8 bg-gradient-to-t from-transparent to-background bg-background">
          <div className="container mx-auto px-4">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={65}
              gap={40}
              pauseOnHover
              fadeOut
              fadeOutColor='#0a0a0a'
              className="mx-auto max-w-5xl"
            />
          </div>
        </section>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ProfileCardSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950/50 border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Aderemi O Azeez. Built with React, TypeScript, and Tailwind CSS.
          </p>
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