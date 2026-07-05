import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    link: "https://github.com/abhiraj2189",
  },
  {
    icon: FaLinkedin,
    link: "https://linkedin.com",
  },
  {
    icon: FaInstagram,
    link: "https://instagram.com",
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com",
  },
];

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.6,
      }}
      className="
      hidden
      lg:flex
      flex-col
      gap-5
      absolute
      left-0
      top-1/2
      -translate-y-1/2
      -translate-x-16
      z-50
    "
    >
      {socials.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.15,
              rotate: 8,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="
            w-14
            h-14
            rounded-2xl
            bg-white/5
            backdrop-blur-sm lg:backdrop-blur-xl
            border
            border-white/10
            flex
            items-center
            justify-center
            text-white
            text-2xl
            hover:text-cyan-400
            hover:border-cyan-400/50
            hover:shadow-[0_0_25px_rgba(0,229,255,0.45)]
            duration-300
          "
          >
            <Icon />
          </motion.a>
        );
      })}
    </motion.div>
  );
}