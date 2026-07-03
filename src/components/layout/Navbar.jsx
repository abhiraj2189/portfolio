import { useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../constants";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#050816]/75 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4 md:py-5">
        <a
          href="#"
          className="text-xl md:text-2xl font-bold text-cyan-400 tracking-wide"
        >
          Abhiraj
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className="relative group">
              <a
                href={`#${link.id}`}
                className="text-gray-300 group-hover:text-cyan-300 transition"
              >
                {link.title}
              </a>

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden bg-[#050816]/95 backdrop-blur-xl border-t border-white/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-gray-300 hover:text-cyan-400 border-b border-white/5"
              >
                {link.title}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
      />
    </motion.nav>
  );
}