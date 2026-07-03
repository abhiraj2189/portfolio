import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { icon: FaGithub, href: "https://github.com/", color: "#ffffff", hoverBg: "#ffffff", hoverText: "#0d1117" },
  { icon: FaLinkedin, href: "https://linkedin.com/", color: "#0A66C2", hoverBg: "#0A66C2", hoverText: "#ffffff" },
  { icon: FaInstagram, href: "https://instagram.com/", color: "#E1306C", hoverBg: "#E1306C", hoverText: "#ffffff" },
  { icon: FaTwitter, href: "https://twitter.com/", color: "#1DA1F2", hoverBg: "#1DA1F2", hoverText: "#ffffff" },
];

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3, duration: 0.8 }}
      className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-5 md:mt-10"
    >
      {socials.map((s, i) => (
        <motion.a
          key={i}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.18, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl flex items-center justify-center text-xl sm:text-3xl md:text-5xl transition-colors duration-300"
          style={{ color: s.color }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = s.hoverBg;
            e.currentTarget.style.color = s.hoverText;
            e.currentTarget.style.boxShadow = `0 0 35px ${s.hoverBg}90`;
            e.currentTarget.style.borderColor = s.hoverBg;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "";
            e.currentTarget.style.color = s.color;
            e.currentTarget.style.boxShadow = "";
            e.currentTarget.style.borderColor = "";
          }}
        >
          <s.icon />
        </motion.a>
      ))}
    </motion.div>
  );
}