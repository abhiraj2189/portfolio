import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import photo from "../../assets/images/photo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#0b0f14] pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

        {/* LEFT — simple text intro */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <p className="font-mono-ui text-sm text-[#f5a623] mb-4">
            👋 Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#e6edf3]">
            Hi, I'm <span className="text-[#f5a623]">Abhiraj</span>
          </h1>

          <p className="mt-4 text-xl lg:text-2xl font-semibold text-[#8ab4f8]">
            Python & AI Developer
          </p>

          <p className="mt-6 text-[#8b98a5] leading-8 max-w-lg">
            I'm a BCA student passionate about building AI applications with
            Python, Machine Learning and modern web technologies. Also a{" "}
            <span className="text-[#e6edf3] font-medium">
              Google Gemini Student Ambassador
            </span>{" "}
            working towards becoming an AI Engineer.
          </p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-3 mt-8"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-3 rounded-md bg-[#f5a623] text-[#0b0f14] font-semibold text-sm hover:bg-[#ffb84d] transition-colors"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download="Abhiraj_Resume.pdf"
              className="px-5 py-3 rounded-md border border-[#232b36] text-[#e6edf3] font-semibold text-sm hover:border-[#3a4655] hover:bg-[#12171f] transition-colors"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT — photo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl border border-[#f5a623]/30" />
            <img
              src={photo}
              alt="Abhiraj Kumar"
              className="relative w-[220px] sm:w-[260px] lg:w-[300px] rounded-2xl object-cover border border-[#232b36]"
            />
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/abhiraj2189" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-[#232b36] flex items-center justify-center text-[#e6edf3] hover:border-[#f5a623]/50 hover:text-[#f5a623] transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-[#232b36] flex items-center justify-center text-[#e6edf3] hover:border-[#f5a623]/50 hover:text-[#f5a623] transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-[#232b36] flex items-center justify-center text-[#e6edf3] hover:border-[#f5a623]/50 hover:text-[#f5a623] transition-colors">
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
