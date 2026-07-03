import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundGlow() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: isMobile ? [0, 20, 0] : [0, 80, 0],
          y: isMobile ? [0, 15, 0] : [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          absolute
          -top-20
          -left-20
          ${isMobile ? "w-[220px] h-[220px] blur-[70px]" : "w-[500px] h-[500px] blur-[170px]"}
          rounded-full
          bg-cyan-400/20
          pointer-events-none
        `}
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: isMobile ? [0, -20, 0] : [0, -80, 0],
          y: isMobile ? [0, -10, 0] : [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          absolute
          top-20
          right-0
          ${isMobile ? "w-[180px] h-[180px] blur-[60px]" : "w-[420px] h-[420px] blur-[160px]"}
          rounded-full
          bg-blue-500/20
          pointer-events-none
        `}
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          scale: isMobile ? [1, 1.05, 1] : [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className={`
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          ${isMobile ? "w-[200px] h-[200px] blur-[70px]" : "w-[450px] h-[450px] blur-[170px]"}
          rounded-full
          bg-violet-500/20
          pointer-events-none
        `}
      />
    </>
  );
}