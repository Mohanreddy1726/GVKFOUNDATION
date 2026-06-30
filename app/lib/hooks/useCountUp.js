"use client";
import { useEffect, useState } from "react";

export function useCountUp(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const num = parseInt(String(target).replace(/[^0-9]/g, ""), 10);
      setValue(num);
      return;
    }
    const num = parseInt(String(target).replace(/[^0-9]/g, ""), 10);
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor((1 - Math.pow(1 - p, 3)) * num));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return `${value}${String(target).includes("%") ? "%" : ""}${String(target).includes("+") ? "+" : ""}`;
}