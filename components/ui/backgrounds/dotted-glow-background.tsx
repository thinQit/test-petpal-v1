"use client";

import React, { useEffect, useRef, useState } from "react";

type DottedGlowBackgroundProps = {
  className?: string;
  gap?: number;
  radius?: number;
  color?: string;
  darkColor?: string;
  glowColor?: string;
  darkGlowColor?: string;
  colorLightVar?: string;
  colorDarkVar?: string;
  glowColorLightVar?: string;
  glowColorDarkVar?: string;
  opacity?: number;
  backgroundOpacity?: number;
  speedMin?: number;
  speedMax?: number;
  speedScale?: number;
};

export var DottedGlowBackground = function(props: DottedGlowBackgroundProps) {
  var className = props.className;
  var gap = props.gap !== undefined ? props.gap : 12;
  var radius = props.radius !== undefined ? props.radius : 2;
  var color = props.color || "rgba(0,0,0,0.7)";
  var darkColor = props.darkColor;
  var glowColor = props.glowColor || "rgba(0, 170, 255, 0.85)";
  var darkGlowColor = props.darkGlowColor;
  var colorLightVar = props.colorLightVar;
  var colorDarkVar = props.colorDarkVar;
  var glowColorLightVar = props.glowColorLightVar;
  var glowColorDarkVar = props.glowColorDarkVar;
  var opacity = props.opacity !== undefined ? props.opacity : 0.6;
  var backgroundOpacity = props.backgroundOpacity !== undefined ? props.backgroundOpacity : 0;
  var speedMin = props.speedMin !== undefined ? props.speedMin : 0.4;
  var speedMax = props.speedMax !== undefined ? props.speedMax : 1.3;
  var speedScale = props.speedScale !== undefined ? props.speedScale : 1;

  var canvasRef = useRef<HTMLCanvasElement | null>(null);
  var containerRef = useRef<HTMLDivElement | null>(null);
  var resolvedColorState = useState<string>(color);
  var resolvedColor = resolvedColorState[0];
  var setResolvedColor = resolvedColorState[1];
  var resolvedGlowColorState = useState<string>(glowColor);
  var resolvedGlowColor = resolvedGlowColorState[0];
  var setResolvedGlowColor = resolvedGlowColorState[1];

  var resolveCssVariable = function(el: Element, variableName?: string): string | null {
    if (!variableName) return null;
    var normalized = variableName.startsWith("--") ? variableName : "--" + variableName;
    var fromEl = getComputedStyle(el).getPropertyValue(normalized).trim();
    if (fromEl) return fromEl;
    var root = document.documentElement;
    var fromRoot = getComputedStyle(root).getPropertyValue(normalized).trim();
    return fromRoot || null;
  };

  var detectDarkMode = function(): boolean {
    var root = document.documentElement;
    if (root.classList.contains("dark")) return true;
    if (root.classList.contains("light")) return false;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  useEffect(function() {
    var container = containerRef.current || document.documentElement;

    var compute = function() {
      var isDark = detectDarkMode();

      var nextColor: string = color;
      var nextGlow: string = glowColor;

      if (isDark) {
        var varDot = resolveCssVariable(container, colorDarkVar);
        var varGlow = resolveCssVariable(container, glowColorDarkVar);
        nextColor = varDot || darkColor || nextColor;
        nextGlow = varGlow || darkGlowColor || nextGlow;
      } else {
        var varDotL = resolveCssVariable(container, colorLightVar);
        var varGlowL = resolveCssVariable(container, glowColorLightVar);
        nextColor = varDotL || nextColor;
        nextGlow = varGlowL || nextGlow;
      }

      setResolvedColor(nextColor);
      setResolvedGlowColor(nextGlow);
    };

    compute();

    var mql = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
    var handleMql = function() { compute(); };
    if (mql && mql.addEventListener) mql.addEventListener("change", handleMql);

    var mo = new MutationObserver(function() { compute(); });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    return function() {
      if (mql && mql.removeEventListener) mql.removeEventListener("change", handleMql);
      mo.disconnect();
    };
  }, [color, darkColor, glowColor, darkGlowColor, colorLightVar, colorDarkVar, glowColorLightVar, glowColorDarkVar]);

  useEffect(function() {
    var el = canvasRef.current;
    var container = containerRef.current;
    if (!el || !container) return;

    var ctx = el.getContext("2d");
    if (!ctx) return;

    var raf = 0;
    var stopped = false;

    var dpr = Math.max(1, window.devicePixelRatio || 1);

    var resize = function() {
      var rect = container.getBoundingClientRect();
      el.width = Math.max(1, Math.floor(rect.width * dpr));
      el.height = Math.max(1, Math.floor(rect.height * dpr));
      el.style.width = Math.floor(rect.width) + "px";
      el.style.height = Math.floor(rect.height) + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    var ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    var dots: { x: number; y: number; phase: number; speed: number }[] = [];

    var regenDots = function() {
      dots = [];
      var rect = container.getBoundingClientRect();
      var cols = Math.ceil(rect.width / gap) + 2;
      var rows = Math.ceil(rect.height / gap) + 2;
      var min = Math.min(speedMin, speedMax);
      var max = Math.max(speedMin, speedMax);
      for (var i = -1; i < cols; i++) {
        for (var j = -1; j < rows; j++) {
          var x = i * gap + (j % 2 === 0 ? 0 : gap * 0.5);
          var y = j * gap;
          var phase = Math.random() * Math.PI * 2;
          var span = Math.max(max - min, 0);
          var spd = min + Math.random() * span;
          dots.push({ x: x, y: y, phase: phase, speed: spd });
        }
      }
    };

    regenDots();

    var last = performance.now();

    var draw = function(now: number) {
      if (stopped) return;
      var dt = (now - last) / 1000;
      last = now;
      var rect = container.getBoundingClientRect();

      ctx!.clearRect(0, 0, el.width, el.height);
      ctx!.globalAlpha = opacity;

      if (backgroundOpacity > 0) {
        var grad = ctx!.createRadialGradient(
          rect.width * 0.5, rect.height * 0.4,
          Math.min(rect.width, rect.height) * 0.1,
          rect.width * 0.5, rect.height * 0.5,
          Math.max(rect.width, rect.height) * 0.7
        );
        grad.addColorStop(0, "rgba(0,0,0,0)");
        grad.addColorStop(1, "rgba(0,0,0," + Math.min(Math.max(backgroundOpacity, 0), 1) + ")");
        ctx!.fillStyle = grad;
        ctx!.fillRect(0, 0, rect.width, rect.height);
      }

      ctx!.save();
      ctx!.fillStyle = resolvedColor;

      var time = (now / 1000) * Math.max(speedScale, 0);
      for (var i = 0; i < dots.length; i++) {
        var d = dots[i];
        var mod = (time * d.speed + d.phase) % 2;
        var lin = mod < 1 ? mod : 2 - mod;
        var a = 0.25 + 0.55 * lin;

        if (a > 0.6) {
          var glow = (a - 0.6) / 0.4;
          ctx!.shadowColor = resolvedGlowColor;
          ctx!.shadowBlur = 6 * glow;
        } else {
          ctx!.shadowColor = "transparent";
          ctx!.shadowBlur = 0;
        }

        ctx!.globalAlpha = a * opacity;
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.restore();

      raf = requestAnimationFrame(draw);
    };

    var handleResize = function() {
      resize();
      regenDots();
    };

    window.addEventListener("resize", handleResize);
    raf = requestAnimationFrame(draw);

    return function() {
      stopped = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      ro.disconnect();
    };
  }, [gap, radius, resolvedColor, resolvedGlowColor, opacity, backgroundOpacity, speedMin, speedMax, speedScale]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "absolute", inset: 0 }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
};