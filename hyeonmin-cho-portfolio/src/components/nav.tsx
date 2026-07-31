import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, personal } from '@/data/roboticsPortfolioData';

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-[1180px] px-4 sm:px-6 h-14 flex items-center justify-between gap-4"
      >
        <a
          href="#hero"
          className="font-mono text-sm font-bold text-primary tracking-wider focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
        >
          HYEONMIN CHO
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
            >
              {link.label}
            </a>
          ))}
          {personal.cvFile && (
            <a
              href={`${import.meta.env.BASE_URL}${personal.cvFile.replace(/^\//, '')}`}
              className="ml-2 px-3 py-1.5 text-sm font-semibold border border-primary/50 text-primary hover:bg-primary/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
            >
              Download CV
            </a>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-[1180px] px-4 py-3 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
              >
                {link.label}
              </a>
            ))}
            {personal.cvFile && (
              <a
                href={`${import.meta.env.BASE_URL}${personal.cvFile.replace(/^\//, '')}`}
                onClick={() => setOpen(false)}
                className="mt-1 px-2 py-2.5 text-sm font-semibold text-primary"
              >
                Download CV
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
