export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface SectionBase {
  id: string;
  type: string;
  layout: string;
  headline: string;
  subheadline: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
}

export interface ServiceItem {
  name: string;
  description: string;
  startingPrice: string;
  unit: string;
  highlights: string[];
  recommendedFor?: string;
}

export interface TeamProfile {
  name: string;
  role: string;
  experience: string;
  neighborhoods: string[];
  specialties: string[];
  bio: string;
  certifications: string[];
  rating: number;
  reviewCount: number;
}

export interface Testimonial {
  name: string;
  petName: string;
  service: string;
  rating: number;
  quote: string;
  neighborhood: string;
  photo?: {
    src: string;
    alt: string;
  };
}

export interface PricingPackage {
  name: string;
  price: string;
  unit: string;
  description?: string;
  features?: string[];
  highlighted?: boolean;
}

export interface FAQItem {
  q: string;
  a: string;
}
