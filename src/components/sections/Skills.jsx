import { motion } from "framer-motion";
import RadarChart from "../ui/RadarChart";

const categories = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    title: "AI & Data",
    skills: ["Machine Learning", "AI", "Data Science"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML5", "CSS3"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

const proficiency = [
  { label: "Python", value: 90 },
  { label: "Data Science", value: 65 },
  { label: "Machine Learning", value: 60 },
  { label: "SQL", value: 78 },
  { label: "React", value: 70 },
  { label: "Git", value: 80 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] py-14 lg:py-16"
    >
      {/* Glow */}
      <div className="absolute left-0 top-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-[50px] lg:blur-[120px]" />
      <div className="absolute right-0 bottom-20 w-72 h-72 rounded-full bg-blue-500/10 blur-[50px] lg:blur-[120px]" />

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
            Skills
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Technologies I Work With
          </h2>
        </motion.div>

        {/* Skill Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                hover:border-cyan-400/40
                hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
                transition-all
              "
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      px-3
                      py-2
                      rounded-full
                      bg-cyan-500/10
                      text-cyan-300
                      text-sm
                      border
                      border-cyan-500/20
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

        {/* Radar Chart */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="
            mt-16
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            lg:p-10
          "
        >

          <h3 className="text-3xl text-center font-bold text-white">
            Skill Overview
          </h3>

          <p className="text-center text-gray-400 mt-2 mb-8">
            Current proficiency across my primary technologies
          </p>

          <RadarChart data={proficiency} />

        </motion.div>

      </div>
    </section>
  );
}