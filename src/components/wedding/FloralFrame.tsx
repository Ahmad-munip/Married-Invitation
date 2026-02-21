import { motion } from "framer-motion";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface FloralFrameProps {
  positions?: Position[];
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { w: 60, h: 60 },
  md: { w: 100, h: 100 },
  lg: { w: 140, h: 140 },
};

const positionClasses: Record<Position, string> = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};

const rotationMap: Record<Position, number> = {
  "top-left": 0,
  "top-right": 90,
  "bottom-left": -90,
  "bottom-right": 180,
};

// SVG ornament: a vine/leaf corner piece drawn for top-left, rotated for others
const VineCorner = ({ size, position, delay }: { size: "sm" | "md" | "lg"; position: Position; delay: number }) => {
  const { w, h } = sizeMap[size];
  const rotation = rotationMap[position];

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} pointer-events-none z-10`}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
    >
      <svg
        width={w}
        height={h}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `rotate(${rotation}deg)` }}
        className="md:scale-100 scale-75 origin-top-left"
      >
        {/* Main vine curve */}
        <motion.path
          d="M5 5 Q5 40 20 60 Q35 80 60 90 Q80 98 110 105"
          stroke="hsl(40 72% 52%)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: delay + 0.3, ease: "easeInOut" }}
        />
        {/* Secondary branch */}
        <motion.path
          d="M5 5 Q15 15 18 35 Q20 50 30 65"
          stroke="hsl(40 72% 52%)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.25"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: delay + 0.6, ease: "easeInOut" }}
        />
        {/* Leaf 1 */}
        <motion.path
          d="M18 35 Q25 28 30 35 Q25 42 18 35Z"
          fill="hsl(40 72% 52%)"
          opacity="0.2"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 1 }}
        />
        {/* Leaf 2 */}
        <motion.path
          d="M40 72 Q50 62 55 72 Q50 82 40 72Z"
          fill="hsl(40 72% 52%)"
          opacity="0.2"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 1.2 }}
        />
        {/* Leaf 3 */}
        <motion.path
          d="M70 88 Q78 80 84 88 Q78 96 70 88Z"
          fill="hsl(40 72% 52%)"
          opacity="0.15"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 1.4 }}
        />
        {/* Small bud/circle accents */}
        <circle cx="60" cy="90" r="2" fill="hsl(40 90% 65%)" opacity="0.3" />
        <circle cx="30" cy="65" r="1.5" fill="hsl(40 90% 65%)" opacity="0.25" />
        <circle cx="90" cy="100" r="1.8" fill="hsl(40 90% 65%)" opacity="0.2" />
      </svg>
    </motion.div>
  );
};

const FloralFrame = ({ positions = ["top-left", "top-right", "bottom-left", "bottom-right"], size = "md", className = "" }: FloralFrameProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {positions.map((pos, i) => (
        <VineCorner key={pos} size={size} position={pos} delay={i * 0.15} />
      ))}
    </div>
  );
};

// Floral divider component
export const FloralDivider = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`flex items-center justify-center gap-0 my-2 ${className}`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <svg width="160" height="24" viewBox="0 0 160 24" fill="none" className="w-40 md:w-48">
      {/* Left vine */}
      <motion.path
        d="M0 12 Q20 12 35 8 Q50 4 60 12"
        stroke="hsl(40 72% 52%)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      {/* Center flower */}
      <motion.path
        d="M72 12 Q76 6 80 4 Q84 6 88 12 Q84 18 80 20 Q76 18 72 12Z"
        fill="hsl(40 72% 52%)"
        opacity="0.3"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
      <circle cx="80" cy="12" r="2" fill="hsl(40 90% 65%)" opacity="0.5" />
      {/* Left leaf */}
      <path d="M45 8 Q50 3 55 8 Q50 13 45 8Z" fill="hsl(40 72% 52%)" opacity="0.2" />
      {/* Right vine */}
      <motion.path
        d="M160 12 Q140 12 125 8 Q110 4 100 12"
        stroke="hsl(40 72% 52%)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      {/* Right leaf */}
      <path d="M105 8 Q110 3 115 8 Q110 13 105 8Z" fill="hsl(40 72% 52%)" opacity="0.2" />
    </svg>
  </motion.div>
);

export default FloralFrame;
