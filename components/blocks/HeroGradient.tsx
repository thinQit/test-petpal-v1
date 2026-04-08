'use client';

import { Button } from '@/components/ui/button';

interface HeroGradientProps {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function HeroGradient({ badge, headline, subheadline, primaryCta, secondaryCta }: HeroGradientProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-24 md:py-36">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        {badge && (
          <span className="mb-6 inline-block rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground">
            {badge}
          </span>
        )}
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          {subheadline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}