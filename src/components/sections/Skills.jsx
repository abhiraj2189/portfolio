import { motion } from "framer-motion";
import RadarChart from "../ui/RadarChart";

const skills = [
  "Python", "Data Science", "Machine Learning", "Artificial Intelligence",
  "SQL", "Git & GitHub", "HTML5", "CSS3", "JavaScript", "React",
];

const proficiency = [
  { label: "Python", value: 90 },
  { label: "Data Science", value: 65 },
  { label: "Machine Learning", value: 60 },
  { label: "SQL", value: 78 },
  { label: "React / JS", value: 70 },
  { label: "Git & GitHub", value: 80 },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-[#050816] px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white mb-16 text-center"
        >
          My Skills
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.08, y: -10 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="relative overflow-hidden rounded-3xl p-8 cursor-pointer border border-blue-500/30 bg-white/5 backdrop-blur-xl shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)] hover:border-cyan-400 duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent opacity-0 hover:opacity-100 transition duration-500" />
              <h3 className="relative text-blue-300 text-2xl font-bold tracking-wide">{skill}</h3>
              <p className="relative text-gray-400 mt-3 text-sm">Professional Learning</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Proficiency Radar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-24 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-10 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-2">Skill Proficiency</h3>
          <p className="text-gray-400 text-center mb-8">A visual overview of my core strengths</p>
          <RadarChart data={proficiency} />
        </motion.div>
      </div>
    </section>
  );
}