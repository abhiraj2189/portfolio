import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0b0f14] py-16 lg:py-24 border-t border-[#171d27]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="font-mono-ui text-sm text-[#f5a623] mb-3">
          # get-in-touch
        </motion.p>
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-[#e6edf3] mb-4">
          Let's work together
        </motion.h2>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-[#8b98a5] max-w-xl mb-12">
          Have a project, internship opportunity, or just want to say hello? Feel free to reach out.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-xl border border-[#232b36] bg-[#12171f] p-7"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#f5a623] text-lg" />
                <div>
                  <p className="text-[#5a6472] text-xs">Email</p>
                  <a href="mailto:abhirajyadav381@gmail.com" className="text-[#e6edf3] font-medium hover:text-[#f5a623] transition-colors">
                    abhirajyadav381@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-[#f5a623] text-lg" />
                <div>
                  <p className="text-[#5a6472] text-xs">Phone</p>
                  <a href="tel:+916206177844" className="text-[#e6edf3] font-medium hover:text-[#f5a623] transition-colors">
                    +91 6206177844
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#f5a623] text-lg" />
                <div>
                  <p className="text-[#5a6472] text-xs">Location</p>
                  <p className="text-[#e6edf3] font-medium">Vaishali, Bihar, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <a href="https://github.com/abhiraj2189" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-[#232b36] flex items-center justify-center text-[#e6edf3] hover:border-[#f5a623]/50 hover:text-[#f5a623] transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-[#232b36] flex items-center justify-center text-[#e6edf3] hover:border-[#f5a623]/50 hover:text-[#f5a623] transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            action="mailto:abhirajyadav381@gmail.com"
            method="post"
            encType="text/plain"
            className="rounded-xl border border-[#232b36] bg-[#12171f] p-7 space-y-4"
          >
            <input type="text" name="name" placeholder="Your Name" required className="w-full bg-[#0b0f14] border border-[#232b36] rounded-md px-4 py-3 text-[#e6edf3] text-sm outline-none focus:border-[#f5a623] transition-colors" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full bg-[#0b0f14] border border-[#232b36] rounded-md px-4 py-3 text-[#e6edf3] text-sm outline-none focus:border-[#f5a623] transition-colors" />
            <textarea name="message" rows="5" placeholder="Your Message" required className="w-full bg-[#0b0f14] border border-[#232b36] rounded-md px-4 py-3 text-[#e6edf3] text-sm outline-none focus:border-[#f5a623] transition-colors" />
            <button type="submit" className="w-full py-3 rounded-md bg-[#f5a623] text-[#0b0f14] font-semibold text-sm hover:bg-[#ffb84d] transition-colors">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
