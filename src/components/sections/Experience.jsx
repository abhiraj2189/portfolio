import { motion } from "framer-motion";
import {
  FaSchool,
  FaUniversity,
  FaPython,
  FaBrain,
  FaLaptopCode,
  FaCertificate,
  FaBolt,
} from "react-icons/fa";

const timeline = [
  {
    year: "2021",
    title: "10th — Bihar Board",
    description: "Passed 10th Boards with First Division.",
    icon: FaSchool,
  },
  {
    year: "2022",
    title: "Diploma in Computer Applications ",
    description: "Completed Diploma in Computer Applications (DCA) .",
    icon: FaCertificate,
  },
  {
    year: "2022",
    title: "Advanced Diploma in Computer Applications",
    description: "Completed Advanced Diploma in Computer Applications (ADCA) with Grade A+.",
    icon: FaCertificate,
  },

  {
    year: "2023",
    title: "12th — Bihar Board",
    description: "Passed 12th Boards with First Division.",
    icon: FaSchool,
  },
  {
    year: "2023",
    title: "ITI — Trade Electrician",
    description: "Completed ITI in Electrician trade.",
    icon: FaBolt,
  },
  {
    year: "2024 -2027 - Present",
    title: "BCA Student",
    description: "Currently pursuing Bachelor of Computer Applications with a focus on software development, IIBM (AKU Patna).",
    icon: FaUniversity,
  },
  {
    year: "2026",
    title: "Python Learning (120+ Hours)",
    description: "Completed 120+ hours of Python learning through CampusX.",
    icon: FaPython,
  },
  {
    year: "2026",
    title: "Data Science Journey",
    description: "Learning Data Analysis, Machine Learning and Artificial Intelligence.",
    icon: FaBrain,
  },
  {
    year: "Current",
    title: "Portfolio Development",
    description: "Building modern React & Three.js portfolio projects.",
    icon: FaLaptopCode,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#050816] py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-white mb-16"
        >
          My Journey
        </motion.h2>

        <div className="border-l-2 border-blue-500/40 pl-8 relative">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ x: 6 }}
              className="mb-12 relative group"
            >
              <div className="absolute -left-[45px] top-1 w-9 h-9 rounded-full bg-[#0b1120] border-2 border-blue-500 flex items-center justify-center shadow-[0_0_20px_#3b82f6] group-hover:shadow-[0_0_30px_#22d3ee] group-hover:border-cyan-400 transition-all duration-300">
                <item.icon className="text-cyan-400 text-sm" />
              </div>

              <p className="text-cyan-400 font-semibold">{item.year}</p>
              <h3 className="text-2xl font-bold text-white mt-2">{item.title}</h3>
              <p className="text-gray-400 mt-3">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}