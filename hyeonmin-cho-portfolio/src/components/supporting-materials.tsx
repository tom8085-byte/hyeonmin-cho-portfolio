import { ExternalLink, FileText } from 'lucide-react';
import type { ContentRecord, EvidenceItem } from '@/data/roboticsPortfolioData';

export function EvidenceLink({ item, compact = false }: { item: EvidenceItem; compact?: boolean }) {
  if (!item.href) return null;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${item.buttonLabel ?? 'View supporting material'}: ${item.altText}`}
      className={
        compact
          ? 'inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm'
          : 'inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-primary/50 text-primary hover:bg-primary/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm'
      }
    >
      {item.buttonLabel ?? 'View Supporting Material'}
      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
    </a>
  );
}

export function EvidenceCard({ item }: { item: EvidenceItem }) {
  if (!item.href) return null;

  return (
    <article className="border border-border bg-card/40 p-5 flex flex-col h-full">
      <div className="flex items-start gap-3">
        <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-primary">{item.type}</p>
          <h3 className="mt-1 text-base font-bold text-foreground">{item.title}</h3>
          {item.date && <p className="mt-1 text-xs font-mono text-muted-foreground">{item.date}</p>}
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
      <div className="mt-auto pt-5">
        <EvidenceLink item={item} />
      </div>
    </article>
  );
}

export function SupportingMaterials({ record }: { record: ContentRecord }) {
  const publicItems = record.evidenceItems.filter((item) => Boolean(item.href));

  return (
    <section aria-labelledby={`${record.id}-supporting-materials`}>
      <h2
        id={`${record.id}-supporting-materials`}
        className="text-xl font-bold text-foreground mb-3 border-l-2 border-primary pl-4"
      >
        Supporting Materials
      </h2>
      {publicItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4">
          {publicItems.map((item) => (
            <EvidenceCard key={`${item.type}-${item.title}`} item={item} />
          ))}
        </div>
      ) : (
        <p className="pl-4 text-sm text-muted-foreground leading-relaxed">
          No public supporting files are linked in this version of the portfolio.
        </p>
      )}
    </section>
  );
}
