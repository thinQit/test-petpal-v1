"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextHoverEffect({
  text,
  duration = 0,
  className,
}: {
  text: string;
  duration?: number;
  className?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  useEffect(function () {
    function handleMouse(ev: MouseEvent) {
      if (!svgRef.current) return;
      var rect = svgRef.current.getBoundingClientRect();
      var x = ((ev.clientX - rect.left) / rect.width) * 100;
      var y = ((ev.clientY - rect.top) / rect.height) * 100;
      setCursor({ x: x, y: y });
    }
    if (svgRef.current) {
      svgRef.current.addEventListener("mousemove", handleMouse);
    }
    return function () {
      if (svgRef.current) {
        svgRef.current.removeEventListener("mousemove", handleMouse);
      }
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={function () { setHovered(true); }}
      onMouseLeave={function () { setHovered(false); }}
      className={cn("select-none", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="var(--blue-500)" />
          <stop offset="50%" stopColor="var(--purple-500)" />
          <stop offset="100%" stopColor="var(--pink-500)" />
        </linearGradient>
        <radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          cx={cursor.x + "%"}
          cy={cursor.y + "%"}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-[900] stroke-neutral-200 dark:stroke-neutral-800 fill-transparent text-7xl"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-[900] fill-transparent text-7xl stroke-neutral-200 dark:stroke-neutral-800"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="font-[900] fill-transparent text-7xl"
      >
        {text}
      </text>
    </svg>
  );
}