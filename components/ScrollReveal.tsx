'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children?: React.ReactNode
  className?: string
  delayMs?: number
}

export default function ScrollReveal({ children = null, className = '', delayMs = 0 }: Partial<ScrollRevealProps>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShow(true)
    }, { threshold: 0.15 })
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn('transition-all duration-700', show ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0', className)}
      style={{ transitionDelay: delayMs + 'ms' }}
    >
      {children}
    </div>
  )
}
