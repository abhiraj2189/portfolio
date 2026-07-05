import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const tabs = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "github", label: "GitHub" },
  { id: "certifications", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeTab, setActiveTab }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4">

          <div className="rounded-2xl border border-white/10 bg-[#050816]/95 lg:bg-[#050816]/70 backdrop-blur-none lg:backdrop-blur-2xl shadow-xl">

            <div className="flex items-center justify-between h-16 px-6">

              {/* Logo */}
              <motion.h1
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold cursor-pointer"
              >
                <span className="text-white">Abhiraj</span>
                <span className="text-cyan-400">.</span>
              </motion.h1>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-2">

                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-cyan-500 text-white shadow-[0_0_20px_rgba(0,229,255,.5)]"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}

              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white text-3xl"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>

            </div>

          </div>

        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed top-24 left-5 right-5 z-40 rounded-2xl border border-white/10 bg-[#0B1120]/95 backdrop-blur-2xl p-5 lg:hidden"
          >
            <div className="flex flex-col gap-3">

              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMenuOpen(false);
                  }}
                  className={`text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-cyan-500 text-white"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}