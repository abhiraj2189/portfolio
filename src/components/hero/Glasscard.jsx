import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function GlassCard() {
  return (
    <motion.div
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      {/* Animated Gradient Border */}
      <div className="absolute -inset-[2px] rounded-[35px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 animate-pulse blur-[1px]" />

      {/* Glass Card */}
      <div className="relative rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-3xl p-10">

        <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm">
          👋 Welcome to my Portfolio
        </span>

        <h1 className="mt-6 text-6xl font-extrabold leading-tight text-white">
          Abhiraj <span className="text-cyan-400">Kumar</span>
        </h1>

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
          speed={50}
          repeat={Infinity}
          wrapper="h2"
          className="mt-5 text-3xl font-bold text-cyan-400"
        />

        <p className="mt-8 leading-8 text-gray-300">
          Passionate BCA student specializing in Python, Artificial
          Intelligence, Machine Learning, Data Science and modern web
          development. I enjoy creating beautiful, fast and interactive
          applications with clean UI and smooth user experiences.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_#00E5FF]">
            Download Resume
          </button>

          <button className="rounded-xl border border-cyan-400 px-8 py-4 font-semibold text-cyan-300 transition duration-300 hover:bg-cyan-500 hover:text-white">
            View Projects
          </button>

        </div>

      </div>
    </motion.div>
  );
}