import { motion } from "framer-motion";
import { FaPython, FaGoogle, FaCertificate, FaGraduationCap } from "react-icons/fa";

const stats = [
  { icon: FaGraduationCap, title: "BCA (2nd Year)", subtitle: "IIBM • AKU Patna" },
  { icon: FaPython, title: "120+ Hours", subtitle: "Python — CampusX" },
  { icon: FaGoogle, title: "Google", subtitle: "Gemini Ambassador" },
  { icon: FaCertificate, title: "Cisco", subtitle: "Cybersecurity" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="bg-[#0b0f14] py-16 lg:py-24 border-t border-[#171d27]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-mono-ui text-sm text-[#f5a623] mb-3"
        >
          # about-me
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl lg:text-4xl font-bold text-[#e6edf3] mb-12"
        >
          Passionate about building with AI
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-xl border border-[#232b36] bg-[#12171f] p-7"
          >
            <p className="text-[#8b98a5] leading-8">
              Hi, I'm <span className="text-[#e6edf3] font-semibold">Abhiraj Kumar</span> —
              a BCA student who loves building AI applications using Python,
              Machine Learning, Data Science and modern web technologies.
            </p>
            <p className="mt-5 text-[#8b98a5] leading-8">
              My goal is to become an AI Engineer and create products that
              solve real-world problems, while continuously learning new
              technologies along the way.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-[#232b36] bg-[#12171f] p-5 hover:border-[#f5a623]/40 transition-colors"
                >
                  <Icon className="text-2xl text-[#f5a623] mb-4" />
                  <h3 className="text-[#e6edf3] font-semibold text-sm">{item.title}</h3>
                  <p className="text-[#5a6472] text-xs mt-1">{item.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
