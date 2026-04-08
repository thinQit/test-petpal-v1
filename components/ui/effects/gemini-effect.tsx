"use client";
import React from "react";
import { motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export function GoogleGeminiEffect({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("sticky top-80", className)}>
      {title && (
        <h2 className="text-lg md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 relative z-20">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-neutral-300 text-center text-sm md:text-base font-normal max-w-xl mx-auto mt-4">
          {description}
        </p>
      )}
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-60 md:-top-40 w-full"
      >
        {[
          { d: "M0 315C200 315 350 580 720 580C1090 580 1240 315 1440 315", color: "#FFB7C5" },
          { d: "M0 295C200 295 350 560 720 560C1090 560 1240 295 1440 295", color: "#FFDDB7" },
          { d: "M0 275C200 275 350 540 720 540C1090 540 1240 275 1440 275", color: "#B1C5FF" },
          { d: "M0 255C200 255 350 520 720 520C1090 520 1240 255 1440 255", color: "#4FABFF" },
          { d: "M0 235C200 235 350 500 720 500C1090 500 1240 235 1440 235", color: "#AECCFF" },
        ].map(function (item, idx) {
          return (
            <motion.path
              key={idx}
              d={item.d}
              stroke={item.color}
              strokeWidth="2"
              fill="none"
              style={{ pathLength: pathLengths[idx] || 0 }}
            />
          );
        })}
      </svg>
    </div>
  );
}