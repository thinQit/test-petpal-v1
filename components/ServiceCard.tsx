"use client";

import { Card } from '@/components/ui/card'
import { CheckCircle, Dog, Scissors, Stethoscope, Home, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title?: string
  description?: string
  icon?: string
  highlights?: string[]
  startingPrice?: string
}

const iconMap: Record<string, LucideIcon> = {
  Dog,
  Scissors,
  Stethoscope,
  Home,
}

export default function ServiceCard({
  title = 'Dog Walking',
  description = 'Safe, energetic walks tailored to your dog’s pace and personality.',
  icon = 'Dog',
  highlights = ['GPS-tracked walks', 'Photo updates', 'Water & treat breaks'],
  startingPrice = '$19',
}: Partial<ServiceCardProps>) {
  const Icon = iconMap[icon] || Dog

  return (
    <Card className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 inline-flex rounded-xl bg-[#2EC4B6]/15 p-3 text-[#2EC4B6]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <ul className="mt-4 space-y-2">
        {highlights.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4 text-[#2EC4B6]" />
            {item}
          </li>
        ))}
      </ul>
      <div className={cn('mt-5 inline-flex rounded-full bg-[#FFD166]/25 px-3 py-1 text-sm font-semibold text-[#8a5f00]')}>
        Starting at {startingPrice}
      </div>
    </Card>
  )
}
