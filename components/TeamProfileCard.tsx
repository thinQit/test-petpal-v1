"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Star, MapPin, ShieldCheck } from 'lucide-react'

interface TeamProfileCardProps {
  name?: string
  role?: string
  avatar?: string
  rating?: number
  neighborhoods?: string[]
  specialties?: string[]
  certifications?: string[]
}

export default function TeamProfileCard({
  name = 'Maya Thompson',
  role = 'Senior Pet Caretaker',
  avatar = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577370/site-images/team-people/10375912.jpg',
  rating = 4.9,
  neighborhoods = ['Downtown', 'South Lamar', 'Bouldin Creek'],
  specialties = ['Anxious dogs', 'Senior pets', 'Medication routines'],
  certifications = ['Pet First Aid', 'Fear-Free Certified'],
}: Partial<TeamProfileCardProps>) {
  return (
    <Card className="rounded-2xl overflow-hidden border border-border shadow-sm">
      <Image src={avatar} alt={name} width={800} height={600} unoptimized className="h-56 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
        <div className="mt-2 flex items-center gap-1 text-sm font-semibold">
          <Star className="h-4 w-4 fill-[#FFD166] text-[#FFD166]" /> {rating.toFixed(1)} rating
        </div>
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase text-muted-foreground">Neighborhoods</p>
          <p className="mt-1 text-sm flex items-center gap-1"><MapPin className="h-4 w-4 text-[#2EC4B6]" /> {neighborhoods.join(', ')}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {specialties.map((s, i) => (
            <span key={i} className="rounded-full bg-[#2EC4B6]/15 px-3 py-1 text-xs font-semibold text-[#157d73]">{s}</span>
          ))}
        </div>
        <div className="mt-4 space-y-1">
          {certifications.map((c, i) => (
            <p key={i} className="text-xs flex items-center gap-1 text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-[#EF476F]" /> {c}
            </p>
          ))}
        </div>
      </div>
    </Card>
  )
}
