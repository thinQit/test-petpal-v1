"use client";
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface EncryptedTextProps {
  text: string;
  revealDelayMs?: number;
  flipDelayMs?: number;
  className?: string;
  encryptedClassName?: string;
  revealedClassName?: string;
  charset?: string;
}

export function EncryptedText({
  text,
  revealDelayMs = 50,
  flipDelayMs = 50,
  className,
  encryptedClassName,
  revealedClassName,
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()",
}: EncryptedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [revealedCount, setRevealedCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(function () {
    var revealed = 0;
    function tick() {
      if (revealed >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        return;
      }
      var result = "";
      for (var i = 0; i < text.length; i++) {
        if (i < revealed) {
          result += text[i];
        } else if (text[i] === " ") {
          result += " ";
        } else {
          result += charset[Math.floor(Math.random() * charset.length)];
        }
      }
      setDisplayText(result);
      setRevealedCount(revealed);
    }
    var flipCount = 0;
    intervalRef.current = setInterval(function () {
      flipCount++;
      if (flipCount % Math.ceil(revealDelayMs / flipDelayMs) === 0) {
        revealed++;
      }
      tick();
    }, flipDelayMs);
    return function () {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, revealDelayMs, flipDelayMs, charset]);

  return (
    <span className={cn("font-mono", className)}>
      {displayText.split("").map(function (char, i) {
        var isRevealed = i < revealedCount;
        return (
          <span key={i} className={isRevealed ? revealedClassName : encryptedClassName}>
            {char}
          </span>
        );
      })}
    </span>
  );
}