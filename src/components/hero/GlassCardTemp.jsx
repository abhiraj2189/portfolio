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
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Animated Gradient Border */}
      <div className="absolute -inset-[2px] rounded-[35px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70 animate-pulse blur-[2px]" />

      {/* Glass Card */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-3xl p-10 shadow-[0_8px_60px_rgba(0,0,0,0.5)]"
      >
        <motion.span
          variants={item}
          className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm"
        >
          👋 Welcome to my Portfolio
        </motion.span>

        <motion.h1 variants={item} className="mt-6 text-6xl font-extrabold leading-tight text-white">
          Abhiraj <span className="text-cyan-400">Kumar</span>
        </motion.h1>

        <motion.div variants={item}>
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
            className="mt-5 text-3xl font-bold text-cyan-400"
          />
        </motion.div>

        <motion.p variants={item} className="mt-8 leading-8 text-gray-300">
          Passionate BCA student specializing in Python, Artificial
          Intelligence, Machine Learning, Data Science and modern web
          development. I enjoy creating beautiful, fast and interactive
          applications with clean UI and smooth user experiences.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <GlowButton color="cyan" variant="solid">Download Resume</GlowButton>
          <GlowButton color="violet" variant="outline">View Projects</GlowButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}