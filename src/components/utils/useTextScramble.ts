import { useState, useEffect, useCallback, useRef } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/";

export const useTextScramble = (
  finalText: string,
  speed: number = 30,
  maxIterations: number = 20
) => {
  const [displayText, setDisplayText] = useState(finalText);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRequest = useRef<number | null>(null);

  const scramble = useCallback(() => {
    setIsScrambling(true);
    let iteration = 0;

    const tick = () => {
      if (iteration > maxIterations) {
        setDisplayText(finalText);
        setIsScrambling(false);
        return;
      }

      const progress = iteration / maxIterations;
      const charactersResolved = Math.floor(progress * finalText.length);

      const newText = finalText
        .split("")
        .map((char, index) => {
          if (index < charactersResolved || char === " ") {
            return finalText[index];
          }
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
        .join("");

      setDisplayText(newText);
      iteration++;

      setTimeout(() => {
        frameRequest.current = requestAnimationFrame(tick);
      }, speed);
    };

    frameRequest.current = requestAnimationFrame(tick);
  }, [finalText, speed, maxIterations]);

  useEffect(() => {
    // Initial display
    setDisplayText(finalText);
    return () => {
      if (frameRequest.current) cancelAnimationFrame(frameRequest.current);
    };
  }, [finalText]);

  return { displayText, scramble, isScrambling };
};
