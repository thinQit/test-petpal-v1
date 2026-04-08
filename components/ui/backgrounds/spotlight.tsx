"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: "-72%", y: "-62%" }}
      animate={{ opacity: 1, scale: 1, x: "-50%", y: "-40%" }}
      transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1], delay: 0.75 }}
      className={cn("pointer-events-none absolute z-[1]", className)}
    >
      <svg
        className="opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
        width={3787}
        height={2842}
      >
        <g filter="url(#filter)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill={fill}
            fillOpacity="0.21"
          />
        </g>
        <defs>
          <filter
            id="filter"
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8" />
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
}