"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/backgrounds/wavy-background";
import { TextGenerateEffect } from "@/components/ui/text/text-generate-effect";
import { Button } from "@/components/ui/button";

interface HeroWavesProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  waveColors?: string[];
}

export default function HeroWaves({
  title = "Loving care for every wag, purr, and zoomie",
  subtitle = "Trusted pet services designed for busy families and happy companions.",
  ctaLabel = "Book a Meet & Greet",
  ctaHref = "#",
  secondaryCtaLabel = "Explore Services",
  secondaryCtaHref = "#",
  waveColors,
}: HeroWavesProps) {
  return (
    <WavyBackground
      colors={waveColors || ["#2EC4B6", "#FFD166", "#EF476F", "#FFF8F0", "#2EC4B6"]}
      backgroundFill="var(--background)"
      waveOpacity={0.5}
      speed="slow"
      containerClassName="relative min-h-screen"
    >
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center animate-fade-in-up">
        <TextGenerateEffect words={title} className="text-4xl font-bold text-foreground md:text-6xl lg:text-7xl" />
        {subtitle && <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="transition-all duration-200 hover:scale-105" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="border-primary text-foreground transition-all duration-200 hover:scale-105" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </WavyBackground>
  );
}
