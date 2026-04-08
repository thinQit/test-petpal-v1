"use client";
import React, { useRef, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CanvasRevealEffectProps {
  animationSpeed?: number;
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}

export function CanvasRevealEffect({
  animationSpeed = 0.4,
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}: CanvasRevealEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(function() {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    if (!ctx) return;
    var w = (canvas.width = canvas.offsetWidth);
    var h = (canvas.height = canvas.offsetHeight);
    var t = 0;
    var animId: number;
    function draw() {
      ctx!.clearRect(0, 0, w, h);
      var cols = Math.ceil(w / (dotSize * 3));
      var rows = Math.ceil(h / (dotSize * 3));
      for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
          var x = c * dotSize * 3 + dotSize;
          var y = r * dotSize * 3 + dotSize;
          var dist = Math.sqrt(Math.pow(x - w / 2, 2) + Math.pow(y - h / 2, 2));
          var maxDist = Math.sqrt(Math.pow(w / 2, 2) + Math.pow(h / 2, 2));
          var opacity = Math.max(0, 1 - dist / (maxDist * (1 - t * animationSpeed)));
          if (opacity > 0) {
            var color = colors[Math.floor(Math.random() * colors.length)];
            ctx!.beginPath();
            ctx!.arc(x, y, dotSize / 2, 0, Math.PI * 2);
            ctx!.fillStyle = "rgba(" + color[0] + "," + color[1] + "," + color[2] + "," + opacity + ")";
            ctx!.fill();
          }
        }
      }
      if (isHovered && t < 1) t += 0.01;
      if (!isHovered && t > 0) t -= 0.01;
      animId = requestAnimationFrame(draw);
    }
    draw();
    return function() { cancelAnimationFrame(animId); };
  }, [isHovered, animationSpeed, colors, dotSize]);

  return (
    <div
      className={cn("relative h-full w-full", containerClassName)}
      onMouseEnter={function() { setIsHovered(true); }}
      onMouseLeave={function() { setIsHovered(false); }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      )}
    </div>
  );
}