import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import GlowButton from "../ui/GlowButton";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#050816] px-6 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[8px]">Get In Touch</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">Contact Me</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project, internship opportunity, or just want to say hello?
            Feel free to contact me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 shadow-[0_0_30px_rgba(59,130,246,.15)]"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <h3 className="text-white font-semibold">abhirajyadav381@gmail.com</h3>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPhone className="text-cyan-400 text-2xl" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <h3 className="text-white font-semibold">+91 6206177844</h3>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <div>
                  <p className="text-gray-400">Location</p>
                  <h3 className="text-white font-semibold">Vaishali, Bihar, India</h3>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-12">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/10 border border-cyan-500 flex items-center justify-center text-white text-2xl hover:bg-cyan-500 transition">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/10 border border-cyan-500 flex items-center justify-center text-white text-2xl hover:bg-cyan-500 transition">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 shadow-[0_0_30px_rgba(59,130,246,.15)] space-y-6"
          >
            <input type="text" placeholder="Your Name" className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition-colors" />
            <input type="email" placeholder="Your Email" className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition-colors" />
            <textarea rows="6" placeholder="Your Message" className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition-colors" />

            <GlowButton type="submit" color="cyan" variant="solid" className="w-full">
              Send Message 🚀
            </GlowButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}