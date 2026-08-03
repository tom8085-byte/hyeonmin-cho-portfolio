import { Mail, Github, Linkedin } from 'lucide-react';
import { contact, personal } from '@/data/roboticsPortfolioData';

export function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-border relative overflow-hidden scroll-mt-14">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" aria-hidden="true"></div>

      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-4">{contact.heading}</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-10">Contact</h2>

          <a
            href={contact.emailLink}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-sm tracking-wide hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            {contact.primaryButton}
          </a>

          {(personal.githubUrl || personal.linkedinUrl) && (
            <div className="flex justify-center gap-4 mt-8">
              {personal.githubUrl && (
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {personal.linkedinUrl && (
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          )}

          <p className="mt-12 font-mono text-xs text-muted-foreground">
            {personal.name} ({personal.koreanName}) · {personal.location} · {personal.email}
          </p>
        </div>
      </div>
    </section>
  );
}
