'use client'

import Image from 'next/image'

interface PetGalleryBentoProps {
  images?: string[]
  captions?: string[]
}

export default function PetGalleryBento({
  images = [
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576857/site-images/corporate/1181408.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576881/site-images/corporate/11901335.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576895/site-images/corporate/1398761.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576909/site-images/corporate/1181638.jpg',
  ],
  captions = ['Sunny walk at Zilker Park', 'Spa day glow-up', 'Snuggle visit complete', 'Vet checkup done with care'],
}: Partial<PetGalleryBentoProps>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.slice(0, 4).map((src, i) => (
        <div key={i} className={i === 0 ? 'md:col-span-2 md:row-span-2' : ''}>
          <div className="group relative overflow-hidden rounded-2xl border border-border">
            <Image src={src} alt={captions[i] || 'PetPal gallery'} width={1200} height={800} unoptimized className="h-full min-h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4">
              <p className="text-sm font-semibold text-white">{captions[i] || 'Happy pet moment'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
