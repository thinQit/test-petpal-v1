"use client";
import { LampContainer } from "@/components/ui/effects/lamp-effect";
import { FlipWords } from "@/components/ui/text/flip-words";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroLampProps {
  headline: string;
  flipWords: string[];
  subheadline?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function HeroLamp({ headline, flipWords, subheadline, primaryCta, secondaryCta }: HeroLampProps) {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {headline} <br />
        <FlipWords words={flipWords} className="text-cyan-400" />
      </motion.h1>
      {subheadline && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-4 max-w-2xl text-center text-lg text-slate-400"
        >
          {subheadline}
        </motion.p>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <Button size="lg" className="px-8 py-6 text-lg bg-cyan-500 hover:bg-cyan-600 text-white" asChild>
          <a href={primaryCta.href}>{primaryCta.label}</a>
        </Button>
        {secondaryCta && (
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
            <a href={secondaryCta.href}>{secondaryCta.label}</a>
          </Button>
        )}
      </motion.div>
    </LampContainer>
  );
}