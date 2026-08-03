import { ArrowRight, ArrowDown } from 'lucide-react';
import { about } from '@/data/roboticsPortfolioData';
import { SectionHeading } from './section-heading';

const phaseStyles = {
  experience: {
    label: 'Completed Experience',
    card: 'border-border bg-background text-foreground/90',
    badge: 'text-emerald-400',
  },
  future: {
    label: 'Future Research Focus',
    card: 'border-blue-500/50 bg-blue-500/5 text-foreground',
    badge: 'text-blue-400',
  },
  goal: {
    label: 'Long-Term Goal',
    card: 'border-primary/60 bg-primary/10 text-primary',
    badge: 'text-primary',
  },
} as const;

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

          <ol className="flex flex-col lg:flex-row lg:items-stretch gap-3 lg:gap-2 list-none">
            {about.pathway.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-2 lg:flex-1"
              >
                <span
                  className={`px-3 py-3 text-sm text-center border w-full lg:flex-1 lg:min-h-28 flex flex-col items-center justify-center ${phaseStyles[step.phase].card}`}
                >
                  <span
                    className={`mb-2 font-mono text-[9px] leading-tight tracking-[0.12em] uppercase ${phaseStyles[step.phase].badge}`}
                  >
                    {phaseStyles[step.phase].label}
                  </span>
                  <span className={step.phase === 'goal' ? 'font-semibold' : undefined}>{step.title}</span>
                </span>
                {i < about.pathway.length - 1 && (
                  <>
                    <ArrowRight className="hidden lg:block w-4 h-4 text-muted-foreground shrink-0" aria-hidden="true" />
                    <ArrowDown className="lg:hidden w-4 h-4 text-muted-foreground self-center" aria-hidden="true" />
                  </>
                )}
              </li>
            ))}
          </ol>

          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-foreground/80 border-l-2 border-primary pl-4">
            {about.pathwayNote}
          </p>
        </div>
      </div>
    </section>
  );
}
