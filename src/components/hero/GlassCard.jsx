import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function GlassCard({ setActiveTab }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-xl mx-auto"
    >
      <div className="relative rounded-3xl overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-3xl" />

        {/* Glass */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm lg:backdrop-blur-2xl p-6 sm:p-8 lg:p-10">

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm"
          >
            👋 Welcome To My Portfolio
          </motion.span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Hi, I'm </span>

            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Abhiraj
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "Python Developer",
              2000,
              "AI Engineer",
              2000,
              "Machine Learning",
              2000,
              "Data Science Enthusiast",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="mt-5 text-xl sm:text-2xl lg:text-3xl font-semibold text-cyan-400"
          />

          <p className="mt-7 text-gray-300 leading-8 text-[15px] sm:text-base">
            Passionate BCA student focused on Python, Artificial
            Intelligence, Machine Learning, Data Science and Modern
            Web Development. I enjoy building premium AI products
            that solve real-world problems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="/resume.pdf"
              download="Abhiraj_Resume.pdf"
              className="
              px-6
              py-3
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
              font-semibold
              hover:scale-105
              duration-300
              shadow-[0_0_30px_rgba(0,229,255,0.35)]
              inline-block
              text-center
            "
            >
              Download Resume
            </a>

            <button
              onClick={() => setActiveTab && setActiveTab("projects")}
              className="
              px-6
              py-3
              rounded-xl
              border
              border-cyan-400/40
              text-cyan-300
              hover:bg-cyan-500
              hover:text-white
              duration-300
            "
            >
              View Projects
            </button>

          </div>

        </div>

      </div>
    </motion.div>
  );
}