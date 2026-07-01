import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025 - Present",
    title: "BCA Student",
    description:
      "Currently pursuing Bachelor of Computer Applications with a focus on software development.",
  },
  {
    year: "2026",
    title: "Python Learning (120+ Hours)",
    description:
      "Completed 120+ hours of Python learning through CampusX.",
  },
  {
    year: "2026",
    title: "Data Science Journey",
    description:
      "Learning Data Analysis, Machine Learning and Artificial Intelligence.",
  },
  {
    year: "Current",
    title: "Portfolio Development",
    description:
      "Building modern React & Three.js portfolio projects.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#050816] py-24 px-8"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl font-bold text-center text-white mb-16"
        >
          My Journey
        </motion.h2>

        <div className="border-l-2 border-blue-500 pl-8">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * .2 }}
              className="mb-12 relative"
            >
              <div className="absolute -left-11 top-2 h-5 w-5 rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6]"></div>

              <p className="text-cyan-400 font-semibold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold text-white mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}