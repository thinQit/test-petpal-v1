"use client";
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface DitherShaderProps {
  src: string;
  className?: string;
  gridSize?: number;
  colorMode?: "original" | "grayscale" | "duotone";
  primaryColor?: string;
  secondaryColor?: string;
  animated?: boolean;
}

export function DitherShader({
  src,
  className,
  gridSize = 4,
  colorMode = "original",
  primaryColor = "#000000",
  secondaryColor = "#ffffff",
  animated = false,
}: DitherShaderProps) {
  var canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(function () {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    var img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;

      // Bayer 4x4 matrix
      var bayer = [
        [0, 8, 2, 10],
        [12, 4, 14, 6],
        [3, 11, 1, 9],
        [15, 7, 13, 5],
      ];

      for (var y = 0; y < canvas.height; y++) {
        for (var x = 0; x < canvas.width; x++) {
          var idx = (y * canvas.width + x) * 4;
          var r = data[idx];
          var g = data[idx + 1];
          var b = data[idx + 2];
          var gray = 0.299 * r + 0.587 * g + 0.114 * b;
          var threshold = (bayer[y % 4][x % 4] / 16) * 255;

          if (colorMode === "grayscale") {
            var val = gray > threshold ? 255 : 0;
            data[idx] = val;
            data[idx + 1] = val;
            data[idx + 2] = val;
          } else if (colorMode === "duotone") {
            if (gray > threshold) {
              data[idx] = parseInt(secondaryColor.slice(1, 3), 16);
              data[idx + 1] = parseInt(secondaryColor.slice(3, 5), 16);
              data[idx + 2] = parseInt(secondaryColor.slice(5, 7), 16);
            } else {
              data[idx] = parseInt(primaryColor.slice(1, 3), 16);
              data[idx + 1] = parseInt(primaryColor.slice(3, 5), 16);
              data[idx + 2] = parseInt(primaryColor.slice(5, 7), 16);
            }
          } else {
            var factor = gray > threshold ? 1.3 : 0.7;
            data[idx] = Math.min(255, r * factor);
            data[idx + 1] = Math.min(255, g * factor);
            data[idx + 2] = Math.min(255, b * factor);
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };
    img.src = src;
  }, [src, gridSize, colorMode, primaryColor, secondaryColor]);

  return <canvas ref={canvasRef} className={cn("w-full h-auto", className)} />;
}