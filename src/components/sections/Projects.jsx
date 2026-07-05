import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Premium Portfolio Website",
    description: "Personal portfolio built with React, Tailwind CSS and Framer Motion — fast, responsive and mobile-optimized.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/abhiraj2189",
    live: "#",
    emoji: "🌐",
  },
  {
    title: "Python Data Analysis",
    description: "Data cleaning, visualization and dashboard creation using Pandas, NumPy and Matplotlib.",
    tech: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com/abhiraj2189",
    live: "#",
    emoji: "📊",
  },
  {
    title: "AI Chat Assistant",
    description: "AI chatbot powered by the Claude API with a responsive UI and smart conversation handling.",
    tech: ["Python", "Claude API", "REST"],
    github: "https://github.com/abhiraj2189",
    live: "#",
    emoji: "🤖",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0b0f14] py-16 lg:py-24 border-t border-[#171d27]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="font-mono-ui text-sm text-[#f5a623] mb-3">
          # projects
        </motion.p>
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-[#e6edf3] mb-12">
          Things I've built
        </motion.h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-[#232b36] bg-[#12171f] overflow-hidden hover:border-[#f5a623]/40 transition-colors"
            >
              <div className="h-36 flex items-center justify-center text-6xl bg-[#0b0f14]">
                {p.emoji}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#e6edf3]">{p.title}</h3>
                <p className="mt-3 text-sm text-[#8b98a5] leading-6">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-[#0b0f14] border border-[#232b36] text-[#8b98a5] text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  <a href={p.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md border border-[#232b36] text-[#e6edf3] text-sm hover:bg-[#171d27] transition-colors">
                    <FaGithub /> Code
                  </a>
                  <a href={p.live} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md bg-[#f5a623] text-[#0b0f14] text-sm font-semibold hover:bg-[#ffb84d] transition-colors">
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
