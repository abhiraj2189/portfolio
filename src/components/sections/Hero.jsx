import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import photo from "../../assets/images/photo.png";

/* ✨ Floating particles */
function Particles() {
  const dots = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/20 rounded-full blur-sm animate-pulse"
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animationDuration: Math.random() * 6 + 3 + "s",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#050816] flex items-center px-10 pt-20 relative overflow-hidden">

      {/* 🌊 glowing background */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[180px] top-10 left-10 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[180px] bottom-10 right-10 animate-pulse" />

      {/* ✨ particles */}
      <Particles />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 relative z-10">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.img
            src={photo}
            alt="Abhiraj Kumar"
            animate={{ y: [0, -18, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-[520px] drop-shadow-[0_0_120px_#00E5FF]"
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02 }}
        >

          {/* GLASS CARD (SOFT BLEND PREMIUM) */}
          <div className="relative">

            {/* glow aura */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-white/5 to-purple-500/10 blur-2xl scale-105"></div>

            <div className="relative rounded-3xl p-10 backdrop-blur-3xl bg-white/5 shadow-[0_0_100px_rgba(0,255,255,0.08)]">

              <p className="text-cyan-400 text-2xl">
                👋 Hello, I'm
              </p>

              <h1 className="text-6xl font-bold text-white mt-2">
                Abhiraj Kumar
              </h1>

              <TypeAnimation
                sequence={[
                  "Python Developer",
                  2000,
                  "AI Engineer",
                  2000,
                  "Data Science Enthusiast",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="text-3xl text-cyan-400 mt-6 font-bold"
              />

              <p className="text-gray-300 text-lg mt-8 leading-8 max-w-xl">
                Passionate Python Developer and BCA student who loves building AI-powered applications,
                modern websites, and solving real-world problems with clean, efficient code.
              </p>

              <div className="mt-10 flex gap-5">
                <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition">
                  Download Resume
                </button>

                <button className="border border-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-xl text-cyan-400 font-semibold hover:scale-105 transition">
                  View Projects
                </button>
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}