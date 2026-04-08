"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BoxesCore({ className, ...rest }: { className?: string }) {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  const colors = [
    "--sky-300", "--pink-300", "--green-300", "--yellow-300",
    "--red-300", "--purple-300", "--blue-300", "--indigo-300", "--violet-300",
  ];

  const getRandomColor = function() {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      className={cn(
        "absolute left-1/4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        "[mask-image:radial-gradient(300px_200px_at_center,white,transparent)]",
        className
      )}
      style={{ transform: "translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)" }}
      {...rest}
    >
      {rows.map(function(_r, i) {
        return (
          <motion.div key={"row-" + i} className="w-16 h-8 border-l border-slate-700 relative">
            {cols.map(function(_c, j) {
              return (
                <motion.div
                  whileHover={{ backgroundColor: "var(" + getRandomColor() + ")", transition: { duration: 0 } }}
                  animate={{ transition: { duration: 2 } }}
                  key={"col-" + j}
                  className="w-16 h-8 border-r border-t border-slate-700 relative"
                />
              );
            })}
          </motion.div>
        );
      })}
    </div>
  );
}

export function Boxes({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <BoxesCore />
    </div>
  );
}