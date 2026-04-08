"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function Meteors({ number = 20, className, meteorColor = "#64748b" }: { number?: number; className?: string; meteorColor?: string }) {
  var meteors = Array.from({ length: number });
  return (
    <>
      {meteors.map(function(_, idx) {
        return (
          <span
            key={"meteor-" + idx}
            className={cn(
              "animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[var(--meteor-color)] before:to-transparent",
              className
            )}
            style={{
              top: 0,
              left: Math.floor(Math.random() * 100) + "%",
              animationDelay: Math.random() * 0.6 + 0.2 + "s",
              animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
              backgroundColor: meteorColor,
              "--meteor-color": meteorColor,
            } as React.CSSProperties}
          />
        );
      })}
    </>
  );
}