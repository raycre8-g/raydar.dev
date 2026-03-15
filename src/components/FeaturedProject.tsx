import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'motion/react'

const FeaturedProject: React.FC = () => {
  // Optional YouTube embed URL. Set VITE_KUVARPAY_YOUTUBE_EMBED_URL in your .env to enable.
  const youtubeEmbed = "https://www.youtube.com/watch?v=leIO-yUl8R0"
  // Controlled case study popup open state to enable motion-based entrance
  const [caseStudyOpen, setCaseStudyOpen] = React.useState(false)
  // Lightbox state for full-screen media viewing
  const [lightboxOpen, setLightboxOpen] = React.useState(false)
  const [lightboxMedia, setLightboxMedia] = React.useState<{
    kind: 'image' | 'youtube'
    src: string
    alt?: string
    layoutId?: string
  } | null>(null)

  const openLightboxImage = (src: string, alt?: string) => {
    const layoutId = src.includes('dashboard') ? 'asset-dashboard' : 'asset-checkout'
    setLightboxMedia({ kind: 'image', src, alt, layoutId })
    setLightboxOpen(true)
  }

  const openLightboxVideo = () => {
    setLightboxMedia({
      kind: 'youtube',
      src: 'https://www.youtube.com/embed/leIO-yUl8R0?rel=0&modestbranding=1&playsinline=1',
      layoutId: 'asset-video'
    })
    setLightboxOpen(true)
  }
  return (
    <section id="featured-project" className="py-24 sm:py-32 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left: visual preview - More premium framing */}
          <div className="w-full md:w-1/2 group relative">
            <div className="absolute -inset-4 bg-white/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
              <img
                src="/kuvarpay-dashboard.png"
                alt="KuvarPay Dashboard"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right: content */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold font-outfit">Featured Case Study</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground font-outfit leading-tight">
                KuvarPay: Global Crypto Gateway.
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              A production-grade infrastructure bridging the gap between blockchain payments and traditional finance. Designed for instant fiat settlements and enterprise reliability.
            </p>

            <div className="grid grid-cols-2 gap-8 py-6 border-y border-white/5">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">My Role</span>
                <span className="text-sm font-medium">Lead Architecture</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Duration</span>
                <span className="text-sm font-medium">6 Months</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://kuvarpay.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-black font-bold px-8 py-4 rounded-full hover:scale-[1.02] transition-all duration-300 text-sm shadow-xl shadow-white/5"
              >
                Live Project
              </a>

              {/* Case study modal (controlled) */}
              <Dialog open={caseStudyOpen} onOpenChange={setCaseStudyOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-white/10 text-foreground font-bold px-8 py-4 h-auto rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                  >
                    Deep Dive
                  </Button>
                </DialogTrigger>

                <DialogContent
                  onInteractOutside={(e) => {
                    // If lightbox is open, intercept outside clicks to close lightbox first (keep popup open)
                    if (lightboxOpen) {
                      e.preventDefault()
                      setLightboxOpen(false)
                    }
                  }}
                  className="w-full max-w-[95vw] sm:max-w-3xl p-0 overflow-hidden border-emerald-800/40 rounded-lg sm:rounded-xl"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                  >
                    {/* Branded header with subtle gradient */}
                    <div className="relative h-20 sm:h-28 bg-white/5 border-b border-white/5">
                      <div className="absolute inset-0 mix-blend-overlay pointer-events-none"
                           style={{ backgroundImage: 'radial-gradient(circle at 10% 0%, rgba(255,255,255,0.05), transparent 40%)' }}
                      />
                      <div className="flex items-center gap-3 px-4 sm:px-6 h-full">
                        <img
                          src="/kuvarpay-logo.svg"
                          alt="KuvarPay Logo"
                          className="h-7 sm:h-9 w-auto object-contain brightness-0 invert opacity-80"
                        />
                        <span className="text-foreground font-bold text-base sm:text-lg uppercase tracking-widest font-outfit">KuvarPay</span>
                        <span className="ml-auto text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Project Details</span>
                      </div>
                    </div>

                    {/* Scrollable content */}
                    <div className="max-h-[70vh] overflow-y-auto hide-scrollbar px-4 sm:px-6 py-4 sm:py-6 space-y-10">
                      <DialogHeader>
                        <DialogTitle className="text-xl sm:text-3xl font-extrabold text-foreground font-outfit">
                          A better way to handle global payments.
                        </DialogTitle>
                        <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
                          Lead Engineer · 6 Months · In Production
                        </DialogDescription>
                      </DialogHeader>

                    {/* Overview */}
                    <section className="space-y-3">
                      <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">The Project</h4>
                      <p className="text-sm leading-relaxed text-foreground font-light">
                        KuvarPay is a payment tool that lets businesses accept crypto and get paid in regular currency (fiat) automatically. I built the system to handle the technical details of blockchain payments while making it easy for businesses to get paid reliably and on time.
                      </p>
                    </section>

                    {/* Problem */}
                    <section className="space-y-3">
                      <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">The Challenge</h4>
                      <p className="text-sm leading-relaxed text-foreground font-light">
                        Merchants want to accept crypto to reach more customers, but they don’t want settlement risk, volatility exposure, or the complexity of custody. The market needed a robust, automated system that:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-muted-foreground">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white/20 rounded-full"></div> Multi-asset acceptance</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white/20 rounded-full"></div> Reliable fiat conversion</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white/20 rounded-full"></div> Merchant transparency</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white/20 rounded-full"></div> Secure API architecture</li>
                      </ul>
                    </section>

                    {/* Solution */}
                    <section className="space-y-4">
                      <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">The Solution</h4>
                      <div className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-4">
                        <p className="text-sm leading-relaxed text-foreground font-light">
                          I designed an event-driven pipeline using robust queues for reliability, idempotent webhook handling, and a pluggable rate provider architecture.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Ethers.js'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-muted-foreground">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </section>

                    {/* Outcome */}
                    <section className="space-y-3 mb-10">
                      <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Impact</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {[
                          { val: '100%', label: 'Automation' },
                          { val: '0', label: 'Volatility Risk' },
                          { val: 'Live', label: 'Production' }
                        ].map((stat, i) => (
                          <div key={i}>
                            <div className="text-2xl font-bold font-outfit">{stat.val}</div>
                            <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Screenshots & assets */}
                    <section className="space-y-4">
                      <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Assets</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.img
                          src="/kuvarpay-dashboard.png"
                          alt="Merchant dashboard"
                          className="w-full h-40 sm:h-48 object-cover rounded-md border border-white/5 cursor-zoom-in"
                          layoutId="asset-dashboard"
                          onClick={() => openLightboxImage('/kuvarpay-dashboard.png', 'Merchant dashboard')}
                        />
                        <motion.img
                          src="/kuvarpay-checkout.png"
                          alt="Transaction details"
                          className="w-full h-40 sm:h-48 object-cover rounded-md border border-white/5 cursor-zoom-in"
                          layoutId="asset-checkout"
                          onClick={() => openLightboxImage('/kuvarpay-checkout.png', 'Transaction details')}
                        />
                        {/* Demo video */}
                        <div className="col-span-1 md:col-span-2 rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
                          <motion.div className="relative aspect-video w-full bg-white/5" layoutId="asset-video">
                            <button
                              type="button"
                              onClick={openLightboxVideo}
                              className="absolute top-2 right-2 z-10 rounded-full bg-black/50 text-white text-[10px] px-3 py-1 hover:bg-black/70 focus:outline-none ring-1 ring-white/10"
                              aria-label="Enlarge video"
                            >
                              Enlarge
                            </button>
                            <iframe
                              className="w-full h-full block grayscale hover:grayscale-0 transition-all duration-500"
                              src="https://www.youtube.com/embed/leIO-yUl8R0?si=D48Ub3UCUWs7kWIH&rel=0&modestbranding=1&playsinline=1"
                              title="KuvarPay Demo"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            />
                          </motion.div>
                        </div>
                      </div>
                    </section>

                    {/* Call to action */}
                    <section className="space-y-4 pt-10 border-t border-white/5">
                      <p className="text-sm leading-relaxed text-muted-foreground font-light">
                        Interested in architecting reliable payment systems or complex backend infrastructures?
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a href="mailto:aderemi@raydar.dev" className="inline-flex items-center justify-center bg-white text-black text-xs font-bold px-6 py-3 rounded-full hover:scale-[1.02] transition-all">Contact Developer</a>
                        <a href="#contact" className="inline-flex items-center justify-center border border-white/10 text-xs font-bold px-6 py-3 rounded-full hover:bg-white/5 transition-all">Book a Technical Audit</a>
                      </div>
                    </section>
                    </div>
                  </motion.div>
                </DialogContent>
              </Dialog>
              {/* Lightbox overlay with motion, keeps case study popup open */}
              <AnimatePresence>
                {lightboxOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm"
                    onClick={() => setLightboxOpen(false)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <button
                        type="button"
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-6 right-6 z-[70] rounded-full bg-white/10 text-white text-[10px] font-bold px-4 py-2 hover:bg-white/20 focus:outline-none ring-1 ring-white/10"
                        aria-label="Close"
                      >
                        CLOSE
                      </button>
                      <div className="relative" onClick={(e) => e.stopPropagation()}>
                        {lightboxMedia?.kind === 'image' && (
                          <motion.img
                            src={lightboxMedia.src}
                            alt={lightboxMedia.alt || 'Screenshot'}
                            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                            layoutId={lightboxMedia.layoutId}
                            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                          />
                        )}
                        {lightboxMedia?.kind === 'youtube' && (
                          <motion.div
                            className="w-[90vw] aspect-video max-h-[85vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                            layoutId={lightboxMedia.layoutId}
                            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                          >
                            <iframe
                              className="w-full h-full block"
                              src={lightboxMedia.src}
                              title="KuvarPay Demo (Full Screen)"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProject