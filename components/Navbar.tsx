'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, PawPrint } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  logoText?: string
  links?: NavLink[]
  ctaText?: string
  ctaHref?: string
  transparentOnTop?: boolean
}

export default function Navbar({
  logoText = 'PetPal',
  links = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#steps' },
    { label: 'Caretakers', href: '#team' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaText = 'Book Now',
  ctaHref = '#booking',
  transparentOnTop = true,
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all',
        transparentOnTop && !scrolled
          ? 'bg-transparent'
          : 'bg-[rgba(255,248,240,0.95)] backdrop-blur border-b border-border/50'
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
          <span className="rounded-xl bg-[#2EC4B6]/20 p-2 text-[#2EC4B6]">
            <PawPrint className="h-5 w-5" />
          </span>
          {logoText}
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold hover:text-[#2EC4B6]">
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-xl bg-[#EF476F] px-6 py-3 font-semibold text-white hover:bg-[#d73d61]">
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden rounded-xl p-2 border border-border">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-[rgba(255,248,240,0.98)]">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 font-semibold hover:bg-[#2EC4B6]/10"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-xl bg-[#EF476F] text-white hover:bg-[#d73d61]">
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
