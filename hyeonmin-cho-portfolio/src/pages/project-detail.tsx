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

const inbodyWalkthrough = [
  {
    image: '/projects/inbody-app-step-01.webp',
    title: 'Launch the Three-Meal Guide',
    description:
      'The welcome screen introduces the InBody-based personalized meal recommendation experience.',
    width: 2824,
    height: 1760,
  },
  {
    image: '/projects/inbody-app-step-02.webp',
    title: 'Enter User Information',
    description:
      'Basic profile information is collected before body-composition and goal setup.',
    width: 1324,
    height: 2100,
  },
  {
    image: '/projects/inbody-app-step-03.webp',
    title: 'Choose InBody Usage',
    description:
      'Users choose whether to connect InBody or continue with manual body-data entry.',
    width: 1316,
    height: 2108,
  },
  {
    image: '/projects/inbody-app-step-04.webp',
    title: 'Enter Body Measurements',
    description:
      'The manual path accepts weight, body-fat mass, skeletal-muscle mass, and basal metabolic rate.',
    width: 1320,
    height: 2112,
  },
  {
    image: '/projects/inbody-app-step-05.webp',
    title: 'Connect the InBody Service',
    description:
      'A guided flow explains how to install, register, and connect the InBody application.',
    width: 1268,
    height: 2028,
  },
  {
    image: '/projects/inbody-app-step-06.webp',
    title: 'Set Nutrition Goals',
    description:
      'Users configure the target weight, period, macronutrient ratio, and calorie distribution.',
    width: 1288,
    height: 2048,
  },
  {
    image: '/projects/inbody-app-step-07.webp',
    title: 'Review the Goal Summary',
    description:
      'The selected weight target and daily nutrient allocation are confirmed before matching.',
    width: 1308,
    height: 2108,
  },
  {
    image: '/projects/inbody-app-step-08.webp',
    title: 'Rate Ingredient Preferences',
    description:
      'A five-point survey captures food preferences as well as allergy and avoidance signals.',
    width: 1336,
    height: 2108,
  },
  {
    image: '/projects/inbody-app-step-09.webp',
    title: 'View the Weekly Meal Plan',
    description:
      'Personalized breakfast, lunch, and dinner recommendations are organized across seven days.',
    width: 1328,
    height: 2116,
  },
  {
    image: '/projects/inbody-app-step-10.webp',
    title: 'Inspect Meal Details',
    description:
      'Each meal reveals calories, macronutrients, and the complete ingredient composition.',
    width: 1316,
    height: 2104,
  },
] as const;

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

  if (projectId === 'inbody-meal-recommendation') {
    return (
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4 border-l-2 border-primary pl-4">
          Paper Figures
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pl-4">
          <figure className="border border-border bg-card/30 p-4 sm:p-6 flex flex-col">
            <a
              href="/projects/inbody-meal-recommendation-system-flow.webp"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the meal recommendation system flowchart in full resolution"
              className="flex aspect-[16/11] items-center justify-center bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <img
                src="/projects/inbody-meal-recommendation-system-flow.webp"
                alt="Flowchart showing personal information and goals entering InBody analysis, nutrient calculation, food-database filtering, meal-plan matching, repetition checking, and a personalized three-meal plan."
                width={1513}
                height={1039}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </a>
            <figcaption className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Figure 1. Proposed workflow linking body information, nutritional requirements,
              food data, meal matching, and repetition checking.
            </figcaption>
          </figure>

          <figure className="border border-border bg-card/30 p-4 sm:p-6 flex flex-col">
            <a
              href="/projects/inbody-application-architecture-en.svg"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the English InBody application architecture diagram in full resolution"
              className="flex aspect-[16/11] items-center justify-center bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <img
                src="/projects/inbody-application-architecture-en.svg"
                alt="English application architecture diagram connecting the InBody device, web server, FastAPI data server, Flutter app, user inputs, nutrient calculation, food preferences, meal matching, and personalized meal-plan generation."
                width={1900}
                height={1180}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </a>
            <figcaption className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Figure 2. Application architecture connecting the InBody device, FastAPI server,
              Flutter app, user inputs, nutrient calculation, and meal-plan generation.
            </figcaption>
          </figure>

          <figure className="xl:col-span-2 border border-border bg-card/30 p-4 sm:p-6">
            <a
              href="/projects/inbody-meal-recommendation-10-day-results.webp"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the ten-day meal recommendation results in full resolution"
              className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <img
                src="/projects/inbody-meal-recommendation-10-day-results.webp"
                alt="Ten-day table of simulated breakfast, lunch, dinner, carbohydrate, protein, fat, and calorie results generated by the meal-matching algorithm."
                width={2239}
                height={1205}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain bg-white"
              />
            </a>
            <figcaption className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Figure 3. Ten-day sample from the 30-day synthetic-user simulation. Open the
              figure to inspect the full-resolution table.
            </figcaption>
          </figure>
        </div>
      </section>
    );
  }

  if (projectId === 'deep-learning-code-development') {
    return <DeepLearningComparisonDiagram />;
  }

  if (projectId === 'machine-learning-textbook-contribution') {
    return (
      <SystemFlowDiagram
        label="TEXTBOOK CONTRIBUTION WORKFLOW"
        stages={[
          'Data Processing Foundations',
          'Regression and ML Examples',
          'R/Python Testing',
          'Figures and Proofreading',
        ]}
      />
    );
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

function ApplicationWalkthrough({ projectId }: { projectId: string }) {
  if (projectId !== 'inbody-meal-recommendation') return null;

  return (
    <section>
      <div className="mb-6 border-l-2 border-primary pl-4">
        <p className="mb-2 font-mono text-[11px] font-semibold tracking-[0.2em] text-primary">
          PROTOTYPE WALKTHROUGH
        </p>
        <h2 className="text-xl font-bold text-foreground">Application Walkthrough</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          The prototype guides a user from onboarding and body-composition setup to goal
          definition, ingredient preferences, and a seven-day personalized meal plan.
        </p>
      </div>

      <div className="mx-auto grid max-w-[740px] grid-cols-1 gap-6 pl-4 md:grid-cols-2">
        {inbodyWalkthrough.map((step, index) => {
          const isOpeningScreen = index === 0;
          const isFinalScreen = index === inbodyWalkthrough.length - 1;

          return (
            <figure
              key={step.image}
              className={`group flex flex-col border border-border bg-card/30 p-4 transition-colors hover:border-primary/50 sm:p-5 ${
                isOpeningScreen ? 'md:col-span-2' : ''
              } ${
                isFinalScreen
                  ? 'md:col-span-2 md:mx-auto md:w-1/2'
                  : ''
              }`}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-xs font-semibold tracking-[0.16em] text-primary">
                  STEP {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>

              <a
                href={step.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open step ${index + 1}, ${step.title}, in full resolution`}
                className={`flex overflow-hidden border border-border/80 bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                  isOpeningScreen ? 'aspect-[16/10]' : 'aspect-[5/8]'
                }`}
              >
                <img
                  src={step.image}
                  alt={`${step.title} screen from the Three-Meal Guide application.`}
                  width={step.width}
                  height={step.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </a>

              <figcaption className="mt-4">
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>
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
      eyebrow={
        project.id === 'inbody-meal-recommendation'
          ? 'ACADEMIC PAPER'
          : project.id === 'machine-learning-textbook-contribution' ||
              project.id === 'deep-learning-code-development'
            ? 'TECHNICAL CONTRIBUTION'
            : 'ENGINEERING PROJECT'
      }
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

        <ApplicationWalkthrough projectId={project.id} />

        {publicSections.map((section) => (
          <Section key={section.heading} section={section} />
        ))}

        <Technologies project={project} />
        <SupportingMaterials record={project} />
      </div>
    </CaseStudyLayout>
  );
}
