import { motion, useScroll } from "framer-motion";
import { navLinks } from "../../constants";

export default function Navbar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 bg-[#050816]/70 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <a href="#" className="text-2xl font-bold text-blue-500 tracking-wide">
          Abhiraj
        </a>

        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className="relative group">
              <a href={`#${link.id}`} className="text-gray-300 group-hover:text-cyan-300 transition-colors duration-300">
                {link.title}
              </a>
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
            </li>
          ))}
        </ul>
      </div>

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
      />
    </motion.nav>
  );
}