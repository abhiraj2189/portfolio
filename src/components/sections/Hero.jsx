import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import photo from "../../assets/images/photo.png";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center">

      {/* subtle grid only (clean look) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-20 px-10 relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative flex justify-center"
        >

          {/* PHOTO */}
          <div className="relative z-20 w-[640px] lg:w-[720px]">
            <motion.img
              src={photo}
              alt="Abhiraj"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-full object-contain drop-shadow-[0_0_80px_rgba(0,229,255,0.3)]"
            />
          </div>

          {/* Social icons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-30">
            <div className="flex flex-col gap-5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 p-4">
              <FaGithub className="text-2xl text-white hover:text-cyan-400 cursor-pointer" />
              <FaLinkedin className="text-2xl text-white hover:text-cyan-400 cursor-pointer" />
              <FaInstagram className="text-2xl text-white hover:text-cyan-400 cursor-pointer" />
              <FaTwitter className="text-2xl text-white hover:text-cyan-400 cursor-pointer" />
            </div>
          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="rounded-3xl backdrop-blur-2xl bg-white/5 p-10 border border-white/10">

            <span className="px-5 py-2 rounded-full bg-white/10 text-cyan-300 text-sm">
              👋 Hello I'm
            </span>

            <h1 className="text-6xl font-bold text-white mt-8">
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
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="h2"
              className="text-3xl text-cyan-400 font-semibold mt-6"
            />

            <p className="text-gray-300 leading-8 mt-8">
              Passionate BCA student focused on Python,
              Artificial Intelligence, Machine Learning,
              Data Science and Modern Web Development.
            </p>

            <div className="flex gap-5 mt-10">
              <button className="px-8 py-4 rounded-xl bg-cyan-500 text-white font-semibold hover:scale-105 duration-300">
                Download Resume
              </button>

              <button className="px-8 py-4 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-white duration-300">
                View Projects
              </button>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}