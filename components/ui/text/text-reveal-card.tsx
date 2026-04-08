"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextRevealCard({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    var rect = cardRef.current.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var pct = (x / rect.width) * 100;
    setWidthPercentage(pct);
    setLeft(x);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseEnter={function () { setIsMouseOver(true); }}
      onMouseLeave={function () { setIsMouseOver(false); setWidthPercentage(0); }}
      className={cn(
        "relative overflow-hidden rounded-lg border border-white/[0.08] bg-[#1d1c20] p-8 w-[40rem]",
        className
      )}
    >
      {children}
      <div className="relative flex items-center overflow-hidden h-40">
        <motion.div
          style={{ width: isMouseOver ? left + "px" : "0px" }}
          animate={isMouseOver ? { opacity: 1 } : { opacity: 0 }}
          className="absolute bg-[#1d1c20] z-20 will-change-transform overflow-hidden h-full"
        >
          <p className="text-base sm:text-[3rem] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300" style={{ whiteSpace: "nowrap" }}>
            {revealText}
          </p>
        </motion.div>
        <p className="text-base sm:text-[3rem] py-10 font-bold text-white/30" style={{ whiteSpace: "nowrap" }}>
          {text}
        </p>
      </div>
    </div>
  );
}