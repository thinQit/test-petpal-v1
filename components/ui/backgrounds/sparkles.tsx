"use client";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SparklesCoreProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

export function SparklesCore({
  id = "sparkles",
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
  particleColor = "#FFF",
  particleDensity = 100,
}: SparklesCoreProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(function() {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    if (!ctx) return;
    var w = (canvas.width = canvas.offsetWidth * 2);
    var h = (canvas.height = canvas.offsetHeight * 2);
    ctx.scale(2, 2);
    var particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; fadeDir: number }[] = [];
    for (var i = 0; i < particleDensity; i++) {
      particles.push({
        x: Math.random() * w / 2,
        y: Math.random() * h / 2,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * speed * 0.3,
        speedY: (Math.random() - 0.5) * speed * 0.3,
        opacity: Math.random(),
        fadeDir: Math.random() > 0.5 ? 1 : -1,
      });
    }
    var animId: number;
    function animate() {
      ctx!.clearRect(0, 0, w / 2, h / 2);
      if (background !== "transparent") {
        ctx!.fillStyle = background;
        ctx!.fillRect(0, 0, w / 2, h / 2);
      }
      for (var j = 0; j < particles.length; j++) {
        var p = particles[j];
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.fadeDir * 0.01 * speed;
        if (p.opacity <= 0 || p.opacity >= 1) p.fadeDir *= -1;
        if (p.x < 0) p.x = w / 2;
        if (p.x > w / 2) p.x = 0;
        if (p.y < 0) p.y = h / 2;
        if (p.y > h / 2) p.y = 0;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = particleColor;
        ctx!.globalAlpha = Math.max(0, Math.min(1, p.opacity));
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    }
    animate();
    return function() { cancelAnimationFrame(animId); };
  }, [background, minSize, maxSize, speed, particleColor, particleDensity]);

  return <canvas ref={canvasRef} id={id} className={cn("h-full w-full", className)} />;
}

export function Sparkles({
  children,
  className,
  ...props
}: SparklesCoreProps & { children?: React.ReactNode }) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="absolute inset-0">
        <SparklesCore {...props} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}