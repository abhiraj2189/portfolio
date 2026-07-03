import { motion } from "framer-motion";
import BackgroundGlow from "./BackgroundGlow";
import FloatingPhoto from "./FloatingPhoto";
import GlassCard from "./GlassCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center">
      <BackgroundGlow />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-center px-5 sm:px-8 md:px-10 py-24 md:py-32 lg:py-10">
        <FloatingPhoto />
        <GlassCard />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-gray-400 text-xs tracking-[3px] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-cyan-400/40 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}