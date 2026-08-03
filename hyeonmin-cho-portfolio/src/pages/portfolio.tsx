import { useEffect } from 'react';
import { Navigation } from '@/components/nav';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { ResearchDirection } from '@/components/research-direction';
import { FeaturedResearch } from '@/components/featured-research';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Education } from '@/components/education';
import { Experience } from '@/components/experience';
import { Training } from '@/components/training';
import { Honors } from '@/components/honors';
import { Contact } from '@/components/contact';

const PORTFOLIO_SCROLL_KEY = 'portfolio-scroll-position';
const RESTORE_PORTFOLIO_SCROLL_KEY = 'restore-portfolio-scroll';

export default function Portfolio() {
  useEffect(() => {
    let frame = 0;

    const saveScrollPosition = () => {
      sessionStorage.setItem(PORTFOLIO_SCROLL_KEY, String(window.scrollY));
    };

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        saveScrollPosition();
        frame = 0;
      });
    };

    const shouldRestore = sessionStorage.getItem(RESTORE_PORTFOLIO_SCROLL_KEY) === 'true';
    const savedPosition = Number(sessionStorage.getItem(PORTFOLIO_SCROLL_KEY) ?? 0);

    if (shouldRestore) {
      sessionStorage.removeItem(RESTORE_PORTFOLIO_SCROLL_KEY);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          window.scrollTo({ top: Number.isFinite(savedPosition) ? savedPosition : 0, behavior: 'auto' });
        });
      });
    } else {
      saveScrollPosition();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
      saveScrollPosition();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ResearchDirection />
        <FeaturedResearch />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Training />
        <Honors />
        <Contact />
      </main>

      <footer className="py-6 text-center border-t border-border bg-background">
        <p className="text-xs font-mono text-muted-foreground">
          &copy; {new Date().getFullYear()} Hyeonmin Cho
        </p>
      </footer>
    </div>
  );
}
