import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0b1120] flex items-center px-8"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-xl leading-9 max-w-4xl"
        >
          I'm Abhiraj Kumar, a BCA student passionate about Python,
          Data Science, Artificial Intelligence and Machine Learning.
          Currently completing 120+ hours of Python learning through CampusX
          and building real-world projects to strengthen my skills.
        </motion.p>

      </div>
    </section>
  );
}