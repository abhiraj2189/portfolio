import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#030712] border-t border-cyan-500/20 pt-16 pb-10 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Abhiraj<span className="text-cyan-400">.</span>
            </h2>
            <p className="text-gray-400 mt-5 leading-7">
              Python Developer • AI Learner • Data Science Enthusiast
            </p>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-5">Quick Links</h3>
            <div className="space-y-3 text-gray-400">
              <p className="hover:text-cyan-400 cursor-pointer transition-colors w-fit">Home</p>
              <p className="hover:text-cyan-400 cursor-pointer transition-colors w-fit">About</p>
              <p className="hover:text-cyan-400 cursor-pointer transition-colors w-fit">Skills</p>
              <p className="hover:text-cyan-400 cursor-pointer transition-colors w-fit">Projects</p>
              <p className="hover:text-cyan-400 cursor-pointer transition-colors w-fit">Contact</p>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-5">Connect</h3>
            <div className="flex gap-5">
              <motion.a whileHover={{ scale: 1.15, y: -3 }} href="https://github.com/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-cyan-500 flex items-center justify-center text-white hover:bg-cyan-500 transition">
                <FaGithub />
              </motion.a>
              <motion.a whileHover={{ scale: 1.15, y: -3 }} href="https://linkedin.com/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-cyan-500 flex items-center justify-center text-white hover:bg-cyan-500 transition">
                <FaLinkedin />
              </motion.a>
              <motion.a whileHover={{ scale: 1.15, y: -3 }} href="https://instagram.com/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-cyan-500 flex items-center justify-center text-white hover:bg-cyan-500 transition">
                <FaInstagram />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-center">© 2026 Abhiraj Kumar. All Rights Reserved.</p>
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll.scrollToTop()}
            className="mt-5 md:mt-0 w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
}