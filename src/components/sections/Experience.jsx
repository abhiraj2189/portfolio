import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaPython, FaBrain, FaLaptopCode, FaCertificate, FaBolt } from "react-icons/fa";

const timeline = [
  { year: "2021", title: "10th • Bihar Board", description: "Passed 10th with First Division.", icon: FaSchool },
  { year: "2022", title: "DCA", description: "Completed Diploma in Computer Applications.", icon: FaCertificate },
  { year: "2022", title: "ADCA", description: "Completed Advanced Diploma with Grade A+.", icon: FaCertificate },
  { year: "2023", title: "12th • Bihar Board", description: "Passed Intermediate with First Division.", icon: FaSchool },
  { year: "2023", title: "ITI Electrician", description: "Completed ITI in Electrician Trade.", icon: FaBolt },
  { year: "2024 – Present", title: "BCA Student", description: "Bachelor of Computer Applications • IIBM, AKU Patna.", icon: FaUniversity },
  { year: "2026", title: "Python", description: "120+ hours of Python learning (CampusX).", icon: FaPython },
  { year: "2026", title: "AI & Data Science", description: "Learning ML, AI & Data Science.", icon: FaBrain },
  { year: "Current", title: "Portfolio Development", description: "Building modern React & AI projects.", icon: FaLaptopCode },
];

const fadeUp = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0b0f14] py-16 lg:py-24 border-t border-[#171d27]">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">

        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="font-mono-ui text-sm text-[#f5a623] mb-3">
          # journey.log
        </motion.p>
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-[#e6edf3] mb-12">
          My learning timeline
        </motion.h2>

        <div className="relative border-l border-[#232b36] ml-5">
          {timeline.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="relative pl-9 pb-9 last:pb-0"
              >
                <div className="absolute -left-[19px] top-0.5 w-9 h-9 rounded-full bg-[#12171f] border border-[#f5a623]/40 flex items-center justify-center">
                  <Icon className="text-[#f5a623] text-xs" />
                </div>
                <div className="rounded-lg border border-[#232b36] bg-[#12171f] p-5 hover:border-[#f5a623]/40 transition-colors">
                  <p className="text-[#f5a623] font-mono-ui text-xs font-semibold">{item.year}</p>
                  <h3 className="mt-1.5 text-base font-bold text-[#e6edf3]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#8b98a5] leading-6">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
