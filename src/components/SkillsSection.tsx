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
    <section id="skills" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left: Services/What I Do - More premium approach */}
          <div className="w-full md:w-5/12 space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-bold font-outfit">What I build</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-foreground font-outfit leading-tight">
                Helping businesses grow with better software.
              </h3>
            </div>
            
            <div className="grid gap-8">
              {[
                { title: 'Payments & Fintech', desc: 'Building secure systems to handle money, crypto, and fast payouts.' },
                { title: 'API Design', desc: 'Creating fast and easy-to-use links between different software tools.' },
                { title: 'Cloud & Automation', desc: 'Setting up servers and automated workflows that save time and cost.' }
              ].map((service, i) => (
                <div key={i} className="group cursor-default">
                  <div className="h-[1px] w-full bg-white/10 mb-6 group-hover:bg-foreground transition-colors duration-500"></div>
                  <h4 className="text-xl font-bold mb-2 font-outfit">{service.title}</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills Grid - Minimalist Icons */}
          <div className="w-full md:w-7/12">
            <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 gap-8 md:gap-12">
                {skills.map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="flex flex-col items-center gap-3 group"
                    title={`${skill.name} - ${skill.proficiency}`}
                  >
                    <div className="w-12 h-12 flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-all duration-300 transform group-hover:scale-110">
                      {React.isValidElement(skill.icon)
                        ? React.cloneElement(skill.icon as React.ReactElement, {
                            className: 'w-full h-full',
                          })
                        : skill.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              {['Scalability', 'Security', 'Performance', 'Reliability'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection