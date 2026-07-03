import { motion } from "framer-motion";
import BackgroundGlow from "./BackgroundGlow";
import FloatingPhoto from "./FloatingPhoto";
import GlassCard from "./GlassCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-[#050816] flex items-center">
      <BackgroundGlow />

      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 lg:grid-cols-2
          items-center
          gap-12 lg:gap-20
          px-5 sm:px-8 md:px-10
          pt-28 pb-16
          md:py-28
          lg:py-10
        "
      >
        <FloatingPhoto />
        <GlassCard />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-gray-400 text-xs tracking-[3px] uppercase">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 rounded-full border border-cyan-400/40 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}