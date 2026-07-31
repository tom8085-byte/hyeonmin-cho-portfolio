import { useEffect } from 'react';
import { experiences, training } from '@/data/roboticsPortfolioData';
import { CaseStudyLayout } from '@/components/case-study-layout';
import NotFound from './not-found';

export default function ExperienceDetail({ experienceId }: { experienceId: string }) {
  const experience = [...experiences, ...training].find(
    (item) => item.id === experienceId && item.visible && item.route?.startsWith('/experience/'),
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (experience) {
      document.title = `${experience.title} | Hyeonmin Cho`;
    }
    return () => {
      document.title = 'Hyeonmin Cho | Electrical & Electronics Engineering Portfolio';
    };
  }, [experience]);

  if (!experience) return <NotFound />;

  return (
    <CaseStudyLayout
      eyebrow={training.some((item) => item.id === experience.id) ? 'PROFESSIONAL TRAINING' : 'EXPERIENCE'}
      title={experience.title}
      meta={[
        experience.role ?? '',
        experience.organization ?? '',
        experience.location ?? '',
        experience.period ?? '',
      ]}
    >
      <section>
        <h2 className="text-xl font-bold text-foreground mb-3 border-l-2 border-primary pl-4">
          Experience Overview
        </h2>
        <p className="pl-4 text-muted-foreground leading-relaxed">
          {experience.detailedDescription ?? experience.shortDescription}
        </p>

        {experience.image && (
          <figure className="experience-record mt-8 ml-4">
            <div className="experience-record__label">
              <span>FIELD RECORD</span>
              <span>{experience.period}</span>
            </div>
            <div className="experience-record__image-wrap">
              <img
                src={experience.image}
                alt={experience.imageAlt ?? ''}
                width="1523"
                height="1033"
                loading="lazy"
                decoding="async"
                className="experience-record__image"
              />
            </div>
            {experience.imageCaption && (
              <figcaption className="experience-record__caption">
                {experience.imageCaption}
              </figcaption>
            )}
          </figure>
        )}
      </section>
    </CaseStudyLayout>
  );
}
