"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface SectionHeaderProps {
  title?: string
  subtitle?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export default function SectionHeader({
  title = 'Trusted Pet Care, Tail-Wagging Results',
  subtitle = 'From daily walks to vet visits, PetPal makes quality pet care simple and stress-free.',
  primaryCtaText = '',
  primaryCtaHref = '#',
  secondaryCtaText = '',
  secondaryCtaHref = '#',
}: Partial<SectionHeaderProps>) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
      <p className="mt-3 text-muted-foreground">{subtitle}</p>
      {(primaryCtaText || secondaryCtaText) && (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {primaryCtaText ? <Button asChild className="rounded-xl bg-[#2EC4B6] hover:bg-[#25a99d] text-white"><Link href={primaryCtaHref}>{primaryCtaText}</Link></Button> : null}
          {secondaryCtaText ? <Button asChild variant="outline" className="rounded-xl"><Link href={secondaryCtaHref}>{secondaryCtaText}</Link></Button> : null}
        </div>
      )}
    </div>
  )
}
