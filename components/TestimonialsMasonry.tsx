"use client";

import Image from 'next/image'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface TestimonialItem {
  name: string
  petName: string
  quote: string
  service: string
  rating: number
  imageSrc: string
}

interface TestimonialsMasonryProps {
  testimonials?: TestimonialItem[]
}

export default function TestimonialsMasonry({
  testimonials = [
    {
      name: 'Alyssa R.',
      petName: 'Mochi',
      quote: 'PetPal sends real-time updates and adorable photos every walk. Total peace of mind!',
      service: 'Dog Walking',
      rating: 5,
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576877/site-images/corporate/14447085.jpg',
    },
    {
      name: 'Daniel K.',
      petName: 'Luna',
      quote: 'Our sitter handled meds perfectly and gave Luna so much attention.',
      service: 'Pet Sitting',
      rating: 5,
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576864/site-images/corporate/1367269.jpg',
    },
  ],
}: Partial<TestimonialsMasonryProps>) {
  return (
    <div className="columns-1 md:columns-2 gap-6 space-y-6">
      {testimonials.map((item, idx) => (
        <Card key={idx} className="break-inside-avoid rounded-2xl overflow-hidden border border-border">
          <Image src={item.imageSrc} alt={item.petName} width={1200} height={700} unoptimized className="h-44 w-full object-cover" />
          <div className="p-5">
            <div className="mb-2 flex items-center gap-1">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#FFD166] text-[#FFD166]" />
              ))}
            </div>
            <p className="text-sm">“{item.quote}”</p>
            <p className="mt-3 text-sm font-semibold">{item.name} • <span className="text-muted-foreground">{item.petName}</span></p>
            <span className="mt-2 inline-block rounded-full bg-[#2EC4B6]/15 px-3 py-1 text-xs font-semibold text-[#157d73]">{item.service}</span>
          </div>
        </Card>
      ))}
    </div>
  )
}
