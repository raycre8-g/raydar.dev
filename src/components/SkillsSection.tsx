import PixelTransition from '@/components/animations/PixelTransition'
import React from 'react'
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPython, 
  SiPostgresql, SiMongodb, SiDocker, SiAmazonwebservices, SiAstro, SiJavascript, 
  SiMysql, SiPhp, SiHtml5, SiCss3, SiWagmi, SiEthers, SiSolidity,
SiNginx, SiGithubactions } from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ReactNode
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools'
  color: string
}

const SkillsSection = () => {
  const skills: Skill[] = [
    {
      name: 'React',
      icon: <SiReact/>,
      proficiency: 'Expert',
      category: 'Frontend',
      color: '#ffffff'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript/>,
      proficiency: 'Advanced',
      category: 'Frontend',
      color: 'text-foreground'
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript/>,
      proficiency: 'Expert',
      category: 'Frontend',
      color: 'text-foreground'
    },
    {
      name: 'Astro',
      icon: <SiAstro/>,
      proficiency: 'Expert',
      category: 'Frontend',
      color: 'text-foreground'
    },
    {
      name: 'Node.js',
      icon: <SiNodedotjs/>,
      proficiency: 'Advanced',
      category: 'Backend',
      color: 'text-foreground'
    },
    {
      name: 'Python',
      icon: <SiPython/>,
      proficiency: 'Advanced',
      category: 'Backend',
      color: 'text-foreground'
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql/>,
      proficiency: 'Intermediate',
      category: 'Database',
      color: 'text-foreground'
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb/>,
      proficiency: 'Intermediate',
      category: 'Database',
      color: 'text-foreground'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss/>,
      proficiency: 'Advanced',
      category: 'Frontend',
      color: 'text-foreground'
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs/>,
      proficiency: 'Advanced',
      category: 'Frontend',
      color: 'text-foreground'
    },
    {
      name: 'Docker',
      icon: <SiDocker/>,
      proficiency: 'Intermediate',
      category: 'Tools',
      color: 'text-foreground'
    },
    {
      name: 'AWS',
      icon: <SiAmazonwebservices/>,
      proficiency: 'Intermediate',
      category: 'Tools',
      color: 'text-foreground'
    },
    {
      name: 'React Native',
      icon: <SiReact/>,
      proficiency: 'Intermediate',
      category: 'Frontend',
      color: 'text-foreground'
    },
    {
      name: 'MySQL',
      icon: <SiMysql/>,
      proficiency: 'Intermediate',
      category: 'Database',
      color: 'text-foreground'
    },
    {
      name: 'PHP',
      icon: <SiPhp/>,
      proficiency: 'Intermediate',
      category: 'Backend',
      color: 'text-foreground'
    },
    {
      name: 'HTML5',
      icon: <SiHtml5/>,
      proficiency: 'Intermediate',
      category: 'Frontend',
      color: 'text-foreground'
    },
    {
      name: 'CSS3', 
      icon: <SiCss3/>,
      proficiency: 'Intermediate',
      category: 'Frontend',
      color: 'text-foreground'
    },
    {
      name: 'Ethers.js',
      icon: <SiEthers/>,
      proficiency: 'Intermediate',
      category: 'Frontend',
      color: 'text-foreground'
    },
    {
      name: 'Wagmi',
      icon: <SiWagmi/>,
      proficiency: 'Intermediate',
      category: 'Frontend',
      color: 'text-foreground'
    },
    {
      name: 'Solidity',
      icon: <SiSolidity/>,
      proficiency: 'Intermediate',
      category: 'Frontend',
      color: 'text-foreground'
    },
    {
      name: 'Nginx',
      icon: <SiNginx/>,
      proficiency: 'Intermediate',
      category: 'Frontend',
      color: 'text-foreground'
    },
    {
      name: 'GitHub Actions',
      icon: <SiGithubactions/>,
      proficiency: 'Intermediate',
      category: 'Frontend',
      color: 'text-foreground'
    },
  ]
  // (removed unused groupedSkills and image slug helper)

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-justify sm:text-left">
            I work with modern technologies and tools to build scalable, efficient, and user-friendly applications.
          </p>
        </div>

        {/* Two-column layout: What I Do (left) and Skills grid (right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          {/* Left: What I Do subsection */}
          <div className="max-w-xl md:max-w-none mx-auto md:mx-0 w-full">
            <div className="relative rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-4">What I Do</h3>
              <ul className="list-disc list-inside gap-2 text-muted-foreground text-justify text-sm sm:text-base md:text-lg space-y-2">
                <li>Payment & settlement systems (crypto & fiat)</li>
                <li>API design & integrations (webhooks, third-party gateways)</li>
                <li>Backend architecture & automation (queues, retries, cron jobs)</li>
                <li>Dashboards & admin tooling (analytics, reporting, access control)</li>
                <li>MVP & product development (fast delivery + production hardening)</li>
                <li>Webhook reliability & security (signatures, idempotency, guaranteed delivery)</li>
                <li>Observability & reliability (logging, metrics, tracing, alerting)</li>
                <li>Performance & cost optimization (caching, pagination, rate limiting)</li>
                <li>Data workflows & reporting (ETL, aggregates, audit trails)</li>
                <li>DevOps & CI/CD (containerization, environments, release pipelines)</li>
              </ul>
            </div>
          </div>

          {/* Right: Unified skills grid without category separation */}
          <div>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 place-items-center">
              {skills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                >
                  <PixelTransition
                    firstContent={
                      <div>
                        {React.isValidElement(skill.icon)
                          ? React.cloneElement(skill.icon as React.ReactElement, {
                              className: 'h-full w-full p-2 sm:p-3 md:p-5 text-[#ffffff]',
                            })
                          : skill.icon}
                      </div>
                    }
                    secondContent={
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'grid',
                          placeItems: 'center',
                          backgroundColor: '#111',
                          padding: '0.75rem',
                          textAlign: 'center',
                        }}
                      >
                        <div style={{ color: '#fff' }}>
                          <p style={{ fontWeight: 800, fontSize: '1rem' }}>{skill.name}</p>
                          <p style={{ fontSize: '0.8rem', opacity: 0.85 }}>{skill.proficiency}</p>
                          <p style={{ fontSize: '0.6rem', opacity: 0.7 }}>{skill.category}</p>
                        </div>
                      </div>
                    }
                    gridSize={50}
                    pixelColor="#ffffff"
                    once={false}
                    animationStepDuration={0.4}
                    className="custom-pixel-card"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection