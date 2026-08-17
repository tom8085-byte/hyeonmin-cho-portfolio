import { Link } from 'wouter';
import { ArrowRight, Wrench } from 'lucide-react';
import { training } from '@/data/roboticsPortfolioData';
import { SectionHeading } from './section-heading';

export function Training() {
  const visible = training.filter((t) => t.visible);
  if (visible.length === 0) return null;

  return (
    <section id="training" className="py-20 bg-card/30 border-y border-border scroll-mt-14">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeading title="Professional Development" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((t) => (
            <div key={t.id} className="border border-border bg-background p-6 flex items-start gap-4">
              <Wrench className="w-5 h-5 text-primary shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="text-base font-bold text-foreground leading-snug">{t.title}</h3>
                {t.organization && <p className="mt-1 text-sm text-muted-foreground">{t.organization}</p>}
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {[t.location, t.period].filter(Boolean).join(' · ')}
                </p>
                {t.route && (
                  <Link
                    href={t.route}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
