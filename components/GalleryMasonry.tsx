"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryMasonryProps {
  headline: string;
  subheadline?: string;
  images: GalleryImage[];
}

export default function GalleryMasonry({
  headline = "Happy tails gallery",
  subheadline = "A peek into playful moments, fresh grooms, and cozy cuddle time.",
  images = [],
}: Partial<GalleryMasonryProps>) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const defaultImages: GalleryImage[] = [
    { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576895/site-images/corporate/1398761.jpg", alt: "Pet portrait", caption: "Post-groom glow-up" },
    { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576857/site-images/corporate/1181408.jpg", alt: "Team and pet", caption: "Daily daycare fun" },
    { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576881/site-images/corporate/11901335.jpg", alt: "Pet closeup", caption: "Fresh and fluffy" },
  ];

  const gallery = images.length ? images : defaultImages;

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map(function (img, i) {
            return (
              <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card card-hover" onClick={function () { setSelectedImage(img); }}>
                <Image src={img.url} alt={img.alt} width={900} height={900} unoptimized className="h-auto w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-105" />
                {img.caption && <p className="p-3 text-sm text-foreground">{img.caption}</p>}
              </div>
            );
          })}
        </div>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4" onClick={function () { setSelectedImage(null); }}>
            <Image src={selectedImage.url} alt={selectedImage.alt} width={1400} height={1000} unoptimized className="max-h-[85vh] w-auto rounded-2xl border border-border object-contain" />
          </div>
        )}
      </div>
    </section>
  );
}
