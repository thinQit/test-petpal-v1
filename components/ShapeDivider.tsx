"use client";

interface ShapeDividerProps {
  flip?: boolean
  color?: string
}

export default function ShapeDivider({ flip = false, color = '#FFF8F0' }: Partial<ShapeDividerProps>) {
  return (
    <div className={flip ? 'rotate-180' : ''}>
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[72px] md:h-[96px]">
        <path
          d="M0 80L48 74.7C96 69 192 59 288 58.7C384 59 480 69 576 74.7C672 80 768 80 864 69.3C960 59 1056 37 1152 32C1248 27 1344 37 1392 42.7L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V80Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
