import { useState } from "react";
import { motion } from "framer-motion";

export default function GlowButton({
  children,
  variant = "solid", // "solid" | "outline"
  color = "cyan", // "cyan" | "violet"
  className = "",
  ...props
}) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const glowColor =
    color === "violet" ? "rgba(167,139,250,.55)" : "rgba(34,211,238,.55)";

  const base =
    variant === "solid"
      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
      : "bg-transparent border border-cyan-400/60 text-cyan-300";

  return (
    <motion.button
      onMouseMove={handleMove}
      whileHover={{ scale: 1.045 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={`relative overflow-hidden rounded-2xl px-8 py-4 font-semibold isolate group ${base} ${className}`}
      {...props}
    >
      {/* Cursor-follow spotlight */}
      <span
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(120px circle at ${pos.x}% ${pos.y}%, ${glowColor}, transparent 70%)`,
        }}
      />
      {/* Shine sweep on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}