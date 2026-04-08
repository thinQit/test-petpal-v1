export const dynamic = 'force-dynamic';

import HeroWaves from '@/components/HeroWaves'
import TeamProfileCard from '@/components/TeamProfileCard'
import FeaturesGrid from '@/components/FeaturesGrid'
import CTASparkles from '@/components/CTASparkles'

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroWaves
        title="PetPal was built for modern pet parents."
        subtitle="We’re building a neighborhood network of caretakers who treat pets like family."
        ctaLabel="Book care"
        ctaHref="/contact"
        secondaryCtaLabel="View pricing"
        secondaryCtaHref="/pricing"
      />
      <section className="py-20 md:py-24 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          <TeamProfileCard name="Sophie Grant" role="Co-founder • Operations" imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577370/site-images/team-people/1181405.jpg" />
          <TeamProfileCard name="Devin Brooks" role="Co-founder • Customer Experience" imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577327/site-images/team-people/12899112.jpg" />
        </div>
      </section>
      <section className="py-20 md:py-24 bg-muted animate-fade-in-up">
        <FeaturesGrid
          headline="Where we operate"
          subheadline="Serving central Chicago neighborhoods with same-day options."
          features={[
            { icon: 'MapPin', title: 'River North', description: 'Fast response and flexible scheduling.' },
            { icon: 'MapPin', title: 'Lincoln Park', description: 'Popular for recurring weekday walks.' },
            { icon: 'MapPin', title: 'Wicker Park', description: 'Drop-ins, grooming, and vet transport.' },
            { icon: 'MapPin', title: 'West Loop', description: 'Great coverage for busy professionals.' },
            { icon: 'MapPin', title: 'Logan Square', description: 'Friendly local caretakers nearby.' },
          ]}
        />
      </section>
      <section className="py-20 md:py-24 animate-fade-in-up">
        <CTASparkles title="Let’s make pet care the easiest part of your week." ctaLabel="Book care" ctaHref="/contact" secondaryCtaLabel="View pricing" secondaryCtaHref="/pricing" />
      </section>
    </main>
  )
}
