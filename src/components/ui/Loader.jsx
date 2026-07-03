import { motion } from "framer-motion";

const letters = "Abhiraj".split("");

export default function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="fixed inset-0 z-[999] bg-[#050816] flex flex-col items-center justify-center"
    >
      <div className="flex overflow-hidden">
        {letters.map((l, i) => (
          <motion.span
            key={i}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl font-extrabold text-white"
          >
            {l}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-cyan-400 tracking-[6px] uppercase text-xs mt-4"
      >
        Full Stack Learner
      </motion.p>

      <div className="relative w-48 h-[2px] bg-white/10 mt-8 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-blue-500"
        />
      </div>
    </motion.div>
  );
}