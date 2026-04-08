"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs?: FAQItem[]
}

export default function FAQAccordion({
  faqs = [
    { question: 'Are caretakers background checked?', answer: 'Yes, every PetPal caretaker completes identity verification, interviews, and background screening.' },
    { question: 'Can I meet my caretaker before booking?', answer: 'Absolutely. You can schedule a quick meet-and-greet before your first service.' },
    { question: 'Do you care for pets with medication needs?', answer: 'Yes, trained caretakers can follow medication routines with clear instructions.' },
  ],
}: Partial<FAQAccordionProps>) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 md:p-6">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, idx) => (
          <AccordionItem value={'item-' + idx} key={idx}>
            <AccordionTrigger className="text-left font-semibold">
              <span className="flex items-center gap-2"><HelpCircle className="h-4 w-4 text-[#2EC4B6]" /> {faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
