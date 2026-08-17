import { useEffect } from 'react';
import { CaseStudyLayout } from '@/components/case-study-layout';
import { honors, militaryCommendationDetail } from '@/data/roboticsPortfolioData';
import NotFound from './not-found';

export default function HonorDetail({ honorId }: { honorId: string }) {
  const honor = honors.find(
    (item) => item.id === honorId && item.visible && item.route?.startsWith('/honors/'),
  );
  const detail = honorId === militaryCommendationDetail.honorId ? militaryCommendationDetail : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (honor && detail) {
      document.title = `${honor.title} | Hyeonmin Cho`;
    }
    return () => {
      document.title = 'Hyeonmin Cho | Electrical & Electronics Engineering Portfolio';
    };
  }, [honor, detail]);

  if (!honor || !detail) return <NotFound />;

  return (
    <CaseStudyLayout
      eyebrow="HONOR & AWARD"
      title={honor.title}
      meta={[honor.organization ?? '', detail.date]}
    >
      <div className="space-y-12">
        <section aria-labelledby="english-translation">
          <h2
            id="english-translation"
            className="text-xl font-bold text-foreground mb-3 border-l-2 border-primary pl-4"
          >
            Unofficial English Translation
          </h2>
          <p className="pl-4 text-xs font-mono leading-relaxed text-muted-foreground">
            {detail.translationNote}
          </p>
          <div className="mt-6 border border-border bg-card/60 p-5 sm:p-7">
            {detail.englishTranslation.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`whitespace-pre-line leading-relaxed ${
                  index === 0
                    ? 'text-center text-lg font-bold text-foreground'
                    : index === 1
                      ? 'mt-2 text-center font-medium text-foreground'
                      : 'mt-5 text-sm text-muted-foreground'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section aria-labelledby="original-certificate">
          <h2
            id="original-certificate"
            className="text-xl font-bold text-foreground mb-3 border-l-2 border-primary pl-4"
          >
            Original Certificate
          </h2>
          <figure className="experience-record experience-record--portrait mt-6">
            <div className="experience-record__label">
              <span>ORIGINAL CERTIFICATE · {detail.certificateNumber}</span>
              <span>{detail.date}</span>
            </div>
            <div className="experience-record__image-wrap">
              <img
                src={detail.image}
                alt={detail.imageAlt}
                width={detail.imageWidth}
                height={detail.imageHeight}
                loading="lazy"
                decoding="async"
                className="experience-record__image"
              />
            </div>
            <figcaption className="experience-record__caption">
              Republic of Korea Army · 2nd Battalion, 169th Infantry Brigade
            </figcaption>
          </figure>
        </section>

      </div>
    </CaseStudyLayout>
  );
}
