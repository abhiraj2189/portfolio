import { motion } from "framer-motion";
import photo from "../../assets/images/photo.png";

export default function FloatingPhoto() {
  return (
    <div className="relative flex items-center justify-center w-full">

      {/* Background Glow */}
      <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[520px] lg:h-[520px] rounded-full bg-cyan-500/10 blur-[90px] lg:blur-[140px]" />

      <div className="absolute w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[380px] lg:h-[380px] rounded-full bg-blue-500/10 blur-[70px]" />

      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="
          absolute
          hidden
          lg:flex
          items-center
          justify-center
          w-[430px]
          h-[430px]
          rounded-full
          border
          border-cyan-400/20
        "
      >
        <div className="w-[390px] h-[390px] rounded-full border border-cyan-400/10" />
      </motion.div>

      {/* Photo */}
      <motion.img
        src={photo}
        alt="Abhiraj"
        draggable={false}
        animate={{
          y: [0, -16, 0],
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-20
          w-[250px]
          sm:w-[320px]
          md:w-[380px]
          lg:w-[470px]
          xl:w-[520px]
          object-contain
          select-none
          drop-shadow-[0_0_50px_rgba(0,229,255,0.35)]
        "
      />

      {/* Bottom Glow */}
      <div className="absolute bottom-6 w-[180px] sm:w-[240px] lg:w-[320px] h-[45px] rounded-full bg-cyan-400/20 blur-[35px]" />

    </div>
  );
}