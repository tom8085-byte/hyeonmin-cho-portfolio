import { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import {
  thzCaseStudy,
  thzResearchContext,
  type CaseStudySection,
  type ResearchFigure,
} from '@/data/roboticsPortfolioData';
import { CaseStudyLayout } from '@/components/case-study-layout';
import { SupportingMaterials } from '@/components/supporting-materials';
import { SystemFlowDiagram } from '@/components/system-diagrams';

function ResearchSection({ section }: { section: CaseStudySection }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-foreground mb-3 border-l-2 border-primary pl-4">
        {section.heading}
      </h2>
      <div className="space-y-3 pl-4">
        {section.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

function FigureCards({ figures }: { figures: ResearchFigure[] }) {
  const useTwoColumns = figures.length > 1;

  return (
    <div className={`mt-6 grid grid-cols-1 gap-5 pl-0 sm:pl-4 ${useTwoColumns ? 'md:grid-cols-2' : ''}`}>
      {figures.map((figure, index) => (
        <figure
          key={figure.src}
          className={`research-figure group ${useTwoColumns && figure.layout === 'wide' ? 'md:col-span-2' : ''}`}
        >
          <div className="research-figure__label" aria-hidden="true">
            <span>{figure.recordLabel ?? 'EXPERIMENTAL RECORD'}</span>
            <span>{String(index + 1).padStart(2, '0')}</span>
          </div>
          <a
            href={figure.src}
            target="_blank"
            rel="noopener noreferrer"
            className="research-figure__image-wrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <img
              src={figure.src}
              alt={figure.alt}
              loading="lazy"
              decoding="async"
              className="research-figure__image"
            />
          </a>
          <figcaption className="research-figure__caption">
            <h3 className="text-sm font-bold text-foreground leading-snug">{figure.title}</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{figure.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function ResearchThz() {
  const { record, sections } = thzCaseStudy;
  const sectionByHeading = (heading: string) =>
    sections.find((section) => section.heading === heading);
  const sampleFigures = thzResearchContext.figures.filter(
    (figure) => figure.placement === 'sample-preparation',
  );
  const analysisFigures = thzResearchContext.figures.filter(
    (figure) => figure.placement === 'analysis',
  );
  const supportingFigures = thzResearchContext.figures.filter(
    (figure) => figure.placement === 'supporting',
  );
  const referenceFigures = thzResearchContext.figures.filter(
    (figure) => figure.placement === 'reference-context',
  );
  const reliabilityFigures = thzResearchContext.figures.filter(
    (figure) => figure.placement === 'measurement-reliability',
  );

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
        <section className="border border-primary/30 bg-card/60 p-5 sm:p-6">
          <p className="font-mono text-[10px] tracking-[0.2em] text-primary">FACULTY SUPERVISION</p>
          <h2 className="mt-2 text-xl font-bold text-foreground">
            Research under Prof. Tae-In Jeon
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {thzResearchContext.supervisionNote}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {thzResearchContext.resources.map((resource) => (
              <a
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                title={resource.description}
                className="inline-flex items-center gap-2 border border-primary/50 px-3.5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                {resource.label}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        {['Research Context', 'Experimental Objective', 'Sample and Waveguide Information'].map(
          (heading) => {
            const section = sectionByHeading(heading);
            return section ? <ResearchSection key={heading} section={section} /> : null;
          },
        )}

        <section aria-labelledby="sample-preparation-record">
          <h2
            id="sample-preparation-record"
            className="text-xl font-bold text-foreground mb-3 border-l-2 border-primary pl-4"
          >
            Sample Preparation Record
          </h2>
          <p className="pl-4 text-sm text-muted-foreground leading-relaxed">
            The supplied laboratory slide documents the 2′-deoxycytidine coating procedure,
            high-humidity drying condition, and a visual check of the coated TPPWG under two laser
            conditions.
          </p>
          <FigureCards figures={sampleFigures} />
        </section>

        {sectionByHeading('THz Measurement Workflow') && (
          <ResearchSection section={sectionByHeading('THz Measurement Workflow')!} />
        )}

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

        <section aria-labelledby="reference-signal-context">
          <h2
            id="reference-signal-context"
            className="text-xl font-bold text-foreground mb-3 border-l-2 border-primary pl-4"
          >
            Reference Signal Context
          </h2>
          <p className="pl-4 text-sm text-muted-foreground leading-relaxed">
            The supplied comparison below provides context for interpreting THz signals in ambient
            conditions. It is clearly separated from the project’s own nucleoside measurement
            records.
          </p>
          <FigureCards figures={referenceFigures} />
        </section>

        {sectionByHeading('Frequency-Domain Analysis') && (
          <ResearchSection section={sectionByHeading('Frequency-Domain Analysis')!} />
        )}

        <section aria-labelledby="experimental-figures">
          <h2
            id="experimental-figures"
            className="text-xl font-bold text-foreground mb-3 border-l-2 border-primary pl-4"
          >
            Experimental Figures
          </h2>
          <p className="pl-4 text-sm text-muted-foreground leading-relaxed">
            The experiment summary is placed with the analysis it documents. The two raw spectrum
            captures remain separately labeled by measurement run because their sample-specific
            mapping has not yet been confirmed.
          </p>
          <FigureCards figures={analysisFigures} />
          <FigureCards figures={supportingFigures} />
        </section>

        {sectionByHeading('Measurement Reliability and Noise Investigation') && (
          <section aria-labelledby="measurement-reliability">
            <div id="measurement-reliability">
              <ResearchSection
                section={sectionByHeading('Measurement Reliability and Noise Investigation')!}
              />
            </div>
            <FigureCards figures={reliabilityFigures} />
          </section>
        )}

        {['Environmental Interference Mechanisms Considered', 'Mitigation and Process Improvements'].map(
          (heading) => {
            const section = sectionByHeading(heading);
            return section ? <ResearchSection key={heading} section={section} /> : null;
          },
        )}

        {['My Contribution', 'Tools and Methods', 'Challenges and Limitations', 'What I Learned'].map(
          (heading) => {
            const section = sectionByHeading(heading);
            return section ? <ResearchSection key={heading} section={section} /> : null;
          },
        )}

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
