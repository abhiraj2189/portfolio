import { motion } from "framer-motion";
import { FaGoogle, FaShieldAlt, FaAward } from "react-icons/fa";
import Counter from "../ui/Counter";

const certifications = [
  {
    icon: FaShieldAlt,
    title: "Cybersecurity Basics",
    issuer: "Cisco Networking Academy",
  },
  {
    icon: FaGoogle,
    title: "Google Gemini Ambassador",
    issuer: "Google",
  },
  {
    icon: FaAward,
    title: "ADCA V — Grade A+",
    issuer: "Computer Applications Diploma",
  },
];

const stats = [
  { value: 120, suffix: "+", label: "Python Hours" },
  { value: 3, suffix: "+", label: "Projects" },
  { value: 10, suffix: "+", label: "Skills" },
  { value: 3, suffix: "", label: "Certifications" },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative bg-[#050816] py-20 lg:py-24 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-cyan-400 uppercase tracking-[6px] text-sm">
            Achievements
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Certifications & Milestones
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">

          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                text-center
                hover:border-cyan-400/40
                hover:shadow-[0_0_25px_rgba(34,211,238,.2)]
                transition-all
              "
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-cyan-400">
                <Counter to={s.value} suffix={s.suffix} />
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {s.label}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-3 gap-6">

          {certifications.map((c, i) => {

            const Icon = c.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-6
                  lg:p-8
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_35px_rgba(34,211,238,.25)]
                  transition-all
                "
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-5">
                  <Icon className="text-cyan-400 text-xl" />
                </div>

                <h3 className="text-white font-bold text-lg">
                  {c.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {c.issuer}
                </p>

              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
}