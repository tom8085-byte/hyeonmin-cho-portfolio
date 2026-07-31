import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { experiences } from '@/data/roboticsPortfolioData';
import { SectionHeading } from './section-heading';

export function Experience() {
  const visible = experiences.filter((e) => e.visible);

  return (
    <section id="experience" className="py-20 scroll-mt-14">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeading title="Research & Experience" />

        <ol className="relative border-l border-border ml-2 md:ml-4 space-y-10 list-none max-w-3xl">
          {visible.map((exp) => (
            <li key={exp.id} className="pl-6 md:pl-8 relative">
              <span
                className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-primary"
                aria-hidden="true"
              ></span>

              <h3 className="text-lg font-bold text-foreground leading-snug">{exp.title}</h3>
              {exp.organization && (
                <p className="text-sm text-primary font-mono mt-0.5">{exp.organization}</p>
              )}
              <p className="font-mono text-xs text-muted-foreground mt-1">
                {[exp.period, exp.location].filter(Boolean).join(' · ')}
              </p>
              {exp.shortDescription && (
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {exp.shortDescription}
                </p>
              )}
              {exp.route && (
                <Link
                  href={exp.route}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
