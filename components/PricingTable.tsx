"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

interface PricingTableProps {
  headline: string;
  subheadline?: string;
  tiers: PricingTier[];
}

export default function PricingTable({
  headline = "Simple plans for every pet parent",
  subheadline = "Choose the care package that fits your schedule and your pet’s needs.",
  tiers = [],
}: Partial<PricingTableProps>) {
  const defaultTiers: PricingTier[] = [
    {
      name: "Play Day",
      price: "$39",
      period: "visit",
      description: "Perfect for occasional daycare.",
      features: ["Half-day supervised play", "Snack & hydration breaks", "Daily photo update"],
      ctaLabel: "Book Play Day",
      ctaHref: "#",
      highlighted: false,
    },
    {
      name: "Happy Paws",
      price: "$149",
      period: "month",
      description: "Our most popular monthly package.",
      features: ["4 full daycare visits", "1 grooming refresh", "Priority booking access", "Behavior notes for parents"],
      ctaLabel: "Choose Happy Paws",
      ctaHref: "#",
      highlighted: true,
    },
    {
      name: "VIP Tail Club",
      price: "$289",
      period: "month",
      description: "Premium support for active pets.",
      features: ["8 full daycare visits", "2 grooming sessions", "Pick-up/drop-off support", "Dedicated care coordinator"],
      ctaLabel: "Go VIP",
      ctaHref: "#",
      highlighted: false,
    },
  ];

  const data = tiers.length ? tiers : defaultTiers;

  return (
    <section className="py-20 md:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {data.map(function (tier, i) {
            return (
              <Card key={i} className={`relative flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm ${tier.highlighted ? "border-primary ring-2 ring-primary" : "border-border"} card-hover`}>
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-foreground">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">/{tier.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map(function (feature, j) {
                      return (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 text-primary" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full transition-all duration-200 hover:scale-105" variant={tier.highlighted ? "default" : "outline"} asChild>
                    <a href={tier.ctaHref}>{tier.ctaLabel}</a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
