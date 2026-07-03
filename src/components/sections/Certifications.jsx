import { motion } from "framer-motion";
import { FaGoogle, FaShieldAlt, FaAward } from "react-icons/fa";
import Counter from "../ui/Counter";

const certifications = [
  {
    icon: FaShieldAlt,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
  },
  {
    icon: FaGoogle,
    title: "Google & Gemini Student Ambassador",
    issuer: "Google",
  },
  {
    icon: FaAward,
    title: "ADCA V — Grade A+",
    issuer: "Advanced Diploma in Computer Applications",
  },
];

const stats = [
  { value: 120, suffix: "+", label: "Hours of Python" },
  { value: 3, suffix: "+", label: "Projects Built" },
  { value: 10, suffix: "+", label: "Skills Learned" },
  { value: 3, suffix: "", label: "Certifications" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="bg-[#0b1120] py-24 px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto relative"
      >
        <motion.h2 variants={fadeUp} className="text-5xl font-bold text-center text-white mb-6">
          Certifications & Achievements
        </motion.h2>
        <motion.p variants={fadeUp} className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Verified credentials and milestones from my learning journey.
        </motion.p>

        {/* Animated Stats */}
        <motion.div variants={container} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="text-center rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_25px_rgba(59,130,246,0.1)] hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] hover:border-cyan-400/50 transition-all duration-500"
            >
              <h3 className="text-4xl font-extrabold text-cyan-400">
                <Counter to={s.value} suffix={s.suffix} />
              </h3>
              <p className="text-gray-400 mt-2 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Cards */}
        <motion.div variants={container} className="grid md:grid-cols-3 gap-8">
          {certifications.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="rounded-3xl border border-blue-500/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_20px_rgba(59,130,246,.15)] hover:shadow-[0_0_45px_rgba(59,130,246,.5)] hover:border-cyan-400/50 duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-6">
                <c.icon className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-white text-xl font-bold leading-snug">{c.title}</h3>
              <p className="text-gray-400 mt-3 text-sm">{c.issuer}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}