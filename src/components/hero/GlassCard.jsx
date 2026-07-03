import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import GlowButton from "../ui/GlowButton";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function GlassCard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <motion.div
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-xl mx-auto rounded-[22px] md:rounded-[35px] p-[1.5px] overflow-hidden group"
    >
      {/* Animated Border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: isMobile ? 18 : 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-[120%]"
        style={{
          background:
            "conic-gradient(from 0deg,#22d3ee,#3b82f6,#8b5cf6,#22d3ee)",
        }}
      />

      {/* Card */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          relative
          rounded-[20px]
          md:rounded-[33px]
          bg-[#0a0f1f]/90
          backdrop-blur-xl
          md:backdrop-blur-3xl
          p-5
          sm:p-7
          md:p-10
          shadow-[0_8px_40px_rgba(0,0,0,.45)]
          overflow-hidden
        "
      >
        <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

        <motion.span
          variants={item}
          className="inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs"
        >
          👋 Welcome to my Portfolio
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
        >
          Abhiraj <span className="text-cyan-400">Kumar</span>
        </motion.h1>

        <motion.div variants={item}>
          <TypeAnimation
            sequence={[
              "Python Developer",
              2000,
              "AI Engineer",
              2000,
              "Data Science Enthusiast",
              2000,
              "Full Stack Learner",
              2000,
            ]}
            speed={isMobile ? 65 : 50}
            repeat={Infinity}
            wrapper="h2"
            className="mt-4 text-lg sm:text-2xl md:text-3xl font-bold text-cyan-400"
          />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 text-sm md:text-base leading-7 text-gray-300"
        >
          Passionate BCA student specializing in Python, Artificial
          Intelligence, Machine Learning, Data Science and modern web
          development. I enjoy creating beautiful, fast and interactive
          applications with clean UI and smooth user experiences.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <GlowButton
            color="cyan"
            variant="solid"
            className="w-full sm:w-auto px-6 py-3"
          >
            Download Resume
          </GlowButton>

          <GlowButton
            color="violet"
            variant="outline"
            className="w-full sm:w-auto px-6 py-3"
          >
            View Projects
          </GlowButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}