import { motion } from "framer-motion";
import { useMemo } from "react";
import { SectionVine, LocalGoldDust } from "./SectionDecorations";
import { WEDDING_CONFIG } from "@/config/wedding";

interface SplashScreenProps {
  isOpen: boolean;
  onOpen: () => void;
  guestName?: string;
}

const generateSparkles = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i, left: Math.random() * 100, top: Math.random() * 100,
    size: Math.random() * 4 + 2, delay: Math.random() * 4, duration: Math.random() * 2 + 1.5,
  }));

const generateSplashPetals = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i, left: Math.random() * 100, delay: Math.random() * 6,
    duration: Math.random() * 6 + 8, size: Math.random() * 10 + 8, opacity: Math.random() * 0.5 + 0.3,
  }));

const cornerPaths = [
  { d: "M0,60 Q0,0 60,0", transform: "", origin: "top left" },
  { d: "M0,0 Q60,0 60,60", transform: "translate(100%, 0) scale(-1, 1)", origin: "top right" },
  { d: "M0,0 Q0,60 60,60", transform: "translate(0, 100%) scale(1, -1)", origin: "bottom left" },
  { d: "M60,0 Q0,0 0,60", transform: "translate(100%, 100%) scale(-1, -1)", origin: "bottom right" },
];

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
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
          {/* Image Background */}
          <div className="absolute inset-0">
            <img src="/bg.jpeg" alt="Wedding background" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[hsl(35_45%_18%_/_0.22)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/35" />
            <div className="absolute inset-x-0 top-[8%] mx-auto h-[64%] max-w-[560px] rounded-full bg-[radial-gradient(circle,rgba(255,250,238,0.72)_0%,rgba(255,250,238,0.44)_42%,rgba(255,250,238,0)_72%)] blur-sm" />
          </div>



          <div className="batik-pattern" style={{ opacity: 0.04 }} />

          <SectionVine side="left" className="!bottom-auto !top-0 rotate-180" />
          <SectionVine side="right" className="!bottom-auto !top-0 rotate-180" />
          <SectionVine side="left" />
          <SectionVine side="right" />
          <LocalGoldDust count={12} />

          {/* Floating diamonds */}
          {splashDiamonds.map((d, i) => (
            <div key={`diamond-${i}`} className="absolute animate-float-diamond pointer-events-none"
              style={{ left: d.left, top: d.top, width: d.size, height: d.size, background: "hsl(40 72% 52% / 0.5)", animationDuration: `${d.duration}s`, animationDelay: `${d.delay}s` }} />
          ))}

          {/* Sparkles */}
          {sparkles.map((s) => (
            <motion.div key={`sparkle-${s.id}`} className="absolute rounded-full"
              style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, background: `radial-gradient(circle, hsl(40 90% 65%), transparent)` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
              transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }} />
          ))}

          {/* Petals */}
          {petals.map((p) => (
            <div key={`petal-${p.id}`} className="absolute animate-petal pointer-events-none"
              style={{ left: `${p.left}%`, top: "-5%", width: p.size, height: p.size, borderRadius: "50% 0 50% 0", background: `hsl(40 72% 52% / ${p.opacity})`, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }} />
          ))}

          {/* Rotating Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-primary/40 animate-rotate-slow" />
            <div className="absolute w-[380px] h-[380px] md:w-[550px] md:h-[550px] rounded-full border border-primary/20 animate-rotate-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
          </div>

          {/* Light Sweep */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="animate-light-sweep absolute inset-0" style={{ background: "linear-gradient(105deg, transparent 40%, hsl(40 90% 65% / 0.2) 50%, transparent 60%)" }} />
          </div>

          {/* Corner Ornaments */}
          {cornerPaths.map((corner, i) => (
            <motion.svg key={`corner-${i}`} className="absolute w-16 h-16 md:w-24 md:h-24" viewBox="0 0 60 60" fill="none"
              style={{
                ...(i === 0 && { top: 16, left: 16 }), ...(i === 1 && { top: 16, right: 16 }),
                ...(i === 2 && { bottom: 16, left: 16 }), ...(i === 3 && { bottom: 16, right: 16 }),
              }}
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.9, scale: 1 }} transition={{ delay: 0.4 + i * 0.2, duration: 0.8 }}>
              <path d={corner.d} stroke="hsl(40, 72%, 52%)" strokeWidth="1.5" strokeLinecap="round" />
              <path d={corner.d} stroke="hsl(40, 72%, 52%)" strokeWidth="1.5" strokeLinecap="round" transform="scale(0.6) translate(20, 20)" opacity="0.7" />
            </motion.svg>
          ))}

          {/* Content */}
          <motion.div
            className="relative z-10 w-full max-w-[520px] px-5 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative mx-auto rounded-[2rem] border border-[hsl(39_62%_55%_/_0.34)] bg-[linear-gradient(180deg,rgba(255,252,244,0.68),rgba(244,234,212,0.38))] px-4 pb-7 pt-7 shadow-[0_22px_70px_rgba(58,39,18,0.30),inset_0_0_34px_rgba(255,255,255,0.56)] backdrop-blur-[3px] sm:px-8">
              <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] border border-white/45" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(40_80%_58%_/_0.7)] to-transparent" />
              <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[hsl(40_80%_58%_/_0.55)] to-transparent" />
              <div className="pointer-events-none absolute -left-2 top-1/2 h-20 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[hsl(40_80%_58%_/_0.55)] to-transparent" />
              <div className="pointer-events-none absolute -right-2 top-1/2 h-20 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[hsl(40_80%_58%_/_0.55)] to-transparent" />

            <motion.p className="relative font-sans-elegant text-sm tracking-[0.3em] uppercase mb-3 font-bold" 
              style={{ 
                color: "hsl(30, 45%, 26%)",
                textShadow: "0 1px 0 #ffffff, 0 2px 8px rgba(255,255,255,0.82)",
                letterSpacing: "0.3em"
              }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              The Wedding of
            </motion.p>

            <motion.h1 className="font-script text-6xl md:text-8xl mb-5 relative z-10 leading-tight"
              style={{ 
                background: "linear-gradient(135deg, hsl(28, 60%, 16%) 0%, hsl(32, 58%, 30%) 48%, hsl(38, 78%, 42%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingRight: "0.15em",
                filter: "drop-shadow(0 1px 0 rgba(255,255,255,0.95)) drop-shadow(0 4px 10px rgba(72,43,16,0.28))"
              }}
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
              {WEDDING_CONFIG.bride.shortName} <br />
              <span className="font-script text-4xl md:text-5xl block my-1 italic opacity-85"
                style={{ 
                  background: "linear-gradient(135deg, hsl(30, 60%, 18%) 0%, hsl(32, 55%, 32%) 50%, hsl(38, 70%, 45%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {"&"}
              </span>
              {WEDDING_CONFIG.groom.shortName}
            </motion.h1>

            <div className="divider-gold w-40 mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </div>

            <motion.div 
              className="my-8 mx-auto p-6 rounded-2xl border border-[hsl(38_55%_52%_/_0.45)] max-w-[280px] sm:max-w-[320px] relative overflow-hidden"
              style={{ 
                background: "linear-gradient(135deg, rgba(255, 253, 247, 0.92) 0%, rgba(244, 235, 215, 0.86) 100%)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 18px 45px rgba(66, 42, 18, 0.22), inset 0 0 18px rgba(255, 255, 255, 0.75)"
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {/* Subtle gold corner ornaments inside the box */}
              <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[hsl(38_55%_52%_/_0.4)] rounded-tl" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[hsl(38_55%_52%_/_0.4)] rounded-tr" />
              <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[hsl(38_55%_52%_/_0.4)] rounded-bl" />
              <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[hsl(38_55%_52%_/_0.4)] rounded-br" />

              <p className="font-sans-elegant text-[10px] tracking-[0.25em] uppercase text-[hsl(30_30%_35%)] mb-2 font-medium">
                Kepada Yth.
              </p>
              
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[hsl(38_55%_52%_/_0.3)] to-transparent mx-auto mb-3" />

              <p className="font-serif text-lg sm:text-xl text-[hsl(30_40%_20%)] font-bold tracking-wide">
                {guestName}
              </p>
            </motion.div>

            <motion.button
              onClick={onOpen}
              className="relative gradient-gold font-sans-elegant text-sm tracking-widest uppercase px-10 py-4 rounded-full text-primary-foreground animate-pulse-glow cursor-pointer"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Buka Undangan
            </motion.button>
          </motion.div>
    </div>
  );
};

export default SplashScreen;
