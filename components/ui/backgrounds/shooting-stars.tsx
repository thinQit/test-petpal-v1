"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

var getRandomStartPoint = function() {
  var side = Math.floor(Math.random() * 4);
  var offset = Math.random() * window.innerWidth;

  if (side === 0) return { x: offset, y: 0, angle: 45 };
  if (side === 1) return { x: window.innerWidth, y: offset, angle: 135 };
  if (side === 2) return { x: offset, y: window.innerHeight, angle: 225 };
  if (side === 3) return { x: 0, y: offset, angle: 315 };
  return { x: 0, y: 0, angle: 45 };
};

export var ShootingStars: React.FC<ShootingStarsProps> = function(props) {
  var minSpeed = props.minSpeed !== undefined ? props.minSpeed : 10;
  var maxSpeed = props.maxSpeed !== undefined ? props.maxSpeed : 30;
  var minDelay = props.minDelay !== undefined ? props.minDelay : 1200;
  var maxDelay = props.maxDelay !== undefined ? props.maxDelay : 4200;
  var starColor = props.starColor || "#9E00FF";
  var trailColor = props.trailColor || "#2EB9DF";
  var starWidth = props.starWidth !== undefined ? props.starWidth : 10;
  var starHeight = props.starHeight !== undefined ? props.starHeight : 1;
  var className = props.className;

  var starState = useState<ShootingStar | null>(null);
  var star = starState[0];
  var setStar = starState[1];
  var svgRef = useRef<SVGSVGElement>(null);

  useEffect(function() {
    var createStar = function() {
      var startPoint = getRandomStartPoint();
      var newStar: ShootingStar = {
        id: Date.now(),
        x: startPoint.x,
        y: startPoint.y,
        angle: startPoint.angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      setStar(newStar);

      var randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    createStar();

    return function() {};
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(function() {
    var moveStar = function() {
      if (star) {
        setStar(function(prevStar) {
          if (!prevStar) return null;
          var newX = prevStar.x + prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
          var newY = prevStar.y + prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
          var newDistance = prevStar.distance + prevStar.speed;
          var newScale = 1 + newDistance / 100;
          if (
            newX < -20 ||
            newX > window.innerWidth + 20 ||
            newY < -20 ||
            newY > window.innerHeight + 20
          ) {
            return null;
          }
          return {
            id: prevStar.id,
            x: newX,
            y: newY,
            angle: prevStar.angle,
            scale: newScale,
            speed: prevStar.speed,
            distance: newDistance,
          };
        });
      }
    };

    var animationFrame = requestAnimationFrame(moveStar);
    return function() { cancelAnimationFrame(animationFrame); };
  }, [star]);

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full absolute inset-0", className)}
    >
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={"rotate(" + star.angle + ", " + (star.x + (starWidth * star.scale) / 2) + ", " + (star.y + starHeight / 2) + ")"}
        />
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};