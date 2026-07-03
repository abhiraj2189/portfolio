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
      initial={{ x: -60, opacity: 0, filter: "blur(10px)" }}
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
        {/* Ambient glow — smaller on mobile */}
        <div
          className="absolute w-[380px] h-[380px] sm:w-[550px] sm:h-[550px] md:w-[900px] md:h-[900px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,229,255,0.14) 0%, rgba(59,130,246,0.08) 35%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Thin rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute w-[230px] h-[230px] sm:w-[320px] sm:h-[320px] md:w-[460px] md:h-[460px] rounded-full pointer-events-none"
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
          className="absolute bottom-1 w-[160px] h-[28px] sm:w-[220px] sm:h-[36px] md:w-[280px] md:h-[50px] rounded-full bg-cyan-400/30 blur-[30px] md:blur-[40px] pointer-events-none"
        />

        {/* Photo — much smaller on phones, scales up on bigger screens */}
        <motion.img
          src={photo}
          alt="Abhiraj Kumar"
          animate={{ y: [0, -14, 0], scale: [1, 1.02, 1] }}
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
          className="relative z-20 h-[240px] sm:h-[340px] md:h-[420px] lg:h-[500px] w-auto object-contain drop-shadow-[0_0_50px_rgba(0,229,255,0.35)] md:drop-shadow-[0_0_90px_rgba(0,229,255,0.35)]"
          draggable={false}
        />
      </div>

      {/* Social icons */}
      <SocialSidebar />
    </motion.div>
  );
}