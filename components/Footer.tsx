"use client";

import Link from 'next/link'
import { PawPrint, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FooterProps {
  minimal?: boolean
  companyName?: string
}

export default function Footer({ minimal = false, companyName = 'PetPal' }: Partial<FooterProps>) {
  if (minimal) {
    return (
      <footer className="border-t border-border bg-[#FFF8F0] py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="hover:text-[#2EC4B6]">Privacy</Link>
            <Link href="/terms" className="hover:text-[#2EC4B6]">Terms</Link>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className={cn('bg-[#1f2a2f] text-white py-14')}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-bold text-xl">
            <PawPrint className="h-5 w-5 text-[#FFD166]" />
            {companyName}
          </div>
          <p className="mt-3 text-sm text-white/80">On-demand pet care you can trust—dog walking, pet sitting, grooming, and vet visits.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Visit Us</h4>
          <p className="flex gap-2 text-sm text-white/80"><MapPin className="h-4 w-4 mt-0.5" /> 240 Maple Street, Austin, TX</p>
          <p className="mt-2 flex gap-2 text-sm text-white/80"><Clock className="h-4 w-4 mt-0.5" /> Mon-Sun: 7:00 AM - 9:00 PM</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="flex gap-2 text-sm text-white/80"><Phone className="h-4 w-4 mt-0.5" /> (512) 555-0138</p>
          <p className="mt-2 flex gap-2 text-sm text-white/80"><Mail className="h-4 w-4 mt-0.5" /> hello@petpalcare.com</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-white/80">
            <Link href="#services" className="hover:text-[#FFD166]">Services</Link>
            <Link href="#pricing" className="hover:text-[#FFD166]">Pricing</Link>
            <Link href="#faq" className="hover:text-[#FFD166]">FAQ</Link>
            <Link href="#booking" className="hover:text-[#FFD166]">Book a Visit</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
