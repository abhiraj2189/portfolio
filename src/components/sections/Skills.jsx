import { motion } from "framer-motion";

const skills = [
  "Python",
  "Data Science",
  "Machine Learning",
  "Artificial Intelligence",
  "SQL",
  "Git & GitHub",
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#050816] px-8 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl font-bold text-white mb-16 text-center"
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

          {skills.map((skill,index)=>(
            <motion.div
  key={index}
  whileHover={{
    scale: 1.08,
    y: -10,
  }}
  transition={{ type: "spring", stiffness: 250 }}
  className="
    relative
    overflow-hidden
    rounded-3xl
    p-8
    cursor-pointer
    border
    border-blue-500/30
    bg-white/5
    backdrop-blur-xl
    shadow-[0_0_25px_rgba(59,130,246,0.15)]
    hover:shadow-[0_0_50px_rgba(59,130,246,0.7)]
    hover:border-cyan-400
    duration-500
  "
>
  {/* Glow Effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent opacity-0 hover:opacity-100 transition duration-500"></div>

  <h3 className="relative text-blue-300 text-2xl font-bold tracking-wide">
    {skill}
  </h3>

  <p className="relative text-gray-400 mt-3 text-sm">
    Professional Learning
  </p>
</motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}