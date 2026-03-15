import React, { useState } from 'react'
import FeaturedProject from '@/components/FeaturedProject'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, Eye, ArrowDown } from 'lucide-react'
import { Disclosure, DisclosureTrigger, DisclosureContent } from '@/components/motion-primitives/disclosure'
import { motion } from 'motion/react'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured?: boolean
  status?: 'active' | 'closed'
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 'rayswap',
      title: 'Rayswap Exchange',
      description: 'A crypto exchange where users can swap tokens across chains or sell crypto to fiat (on/off ramp).',
      technologies: ['Crypto', 'Cross-chain', 'Exchange', 'Fiat On/Off Ramp'],
      liveUrl: 'https://rayswap.exchange',
      imageUrl: '/rayswap.png',
      status: 'active',
    },
    {
      id: 'affisend',
      title: 'Affisend',
      description: 'An email marketing platform built with Laravel (PHP).',
      technologies: ['Laravel', 'PHP', 'Email Marketing'],
      liveUrl: 'https://affisend.com',
      imageUrl: '/affisend2.png',
      status: 'active',
    },
    {
      id: '9jaPotKigali',
      title: '9jaPotKigali',
      description: 'An online food ordering platform built with Astro (JS).',
      technologies: ['Astro', 'AstroJS', 'E-commerce'],
      liveUrl: 'https://9japotkigali.rw',
      imageUrl: '/9japotkigali.png',
      status: 'active',
    },
  ]

  const getTechnologyStyle = () => 'bg-muted/40 text-foreground border-border/50'

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const [isOpen, setIsOpen] = useState(false)

    const imageVariants = {
      collapsed: { scale: 1, filter: 'grayscale(100%) opacity(0.7)' },
      expanded: { scale: 1.05, filter: 'grayscale(0%) opacity(1)' },
    }

    const transition = {
      type: 'spring' as const,
      stiffness: 30,
      damping: 10,
      mass: 0.5,
    }

    const imageSrc = project.imageUrl
      ? project.imageUrl
      : `https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20${project.title.replace(' ', '%20')}%20application%20screenshot%20minimalist%20UI&image_size=landscape_16_9`

    return (
      <div
        className="relative group overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/5 transition-all duration-500 hover:border-white/20"
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <div onClick={() => setIsOpen(!isOpen)} className="relative aspect-[16/10] cursor-pointer overflow-hidden">
          <motion.img
            src={imageSrc}
            alt={project.title}
            className="h-full w-full object-cover"
            animate={isOpen ? 'expanded' : 'collapsed'}
            variants={imageVariants}
            transition={transition}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
          
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <h4 className="text-xl font-bold text-white font-outfit">{project.title}</h4>
            <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
              <ArrowDown className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        <Disclosure onOpenChange={setIsOpen} open={isOpen}>
          <DisclosureContent>
            <div className="px-8 pb-8 pt-2 space-y-6">
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.githubUrl && (
                  <Button
                    size="sm"
                    onClick={() => window.open(project.githubUrl!, '_blank')}
                    className="bg-white text-black hover:bg-white/90 rounded-full px-6 font-bold text-xs"
                  >
                    Source
                  </Button>
                )}

                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.liveUrl!, '_blank')}
                    className="border-white/10 rounded-full px-6 font-bold text-xs hover:bg-white/5 transition-all"
                  >
                    Explore
                  </Button>
                )}
              </div>
            </div>
          </DisclosureContent>
        </Disclosure>
      </div>
    )
  }

  return (
    <section id="projects" className="py-32 px-4 bg-background border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Featured project showcase */}
        <FeaturedProject />

        {/* Other projects grid */}
        <div className="text-center mt-10 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Other Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-justify sm:text-left">
            A selection of additional projects demonstrating a range of capabilities across frontend, backend, data, and product engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection