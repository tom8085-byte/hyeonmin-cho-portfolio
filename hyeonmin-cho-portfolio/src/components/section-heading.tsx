interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-3">
        <div className="h-[1px] w-12 bg-primary" aria-hidden="true"></div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{title}</h2>
      </div>
      {subtitle && <p className="text-muted-foreground max-w-2xl text-base md:text-lg pl-16">{subtitle}</p>}
    </div>
  );
}
