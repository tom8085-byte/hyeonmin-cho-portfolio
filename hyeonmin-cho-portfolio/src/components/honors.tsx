import { Link } from 'wouter';
import { BadgeCheck, Award, ArrowRight } from 'lucide-react';
import { honors, certifications } from '@/data/roboticsPortfolioData';
import { SectionHeading } from './section-heading';

export function Honors() {
  const visible = honors.filter((h) => h.visible);
  const visibleCerts = certifications.filter((c) => c.visible);
  if (visible.length === 0 && visibleCerts.length === 0) return null;

  return (
    <section id="honors" className="py-20 bg-card/30 border-y border-border scroll-mt-14">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeading title="Honors & Certifications" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((h) => (
            <div key={h.id} className="border border-border bg-background p-6 flex items-start gap-4">
              <Award className="w-6 h-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <div className="min-w-0">
                <h3 className="text-base font-bold text-foreground leading-snug">{h.title}</h3>
                {h.organization && <p className="mt-1 text-sm text-muted-foreground">{h.organization}</p>}
                {h.period && <p className="mt-1 font-mono text-xs text-muted-foreground">{h.period}</p>}
                {h.shortDescription && (
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.shortDescription}</p>
                )}
                {h.route && (
                  <Link
                    href={h.route}
                    className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-primary hover:text-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {visibleCerts.length > 0 && (
          <div className="mt-14">
            <h3 className="text-xl font-bold text-foreground mb-6">Certification</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleCerts.map((c) => (
                <div key={c.id} className="border border-border bg-background p-6 flex items-start gap-4">
                  <BadgeCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-base font-bold text-foreground leading-snug">{c.title}</h4>
                    {c.organization && <p className="mt-1 text-sm text-muted-foreground">{c.organization}</p>}
                    {c.period && <p className="mt-1 font-mono text-xs text-muted-foreground">{c.period}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
