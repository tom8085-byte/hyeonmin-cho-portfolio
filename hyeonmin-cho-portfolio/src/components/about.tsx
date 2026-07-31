import { ArrowRight, ArrowDown } from 'lucide-react';
import { about } from '@/data/roboticsPortfolioData';
import { SectionHeading } from './section-heading';

export function About() {
  return (
    <section id="about" className="py-20 scroll-mt-14">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeading title="About Me" />

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mb-12">
          {about.text}
        </p>

        <div className="border border-border bg-card/50 p-6 md:p-8">
          <p className="font-mono text-xs tracking-[0.25em] text-primary mb-2">{about.pathwayLabel}</p>
          <p className="text-sm text-muted-foreground mb-6">{about.pathwaySupport}</p>

          <ol className="flex flex-col md:flex-row md:items-center gap-3 md:gap-2 list-none">
            {about.pathway.map((step, i) => (
              <li key={step} className="flex flex-col md:flex-row md:items-center gap-3 md:gap-2 md:flex-1">
                <span
                  className={`px-4 py-3 text-sm text-center border w-full md:w-auto md:flex-1 ${
                    i === about.pathway.length - 1
                      ? 'border-primary/60 bg-primary/10 text-primary font-semibold'
                      : 'border-border bg-background text-foreground/90'
                  }`}
                >
                  {step}
                </span>
                {i < about.pathway.length - 1 && (
                  <>
                    <ArrowRight className="hidden md:block w-4 h-4 text-muted-foreground shrink-0" aria-hidden="true" />
                    <ArrowDown className="md:hidden w-4 h-4 text-muted-foreground self-center" aria-hidden="true" />
                  </>
                )}
              </li>
            ))}
          </ol>

          <p className="mt-6 text-xs text-muted-foreground italic">{about.pathwayNote}</p>
        </div>
      </div>
    </section>
  );
}
