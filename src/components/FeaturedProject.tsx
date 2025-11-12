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
    kind: 'image' | 'youtube' | 'mp4'
    src: string
    alt?: string
    poster?: string
    layoutId?: string
  } | null>(null)

  const openLightboxImage = (src: string, alt?: string) => {
    const layoutId = src.includes('dashboard') ? 'asset-dashboard' : 'asset-checkout'
    setLightboxMedia({ kind: 'image', src, alt, layoutId })
    setLightboxOpen(true)
  }

  const openLightboxVideo = () => {
    if (youtubeEmbed) {
      setLightboxMedia({
        kind: 'youtube',
        src: 'https://www.youtube.com/embed/leIO-yUl8R0?rel=0&modestbranding=1&playsinline=1',
        layoutId: 'asset-video'
      })
    } else {
      setLightboxMedia({ kind: 'mp4', src: '/videos/kuvarpay-demo.mp4', poster: '/kuvarpay-checkout.png', layoutId: 'asset-video' })
    }
    setLightboxOpen(true)
  }
  return (
    <section id="featured-project" className="py-16 sm:py-20 bg-transparent px-2 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xs sm:text-sm uppercase tracking-widest text-emerald-300 mb-2 sm:mb-3">
          Featured Project
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-12">
          KuvarPay — Crypto Payment Gateway with Fiat Settlement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left: visual preview */}
          <div className="relative w-full aspect-[4/3] md:h-full md:aspect-auto rounded-lg overflow-hidden border border-emerald-800/30 bg-gradient-to-br from-emerald-900/20 to-transparent">
            <img
              src="/kuvarpay-dashboard.png"
              alt="KuvarPay Dashboard"
              className="absolute inset-0 w-full h-full object-cover object-left opacity-90 hover:opacity-100 transition"
            />
          </div>

          {/* Right: content */}
          <div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 text-justify sm:text-left">
              KuvarPay is a full-stack crypto payment gateway that allows merchants to accept crypto payments while receiving instant fiat settlements. It bridges the gap between blockchain payments and traditional finance through automated conversion, real-time transaction tracking, and merchant dashboard management.
            </p>

            <div className="space-y-2 mb-4 text-xs sm:text-sm text-foreground/90">
              <p className="text-justify sm:text-left">
                <span className="font-semibold text-emerald-300">My Role:</span> I led the full system architecture, backend development, and integrations — from crypto wallet logic to fiat settlement APIs, background jobs, merchant dashboards, and secure payout infrastructure.
              </p>
            </div>

            <ul className="list-disc list-inside text-foreground/80 text-sm sm:text-base space-y-1 mb-4">
              <li>Crypto → Fiat conversion & automated settlements</li>
              <li>Real-time transaction tracking</li>
              <li>Merchant dashboard with analytics & transaction logs</li>
              <li>Secure API for merchant checkouts</li>
              <li>Automated rate updates & webhooks</li>
              <li>Admin panel for payout management and audit tracking</li>
            </ul>

            <p className="text-sm text-muted-foreground mb-4 text-justify sm:text-left">
              <span className="font-medium text-emerald-300">Tech Stack:</span>{' '}
              Node.js · Next.js · PostgreSQL · Redis · Docker · Ethers.js · Flutterwave API · Nginx · TypeScript
            </p>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-4">
              <a
                href="https://kuvarpay.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-neon-green text-blue font-semibold hover:text-black hover:cursor-pointer px-3 py-2 sm:px-5 sm:py-3 rounded-md hover:bg-emerald-400 transition text-sm sm:text-base"
              >
                View Live Project
              </a>

              {/* Case study modal (controlled) */}
              <Dialog open={caseStudyOpen} onOpenChange={setCaseStudyOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full border border-emerald-500 text-emerald-300 font-semibold hover:bg-emerald-600/20"
                  >
                    View Case Study
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
                    <div className="relative h-20 sm:h-28 bg-gradient-to-r from-emerald-900/50 via-emerald-800/30 to-transparent">
                      <div className="absolute inset-0 mix-blend-overlay pointer-events-none"
                           style={{ backgroundImage: 'radial-gradient(circle at 10% 0%, rgba(16,185,129,0.25), transparent 40%)' }}
                      />
                      <div className="flex items-center gap-3 px-4 sm:px-6 h-full">
                        <img
                          src="/kuvarpay-logo.svg"
                          alt="KuvarPay Logo"
                          className="h-7 sm:h-9 w-auto object-contain"
                        />
                        <span className="text-foreground font-bold text-base sm:text-lg">KuvarPay</span>
                        <span className="ml-auto text-[10px] sm:text-xs text-emerald-300/80">Case Study</span>
                      </div>
                    </div>

                    {/* Scrollable content */}
                    <div className="max-h-[70vh] overflow-y-auto hide-scrollbar  px-4 sm:px-6 py-4 sm:py-6 space-y-6">
                      <DialogHeader>
                        <DialogTitle className="text-lg sm:text-2xl font-bold text-foreground">
                          KuvarPay — Crypto Payment Gateway with Fiat Settlement
                        </DialogTitle>
                        <DialogDescription className="text-xs sm:text-sm text-muted-foreground text-justify sm:text-left">
                          Role: Lead Engineer (Architecture · Backend · Integrations) · Duration: 6 months (design → launch) · Status: Live production gateway used by merchants
                        </DialogDescription>
                      </DialogHeader>

                    {/* Executive summary */}
                    <section className="space-y-2">
                      <h4 className="text-sm font-semibold tracking-wide text-emerald-300">Executive summary</h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground text-justify sm:text-left">
                        KuvarPay is a production-grade crypto payment gateway that enables merchants to accept cryptocurrency payments and receive fiat settlements automatically. The system bridges blockchain payment flows and traditional payout rails, solving volatility, settlement delays, and webhook reliability — so merchants get predictable fiat payouts without managing crypto.
                      </p>
                    </section>

                    {/* Problem */}
                    <section className="space-y-2">
                      <h4 className="text-sm font-semibold tracking-wide text-emerald-300">Problem</h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground text-justify sm:text-left">
                        Merchants want to accept crypto to reach more customers, but they don’t want settlement risk, volatility exposure, or the complexity of custody. Existing solutions were either custodial-only or required manual reconciliation. The market needed a robust, automated system that:
                      </p>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-foreground/90 space-y-1">
                        <li>Accepts multiple crypto assets (multi-chain ready)</li>
                        <li>Converts received crypto to fiat reliably and promptly</li>
                        <li>Provides merchant visibility (dashboard, logs, payouts)</li>
                        <li>Exposes secure APIs for merchant checkout flows</li>
                      </ul>
                    </section>

                    {/* Objectives */}
                    <section className="space-y-2">
                      <h4 className="text-sm font-semibold tracking-wide text-emerald-300">Objectives</h4>
                      <ol className="list-decimal list-inside text-xs sm:text-sm text-foreground/90 space-y-1">
                        <li>Build a secure, auditable payment gateway that accepts crypto and settles merchants in fiat.</li>
                        <li>Provide near-real-time conversion and automated settlement workflows.</li>
                        <li>Deliver a merchant-facing dashboard for transaction visibility and payout management.</li>
                        <li>Make integrations simple via REST APIs and reliable webhooks.</li>
                        <li>Design for scale and operational observability.</li>
                      </ol>
                    </section>

                    {/* Solution */}
                    <section className="space-y-2">
                      <h4 className="text-sm font-semibold tracking-wide text-emerald-300">Solution (high level)</h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground text-justify sm:text-left">
                        I led design and implementation of a full-stack system comprising:
                      </p>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-foreground/90 space-y-1">
                        <li>Ingest layer: merchant checkout APIs + on-chain listeners for payment detection.</li>
                        <li>Processing pipeline: background workers to confirm on-chain receipts, fetch rates, calculate fiat equivalents, and queue settlements.</li>
                        <li>Settlement layer: integrate with fiat payout provider (payment gateway API) to automate merchant payouts in local currency.</li>
                        <li>Dashboard & Admin: merchant dashboard for analytics + admin tools for auditing and manual overrides.</li>
                        <li>Reliability & Monitoring: retries, idempotency, logging, and alerting for failed flows and webhook deliveries.</li>
                      </ul>
                      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground text-justify sm:text-left">Key design choices:</p>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-foreground/90 space-y-1">
                        <li>Event-driven pipeline using robust queues for reliability and retries.</li>
                        <li>Idempotent webhook handling to prevent double-processing.</li>
                        <li>Pluggable rate provider so fiat conversion can use multiple FX sources.</li>
                        <li>Permissioned admin APIs and role-based access control for audits.</li>
                      </ul>
                    </section>

                    {/* Architecture */}
                    <section className="space-y-2">
                      <h4 className="text-sm font-semibold tracking-wide text-emerald-300">Architecture (concise)</h4>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-foreground/90 space-y-1">
                        <li>Frontend: Next.js (React) merchant dashboard & admin UI</li>
                        <li>API / Backend: Node.js + TypeScript (Express/Nest-style)</li>
                        <li>DB: PostgreSQL (transactions, audit logs)</li>
                        <li>Cache / Queue: Redis (caching, job queues)</li>
                        <li>Blockchain: Ethers.js/Web3 listeners for payment discovery (multi-chain-ready)</li>
                        <li>Fiat Payouts: Integrated with Flutterwave (can swap to other PSPs)</li>
                        <li>Containerization / Deploy: Docker, Nginx, CI/CD pipelines for deployments</li>
                        <li>Monitoring: Prometheus / Grafana (or logs via ELK) + error alerts</li>
                      </ul>
                      <p className="text-[11px] sm:text-xs text-muted-foreground text-justify sm:text-left">Sketch: Checkout → On-chain listener → Confirmations → Queue → Processor → FX → Payout → Dashboard</p>
                    </section>

                    {/* Features */}
                    <section className="space-y-2">
                      <h4 className="text-sm font-semibold tracking-wide text-emerald-300">Key features & how they work</h4>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-foreground/90 space-y-1">
                        <li>Crypto detection & confirmations: On-chain listeners detect incoming txs, validate confirmations, and record canonical receipts.</li>
                        <li>Rate & conversion engine: Fetches live FX rates, computes fiat equivalent, and applies configurable fees/margins.</li>
                        <li>Settlement automation: Processor batches and triggers fiat payouts through PSP API with reconciliation logs.</li>
                        <li>Merchant dashboard: Transaction list, status, payout history, and dispute logs.</li>
                        <li>Webhooks & idempotency: Merchant webhooks are delivered with retry/backoff and idempotency keys to avoid duplicate notifications.</li>
                        <li>Admin & audit tools: Manual payout controls, transaction reprocessing, forensic logs.</li>
                      </ul>
                    </section>

                    {/* Challenges */}
                    <section className="space-y-2">
                      <h4 className="text-sm font-semibold tracking-wide text-emerald-300">Technical challenges & solutions</h4>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-foreground/90 space-y-1">
                        <li>Blockchain finality & reorgs: implemented confirmation threshold + reorg handling with state reconciliation to avoid false positives.</li>
                        <li>Webhook reliability: created durable queue + exponential backoff + manual re-delivery UI for failed webhooks.</li>
                        <li>Rate slippage & volatility: introduced short-lived rate locks during settlement window and clear merchant-level fees to avoid unexpected losses.</li>
                        <li>Operational visibility: built detailed audit logs and metrics for every step in the pipeline so ops can trace failures quickly.</li>
                      </ul>
                    </section>

                    {/* Outcome */}
                    <section className="space-y-2">
                      <h4 className="text-sm font-semibold tracking-wide text-emerald-300">Outcome & impact</h4>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-foreground/90 space-y-1">
                        <li>Production-ready: KuvarPay is live and processing merchant transactions.</li>
                        <li>Business value: merchants can accept crypto without handling custody or volatility risk.</li>
                        <li>Scalability: architecture supports multi-chain expansion and additional PSP integrations.</li>
                        <li>Next steps: add more fiat rails, KYC flows, and a merchant billing/subscription system.</li>
                      </ul>
                    </section>

                    {/* Tech stack */}
                    <section className="space-y-2">
                      <h4 className="text-sm font-semibold tracking-wide text-emerald-300">Tech stack (quick)</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground text-justify sm:text-left">
                        Node.js · TypeScript · Next.js · PostgreSQL · Redis · Docker · Ethers.js · Flutterwave API · Nginx · Prometheus/Grafana
                      </p>
                    </section>

                    {/* Screenshots & assets */}
                    <section className="space-y-3">
                      <h4 className="text-sm font-semibold tracking-wide text-emerald-300">Screenshots & assets</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <motion.img
                          src="/kuvarpay-dashboard.png"
                          alt="Merchant dashboard"
                          className="w-full h-40 sm:h-48 object-cover rounded-md border border-emerald-800/30 cursor-zoom-in"
                          layoutId="asset-dashboard"
                          onClick={() => openLightboxImage('/kuvarpay-dashboard.png', 'Merchant dashboard')}
                        />
                        <motion.img
                          src="/kuvarpay-checkout.png"
                          alt="Transaction details"
                          className="w-full h-40 sm:h-48 object-cover rounded-md border border-emerald-800/30 cursor-zoom-in"
                          layoutId="asset-checkout"
                          onClick={() => openLightboxImage('/kuvarpay-checkout.png', 'Transaction details')}
                        />
                        {/* Demo video */}
                        <div className="col-span-1 md:col-span-2 rounded-md border border-emerald-800/30 overflow-hidden">
                          <motion.div className="relative aspect-video w-full bg-emerald-950/30" layoutId="asset-video">
                            <button
                              type="button"
                              onClick={openLightboxVideo}
                              className="absolute top-2 right-2 z-10 rounded-md bg-black/50 text-white text-xs px-2 py-1 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                              aria-label="Enlarge video"
                            >
                              Enlarge
                            </button>
                            {youtubeEmbed ? (
                              <iframe
                                className="w-full h-full block"
                                src="https://www.youtube.com/embed/leIO-yUl8R0?si=D48Ub3UCUWs7kWIH&rel=0&modestbranding=1&playsinline=1"
                                title="KuvarPay Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                              />
                            ) : (
                              <video
                                className="w-full h-full"
                                src="/videos/kuvarpay-demo.mp4"
                                preload="metadata"
                                controls
                                playsInline
                                poster="/kuvarpay-checkout.png"
                              >
                                Your browser does not support the video tag.
                              </video>
                            )}
                          </motion.div>
                        </div>
                      </div>
                    </section>

                    {/* Call to action */}
                    <section className="space-y-2">
                      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground text-justify sm:text-left">
                        If you’re building a product that needs reliable payment flows, merchant settlements, or API integrations, I can architect and deliver the system end-to-end.
                      </p>
                      <div className="flex gap-2 sm:gap-3">
                        <a href="mailto:hi@raydar.dev" className="text-emerald-300 underline underline-offset-4">aderemi@raydar.dev</a>
                        <a href="#contact" className="text-emerald-300 underline underline-offset-4">Book a call</a>
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
                    <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
                      <button
                        type="button"
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[70] rounded-md bg-white/10 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        aria-label="Close"
                      >
                        Close
                      </button>
                      <div className="relative" onClick={(e) => e.stopPropagation()}>
                        {lightboxMedia?.kind === 'image' && (
                          <motion.img
                            src={lightboxMedia.src}
                            alt={lightboxMedia.alt || 'Screenshot'}
                            className="max-w-[95vw] max-h-[95vh] object-contain"
                            layoutId={lightboxMedia.layoutId}
                            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                          />
                        )}
                        {lightboxMedia?.kind === 'youtube' && (
                          <motion.div
                            className="w-[95vw] h-[95vh]"
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
                        {lightboxMedia?.kind === 'mp4' && (
                          <motion.video
                            className="max-w-[95vw] max-h-[95vh] object-contain"
                            src={lightboxMedia.src}
                            preload="metadata"
                            controls
                            playsInline
                            poster={lightboxMedia.poster}
                            layoutId={lightboxMedia.layoutId}
                            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                          />
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