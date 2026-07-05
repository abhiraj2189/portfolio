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
    title: "10th • Bihar Board",
    description: "Passed 10th with First Division.",
    icon: FaSchool,
  },
  {
    year: "2022",
    title: "DCA",
    description: "Completed Diploma in Computer Applications.",
    icon: FaCertificate,
  },
  {
    year: "2022",
    title: "ADCA",
    description: "Completed Advanced Diploma with Grade A+.",
    icon: FaCertificate,
  },
  {
    year: "2023",
    title: "12th • Bihar Board",
    description: "Passed Intermediate with First Division.",
    icon: FaSchool,
  },
  {
    year: "2023",
    title: "ITI Electrician",
    description: "Completed ITI in Electrician Trade.",
    icon: FaBolt,
  },
  {
    year: "2024 - Present",
    title: "BCA Student",
    description: "Bachelor of Computer Applications • IIBM, AKU Patna",
    icon: FaUniversity,
  },
  {
    year: "2026",
    title: "Python",
    description: "120+ Hours of Python Learning (CampusX).",
    icon: FaPython,
  },
  {
    year: "2026",
    title: "AI & Data Science",
    description: "Learning ML, AI & Data Science.",
    icon: FaBrain,
  },
  {
    year: "Current",
    title: "Portfolio Development",
    description: "Building Modern React & AI Projects.",
    icon: FaLaptopCode,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#050816] py-20 lg:py-24 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-0 top-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 w-72 h-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-[6px]">
            Journey
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            My Learning Timeline
          </h2>
        </motion.div>

        {/* Timeline */}

        <div className="relative border-l border-cyan-500/30 ml-5">

          {timeline.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * .08,
                }}
                viewport={{ once: true }}
                className="relative pl-10 pb-10"
              >

                <div
                  className="
                    absolute
                    -left-5
                    top-1
                    w-10
                    h-10
                    rounded-full
                    bg-[#0B1120]
                    border
                    border-cyan-500
                    flex
                    items-center
                    justify-center
                    shadow-[0_0_18px_rgba(34,211,238,.35)]
                  "
                >
                  <Icon className="text-cyan-400 text-sm" />
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-5
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
                    transition-all
                  "
                >
                  <p className="text-cyan-400 text-sm font-semibold">
                    {item.year}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-400 leading-7">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
}