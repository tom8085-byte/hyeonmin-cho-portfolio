import { skillGroups } from '@/data/roboticsPortfolioData';
import { SectionHeading } from './section-heading';

export function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-14">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeading title="Technical Foundation" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="border border-border bg-card/50 p-6">
              <h3 className="text-base font-bold text-foreground mb-4">{group.title}</h3>
              <ul className="space-y-2 list-none">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-[7px] w-1.5 h-1.5 bg-primary shrink-0" aria-hidden="true"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
