"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Beam {
  id: number;
  x: number;
  duration: number;
  delay: number;
  rotate: number;
}

export function BackgroundBeamsWithCollision({
  children,
  className,
  beamColor = "#3b82f6",
}: {
  children: React.ReactNode;
  className?: string;
  beamColor?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [beams, setBeams] = useState<Beam[]>([]);
  const [explosions, setExplosions] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(function() {
    var b: Beam[] = [];
    for (var i = 0; i < 20; i++) {
      b.push({
        id: i,
        x: Math.random() * 100,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
        rotate: Math.random() * 20 - 10,
      });
    }
    setBeams(b);
  }, []);

  return (
    <div ref={containerRef} className={cn("relative min-h-screen w-full overflow-hidden bg-background", className)}>
      {beams.map(function(beam) {
        return (
          <motion.div
            key={beam.id}
            className="absolute top-0 h-32 w-px"
            style={{ left: beam.x + "%", rotate: beam.rotate + "deg", background: "linear-gradient(to bottom, transparent, " + beamColor + ", transparent)" }}
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: "120vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            onAnimationComplete={function() {
              setExplosions(function(prev) {
                return prev.concat([{ id: Date.now() + beam.id, x: beam.x, y: 85 }]);
              });
              setTimeout(function() {
                setExplosions(function(prev) { return prev.slice(1); });
              }, 800);
            }}
          />
        );
      })}
      <AnimatePresence>
        {explosions.map(function(exp) {
          return (
            <motion.div
              key={exp.id}
              className="absolute h-4 w-4 rounded-full"
              style={{ left: exp.x + "%", top: exp.y + "%", backgroundColor: beamColor, opacity: 0.5 }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 8, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          );
        })}
      </AnimatePresence>
      <div className="relative z-10">{children}</div>
    </div>
  );
}