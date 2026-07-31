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

export default function Portfolio() {
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
