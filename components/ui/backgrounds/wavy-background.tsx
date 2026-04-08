"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export var WavyBackground = function(props: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) {
  var children = props.children;
  var className = props.className;
  var containerClassName = props.containerClassName;
  var colors = props.colors;
  var waveWidth = props.waveWidth;
  var backgroundFill = props.backgroundFill;
  var blur = props.blur !== undefined ? props.blur : 10;
  var speed = props.speed || "fast";
  var waveOpacity = props.waveOpacity !== undefined ? props.waveOpacity : 0.5;

  var noise = createNoise3D();
  var wRef = useRef(0);
  var hRef = useRef(0);
  var ntRef = useRef(0);
  var ctxRef = useRef<any>(null);
  var canvasRef = useRef<HTMLCanvasElement>(null);
  var animIdRef = useRef(0);

  var getSpeed = function() {
    if (speed === "slow") return 0.001;
    return 0.002;
  };

  var waveColors = colors || [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  var drawWave = function(n: number) {
    ntRef.current += getSpeed();
    for (var i = 0; i < n; i++) {
      ctxRef.current.beginPath();
      ctxRef.current.lineWidth = waveWidth || 50;
      ctxRef.current.strokeStyle = waveColors[i % waveColors.length];
      for (var x = 0; x < wRef.current; x += 5) {
        var y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
        ctxRef.current.lineTo(x, y + hRef.current * 0.5);
      }
      ctxRef.current.stroke();
      ctxRef.current.closePath();
    }
  };

  var render = function() {
    ctxRef.current.fillStyle = backgroundFill || "black";
    ctxRef.current.globalAlpha = waveOpacity || 0.5;
    ctxRef.current.fillRect(0, 0, wRef.current, hRef.current);
    drawWave(5);
    animIdRef.current = requestAnimationFrame(render);
  };

  var init = function() {
    var canvas = canvasRef.current;
    if (!canvas) return;
    ctxRef.current = canvas.getContext("2d");
    wRef.current = ctxRef.current.canvas.width = window.innerWidth;
    hRef.current = ctxRef.current.canvas.height = window.innerHeight;
    ctxRef.current.filter = "blur(" + blur + "px)";
    ntRef.current = 0;
    window.onresize = function() {
      wRef.current = ctxRef.current.canvas.width = window.innerWidth;
      hRef.current = ctxRef.current.canvas.height = window.innerHeight;
      ctxRef.current.filter = "blur(" + blur + "px)";
    };
    render();
  };

  useEffect(function() {
    init();
    return function() {
      cancelAnimationFrame(animIdRef.current);
    };
  }, []);

  var safariState = useState(false);
  var isSafari = safariState[0];
  var setIsSafari = safariState[1];
  useEffect(function() {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={isSafari ? { filter: "blur(" + blur + "px)" } : {}}
      ></canvas>
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </div>
  );
};