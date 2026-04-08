"use client";
import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/backgrounds/background-gradient-animation";
import { TypewriterEffect } from "@/components/ui/text/typewriter-effect";
import { Button } from "@/components/ui/button";

interface HeroGradientBlobProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  gradientStart?: string;
  gradientEnd?: string;
  blobColors?: { first?: string; second?: string; third?: string; fourth?: string; fifth?: string };
}

export default function HeroGradientBlob({
  title = "Build something amazing today",
  subtitle = "The next generation platform for modern teams",
  ctaLabel = "Get Started",
  ctaHref = "#",
  secondaryCtaLabel,
  secondaryCtaHref,
  gradientStart = "rgb(108, 0, 162)",
  gradientEnd = "rgb(0, 17, 82)",
  blobColors,
}: HeroGradientBlobProps) {
  var titleWords = title.split(" ").map(function(w) { return { text: w }; });
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart={gradientStart}
      gradientBackgroundEnd={gradientEnd}
      firstColor={blobColors && blobColors.first ? blobColors.first : "18, 113, 255"}
      secondColor={blobColors && blobColors.second ? blobColors.second : "221, 74, 255"}
      thirdColor={blobColors && blobColors.third ? blobColors.third : "100, 220, 255"}
      fourthColor={blobColors && blobColors.fourth ? blobColors.fourth : "200, 50, 50"}
      fifthColor={blobColors && blobColors.fifth ? blobColors.fifth : "180, 180, 50"}
      containerClassName="min-h-screen"
    >
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <TypewriterEffect words={titleWords} className="text-white" />
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            {subtitle}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-white/30 text-white hover:bg-white/10" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}