import { motion } from "framer-motion";

const SIZE = 400;
const CENTER = SIZE / 2;
const MAX_RADIUS = 95;
const LEVELS = [0.2, 0.4, 0.6, 0.8, 1];

export default function RadarChart({ data }) {
  const angleStep = (Math.PI * 2) / data.length;

  const getPoint = (ratio, index) => {
    const angle = angleStep * index - Math.PI / 2;
    const r = ratio * MAX_RADIUS;
    return {
      x: CENTER + r * Math.cos(angle),
      y: CENTER + r * Math.sin(angle),
    };
  };

  const dataPoints = data
    .map((d, i) => {
      const p = getPoint(d.value / 100, i);
      return `${p.x},${p.y}`;
    })
    .join(" ");

  return (
    <div className="relative flex justify-center">
      <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="relative w-full max-w-[440px] overflow-visible">
        <defs>
          <radialGradient id="radarFill" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </radialGradient>
          <linearGradient id="radarStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid rings */}
        {LEVELS.map((level, li) => {
          const ringPoints = data
            .map((_, i) => {
              const p = getPoint(level, i);
              return `${p.x},${p.y}`;
            })
            .join(" ");
          return (
            <polygon
              key={li}
              points={ringPoints}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
          );
        })}

        {/* Axis lines */}
        {data.map((_, i) => {
          const p = getPoint(1, i);
          return (
            <line
              key={i}
              x1={CENTER}
              y1={CENTER}
              x2={p.x}
              y2={p.y}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data polygon */}
        <motion.polygon
          points={dataPoints}
          fill="url(#radarFill)"
          stroke="url(#radarStroke)"
          strokeWidth="2.5"
          filter="url(#glow)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
        />

        {/* Data points */}
        {data.map((d, i) => {
          const p = getPoint(d.value / 100, i);
          return (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="5"
              fill="#22d3ee"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: [0, 1.4, 1], opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
            />
          );
        })}

        {/* Labels — long labels wrap onto 2 lines, more margin so nothing clips */}
        {data.map((d, i) => {
          const p = getPoint(1.42, i);
          let anchor = "middle";
          if (p.x < CENTER - 15) anchor = "end";
          else if (p.x > CENTER + 15) anchor = "start";

          const words = d.label.split(" ");
          const isTwoLine = words.length > 1;

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
            >
              <text
                x={p.x}
                y={p.y - (isTwoLine ? 8 : 4)}
                textAnchor={anchor}
                fill="#e5e7eb"
                fontSize="12"
                fontWeight="700"
              >
                {words.map((w, wi) => (
                  <tspan key={wi} x={p.x} dy={wi === 0 ? 0 : 14}>
                    {w}
                  </tspan>
                ))}
              </text>
              <text
                x={p.x}
                y={p.y + (isTwoLine ? 24 : 12)}
                textAnchor={anchor}
                fill="#22d3ee"
                fontSize="11"
                fontWeight="600"
              >
                {d.value}%
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}