import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialSidebar() {
  const icons = [FaGithub, FaLinkedin, FaInstagram, FaTwitter];

  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50"
    >
      <div className="flex flex-col gap-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl p-4">

        {icons.map((Icon, i) => (
          <Icon
            key={i}
            className="text-2xl text-white hover:text-cyan-400 hover:scale-125 duration-300 cursor-pointer"
          />
        ))}

      </div>
    </motion.div>
  );
}