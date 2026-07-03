import { useState } from "react";
import { motion } from "framer-motion";
import photo from "../../assets/images/photo.png";
import SocialSidebar from "./SocialSidebar";

export default function FloatingPhoto() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -10, y: px * 10 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ x: -120, opacity: 0, filter: "blur(10px)" }}
      animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center w-full"
    >
      {/* Photo stage */}
      <div
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        className="relative flex justify-center items-center w-full"
        style={{ perspective: 1000 }}
      >
        {/* Ambient glow */}
        <div
          className="absolute w-[900px] h-[900px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,229,255,0.14) 0%, rgba(59,130,246,0.08) 35%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />

        {/* Thin rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute w-[400px] h-[400px] md:w-[460px] md:h-[460px] rounded-full pointer-events-none"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, rgba(34,211,238,.9), transparent 40%, rgba(139,92,246,.7), transparent 80%)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
            opacity: 0.85,
          }}
        />

        {/* Floor glow */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-2 w-[280px] h-[50px] rounded-full bg-cyan-400/30 blur-[40px] pointer-events-none"
        />

        {/* Photo */}
        <motion.img
          src={photo}
          alt="Abhiraj Kumar"
          animate={{ y: [0, -18, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            rotateX: tilt.x,
            rotateY: tilt.y,
            transformStyle: "preserve-3d",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 78%, transparent 99%), linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskImage:
              "linear-gradient(to bottom, black 78%, transparent 99%), linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            maskComposite: "intersect",
          }}
          className="relative z-20 h-[420px] md:h-[500px] w-auto object-contain drop-shadow-[0_0_90px_rgba(0,229,255,0.35)]"
          draggable={false}
        />
      </div>

      {/* Social icons — centered below photo */}
      <SocialSidebar />
    </motion.div>
  );
}