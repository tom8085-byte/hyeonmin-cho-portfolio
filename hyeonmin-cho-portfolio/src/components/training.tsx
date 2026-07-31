import { Wrench } from 'lucide-react';
import { training } from '@/data/roboticsPortfolioData';
import { SectionHeading } from './section-heading';

export function Training() {
  const visible = training.filter((t) => t.visible);
  if (visible.length === 0) return null;

  return (
    <section id="training" className="py-20 bg-card/30 border-y border-border scroll-mt-14">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeading title="Professional Training" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((t) => (
            <div key={t.id} className="border border-border bg-background p-6 flex items-start gap-4">
              <Wrench className="w-5 h-5 text-primary shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="text-base font-bold text-foreground leading-snug">{t.title}</h3>
                {t.organization && <p className="mt-1 text-sm text-muted-foreground">{t.organization}</p>}
                {t.period && <p className="mt-1 font-mono text-xs text-muted-foreground">{t.period}</p>}
                {t.shortDescription && (
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.shortDescription}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
