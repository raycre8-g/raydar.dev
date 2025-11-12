const AboutSection = () => {
  return (
    <section aria-label="About me" className="relative bg-background">
      <div className="relative px-6 sm:px-8 py-6 sm:py-8 rounded-2xl max-w-5xl mx-auto">
        <div className="space-y-4 text-center">
          <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About Me
          </h2>
        </div>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground text-justify sm:text-left">
            I build scalable backend systems and product-facing web apps that handle real-world complexity — billing, payouts, webhooks, background jobs, and realtime workflows. My most recent project, KuvarPay, is a production crypto payment gateway that settles merchants in fiat; it taught me a lot about rate handling, settlement timing, and secure webhook guarantees. I enjoy turning messy requirements into reliable services and clear developer APIs. I work across fintech, SaaS, marketplaces, and automation-heavy products — wherever reliability and correctness matter.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection