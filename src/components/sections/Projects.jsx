import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "3D Portfolio Website",
    description:
      "Premium portfolio built with React, Tailwind CSS and Framer Motion featuring modern animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
    emoji: "🌐",
  },
  {
    title: "Python Data Analysis",
    description:
      "Data cleaning, visualization and dashboard creation using Pandas, NumPy and Matplotlib.",
    tech: ["Python", "Pandas", "Matplotlib"],
    github: "#",
    live: "#",
    emoji: "📊",
  },
  {
    title: "AI Chat Assistant",
    description:
      "Modern AI chatbot powered by APIs with responsive UI and smart conversations.",
    tech: ["Python", "OpenAI", "API"],
    github: "#",
    live: "#",
    emoji: "🤖",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#050816] py-14 lg:py-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-[50px] lg:blur-[120px]" />
      <div className="absolute right-0 bottom-10 w-72 h-72 rounded-full bg-violet-500/10 blur-[50px] lg:blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-[6px]">
            Portfolio
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-sm lg:backdrop-blur-xl
                overflow-hidden
                hover:border-cyan-400/40
                hover:shadow-[0_0_35px_rgba(34,211,238,.25)]
                transition-all
              "
            >

              {/* Banner */}
              <div className="h-44 flex items-center justify-center text-7xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
                {project.emoji}
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        bg-cyan-500/10
                        border
                        border-cyan-500/20
                        text-cyan-300
                        text-sm
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      rounded-xl
                      border
                      border-white/10
                      text-white
                      hover:bg-white/10
                      transition
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      rounded-xl
                      bg-cyan-500
                      text-white
                      hover:bg-cyan-400
                      transition
                    "
                  >
                    <FiExternalLink />
                    Live
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