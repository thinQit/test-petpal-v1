"use client";
import { SparklesCore } from "@/components/ui/backgrounds/sparkles";
import { Button } from "@/components/ui/button";

interface CTASparklesProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  sparkleColor?: string;
}

export default function CTASparkles({
  headline = "Ready to give your pet their happiest routine?",
  description = "Book a visit in under two minutes and let our friendly team tailor the perfect care plan.",
  ctaLabel = "Book Now",
  ctaHref = "#",
  secondaryCtaLabel = "View Services",
  secondaryCtaHref = "#",
  sparkleColor = "#FFD166",
}: Partial<CTASparklesProps>) {
  return (
    <section className="relative h-[30rem] w-full bg-background flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-border">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <SparklesCore id="cta-sparkles" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} particleColor={sparkleColor} />
      </div>
      <div className="relative z-10 px-4 text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">{headline}</h2>
        {description && <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-lg">{description}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
    </section>
  );
}
