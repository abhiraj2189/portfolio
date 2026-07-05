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

        {/* LEFT — code block signature */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <div className="rounded-xl border border-[#232b36] bg-[#12171f] overflow-hidden shadow-lg">
            {/* window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#232b36]">
              <span className="w-3 h-3 rounded-full bg-[#5a6472]/40" />
              <span className="w-3 h-3 rounded-full bg-[#5a6472]/40" />
              <span className="w-3 h-3 rounded-full bg-[#5a6472]/40" />
              <span className="ml-2 font-mono-ui text-xs text-[#5a6472]">about_me.py</span>
            </div>

            <div className="p-5 lg:p-7 font-mono-ui text-[13px] lg:text-[15px] leading-7 overflow-x-auto">
              <p><span className="text-[#8ab4f8]">class</span> <span className="text-[#7ed9a6]">Abhiraj</span>:</p>
              <p className="pl-4"><span className="text-[#e6edf3]">role</span> = <span className="text-[#f5a623]">"Python & AI Developer"</span></p>
              <p className="pl-4"><span className="text-[#e6edf3]">study</span> = <span className="text-[#f5a623]">"BCA, 2nd Year — AKU Patna"</span></p>
              <p className="pl-4"><span className="text-[#e6edf3]">badge</span> = <span className="text-[#f5a623]">"Google Gemini Student Ambassador"</span></p>
              <p className="pl-4"><span className="text-[#e6edf3]">goal</span> = <span className="text-[#f5a623]">"AI Engineer, building real products"</span></p>
              <p className="mt-3 text-[#5a6472]"># currently learning ML & shipping projects</p>
              <p className="mt-3">
                <span className="text-[#8ab4f8]">print</span>(<span className="text-[#f5a623]">"Let's build something."</span>)
                <span className="cursor-blink text-[#f5a623]">▍</span>
              </p>
            </div>
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-3 mt-6"
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
