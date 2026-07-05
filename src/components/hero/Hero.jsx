import { motion } from "framer-motion";
import FloatingPhoto from "./FloatingPhoto";
import GlassCard from "./GlassCard";
import SocialSidebar from "./SocialSidebar";

const tabs = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "github", label: "GitHub" },
  { id: "certifications", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Hero({ activeTab, setActiveTab }) {
  return (
    <section className="relative bg-[#050816] overflow-hidden">

      {/* Background */}
      <div className="absolute -top-40 -left-40 w-[300px] h-[300px] lg:w-[650px] lg:h-[650px] rounded-full bg-cyan-500/15 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] lg:w-[650px] lg:h-[650px] rounded-full bg-violet-500/15 blur-[120px]" />

      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 pt-28 pb-14">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .8 }}
            className="relative flex justify-center"
          >
            <FloatingPhoto />

            <div className="hidden lg:block">
              <SocialSidebar />
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .8 }}
          >
            <GlassCard />
          </motion.div>

        </div>

        {/* Premium Tab Navigation */}

        <div className="mt-12 flex justify-center">

          <div className="flex flex-wrap justify-center gap-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-3">

            {tabs.map((tab) => (

              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-4
                  lg:px-5
                  py-2.5
                  rounded-xl
                  text-sm
                  lg:text-base
                  duration-300
                  ${
                    activeTab === tab.id
                      ? "bg-cyan-500 text-white shadow-[0_0_20px_#00E5FF]"
                      : "text-gray-300 hover:bg-cyan-500 hover:text-white"
                  }
                `}
              >
                {tab.label}
              </button>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}