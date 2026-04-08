"use client";

import React from "react";
import { Heart, Shield, Sparkles, Scissors, Bone, Home, PawPrint, MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { MapPin, 
  Heart,
  Shield,
  Sparkles,
  Scissors,
  Bone,
  Home,
  PawPrint,
};

export default function FeaturesGrid({
  badge = "Our Services",
  headline = "Everything your pet needs, all in one caring place",
  subheadline = "From grooming and daycare to training support, we provide trusted care tailored to your pet’s personality.",
  features = [],
}: Partial<FeaturesGridProps>) {
  const defaultFeatures: Feature[] = [
    { icon: "Scissors", title: "Gentle Grooming", description: "Baths, trims, and coat care done with calm handling and pet-safe products." },
    { icon: "Home", title: "Daycare & Boarding", description: "Supervised play, cozy rest spaces, and attentive routines while you’re away." },
    { icon: "Bone", title: "Personalized Feeding", description: "Meal plans and treat schedules that match your pet’s dietary needs." },
    { icon: "Shield", title: "Safety First", description: "Clean, secure facilities with trained staff and careful pet introductions." },
    { icon: "Sparkles", title: "Enrichment Activities", description: "Interactive toys, social play, and stimulation to keep tails wagging." },
    { icon: "Heart", title: "Compassionate Team", description: "Experienced caregivers who treat every pet like part of the family." },
  ];

  const items = features.length ? features : defaultFeatures;

  return (
    <section className="py-20 md:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || PawPrint;
            return (
              <Card key={index} className="rounded-2xl border bg-card text-card-foreground shadow-sm card-hover">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {React.createElement(Icon, { className: "h-6 w-6" })}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
