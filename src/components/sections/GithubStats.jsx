import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJs,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiCplusplus } from "react-icons/si";

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

export default function GithubStats() {
  return (
    <section
      id="github"
      className="relative bg-[#050816] py-14 lg:py-16 overflow-hidden"
    >
      {/* Glow */}

      <div className="absolute left-0 top-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-[50px] lg:blur-[120px]" />

      <div className="absolute right-0 bottom-10 w-72 h-72 rounded-full bg-blue-500/10 blur-[50px] lg:blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-cyan-400 uppercase tracking-[6px]">
            GitHub
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Tech Stack & Coding Activity
          </h2>
        </motion.div>

        {/* Tech Pills */}

        <div className="flex flex-wrap justify-center gap-4 mb-14">

          {techs.map((tech, index) => {

            const Icon = tech.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-xl
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_20px_rgba(34,211,238,.25)]
                  transition-all
                "
              >
                <Icon className="text-cyan-400 text-xl" />

                <span className="text-white text-sm">
                  {tech.name}
                </span>

              </motion.div>
            );

          })}

        </div>

        {/* GitHub Cards */}

        <div className="grid lg:grid-cols-2 gap-8">

          <motion.div
            whileHover={{ y: -5 }}
            className="
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-4
            "
          >
            <img
              loading="lazy"
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000`}
              alt="GitHub Stats"
              className="w-full"
            />
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-4
            "
          >
            <img
              loading="lazy"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000`}
              alt="Top Languages"
              className="w-full"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}