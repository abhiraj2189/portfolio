import { motion } from "framer-motion";

const categories = [
  { title: "Programming", skills: ["Python", "JavaScript", "SQL"] },
  { title: "AI & Data", skills: ["Machine Learning", "AI", "Data Science"] },
  { title: "Frontend", skills: ["React", "HTML5", "CSS3"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code"] },
];

const proficiency = [
  { label: "Python", value: 90 },
  { label: "Git", value: 80 },
  { label: "SQL", value: 78 },
  { label: "React", value: 70 },
  { label: "Data Science", value: 65 },
  { label: "Machine Learning", value: 60 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0b0f14] py-16 lg:py-24 border-t border-[#171d27]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="font-mono-ui text-sm text-[#f5a623] mb-3">
          # skills.py
        </motion.p>
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-[#e6edf3] mb-12">
          Technologies I work with
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-[#232b36] bg-[#12171f] p-6 hover:border-[#f5a623]/40 transition-colors"
            >
              <h3 className="text-[#f5a623] font-semibold mb-4 font-mono-ui text-sm">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-md bg-[#0b0f14] text-[#8b98a5] text-xs border border-[#232b36]">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-xl border border-[#232b36] bg-[#12171f] p-7 lg:p-9"
        >
          <h3 className="font-mono-ui text-sm text-[#5a6472] mb-6">$ proficiency --list</h3>
          <div className="space-y-5">
            {proficiency.map((p, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#e6edf3] font-medium">{p.label}</span>
                  <span className="text-[#5a6472] font-mono-ui">{p.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#0b0f14] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.06, ease: "easeOut" }}
                    className="h-full rounded-full bg-[#f5a623]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
