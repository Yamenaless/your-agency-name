"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 300, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 30 });
  
  const cursorXDelayed = useSpring(0, { stiffness: 100, damping: 20 });
  const cursorYDelayed = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    // Hide cursor on touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsVisible(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      cursorXDelayed.set(e.clientX);
      cursorYDelayed.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseenter", () => setIsVisible(true));
    window.addEventListener("mouseleave", () => setIsVisible(false));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseenter", () => setIsVisible(true));
      window.removeEventListener("mouseleave", () => setIsVisible(false));
    };
  }, [cursorX, cursorY, cursorXDelayed, cursorYDelayed, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
      />

      {/* Delayed ring with blur */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-400/50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorXDelayed,
          y: cursorYDelayed,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-gradient-radial from-blue-500/30 to-transparent rounded-full pointer-events-none z-[9997] blur-2xl"
        style={{
          x: cursorXDelayed,
          y: cursorYDelayed,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
      />
    </>
  );
}
