import { useEffect } from 'react';
import { thzCaseStudy } from '@/data/roboticsPortfolioData';
import { CaseStudyLayout } from '@/components/case-study-layout';
import { SupportingMaterials } from '@/components/supporting-materials';
import { SystemFlowDiagram } from '@/components/system-diagrams';

export default function ResearchThz() {
  const { record, sections } = thzCaseStudy;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Terahertz Spectroscopy Research | Hyeonmin Cho';
    return () => {
      document.title = 'Hyeonmin Cho | Electrical & Electronics Engineering Portfolio';
    };
  }, []);

  return (
    <CaseStudyLayout
      eyebrow="RESEARCH CASE STUDY"
      title={record.title}
      meta={[
        record.role ?? '',
        record.organization ?? '',
        record.location ?? '',
        record.period ?? '',
      ]}
    >
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-bold text-foreground mb-3 border-l-2 border-primary pl-4">
              {section.heading}
            </h2>
            <div className="space-y-3 pl-4">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}

        <SystemFlowDiagram
          label="THz MEASUREMENT WORKFLOW"
          stages={[
            'THz Source',
            'Tapered Waveguide + Sample',
            'THz Receiver',
            'Data Acquisition',
            'Frequency-Domain Comparison',
          ]}
        />

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3 border-l-2 border-primary pl-4">
            Technical Topics
          </h2>
          <ul className="flex flex-wrap gap-2 list-none pl-4">
            {record.technologies?.map((t) => (
              <li key={t} className="px-2.5 py-1 text-xs font-mono text-foreground/80 bg-secondary border border-border">
                {t}
              </li>
            ))}
          </ul>
        </section>

        <SupportingMaterials record={record} />
      </div>
    </CaseStudyLayout>
  );
}
