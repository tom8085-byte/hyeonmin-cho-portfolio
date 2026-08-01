import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { featuredResearch } from '@/data/roboticsPortfolioData';
import { SectionHeading } from './section-heading';

function ResearchSignalFigure() {
  return (
    <figure className="overflow-hidden border border-border bg-background">
      <div className="flex items-center justify-between gap-3 border-b border-border px-3 py-2 font-mono text-[9px] tracking-[0.14em] text-primary">
        <span>REFERENCE FIGURE</span>
        <span>THz SIGNAL CONTEXT</span>
      </div>
      <a
        href="/research/thz-water-vapor-response.svg"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <img
          src="/research/thz-water-vapor-response.svg"
          alt="Comparison of terahertz time-domain current and frequency-domain amplitude with and without water vapor."
          width="1658"
          height="574"
          decoding="async"
          className="block h-auto w-full"
        />
      </a>
      <figcaption className="border-t border-border px-3 py-2 font-mono text-[9px] leading-relaxed tracking-[0.08em] text-muted-foreground">
        SUPPLIED COMPARISON — WATER-VAPOR EFFECTS IN TIME AND FREQUENCY DOMAINS
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
              <ResearchSignalFigure />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
