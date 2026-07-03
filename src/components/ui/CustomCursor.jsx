import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { damping: 25, stiffness: 300 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true);
      }
    };
    const handleOut = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <div className="hidden lg:block">
      {/* Dot — follows instantly */}
      <motion.div
        style={{ x: mouseX, y: mouseY, opacity: isVisible ? 1 : 0 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      {/* Ring — lags behind, scales on hover */}
      <motion.div
        style={{ x: ringX, y: ringY, opacity: isVisible ? 1 : 0 }}
        animate={{ scale: isHovering ? 2.2 : 1 }}
        transition={{ scale: { duration: 0.25 } }}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-cyan-400/70 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
    </div>
  );
}