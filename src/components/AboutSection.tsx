const AboutSection = () => {
  return (
    <section id="about" aria-label="About" className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-1/3">
             <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold font-outfit">About Me</span>
          </div>
          <div className="w-full md:w-2/3 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground font-outfit leading-tight">
              Building reliable software for real-world products.
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                I build software that works. From processing international payments to managing complex data for businesses, I focus on making things fast, secure, and easy to use.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                I specialize in heavy-duty backend systems and smooth user experiences. Whether it's fintech, cloud infrastructure, or automated workflows—I build tools that last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection