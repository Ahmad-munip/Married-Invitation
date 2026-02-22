import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import heroBg from "@/assets/hero-bg.jpg";

interface SplashScreenProps {
  isOpen: boolean;
  onOpen: () => void;
  guestName?: string;
}

const generateSparkles = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 4,
    duration: Math.random() * 2 + 1.5,
  }));

const generateSplashPetals = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 6,
    duration: Math.random() * 6 + 8,
    size: Math.random() * 10 + 8,
    opacity: Math.random() * 0.3 + 0.1,
  }));

const cornerPaths = [
  { d: "M0,60 Q0,0 60,0", transform: "", origin: "top left" },
  { d: "M0,0 Q60,0 60,60", transform: "translate(100%, 0) scale(-1, 1)", origin: "top right" },
  { d: "M0,0 Q0,60 60,60", transform: "translate(0, 100%) scale(1, -1)", origin: "bottom left" },
  { d: "M60,0 Q0,0 0,60", transform: "translate(100%, 100%) scale(-1, -1)", origin: "bottom right" },
];

// Floating diamond elements for splash
const splashDiamonds = [
  { left: "8%", top: "20%", size: 7, duration: 6, delay: 0.5 },
  { left: "88%", top: "30%", size: 5, duration: 7, delay: 1 },
  { left: "12%", top: "75%", size: 6, duration: 5, delay: 2 },
  { left: "82%", top: "70%", size: 8, duration: 8, delay: 0 },
  { left: "50%", top: "12%", size: 5, duration: 6, delay: 3 },
];

const SplashScreen = ({ isOpen, onOpen, guestName = "Bapak/Ibu/Saudara/i" }: SplashScreenProps) => {
  const sparkles = useMemo(() => generateSparkles(25), []);
  const petals = useMemo(() => generateSplashPetals(8), []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img src={heroBg} alt="Wedding background" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-background/65" />
          </div>

          {/* Batik pattern overlay */}
          <div className="batik-pattern" style={{ opacity: 0.04 }} />

          {/* Floating diamonds */}
          {splashDiamonds.map((d, i) => (
            <div
              key={`diamond-${i}`}
              className="absolute animate-float-diamond pointer-events-none"
              style={{
                left: d.left,
                top: d.top,
                width: d.size,
                height: d.size,
                background: "hsl(40 72% 52% / 0.2)",
                animationDuration: `${d.duration}s`,
                animationDelay: `${d.delay}s`,
              }}
            />
          ))}

          {/* Sparkle Particles */}
          {sparkles.map((s) => (
            <motion.div
              key={`sparkle-${s.id}`}
              className="absolute rounded-full"
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: s.size,
                height: s.size,
                background: `radial-gradient(circle, hsl(40 90% 65%), transparent)`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
              transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* Floating Petals */}
          {petals.map((p) => (
            <div
              key={`petal-${p.id}`}
              className="absolute animate-petal pointer-events-none"
              style={{
                left: `${p.left}%`,
                top: "-5%",
                width: p.size,
                height: p.size,
                borderRadius: "50% 0 50% 0",
                background: `hsl(40 72% 52% / ${p.opacity})`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}

          {/* Rotating Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-primary/10 animate-rotate-slow" />
            <div
              className="absolute w-[380px] h-[380px] md:w-[550px] md:h-[550px] rounded-full border border-primary/5 animate-rotate-slow"
              style={{ animationDirection: "reverse", animationDuration: "30s" }}
            />
          </div>

          {/* Light Sweep */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="animate-light-sweep absolute inset-0"
              style={{ background: "linear-gradient(105deg, transparent 40%, hsl(40 90% 65% / 0.06) 50%, transparent 60%)" }}
            />
          </div>

          {/* Corner Ornaments */}
          {cornerPaths.map((corner, i) => (
            <motion.svg
              key={`corner-${i}`}
              className="absolute w-16 h-16 md:w-24 md:h-24"
              viewBox="0 0 60 60"
              fill="none"
              style={{
                ...(i === 0 && { top: 16, left: 16 }),
                ...(i === 1 && { top: 16, right: 16 }),
                ...(i === 2 && { bottom: 16, left: 16 }),
                ...(i === 3 && { bottom: 16, right: 16 }),
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.8 }}
            >
              <path d={corner.d} stroke="hsl(40, 72%, 52%)" strokeWidth="1.5" strokeLinecap="round" />
              <path d={corner.d} stroke="hsl(40, 72%, 52%)" strokeWidth="1.5" strokeLinecap="round" transform="scale(0.6) translate(20, 20)" opacity="0.4" />
            </motion.svg>
          ))}

          {/* Content */}
          <motion.div
            className="relative z-10 text-center px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.p className="font-sans-elegant text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              The Wedding of
            </motion.p>

            <motion.h1
              className="font-script text-5xl md:text-7xl gradient-gold-text text-glow-gold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Munip & Risma
            </motion.h1>

            <div className="divider-gold w-40 mx-auto mb-8" />

            <motion.p className="font-serif text-lg text-foreground/80 mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
              Kepada Yth.
            </motion.p>
            <motion.p className="font-serif text-xl text-foreground mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
              {guestName}
            </motion.p>

            <motion.button
              onClick={onOpen}
              className="relative gradient-gold font-sans-elegant text-sm tracking-widest uppercase px-10 py-4 rounded-full text-primary-foreground animate-pulse-glow cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buka Undangan
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;