import { useEffect, useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import {
  experiences,
  training,
  type ExperienceGalleryImage,
} from '@/data/roboticsPortfolioData';
import { CaseStudyLayout } from '@/components/case-study-layout';
import NotFound from './not-found';

export default function ExperienceDetail({ experienceId }: { experienceId: string }) {
  const [expandedImage, setExpandedImage] = useState<ExperienceGalleryImage | null>(null);
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

  useEffect(() => {
    if (!expandedImage) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpandedImage(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [expandedImage]);

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
      <div className="space-y-12">
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
                  width={experience.imageWidth ?? 1523}
                  height={experience.imageHeight ?? 1033}
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

          {experience.galleryImages && experience.galleryImages.length > 0 && (
            <div
              className={
                experience.galleryDisplay === 'compact-grid'
                  ? 'experience-gallery-grid'
                  : 'experience-gallery-stack'
              }
            >
              {experience.galleryImages.map((image) => (
                <figure
                  key={image.src}
                  className={`experience-record ${
                    experience.galleryDisplay === 'compact-grid'
                      ? 'experience-record--compact'
                      : 'experience-record--portrait'
                  }`}
                >
                  <div className="experience-record__label">
                    <span>{image.label}</span>
                    <span>{image.period ?? experience.period}</span>
                  </div>
                  <div className="experience-record__image-wrap">
                    {image.clickToEnlarge ? (
                      <button
                        type="button"
                        className="experience-record__expand-button"
                        onClick={() => setExpandedImage(image)}
                        aria-label={`View larger: ${image.alt}`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          loading="lazy"
                          decoding="async"
                          className="experience-record__image"
                        />
                        <span className="experience-record__expand-label">
                          <ZoomIn className="h-4 w-4" aria-hidden="true" />
                          View larger
                        </span>
                      </button>
                    ) : (
                      <img
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        loading="lazy"
                        decoding="async"
                        className="experience-record__image"
                      />
                    )}
                  </div>
                  <figcaption className="experience-record__caption">{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </section>

        {experience.activities && experience.activities.length > 0 && (
          <section aria-labelledby="selected-supporter-activities">
            <h2
              id="selected-supporter-activities"
              className="text-xl font-bold text-foreground mb-3 border-l-2 border-primary pl-4"
            >
              Selected Supporter Activities
            </h2>
            <p className="pl-4 text-sm text-muted-foreground leading-relaxed">
              Selected public-engagement and volunteer activities completed through the supporter
              program.
            </p>

            <ol className="mt-6 ml-2 space-y-4 border-l border-border pl-6 sm:ml-6">
              {experience.activities.map((activity) => (
                <li key={`${activity.date}-${activity.title}`} className="relative">
                  <span
                    className="absolute -left-[1.72rem] top-5 h-2.5 w-2.5 border border-primary bg-background"
                    aria-hidden="true"
                  />
                  <article className="border border-border bg-card/60 p-4 sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-[10px] tracking-[0.1em] text-primary">
                      <time>{activity.date}</time>
                      <span>{activity.duration}</span>
                    </div>
                    <h3 className="mt-2 text-base font-bold text-foreground">{activity.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {activity.description}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>

      {expandedImage && (
        <div
          className="experience-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image view"
          onClick={() => setExpandedImage(null)}
        >
          <button
            type="button"
            className="experience-lightbox__close"
            onClick={() => setExpandedImage(null)}
            aria-label="Close expanded image"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="experience-lightbox__content" onClick={(event) => event.stopPropagation()}>
            <img
              src={expandedImage.src}
              alt={expandedImage.alt}
              width={expandedImage.width}
              height={expandedImage.height}
              className="experience-lightbox__image"
            />
            <p className="experience-lightbox__caption">{expandedImage.caption}</p>
          </div>
        </div>
      )}
    </CaseStudyLayout>
  );
}
