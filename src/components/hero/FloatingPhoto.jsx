import { motion } from "framer-motion";
import photo from "../../assets/images/photo.png";


export default function FloatingPhoto() {
  return (
    <motion.div
      initial={{ x: -120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex justify-center items-center w-full h-full overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute
        w-[750px]
        h-[750px]
        rounded-full
        bg-[radial-gradient(circle,rgba(0,229,255,0.20)_0%,rgba(0,229,255,0.10)_30%,rgba(59,130,246,0.08)_50%,transparent_75%)]
        blur-[150px]"
      />

      {/* Premium Rotating Glow */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[560px] h-[560px] rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(0,229,255,.65) 70deg, transparent 150deg, rgba(139,92,246,.5) 230deg, transparent 360deg)",
          filter: "blur(18px)",
          opacity: 0.65,
        }}
      />

      {/* Soft Inner Glow */}
      <div
        className="absolute
        w-[520px]
        h-[520px]
        rounded-full
        bg-cyan-400/10
        blur-[90px]"
      />
     


      {/* Floating Photo */}
      <motion.img
        src={photo}
        alt="Abhiraj Kumar"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 1.5, 0, -1.5, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20 w-[540px] lg:w-[600px] object-contain drop-shadow-[0_0_120px_rgba(0,229,255,0.45)]"
      />
    </motion.div>
  );
}