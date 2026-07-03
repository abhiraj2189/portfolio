import { motion } from "framer-motion";
import { FaPython, FaGoogle, FaCertificate, FaGraduationCap } from "react-icons/fa";

const stats = [
  { icon: FaGraduationCap, label: "BCA, 2nd Year", sub: "IIBM, AKU Patna" },
  { icon: FaPython, label: "120+ Hours", sub: "Python — CampusX" },
  { icon: FaGoogle, label: "Student Ambassador", sub: "Google & Gemini" },
  { icon: FaCertificate, label: "Cybersecurity", sub: "Cisco Certified" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0b1120] flex items-center px-8 py-24 relative overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-40 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[150px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto relative"
      >
        <motion.p variants={fadeUp} className="text-cyan-400 uppercase tracking-[8px] text-sm mb-4">
          Get To Know Me
        </motion.p>

        <motion.h2 variants={fadeUp} className="text-5xl font-bold text-white mb-10">
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.p variants={fadeUp} className="text-gray-300 text-xl leading-9">
            I'm <span className="text-white font-semibold">Abhiraj Kumar</span>, a BCA
            student passionate about Python, Data Science, Artificial Intelligence and
            Machine Learning. Currently completing 120+ hours of Python learning through
            CampusX and building real-world projects to strengthen my skills — with a
            long-term goal of building an international tech career.
          </motion.p>

          <motion.div variants={container} className="grid sm:grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_25px_rgba(59,130,246,0.1)] hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] hover:border-cyan-400/50 transition-all duration-500"
              >
                <s.icon className="text-cyan-400 text-3xl mb-4" />
                <h3 className="text-white font-bold text-lg">{s.label}</h3>
                <p className="text-gray-400 text-sm mt-1">{s.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}