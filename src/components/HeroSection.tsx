import { Button } from '@/components/ui/button'
import { ArrowDown, Download, Sparkles } from 'lucide-react'
import { TextLoop } from '@/components/motion-primitives/text-loop'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse movement for spotlight/parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for parallax
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // Parallax transforms
  const translateX = useTransform(springX, (x) => (x - window.innerWidth / 2) / 40)
  const translateY = useTransform(springY, (y) => (y - window.innerHeight / 2) / 40)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const }
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
      ref={containerRef}
    >
      {/* Dynamic Cursor Spotlight - Kept for effect, but default cursor is now visible */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[40rem] h-[40rem] bg-white/[0.04] rounded-full blur-[100px] z-20 mix-blend-soft-light"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      />

      {/* Parallax Background & Image Layer */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ x: translateX, y: translateY }}
      >
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px]"></div>

        {/* Subtle Portrait Overlay */}
        <img
          src="/aderemi.png"
          alt="Portrait background"
          className="absolute right-0 bottom-0 min-w-[50%] min-h-[80%] object-contain object-right-bottom opacity-[0.08] filter grayscale mix-blend-screen select-none pointer-events-none"
          loading="eager"
        />
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <motion.div
        className="container mx-auto px-4 relative z-50"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center">

          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-[10px] font-black tracking-[0.3em] uppercase text-white/70">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Available for new projects
              </div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            variants={itemVariants}
            style={{
              x: useTransform(springX, (x) => (x - window.innerWidth / 2) / -80),
              y: useTransform(springY, (y) => (y - window.innerHeight / 2) / -80)
            }}
            className="text-center"
          >
            <h1 className="text-7xl sm:text-[10rem] md:text-[12rem] lg:text-[15rem] font-black tracking-tighter leading-none select-none">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20 drop-shadow-2xl font-outfit">
                RAYDAR
              </span>
              <span className="text-white/10">.</span>
            </h1>
          </motion.div>

          {/* Intro */}
          <motion.div variants={itemVariants} className="mt-8 space-y-10 text-center max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white/50 tracking-tight leading-snug font-outfit">
              Building <span className="text-white font-medium italic underline decoration-white/20 underline-offset-8">
                <TextLoop interval={3.5}>
                  <span>Payment Tools</span>
                  <span>Web Systems</span>
                  <span>Cloud Servers</span>
                  <span>Reliable APIs</span>
                  <span>Great Products</span>
                </TextLoop>
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-white/30 leading-relaxed font-extralight tracking-wide">
              I build fast and reliable software for businesses.
              From handling payments to scaling apps on the cloud.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="group relative overflow-hidden bg-white text-black hover:bg-white rounded-full px-12 py-9 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-700 hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.1)] font-outfit"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.05] to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                Start a project
                <Sparkles className="ml-3 h-4 w-4 transition-transform group-hover:rotate-12" />
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="text-white/40 hover:text-white hover:bg-white/5 rounded-full px-12 py-9 text-[11px] font-black uppercase tracking-[0.2em] transition-all font-outfit"
                onClick={() => window.open('/AderemiAzeezResume.pdf', '_blank')}
              >
                <Download className="mr-3 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Cinematic Borders */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* Side HUD Elements */}
      <div className="absolute left-12 bottom-12 hidden lg:flex flex-col gap-6 opacity-20">
        <div className="w-px h-24 bg-white/20"></div>
        <span className="text-[9px] [writing-mode:vertical-lr] uppercase tracking-[0.8em] font-black font-outfit">Architecture // Reliability</span>
      </div>

      <div className="absolute right-12 bottom-12 hidden lg:flex flex-col gap-6 opacity-20 items-end">
        <span className="text-[9px] [writing-mode:vertical-lr] uppercase tracking-[0.8em] font-black font-outfit">MXXVI // Aderemi Azeez Portfolio</span>
        <div className="w-px h-24 bg-white/20"></div>
      </div>

      {/* Floating Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 cursor-pointer group"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-white/10 group-hover:text-white/50 transition-all font-outfit">Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-white/10 group-hover:text-white/50 transition-all" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection