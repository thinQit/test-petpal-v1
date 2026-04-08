'use client';

import { Button } from '@/components/ui/button';

interface HeroMinimalProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageUrl?: string;
}

export function HeroMinimal({ headline, subheadline, primaryCta, secondaryCta, imageUrl }: HeroMinimalProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className={'grid items-center gap-12 ' + (imageUrl ? 'md:grid-cols-2' : '')}>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              {subheadline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="px-8" asChild>
                <a href={primaryCta.href}>{primaryCta.label}</a>
              </Button>
              {secondaryCta && (
                <Button variant="outline" size="lg" className="px-8" asChild>
                  <a href={secondaryCta.href}>{secondaryCta.label}</a>
                </Button>
              )}
            </div>
          </div>
          {imageUrl && (
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <img src={imageUrl} alt="" className="h-full w-full object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}