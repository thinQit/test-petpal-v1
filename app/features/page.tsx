export const dynamic = 'force-dynamic';

import HeroWaves from '@/components/HeroWaves'
import StepsTimeline from '@/components/StepsTimeline'
import TestimonialsMasonry from '@/components/TestimonialsMasonry'
import CTASparkles from '@/components/CTASparkles'

export default function FeaturesPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroWaves
        title="Care that feels personal—because it is."
        subtitle="From first booking to photo updates, PetPal is built around trust and clear communication."
        ctaLabel="Start a booking"
        ctaHref="/contact"
        secondaryCtaLabel="Meet caretakers"
        secondaryCtaHref="/about"
      />
      <section className="py-20 md:py-24 animate-fade-in-up">
        <StepsTimeline />
      </section>
      <section className="py-20 md:py-24 bg-muted animate-fade-in-up">
        <TestimonialsMasonry />
      </section>
      <section className="py-20 md:py-24 animate-fade-in-up">
        <CTASparkles title="Ready for reliable pet care?" ctaLabel="Start booking" ctaHref="/contact" secondaryCtaLabel="Meet the team" secondaryCtaHref="/about" />
      </section>
    </main>
  )
}
