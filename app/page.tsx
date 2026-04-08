export const dynamic = 'force-dynamic';

import HeroWaves from '@/components/HeroWaves'
import SectionHeader from '@/components/SectionHeader'
import ScrollReveal from '@/components/ScrollReveal'
import ShapeDivider from '@/components/ShapeDivider'
import ServiceCard from '@/components/ServiceCard'
import TeamProfileCard from '@/components/TeamProfileCard'
import PetGalleryBento from '@/components/PetGalleryBento'
import PricingTierCard from '@/components/PricingTierCard'
import FAQAccordion from '@/components/FAQAccordion'
import TestimonialsMasonry from '@/components/TestimonialsMasonry'
import CTASparkles from '@/components/CTASparkles'

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up overflow-hidden">
        <HeroWaves
          title="Dog walking, sitting, grooming & vet runs—booked in minutes."
          subtitle="PetPal matches you with background-checked caretakers for on-demand or scheduled care. Real-time updates, photo check-ins, and a friendly team your pet will love."
          ctaLabel="Book care now"
          ctaHref="/contact"
          secondaryCtaLabel="See services & pricing"
          secondaryCtaHref="/pricing"
        />
      </section>

      <section className="py-20 md:py-24 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader headline="Care that fits your schedule (and your pet’s personality)." subheadline="Choose a service, pick a time, and meet your caretaker. Every visit includes notes and photos." />
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mt-10">
            <ServiceCard name="Dog Walking" description="Neighborhood walks tailored to your dog’s pace." startingPrice="$22" unit="per 30 min" />
            <ServiceCard name="Pet Sitting (Drop-in)" description="Feeding, meds, cleanup, and calm companionship." startingPrice="$28" unit="per 30 min" />
            <ServiceCard name="Grooming (At-home)" description="Bath, brush, nail trim, and gentle handling." startingPrice="$65" unit="per session" />
            <ServiceCard name="Vet Visits & Errands" description="Pickup, transport, and clear post-visit notes." startingPrice="$45" unit="per trip" />
          </div>
        </div>
      </section>

      <ShapeDivider />

      <section className="py-20 md:py-24 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader headline="Caretakers you can trust—pets they adore." subheadline="Every PetPal caretaker is background-checked, trained, and reviewed after each visit." />
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-10">
            <TeamProfileCard name="Maya Chen" role="Lead Dog Walker" imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577370/site-images/team-people/10375912.jpg" />
            <TeamProfileCard name="Jordan Alvarez" role="Pet Sitter" imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577335/site-images/team-people/1181734.jpg" />
            <TeamProfileCard name="Aisha Patel" role="Grooming Partner" imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577321/site-images/team-people/1181622.jpg" />
            <TeamProfileCard name="Sam Rivera" role="Vet Visit Concierge" imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577351/site-images/team-people/12903244.jpg" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <PetGalleryBento
            headline="Happy pets. Happier humans."
            subheadline="Photo check-ins are included with every booking."
            photos={[
              { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576894/site-images/corporate/12903287.jpg', alt: 'Happy dog on walk' },
              { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576879/site-images/corporate/16585156.jpg', alt: 'Calm cat by window' },
              { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576902/site-images/corporate/1367276.jpg', alt: 'Puppy training moment' },
              { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576911/site-images/corporate/1181610.jpg', alt: 'At-home grooming' },
              { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576877/site-images/corporate/14447085.jpg', alt: 'Senior pet check-in' },
              { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576864/site-images/corporate/1367269.jpg', alt: 'Safe carrier transport' },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <TestimonialsMasonry
            headline="Loved by pet parents across the city"
            subheadline="Real stories from real bookings."
            reviews={[
              { quote: 'Luna comes back calm and happy every time.', name: 'Elena R.', petName: 'Luna', service: 'Dog Walking', src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576864/site-images/corporate/1181344.jpg' },
              { quote: 'Oreo finally warmed up thanks to patient care.', name: 'Marcus T.', petName: 'Oreo', service: 'Drop-in Sitting', src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576884/site-images/corporate/10347510.jpg' },
              { quote: 'At-home grooming was gentle and stress-free.', name: 'Priya S.', petName: 'Ziggy', service: 'Grooming', src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576876/site-images/corporate/1181252.jpg' },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-24 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6 md:gap-8">
          <PricingTierCard name="Starter" price="$0" unit="membership" />
          <PricingTierCard name="Weekly Walker" price="$199" unit="per month" highlighted />
          <PricingTierCard name="Travel Sitter Bundle" price="$249" unit="bundle" />
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4">
          <FAQAccordion
            items={[
              { question: 'Are caretakers background-checked?', answer: 'Yes, every caretaker completes verification and screening.' },
              { question: 'Can I request the same caretaker?', answer: 'Yes, we prioritize consistency for recurring bookings.' },
              { question: 'Do you handle medications?', answer: 'Yes, for common medication routines with clear instructions.' },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-24 animate-fade-in-up">
        <CTASparkles
          title="Book in minutes—get updates in real time."
          subtitle="Tell us what you need, choose a time, and we’ll match you with the right caretaker."
          ctaLabel="Start a booking"
          ctaHref="/contact"
          secondaryCtaLabel="How it works"
          secondaryCtaHref="/features"
        />
      </section>
    </main>
  )
}
