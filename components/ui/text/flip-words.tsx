"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FlipWords({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(
    function () {
      var idx = words.indexOf(currentWord);
      var next = words[(idx + 1) % words.length];
      setCurrentWord(next);
      setIsAnimating(true);
    },
    [currentWord, words]
  );

  useEffect(
    function () {
      if (!isAnimating) {
        var timer = setTimeout(function () {
          startAnimation();
        }, duration);
        return function () { clearTimeout(timer); };
      }
    },
    [isAnimating, duration, startAnimation]
  );

  return (
    <AnimatePresence
      onExitComplete={function () {
        setIsAnimating(false);
      }}
    >
      <motion.span
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -40, x: 40, filter: "blur(8px)", scale: 2, position: "absolute" }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className={cn("z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2", className)}
        key={currentWord}
      >
        {currentWord.split(" ").map(function (word, wordIndex) {
          return (
            <motion.span
              key={word + wordIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: wordIndex * 0.3, duration: 0.3 }}
              className="inline-block whitespace-nowrap"
            >
              {word.split("").map(function (letter, letterIndex) {
                return (
                  <motion.span
                    key={word + letterIndex}
                    initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: wordIndex * 0.3 + letterIndex * 0.05, duration: 0.2 }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                );
              })}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          );
        })}
      </motion.span>
    </AnimatePresence>
  );
}