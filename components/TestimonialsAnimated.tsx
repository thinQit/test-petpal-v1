"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = "Trusted by happy pet parents",
  subheadline = "Real stories from families who count on our care every week.",
  testimonials = [],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  const defaultTestimonials: TestimonialItem[] = [
    {
      quote: "Our golden retriever comes home calm, clean, and genuinely happy. The team treats him like family every single visit.",
      name: "Maya R.",
      designation: "Dog Mom of Bruno",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577370/site-images/team-people/10375912.jpg",
    },
    {
      quote: "The grooming staff is so patient with our anxious pup. We finally found a place we completely trust.",
      name: "Jordan K.",
      designation: "Pet Parent of Mochi",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577335/site-images/team-people/1181734.jpg",
    },
    {
      quote: "Daily updates and thoughtful care notes make all the difference. Highly recommend for busy families.",
      name: "Elena T.",
      designation: "Owner of Coco & Max",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577321/site-images/team-people/1181622.jpg",
    },
  ];

  const data = testimonials.length ? testimonials : defaultTestimonials;

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <AnimatedTestimonials testimonials={data} autoplay={autoplay} />
      </div>
    </section>
  );
}
