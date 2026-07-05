import { motion } from "framer-motion";
import { FaGoogle, FaShieldAlt, FaAward } from "react-icons/fa";

const certifications = [
  { icon: FaShieldAlt, title: "Cybersecurity Basics", issuer: "Cisco Networking Academy" },
  { icon: FaGoogle, title: "Google Gemini Ambassador", issuer: "Google" },
  { icon: FaAward, title: "ADCA V — Grade A+", issuer: "Computer Applications Diploma" },
];

const stats = [
  { value: "120+", label: "Python Hours" },
  { value: "3+", label: "Projects" },
  { value: "10+", label: "Skills" },
  { value: "3", label: "Certifications" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="bg-[#0b0f14] py-16 lg:py-24 border-t border-[#171d27]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="font-mono-ui text-sm text-[#f5a623] mb-3">
          # achievements
        </motion.p>
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-[#e6edf3] mb-12">
          Certifications & milestones
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.06 }}
              className="rounded-xl border border-[#232b36] bg-[#12171f] p-6 text-center hover:border-[#f5a623]/40 transition-colors"
            >
              <h3 className="text-3xl font-bold text-[#f5a623] font-mono-ui">{s.value}</h3>
              <p className="text-[#8b98a5] text-xs mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {certifications.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-[#232b36] bg-[#12171f] p-6 hover:border-[#f5a623]/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-[#0b0f14] border border-[#232b36] flex items-center justify-center mb-4">
                  <Icon className="text-[#f5a623]" />
                </div>
                <h3 className="text-[#e6edf3] font-semibold text-sm">{c.title}</h3>
                <p className="text-[#5a6472] text-xs mt-1.5">{c.issuer}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
