export const dynamic = 'force-dynamic';

import HeroWaves from '@/components/HeroWaves'
import PricingTable from '@/components/PricingTable'
import ComparisonTable from '@/components/ComparisonTable'
import CTASparkles from '@/components/CTASparkles'

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroWaves
        title="Pricing that’s easy to understand (and easy to love)."
        subtitle="Pick pay-as-you-go or save with bundles."
        ctaLabel="Book care"
        ctaHref="/contact"
        secondaryCtaLabel="How it works"
        secondaryCtaHref="/features"
      />
      <section className="py-20 md:py-24 animate-fade-in-up">
        <PricingTable
          headline="Packages & bundles"
          subheadline="Best for recurring routines and travel coverage."
          tiers={[
            { name: 'Starter', price: '$0', period: 'membership', description: 'Occasional bookings', features: ['On-demand booking', 'Photo updates', 'Visit summaries'], ctaLabel: 'Choose Starter', ctaHref: '/contact' },
            { name: 'Weekly Walker', price: '$199', period: 'per month', description: 'Workweek routines', features: ['10 × 30-min walks', 'Priority scheduling', 'Consistency matching'], ctaLabel: 'Choose Weekly Walker', ctaHref: '/contact', highlighted: true },
            { name: 'Travel Sitter Bundle', price: '$249', period: 'bundle', description: 'Trips and weekends away', features: ['8 × 30-min drop-ins', 'Medication support', 'Home check'], ctaLabel: 'Choose Travel Bundle', ctaHref: '/contact' },
          ]}
        />
      </section>
      <section className="py-20 md:py-24 bg-muted animate-fade-in-up">
        <ComparisonTable />
      </section>
      <section className="py-20 md:py-24 animate-fade-in-up">
        <CTASparkles title="Not sure what to book?" ctaLabel="Get a recommendation" ctaHref="/contact" secondaryCtaLabel="How it works" secondaryCtaHref="/features" />
      </section>
    </main>
  )
}
