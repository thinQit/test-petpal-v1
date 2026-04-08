"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef, useCallback } from "react";

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}

export var StarsBackground: React.FC<StarBackgroundProps> = function(props) {
  var starDensity = props.starDensity !== undefined ? props.starDensity : 0.00015;
  var allStarsTwinkle = props.allStarsTwinkle !== undefined ? props.allStarsTwinkle : true;
  var twinkleProbability = props.twinkleProbability !== undefined ? props.twinkleProbability : 0.7;
  var minTwinkleSpeed = props.minTwinkleSpeed !== undefined ? props.minTwinkleSpeed : 0.5;
  var maxTwinkleSpeed = props.maxTwinkleSpeed !== undefined ? props.maxTwinkleSpeed : 1;
  var className = props.className;

  var starsState = useState<StarProps[]>([]);
  var stars = starsState[0];
  var setStars = starsState[1];
  var canvasRef = useRef<HTMLCanvasElement>(null);

  var generateStars = useCallback(
    function(width: number, height: number): StarProps[] {
      var area = width * height;
      var numStars = Math.floor(area * starDensity);
      return Array.from({ length: numStars }, function() {
        var shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.05 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
        };
      });
    },
    [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]
  );

  useEffect(function() {
    var updateStars = function() {
      if (canvasRef.current) {
        var canvas = canvasRef.current;
        var ctx = canvas.getContext("2d");
        if (!ctx) return;

        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        setStars(generateStars(rect.width, rect.height));
      }
    };

    updateStars();

    var resizeObserver = new ResizeObserver(updateStars);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return function() {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed, generateStars]);

  useEffect(function() {
    var canvas = canvasRef.current;
    if (!canvas) return;

    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    var animationFrameId: number;

    var render = function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(function(star) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, " + star.opacity + ")";
        ctx.fill();

        if (star.twinkleSpeed !== null) {
          star.opacity =
            0.5 +
            Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return function() {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full absolute inset-0", className)}
    />
  );
};