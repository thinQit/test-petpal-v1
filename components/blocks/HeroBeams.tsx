"use client";
import { BackgroundBeams } from "@/components/ui/backgrounds/background-beams";
import { Highlight } from "@/components/ui/text/hero-highlight";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroBeamsProps {
  headline: string;
  highlightText: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function HeroBeams({ headline, highlightText, subheadline, primaryCta, secondaryCta }: HeroBeamsProps) {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-background antialiased">
      <BackgroundBeams />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {headline}{" "}
          <Highlight className="text-black dark:text-foreground">{highlightText}</Highlight>
        </motion.h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          {subheadline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-neutral-600 text-foreground hover:bg-white/10" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}