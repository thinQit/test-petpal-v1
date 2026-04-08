"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThreeDMarquee({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) {
  var chunkSize = Math.ceil(images.length / 4);
  var chunks = [];
  for (var i = 0; i < 4; i++) {
    chunks.push(images.slice(i * chunkSize, (i + 1) * chunkSize));
  }

  return (
    <div className={cn("mx-auto max-w-7xl overflow-hidden rounded-3xl", className)} style={{ perspective: "1200px" }}>
      <div className="flex items-center justify-center gap-6 py-10" style={{ transform: "rotateX(20deg) rotateZ(-5deg) scale(1.1)", transformStyle: "preserve-3d" }}>
        {chunks.map(function(chunk, colIdx) {
          return (
            <motion.div
              key={colIdx}
              className="flex flex-col gap-6"
              animate={{ y: colIdx % 2 === 0 ? [0, -200] : [-200, 0] }}
              transition={{ duration: 15 + colIdx * 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            >
              {chunk.concat(chunk).map(function(img, imgIdx) {
                return (
                  <div key={imgIdx} className="relative h-40 w-60 flex-shrink-0 overflow-hidden rounded-xl">
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </div>
                );
              })}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}