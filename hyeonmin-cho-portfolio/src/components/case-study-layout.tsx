import type { MouseEvent, ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowLeft } from 'lucide-react';

const RESTORE_PORTFOLIO_SCROLL_KEY = 'restore-portfolio-scroll';

interface CaseStudyLayoutProps {
  eyebrow?: string;
  title: string;
  originalTitle?: string;
  meta: string[];
  children: ReactNode;
}

export function CaseStudyLayout({ eyebrow, title, originalTitle, meta, children }: CaseStudyLayoutProps) {
  const [, navigate] = useLocation();

  const handleBackToPortfolio = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    sessionStorage.setItem(RESTORE_PORTFOLIO_SCROLL_KEY, 'true');
    navigate('/');
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[860px] px-4 sm:px-6 py-16">
        <Link
          href="/"
          onClick={handleBackToPortfolio}
          className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Portfolio
        </Link>

        <header className="mb-12 pb-8 border-b border-border">
          {eyebrow && <p className="font-mono text-xs tracking-[0.25em] text-primary mb-3">{eyebrow}</p>}
          <h1 className="text-3xl md:text-4xl font-black text-foreground leading-tight">{title}</h1>
          {originalTitle && <p className="mt-2 text-lg text-muted-foreground">{originalTitle}</p>}
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-muted-foreground">
            {meta.filter(Boolean).map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </header>

        {children}

        <footer className="mt-16 pt-8 border-t border-border">
          <Link
            href="/"
            onClick={handleBackToPortfolio}
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Portfolio
          </Link>
        </footer>
      </div>
    </main>
  );
}
