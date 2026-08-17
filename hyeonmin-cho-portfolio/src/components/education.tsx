import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { education } from '@/data/roboticsPortfolioData';
import { SectionHeading } from './section-heading';

export function Education() {
  return (
    <section id="education" className="py-20 bg-card/30 border-y border-border scroll-mt-14">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeading title="Education" />

        <div className="border border-border bg-background p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="w-16 h-16 bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0" aria-hidden="true">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{education.degree}</h3>
                  <p className="text-muted-foreground mt-1">{education.institution}</p>
                  <p className="font-mono text-sm text-muted-foreground mt-2">{education.period}</p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground font-mono text-sm font-bold shrink-0">
                  <Award className="w-4 h-4" aria-hidden="true" />
                  <span>GPA {education.gpa}</span>
                </div>
              </div>

              <div className="border-t border-border/60 pt-6 mt-6">
                <div className="flex items-center gap-2 text-foreground font-semibold mb-3">
                  <BookOpen className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span>Research Interests</span>
                </div>
                <ul className="flex flex-wrap gap-2 list-none">
                  {education.researchInterests.map((interest) => (
                    <li
                      key={interest}
                      className="px-3 py-1 text-xs font-mono border bg-secondary text-secondary-foreground border-border"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
