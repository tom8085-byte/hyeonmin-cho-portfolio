import { researchDirections, type FoundationKind } from '@/data/roboticsPortfolioData';
import { SectionHeading } from './section-heading';

const kindStyles: Record<FoundationKind, { badge: string; border: string }> = {
  future: {
    badge: 'bg-primary/15 text-primary border-primary/40',
    border: 'border-primary/40',
  },
  project: {
    badge: 'bg-blue-500/15 text-blue-400 border-blue-500/40',
    border: 'border-border',
  },
  research: {
    badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40',
    border: 'border-border',
  },
};

export function ResearchDirection() {
  return (
    <section id="research" className="py-20 bg-card/30 border-y border-border scroll-mt-14">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeading
          title="Research Direction"
          subtitle="From electromagnetic sensing and embedded systems toward intelligent autonomous systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchDirections.map((card) => {
            const style = kindStyles[card.kind];
            return (
              <article key={card.id} className={`border ${style.border} bg-background p-6 flex flex-col`}>
                <span className={`self-start px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase border ${style.badge}`}>
                  {card.statusLabel}
                </span>
                <h3 className="mt-4 text-xl font-bold text-foreground">{card.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2 list-none">
                  {card.topics.map((topic) => (
                    <li
                      key={topic}
                      className="px-2.5 py-1 text-xs font-mono text-foreground/80 bg-secondary border border-border"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
