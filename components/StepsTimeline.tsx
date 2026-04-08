'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface StepItem {
  title: string
  description: string
}

interface StepsTimelineProps {
  steps?: StepItem[]
}

export default function StepsTimeline({
  steps = [
    { title: 'Pick a Service', description: 'Choose dog walking, sitting, grooming, or vet visit support.' },
    { title: 'Match with a Caretaker', description: 'Get paired with a vetted local pro based on your pet’s needs.' },
    { title: 'Track & Relax', description: 'Receive live updates, notes, and photos after every visit.' },
  ],
}: Partial<StepsTimelineProps>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-[#2EC4B6]/30" />
      <div className="space-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className={cn('relative pl-12 transition-all duration-700', visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0')} style={{ transitionDelay: idx * 120 + 'ms' }}>
            <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#2EC4B6] text-xs font-bold text-white">
              {idx + 1}
            </div>
            <h3 className="text-lg font-bold">{step.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
