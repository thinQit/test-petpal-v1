"use client";

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PricingTierCardProps {
  tierName?: string
  price?: string
  period?: string
  features?: string[]
  highlighted?: boolean
  ctaText?: string
}

export default function PricingTierCard({
  tierName = 'Essential Care',
  price = '$49',
  period = '/month',
  features = ['4 dog walks', '1 sitting visit', 'In-app care notes', 'Priority support'],
  highlighted = false,
  ctaText = 'Choose Plan',
}: Partial<PricingTierCardProps>) {
  return (
    <Card className={cn('rounded-2xl p-6 border transition-all', highlighted ? 'border-[#EF476F] shadow-lg scale-[1.02]' : 'border-border shadow-sm')}>
      {highlighted && <div className="mb-3 inline-flex rounded-full bg-[#EF476F] px-3 py-1 text-xs font-bold text-white">Recommended</div>}
      <h3 className="text-xl font-bold">{tierName}</h3>
      <div className="mt-2">
        <span className="text-3xl font-extrabold">{price}</span>
        <span className="text-muted-foreground">{period}</span>
      </div>
      <ul className="mt-5 space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-[#2EC4B6]" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className={cn('mt-6 w-full rounded-xl font-semibold', highlighted ? 'bg-[#EF476F] text-white hover:bg-[#d73d61]' : '')}>
        {ctaText}
      </Button>
    </Card>
  )
}
