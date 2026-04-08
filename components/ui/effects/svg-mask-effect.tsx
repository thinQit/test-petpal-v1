"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MaskContainer({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}: {
  children?: React.ReactNode;
  revealText?: React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) {
  var [isHovered, setIsHovered] = useState(false);
  var [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  var containerRef = useRef<HTMLDivElement>(null);

  function updateMousePosition(e: React.MouseEvent) {
    if (!containerRef.current) return;
    var rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  var maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative h-screen", className)}
      onMouseMove={updateMousePosition}
      onMouseEnter={function () { setIsHovered(true); }}
      onMouseLeave={function () { setIsHovered(false); }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl absolute bg-black text-white bg-grid-white/[0.2] [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
        animate={{
          WebkitMaskPosition: (mousePosition.x - maskSize / 2) + "px " + (mousePosition.y - maskSize / 2) + "px",
          WebkitMaskSize: maskSize + "px",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        <div className="absolute inset-0 bg-black h-full w-full z-0 opacity-50" />
        <div className="max-w-4xl mx-auto text-center relative z-20">
          {revealText}
        </div>
      </motion.div>
      <div className="w-full h-full flex items-center justify-center text-white">
        {children}
      </div>
    </motion.div>
  );
}