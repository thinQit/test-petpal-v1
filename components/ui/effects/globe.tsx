"use client";
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlobeMarker {
  lat: number;
  lng: number;
  label?: string;
  size?: number;
}

interface GlobeProps {
  className?: string;
  markers?: GlobeMarker[];
  globeColor?: string;
  markerColor?: string;
  autoRotate?: boolean;
}

export function Globe({
  className,
  markers = [],
  globeColor = "#1a1a2e",
  markerColor = "#00d4ff",
  autoRotate = true,
}: GlobeProps) {
  var containerRef = useRef<HTMLDivElement>(null);

  useEffect(function () {
    if (!containerRef.current) return;
    var container = containerRef.current;
    var width = container.clientWidth;
    var height = container.clientHeight || 400;

    // Dynamic import Three.js
    import("three").then(function (THREE) {
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 2.5;
      var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);

      // Globe sphere
      var geometry = new THREE.SphereGeometry(1, 64, 64);
      var material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(globeColor),
        transparent: true,
        opacity: 0.9,
        wireframe: false,
      });
      var globe = new THREE.Mesh(geometry, material);
      scene.add(globe);

      // Wireframe overlay
      var wireMaterial = new THREE.MeshBasicMaterial({ color: 0x444466, wireframe: true, transparent: true, opacity: 0.1 });
      var wire = new THREE.Mesh(new THREE.SphereGeometry(1.002, 32, 32), wireMaterial);
      scene.add(wire);

      // Lights
      var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      var pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(5, 3, 5);
      scene.add(pointLight);

      // Markers
      markers.forEach(function (m) {
        var phi = (90 - m.lat) * (Math.PI / 180);
        var theta = (m.lng + 180) * (Math.PI / 180);
        var x = -(Math.sin(phi) * Math.cos(theta));
        var z = Math.sin(phi) * Math.sin(theta);
        var y = Math.cos(phi);
        var dotGeo = new THREE.SphereGeometry(m.size || 0.02, 8, 8);
        var dotMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(markerColor) });
        var dot = new THREE.Mesh(dotGeo, dotMat);
        dot.position.set(x, y, z);
        globe.add(dot);
      });

      var animId: number;
      function animate() {
        animId = requestAnimationFrame(animate);
        if (autoRotate) {
          globe.rotation.y += 0.002;
          wire.rotation.y += 0.002;
        }
        renderer.render(scene, camera);
      }
      animate();

      return function () {
        cancelAnimationFrame(animId);
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    });
  }, [markers, globeColor, markerColor, autoRotate]);

  return <div ref={containerRef} className={cn("h-[400px] w-full", className)} />;
}