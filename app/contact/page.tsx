'use client'


export const dynamic = 'force-dynamic';
import HeroWaves from '@/components/HeroWaves'
import BookingForm from '@/components/BookingForm'
import FAQAccordion from '@/components/FAQAccordion'

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroWaves
        title="Book PetPal care"
        subtitle="Share a few details and we’ll confirm availability fast."
        ctaLabel="Fill out booking form"
        ctaHref="/contact"
        secondaryCtaLabel="View pricing"
        secondaryCtaHref="/pricing"
      />
      <section className="py-20 md:py-24 animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4">
          <BookingForm />
        </div>
      </section>
      <section className="py-20 md:py-24 bg-muted animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4">
          <FAQAccordion
            items={[
              { question: 'How fast will you respond?', answer: 'Usually within 5–15 minutes during business hours.' },
              { question: 'Do you offer meet & greets?', answer: 'Yes, especially for recurring care requests.' },
              { question: 'Can I book for multiple pets?', answer: 'Absolutely—include details for each pet in your request.' },
            ]}
          />
        </div>
      </section>
    </main>
  )
}
