"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).tagName === 'A') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor - water drop */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: isHovering ? 40 : 24,
          height: isHovering ? 40 : 24,
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      >
        {/* Outer ring - subtle */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(200,230,240,0.3) 50%, rgba(180,220,235,0.1))",
            boxShadow: "0 2px 8px rgba(100, 180, 200, 0.15), inset 0 -2px 4px rgba(255,255,255,0.4), inset 0 2px 4px rgba(200,230,240,0.3)",
            border: "1px solid rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(1px)",
          }}
        />
        {/* Inner highlight - water shine */}
        <div 
          className="absolute rounded-full"
          style={{
            top: '15%',
            left: '20%',
            width: '35%',
            height: '25%',
            background: "rgba(255, 255, 255, 0.7)",
            filter: "blur(1px)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%"
          }}
        />
        {/* Secondary small highlight */}
        <div 
          className="absolute rounded-full"
          style={{
            bottom: '25%',
            right: '20%',
            width: '15%',
            height: '15%',
            background: "rgba(255, 255, 255, 0.5)",
            filter: "blur(0.5px)",
          }}
        />
      </motion.div>
      
      {/* Trailing effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99]"
        style={{
          x: useSpring(cursorX, { damping: 50, stiffness: 200 }),
          y: useSpring(cursorY, { damping: 50, stiffness: 200 }),
          width: 16,
          height: 16,
        }}
      >
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(200,230,240,0.3), transparent 70%)",
          }}
        />
      </motion.div>
    </>
  );
}
