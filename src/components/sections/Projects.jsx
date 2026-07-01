import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "3D Portfolio Website",
    description:
      "Modern portfolio built using React, Tailwind CSS, Framer Motion and Three.js.",
    tech: ["React", "Tailwind", "Three.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Python Data Analysis",
    description:
      "Data cleaning, visualization and analysis using Python libraries.",
    tech: ["Python", "Pandas", "Matplotlib"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Chat Assistant",
    description:
      "An AI chatbot project with a modern responsive interface.",
    tech: ["Python", "AI", "API"],
    github: "#",
    live: "#",
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0B1120] py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl font-bold text-center text-white mb-20"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.04,
                rotateX: 4,
                rotateY: 4,
              }}
              transition={{ type: "spring", stiffness: 220 }}
              className="relative rounded-3xl overflow-hidden border border-blue-500/20 bg-white/5 backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,.15)] hover:shadow-[0_0_50px_rgba(59,130,246,.6)] duration-500"
            >

              {/* Project Image */}
              <div className="h-56 bg-gradient-to-br from-blue-700 to-cyan-500 flex items-center justify-center text-6xl">
                💻
              </div>

              <div className="p-7">

                <h3 className="text-white text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="flex justify-between mt-8">

                  <a
                    href={project.github}
                    className="text-white text-2xl hover:text-blue-400"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.live}
                    className="text-white text-2xl hover:text-cyan-400"
                  >
                    <FiExternalLink />
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