import { motion } from "framer-motion";
import {
  FaPython,
  FaGoogle,
  FaCertificate,
  FaGraduationCap,
} from "react-icons/fa";

const stats = [
  {
    icon: FaGraduationCap,
    title: "BCA (2nd Year)",
    subtitle: "IIBM • AKU Patna",
  },
  {
    icon: FaPython,
    title: "120+ Hours",
    subtitle: "Python - CampusX",
  },
  {
    icon: FaGoogle,
    title: "Google",
    subtitle: "Gemini Ambassador",
  },
  {
    icon: FaCertificate,
    title: "Cisco",
    subtitle: "Cybersecurity",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-14 lg:py-16"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[50px] lg:blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-500/10 blur-[50px] lg:blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-[6px] text-sm">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-5">
            Passionate About Building AI
          </h2>
        </motion.div>

        {/* Layout */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

              <p className="text-gray-300 leading-8 text-lg">

                Hi, I'm{" "}

                <span className="font-semibold text-cyan-400">
                  Abhiraj Kumar
                </span>

                , a BCA student who loves building AI applications using
                Python, Machine Learning, Data Science and Modern Web
                Technologies.

                <br />
                <br />

                My goal is to become an AI Engineer and create products
                that solve real-world problems while continuously learning
                new technologies.

              </p>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-6
                    transition-all
                    duration-300
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_30px_rgba(34,211,238,.25)]
                  "
                >
                  <Icon className="text-4xl text-cyan-400 mb-5" />

                  <h3 className="text-white font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    {item.subtitle}
                  </p>

                </motion.div>
              );

            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}