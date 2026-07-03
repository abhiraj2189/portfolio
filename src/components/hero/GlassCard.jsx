import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import GlowButton from "../ui/GlowButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function GlassCard() {
  return (
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-[24px] md:rounded-[35px] p-[1.5px] overflow-hidden group"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-[120%]"
        style={{
          background:
            "conic-gradient(from 0deg, #22d3ee, #3b82f6, #8b5cf6, #22d3ee)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative rounded-[22px] md:rounded-[33px] bg-[#0a0f1f]/90 backdrop-blur-3xl p-6 sm:p-8 md:p-10 shadow-[0_8px_60px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

        <motion.span
          variants={item}
          className="relative inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs md:text-sm"
        >
          👋 Welcome to my Portfolio
        </motion.span>

        <motion.h1 variants={item} className="relative mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
          Abhiraj <span className="text-cyan-400">Kumar</span>
        </motion.h1>

        <motion.div variants={item} className="relative">
          <TypeAnimation
            sequence={[
              "Python Developer", 2000,
              "AI Engineer", 2000,
              "Data Science Enthusiast", 2000,
              "Full Stack Learner", 2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="h2"
            className="mt-3 md:mt-5 text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400"
          />
        </motion.div>

        <motion.p variants={item} className="relative mt-5 md:mt-8 leading-7 md:leading-8 text-sm md:text-base text-gray-300">
          Passionate BCA student specializing in Python, Artificial
          Intelligence, Machine Learning, Data Science and modern web
          development. I enjoy creating beautiful, fast and interactive
          applications with clean UI and smooth user experiences.
        </motion.p>

        <motion.div variants={item} className="relative mt-6 md:mt-10 flex flex-wrap gap-3 md:gap-4">
          <GlowButton color="cyan" variant="solid" className="text-sm md:text-base px-6 py-3 md:px-8 md:py-4">
            Download Resume
          </GlowButton>
          <GlowButton color="violet" variant="outline" className="text-sm md:text-base px-6 py-3 md:px-8 md:py-4">
            View Projects
          </GlowButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}