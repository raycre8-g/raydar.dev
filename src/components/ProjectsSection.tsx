import React, { useState } from 'react'
import FeaturedProject from '@/components/FeaturedProject'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, Eye } from 'lucide-react'
import { BorderTrail } from '@/components/motion-primitives/border-trail'
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
      collapsed: { scale: 1, filter: 'blur(0px)' },
      expanded: { scale: 1.08, filter: 'blur(3px)' },
    }

    const transition = {
      type: 'spring' as const,
      stiffness: 26.7,
      damping: 4.1,
      mass: 0.2,
    }

    const imageSrc = project.imageUrl
      ? project.imageUrl
      : `https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20${project.title.replace(' ', '%20')}%20application%20screenshot%20professional%20UI%20design%20purple%20accent%20colors%20clean%20interface&image_size=landscape_16_9`

    return (
      <div
        className={`relative h-auto overflow-hidden rounded-xl group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 ${
          project.featured ? 'ring-2 ring-indigo-500/20' : ''
        }`}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <div onClick={() => setIsOpen(!isOpen)} className="relative">
          <motion.img
            src={imageSrc}
            alt={project.title}
            className="pointer-events-none h-full w-full select-none object-cover"
            animate={isOpen ? 'expanded' : 'collapsed'}
            variants={imageVariants}
            transition={transition}
          />
          {project.featured && (
            <Badge className="absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-primary-foreground text-xs">
              Featured
            </Badge>
          )}
          {project.status === 'closed' && (
            <Badge className="absolute top-4 left-4 bg-red-600 text-primary-foreground text-xs">
              Closed
            </Badge>
          )}
        </div>

        <Disclosure onOpenChange={setIsOpen} open={isOpen} className="absolute bottom-0 left-0 right-0 z-10 bg-card/80 backdrop-blur-md px-4 py-2">
          <DisclosureTrigger>
            <button
              className="w-full text-left text-[14px] font-medium text-foreground"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {project.title}
            </button>
          </DisclosureTrigger>
          <DisclosureContent>
            <div className="flex flex-col pb-4 text-sm text-muted-foreground">
              <p className="line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className={`text-xs ${getTechnologyStyle()}`}>
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {project.githubUrl && (
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => window.open(project.githubUrl!, '_blank')}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-primary-foreground"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                )}

                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.liveUrl!, '_blank')}
                    className="w-full border-border text-foreground hover:bg-muted"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    {project.status === 'closed' ? 'Unavailable' : 'Demo'}
                  </Button>
                )}
              </div>
            </div>
          </DisclosureContent>
        </Disclosure>

        {/* Animated border trail overlay */}
        <BorderTrail className="bg-gradient-to-r from-indigo-600 to-purple-600" size={60} />
      </div>
    )
  }

  return (
    <section id="projects" className="py-16 sm:py-20 px-2 sm:px-6 md:px-10 bg-gradient-to-b from-background to-slate-900/20">
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