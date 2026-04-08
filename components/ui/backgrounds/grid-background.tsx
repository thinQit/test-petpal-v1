"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function GridBackground({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative w-full bg-white dark:bg-black bg-grid-black/[0.2] dark:bg-grid-white/[0.2]", className)}>
      <div className="absolute pointer-events-none inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function GridSmallBackground({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative w-full bg-white dark:bg-black bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]", className)}>
      <div className="absolute pointer-events-none inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function DotBackground({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative w-full bg-white dark:bg-black bg-dot-black/[0.2] dark:bg-dot-white/[0.2]", className)}>
      <div className="absolute pointer-events-none inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}