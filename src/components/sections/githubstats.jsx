import { motion } from "framer-motion";
import {
  FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJs, FaDatabase, FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiCplusplus } from "react-icons/si";

// ⚠️ Apna GitHub username yahan daalo agar "abhiraj2189" nahi hai
const GITHUB_USERNAME = "abhiraj2189";

const techs = [
  { icon: FaPython, name: "Python" },
  { icon: FaReact, name: "React" },
  { icon: FaJs, name: "JavaScript" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaGithub, name: "GitHub" },
  { icon: FaDatabase, name: "SQL" },
  { icon: SiCplusplus, name: "C++" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function GithubStats() {
  return (
    <section className="bg-[#0b1120] py-24 overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[150px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-8 relative"
      >
        <motion.h2 variants={fadeUp} className="text-5xl font-bold text-center text-white mb-4">
          Tech Stack & GitHub Activity
        </motion.h2>
        <motion.p variants={fadeUp} className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with, and a live look at my coding activity.
        </motion.p>
      </motion.div>

      {/* Infinite Tech Marquee */}
      <div className="relative w-full overflow-hidden mb-20">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b1120] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b1120] to-transparent z-10" />

        <div className="flex w-max animate-marquee gap-6">
          {[...techs, ...techs].map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-4 shrink-0"
            >
              <t.icon className="text-cyan-400 text-2xl" />
              <span className="text-white font-medium whitespace-nowrap">{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Stats Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-8"
      >
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-4 overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.35)] transition-all duration-500"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=22d3ee&icon_color=3b82f6&text_color=ffffff`}
            alt="GitHub Stats"
            className="w-full"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-4 overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.35)] transition-all duration-500"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=22d3ee&text_color=ffffff`}
            alt="Top Languages"
            className="w-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}