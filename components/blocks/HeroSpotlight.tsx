"use client";
import { Spotlight } from "@/components/ui/backgrounds/spotlight";
import { TypewriterEffect } from "@/components/ui/text/typewriter-effect";
import { Button } from "@/components/ui/button";

interface HeroSpotlightProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  }

export function HeroSpotlight({ headline, subheadline, primaryCta, secondaryCta }: HeroSpotlightProps) {
  var words = headline.split(" ").map(function(word) { return { text: word }; });
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex flex-col items-center justify-center overflow-hidden rounded-md bg-background antialiased bg-grid-foreground/[0.02]">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="relative z-10 mx-auto w-full max-w-4xl p-4 pt-20 md:pt-0 text-center">
        <TypewriterEffect
          words={words}
          className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        />
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          {subheadline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-neutral-500 text-foreground hover:bg-white/10" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}