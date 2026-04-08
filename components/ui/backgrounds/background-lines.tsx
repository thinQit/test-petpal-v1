"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BackgroundLines({
  children,
  className,
  svgOptions,
}: {
  children: React.ReactNode;
  className?: string;
  svgOptions?: { duration?: number };
}) {
  const duration = svgOptions?.duration || 10;
  return (
    <div className={cn("relative flex items-center justify-center w-full h-screen overflow-hidden", className)}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 6 }).map(function(_, i) {
          return (
            <motion.path
              key={i}
              d={"M0," + (300 + i * 60) + " Q360," + (200 + i * 40) + " 720," + (350 + i * 50) + " T1440," + (300 + i * 60)}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity={0.1 + i * 0.03}
              className="text-blue-500 dark:text-blue-400"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: duration, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: i * 0.4 }}
            />
          );
        })}
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}