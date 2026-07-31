import { motion, useReducedMotion } from 'framer-motion';
import { hero, personal } from '@/data/roboticsPortfolioData';

/** Subtle signal-line animation for the hero background. */
function SignalLine() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden opacity-30 pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full">
        <path
          d="M0,50 L100,50 L120,20 L140,80 L160,50 L400,50 L420,35 L440,65 L460,50 L700,50 L720,10 L740,90 L760,50 L1000,50 L1020,40 L1040,60 L1060,50 L1200,50"
          fill="none"
          stroke="hsl(188 100% 50%)"
          strokeWidth="1.5"
          className="motion-safe:animate-pulse"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const fade = reduce
    ? {}
    : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="hero" className="relative overflow-hidden border-b border-border py-16 md:py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-15 z-0" aria-hidden="true"></div>
      <SignalLine />

      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 relative z-10">
        <motion.div {...fade} transition={{ duration: 0.6 }}>
          <p className="font-mono text-xs tracking-[0.25em] text-primary mb-6">{hero.eyebrow}</p>

          <div className="flex flex-col sm:flex-row gap-8 md:gap-12 items-start">
            {/* Portrait — kept rectangular, unmodified */}
            <div className="shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}profile-photo.png`}
                alt="Portrait of Hyeonmin Cho"
                width={176}
                height={224}
                decoding="async"
                fetchPriority="high"
                className="w-36 h-44 sm:w-44 sm:h-56 object-cover object-top border border-border"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-foreground">
                {personal.name}{' '}
                <span className="text-2xl md:text-3xl font-light text-muted-foreground align-middle">
                  {personal.koreanName}
                </span>
              </h1>

              <p className="mt-4 text-xl md:text-2xl font-semibold text-foreground/90 leading-snug max-w-2xl">
                {hero.headline}
              </p>

              <p className="mt-3 font-mono text-sm text-primary">{hero.researchLine}</p>

              <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-2xl">
                {hero.introduction}
              </p>

              <p className="mt-5 font-mono text-xs text-muted-foreground tracking-wide">
                {hero.metadata}
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <a
                  href="#research"
                  className="px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  View Research
                </a>
                <a
                  href="#projects"
                  className="px-5 py-2.5 border border-border hover:border-primary/50 text-foreground font-semibold text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Explore Projects
                </a>
                {personal.cvFile && (
                  <a
                    href={`${import.meta.env.BASE_URL}${personal.cvFile.replace(/^\//, '')}`}
                    className="px-5 py-2.5 border border-primary/50 text-primary font-semibold text-sm hover:bg-primary/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Download CV
                  </a>
                )}
                <a
                  href="#contact"
                  className="px-5 py-2.5 border border-border hover:border-primary/50 text-foreground font-semibold text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
