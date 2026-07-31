import { useEffect } from 'react';
import {
  projectCaseStudies,
  projects,
  type CaseStudySection,
  type ContentRecord,
} from '@/data/roboticsPortfolioData';
import { CaseStudyLayout } from '@/components/case-study-layout';
import { SupportingMaterials } from '@/components/supporting-materials';
import { DeepLearningComparisonDiagram, SystemFlowDiagram } from '@/components/system-diagrams';
import NotFound from './not-found';

function Section({ section }: { section: CaseStudySection }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-foreground mb-3 border-l-2 border-primary pl-4">
        {section.heading}
      </h2>
      <div className="space-y-3 pl-4">
        {section.paragraphs.filter(Boolean).map((paragraph) => (
          <p key={paragraph} className="text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

function ProjectDiagram({ projectId }: { projectId: string }) {
  if (projectId === 'smart-manhole-monitoring') {
    return (
      <SystemFlowDiagram
        label="SYSTEM ARCHITECTURE"
        stages={[
          'Ultrasonic + Temperature Sensors',
          'Arduino Uno WiFi',
          'MQTT',
          'Raspberry Pi 5 + Python',
          'Monitoring + LED Alerts',
        ]}
      />
    );
  }

  if (projectId === 'deep-learning-code-development') {
    return <DeepLearningComparisonDiagram />;
  }

  return null;
}

function Technologies({ project }: { project: ContentRecord }) {
  if (!project.technologies?.length) return null;

  return (
    <section>
      <h2 className="text-xl font-bold text-foreground mb-3 border-l-2 border-primary pl-4">
        Technologies and Methods
      </h2>
      <ul className="flex flex-wrap gap-2 list-none pl-4">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="px-2.5 py-1 text-xs font-mono text-foreground/80 bg-secondary border border-border"
          >
            {technology}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ProjectDetail({ projectId }: { projectId: string }) {
  const project = projects.find((item) => item.id === projectId && item.visible);
  const caseStudy = projectCaseStudies[projectId];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | Hyeonmin Cho`;
    }
    return () => {
      document.title = 'Hyeonmin Cho | Electrical & Electronics Engineering Portfolio';
    };
  }, [project]);

  if (!project || !caseStudy) return <NotFound />;

  const publicSections = caseStudy.sections.filter((section) =>
    section.paragraphs.some((paragraph) => Boolean(paragraph.trim())),
  );

  return (
    <CaseStudyLayout
      eyebrow="ENGINEERING PROJECT"
      title={project.title}
      originalTitle={project.originalTitle}
      meta={[project.role ?? '', project.organization ?? '', project.period ?? '', project.location ?? '']}
    >
      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3 border-l-2 border-primary pl-4">
            Project Overview
          </h2>
          <p className="pl-4 text-muted-foreground leading-relaxed">
            {project.detailedDescription ?? project.shortDescription}
          </p>
        </section>

        <ProjectDiagram projectId={project.id} />

        {publicSections.map((section) => (
          <Section key={section.heading} section={section} />
        ))}

        <Technologies project={project} />
        <SupportingMaterials record={project} />
      </div>
    </CaseStudyLayout>
  );
}
