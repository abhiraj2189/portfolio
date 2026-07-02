import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <>
      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-400/20 blur-[170px]"
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-0 w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[160px]"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full bg-violet-500/20 blur-[170px]"
      />
    </>
  );
}