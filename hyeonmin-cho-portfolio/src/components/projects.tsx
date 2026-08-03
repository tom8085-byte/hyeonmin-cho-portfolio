import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { projects, type ContentRecord } from '@/data/roboticsPortfolioData';
import { SectionHeading } from './section-heading';
import { EvidenceLink } from './supporting-materials';

function ProjectCard({ project }: { project: ContentRecord }) {
  return (
    <article className="border border-border bg-background p-6 flex flex-col hover:border-primary/50 transition-colors h-full">
      <h3 className="text-lg font-bold text-foreground leading-snug">{project.title}</h3>
      {project.originalTitle && (
        <p className="mt-1 text-sm text-muted-foreground">{project.originalTitle}</p>
      )}
      <p className="mt-2 font-mono text-xs text-primary">
        {project.role}
        {project.organization ? ` · ${project.organization}` : ''}
      </p>
      {project.period && (
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {project.period}
          {project.location ? ` · ${project.location}` : ''}
        </p>
      )}

      {project.problem && (
        <div className="mt-4">
          <p className="font-mono text-[10px] tracking-[0.18em] text-primary mb-1">PROBLEM</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
        </div>
      )}

      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{project.shortDescription}</p>

      {project.individualContribution && !project.individualContributionNeedsConfirmation && (
        <div className="mt-4 border-l-2 border-primary/50 pl-3">
          <p className="font-mono text-[10px] tracking-[0.18em] text-primary mb-1">MY ROLE</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {project.individualContribution}
          </p>
        </div>
      )}

      <ul className="mt-4 flex flex-wrap gap-1.5 list-none">
        {project.technologies?.slice(0, 6).map((t) => (
          <li key={t} className="px-2 py-0.5 text-[11px] font-mono text-foreground/80 bg-secondary border border-border">
            {t}
          </li>
        ))}
      </ul>

      {project.outcomes?.[0] && (
        <div className="mt-4">
          <p className="font-mono text-[10px] tracking-[0.18em] text-primary mb-1">OUTPUT</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{project.outcomes[0]}</p>
        </div>
      )}

      <div className="mt-4">
        <p className="font-mono text-[10px] tracking-[0.18em] text-primary mb-1">
          SUPPORTING MATERIAL
        </p>
        <p className="text-xs text-muted-foreground">
          {project.evidenceItems.some((item) => Boolean(item.href))
            ? 'A public supporting file is available.'
            : 'No public file is linked in this version.'}
        </p>
      </div>

      <div className="mt-auto pt-5 flex flex-wrap items-center gap-4">
        {project.route && (
          <Link
            href={project.route}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
          >
            View Case Study
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        )}
        {project.evidenceItems
          .filter((item) => Boolean(item.href))
          .slice(0, 1)
          .map((item) => (
            <EvidenceLink key={item.title} item={item} compact />
          ))}
      </div>
    </article>
  );
}

export function Projects() {
  const visible = projects.filter((p) => p.visible);
  return (
    <section id="projects" className="py-20 bg-card/30 border-y border-border scroll-mt-14">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeading
          title="Selected Projects"
          subtitle="Team and individual engineering work in embedded sensing, data-oriented systems, and applied programming."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
