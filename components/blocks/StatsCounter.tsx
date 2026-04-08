"use client";

interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  bgColor?: string;
}

export function StatsCounter({ stats, bgColor }: StatsCounterProps) {
  return (
    <section className={'py-16 ' + (bgColor || 'bg-primary text-primary-foreground')}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className={'grid gap-8 text-center ' + ('grid-cols-2 md:grid-cols-' + Math.min(stats.length, 4))}>
          {stats.map(function(stat, i) {
            return (
              <div key={i}>
                <p className="text-4xl font-bold md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-wider opacity-80">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}