import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import photo from "../../assets/images/photo.png";
import SocialSidebar from "./SocialSidebar";

export default function FloatingPhoto() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleMove = (e) => {
    if (isMobile) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: py * -10,
      y: px * 10,
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center w-full"
    >
      <div
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        className="relative flex justify-center items-center w-full overflow-hidden"
        style={{ perspective: 1000 }}
      >
        {/* Background Glow */}
        <div
          className="
          absolute
          w-[320px] h-[320px]
          sm:w-[500px] sm:h-[500px]
          md:w-[850px] md:h-[850px]
          rounded-full
          pointer-events-none
        "
          style={{
            background:
              "radial-gradient(circle, rgba(0,229,255,.12) 0%, rgba(59,130,246,.08) 35%, transparent 70%)",
            filter: isMobile ? "blur(35px)" : "blur(80px)",
          }}
        />

        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: isMobile ? 30 : 14,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute
          w-[200px] h-[200px]
          sm:w-[300px] sm:h-[300px]
          md:w-[460px] md:h-[460px]
          rounded-full
          pointer-events-none
        "
          style={{
            background:
              "conic-gradient(from 0deg, transparent, rgba(34,211,238,.9), transparent 40%, rgba(139,92,246,.7), transparent 80%)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
            opacity: 0.75,
          }}
        />

        {/* Floor Glow */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{
            duration: isMobile ? 6 : 4,
            repeat: Infinity,
          }}
          className="
          absolute
          bottom-1
          w-[150px] h-[22px]
          sm:w-[220px] sm:h-[36px]
          md:w-[280px] md:h-[50px]
          rounded-full
          bg-cyan-400/30
          blur-[22px]
          md:blur-[40px]
          pointer-events-none
        "
        />

        {/* Photo */}
        <motion.img
          src={photo}
          alt="Abhiraj Kumar"
          loading="eager"
          decoding="async"
          draggable={false}
          animate={{
            y: isMobile ? [0, -6, 0] : [0, -14, 0],
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            rotateX: isMobile ? 0 : tilt.x,
            rotateY: isMobile ? 0 : tilt.y,
            transformStyle: "preserve-3d",
            willChange: "transform",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 78%, transparent 99%), linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskImage:
              "linear-gradient(to bottom, black 78%, transparent 99%), linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            maskComposite: "intersect",
          }}
          className="
          relative
          z-20
          h-[210px]
          xs:h-[230px]
          sm:h-[330px]
          md:h-[420px]
          lg:h-[500px]
          w-auto
          max-w-full
          object-contain
          drop-shadow-[0_0_20px_rgba(0,229,255,.25)]
          md:drop-shadow-[0_0_90px_rgba(0,229,255,.35)]
        "
        />
      </div>

      <SocialSidebar />
    </motion.div>
  );
}