"use client";

interface LogoCloudProps {
  headline?: string;
  logos: { name: string; imageUrl: string }[];
}

export function LogoCloud({ headline, logos }: LogoCloudProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        {headline && <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">{headline}</p>}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map(function(logo, i) {
            return (
              <img
                key={i}
                src={logo.imageUrl}
                alt={logo.name}
                className="h-8 max-w-[120px] object-contain opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:h-10"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}