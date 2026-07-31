import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { featuredResearch } from '@/data/roboticsPortfolioData';
import { SectionHeading } from './section-heading';

/** Restrained CSS-based waveform, presented as a decorative illustration. */
function Waveform() {
  return (
    <figure className="border border-border bg-background p-4" aria-hidden="false">
      <svg viewBox="0 0 400 140" className="w-full h-auto" role="img" aria-label="Decorative terahertz-style waveform illustration">
        <line x1="0" y1="70" x2="400" y2="70" stroke="hsl(215 30% 18%)" strokeWidth="1" />
        <path
          d="M0,70 C30,70 40,68 55,70 C70,72 80,70 95,70 C110,70 118,20 130,20 C142,20 148,120 160,120 C172,120 178,45 190,45 C202,45 208,95 220,95 C232,95 238,58 250,58 C262,58 268,80 280,80 C292,80 300,66 315,68 C330,70 345,70 360,70 L400,70"
          fill="none"
          stroke="hsl(188 100% 50%)"
          strokeWidth="1.5"
        />
        <path
          d="M0,70 L400,70"
          fill="none"
          stroke="hsl(188 100% 50% / 0.15)"
          strokeWidth="24"
          strokeDasharray="1 7"
        />
      </svg>
      <figcaption className="mt-2 font-mono text-[10px] text-muted-foreground tracking-wider">
        DECORATIVE ILLUSTRATION — THz TIME-DOMAIN SIGNAL (NOT MEASURED DATA)
      </figcaption>
    </figure>
  );
}

export function FeaturedResearch() {
  const r = featuredResearch;
  return (
    <section id="featured-research" className="py-20 scroll-mt-14">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeading title="Featured Research" />

        <article className="border border-primary/30 bg-card/50 p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-emerald-400 mb-3">
                COMPLETED UNDERGRADUATE RESEARCH
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {[r.role, r.organization].filter(Boolean).join(' · ')}
              </p>
              <p className="text-sm text-muted-foreground">{[r.location, r.period].filter(Boolean).join(' · ')}</p>

              <p className="mt-5 text-muted-foreground leading-relaxed">{r.shortDescription}</p>

              {r.individualContribution && (
                <div className="mt-6 border-l-2 border-primary pl-4">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-primary mb-1.5">
                    INDIVIDUAL CONTRIBUTION
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {r.individualContribution}
                  </p>
                </div>
              )}

              <ul className="mt-6 flex flex-wrap gap-2 list-none">
                {r.technologies?.map((t) => (
                  <li key={t} className="px-2.5 py-1 text-xs font-mono text-foreground/80 bg-secondary border border-border">
                    {t}
                  </li>
                ))}
              </ul>

              <Link
                href={r.route!}
                className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Read Case Study
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:pt-8">
              <Waveform />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
