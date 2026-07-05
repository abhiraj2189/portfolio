import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

const links = ["about", "skills", "projects", "experience", "contact"];

export default function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#0b0f14] border-t border-[#171d27] pt-14 pb-8 px-5 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="font-mono-ui text-xl text-[#e6edf3]">
              <span className="text-[#f5a623]">~/</span>abhiraj
            </h2>
            <p className="text-[#5a6472] text-sm mt-4 leading-6">
              Python Developer • AI Learner • Data Science Enthusiast
            </p>
          </div>

          <div>
            <h3 className="text-[#e6edf3] font-semibold mb-4 text-sm">Quick Links</h3>
            <div className="space-y-2.5">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => go(l)}
                  className="block text-[#8b98a5] hover:text-[#f5a623] text-sm capitalize transition-colors"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[#e6edf3] font-semibold mb-4 text-sm">Connect</h3>
            <div className="flex gap-3">
              <a href="https://github.com/abhiraj2189" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#232b36] flex items-center justify-center text-[#e6edf3] hover:border-[#f5a623]/50 hover:text-[#f5a623] transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#232b36] flex items-center justify-center text-[#e6edf3] hover:border-[#f5a623]/50 hover:text-[#f5a623] transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#232b36] flex items-center justify-center text-[#e6edf3] hover:border-[#f5a623]/50 hover:text-[#f5a623] transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#171d27] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#5a6472] text-sm text-center">© 2026 Abhiraj Kumar. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-[#f5a623] text-[#0b0f14] flex items-center justify-center hover:bg-[#ffb84d] transition-colors"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
