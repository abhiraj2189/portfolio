import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "journey" },
  { id: "contact", label: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-[#0b0f14] border-[#232b36]"
          : "bg-[#0b0f14]/80 border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => go("hero")}
          className="font-mono-ui text-[15px] text-[#e6edf3] flex items-center gap-1.5"
        >
          <span className="text-[#f5a623]">~/</span>
          <span className="font-semibold">abhiraj</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="font-mono-ui text-sm text-[#8b98a5] hover:text-[#e6edf3] px-3 py-2 rounded-md hover:bg-[#12171f] transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download="Abhiraj_Resume.pdf"
            className="ml-2 font-mono-ui text-sm px-4 py-2 rounded-md bg-[#f5a623] text-[#0b0f14] font-semibold hover:bg-[#ffb84d] transition-colors"
          >
            resume ↓
          </a>
        </nav>

        <button
          className="md:hidden text-2xl text-[#e6edf3]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0b0f14] border-t border-[#232b36] px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="font-mono-ui text-left text-[#8b98a5] hover:text-[#e6edf3] px-3 py-3 rounded-md hover:bg-[#12171f] transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download="Abhiraj_Resume.pdf"
            className="mt-2 text-center font-mono-ui text-sm px-4 py-3 rounded-md bg-[#f5a623] text-[#0b0f14] font-semibold"
          >
            resume ↓
          </a>
        </div>
      )}
    </header>
  );
}
