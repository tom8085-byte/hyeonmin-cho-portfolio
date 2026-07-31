import { ArrowDown, ArrowRight } from 'lucide-react';

function FlowNode({ label, emphasis = false }: { label: string; emphasis?: boolean }) {
  return (
    <div
      className={`min-h-16 px-3 py-3 border flex items-center justify-center text-center text-xs font-mono leading-snug ${
        emphasis
          ? 'border-primary/60 bg-primary/5 text-primary'
          : 'border-border bg-background text-foreground/85'
      }`}
    >
      {label}
    </div>
  );
}

export function SystemFlowDiagram({
  label,
  stages,
}: {
  label: string;
  stages: string[];
}) {
  return (
    <figure
      role="img"
      aria-label={`${label}: ${stages.join(' to ')}`}
      className="border border-border bg-card/35 p-5 sm:p-7"
    >
      <figcaption className="font-mono text-[11px] tracking-[0.2em] text-primary mb-5">
        {label}
      </figcaption>

      <div className="hidden lg:grid items-center gap-2" style={{ gridTemplateColumns: `repeat(${stages.length * 2 - 1}, minmax(0, auto))` }}>
        {stages.map((stage, index) => (
          <div key={stage} className="contents">
            <FlowNode label={stage} emphasis={index === 0 || index === stages.length - 1} />
            {index < stages.length - 1 && (
              <ArrowRight className="w-4 h-4 text-primary mx-auto" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      <div className="lg:hidden flex flex-col items-center gap-2">
        {stages.map((stage, index) => (
          <div key={stage} className="contents">
            <div className="w-full">
              <FlowNode label={stage} emphasis={index === 0 || index === stages.length - 1} />
            </div>
            {index < stages.length - 1 && (
              <ArrowDown className="w-4 h-4 text-primary" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </figure>
  );
}

export function DeepLearningComparisonDiagram() {
  return (
    <div className="space-y-3">
      <SystemFlowDiagram
        label="COMPARATIVE EXPERIMENT DESIGN"
        stages={['Common MNIST Setup', 'DNN · CNN · RNN · Transformer', 'Consistent Evaluation', 'Technical Review']}
      />
      <p className="text-xs text-muted-foreground leading-relaxed">
        The instructional comparison uses common data and reproducibility settings while retaining
        architecture-specific examples.
      </p>
    </div>
  );
}
