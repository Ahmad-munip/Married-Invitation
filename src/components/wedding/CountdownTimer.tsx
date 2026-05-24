import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionVine, LocalGoldDust } from "./SectionDecorations";
import { Heart, Sparkles } from "lucide-react";
import { WEDDING_CONFIG } from "@/config/wedding";

const TARGET_DATE = new Date(`${WEDDING_CONFIG.dates.isoDate}T07:00:00+07:00`).getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const hexPattern = `url("data:image/svg+xml,%3Csvg width='56' height='100' viewBox='0 0 56 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66' fill='none' stroke='%23b89a5a' stroke-width='0.4' opacity='0.12'/%3E%3Cpath d='M28 100L0 84L0 50L28 34L56 50L56 84L28 100' fill='none' stroke='%23b89a5a' stroke-width='0.4' opacity='0.12'/%3E%3C/svg%3E")`;

/* ─── Gold L-bracket corner ─── */
const GoldCorner = ({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const t: Record<string, string> = {
    "top-left": "", "top-right": "scaleX(-1)",
    "bottom-left": "scaleY(-1)", "bottom-right": "scale(-1,-1)",
  };
  const p: Record<string, string> = {
    "top-left": "top-1 left-1", "top-right": "top-1 right-1",
    "bottom-left": "bottom-1 left-1", "bottom-right": "bottom-1 right-1",
  };
  return (
    <svg className={`absolute ${p[position]} w-5 h-5 pointer-events-none`} viewBox="0 0 20 20" style={{ transform: t[position] }}>
      <path d="M1,1 L1,10" stroke="hsl(38 55% 52%)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M1,1 L10,1" stroke="hsl(38 55% 52%)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="1" cy="1" r="1" fill="hsl(38 55% 52% / 0.5)" />
    </svg>
  );
};

/* ─── Ornate corner for main card ─── */
const OrnateCorner = ({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const t: Record<string, string> = {
    "top-left": "", "top-right": "scaleX(-1)",
    "bottom-left": "scaleY(-1)", "bottom-right": "scale(-1,-1)",
  };
  const p: Record<string, string> = {
    "top-left": "top-2 left-2", "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2", "bottom-right": "bottom-2 right-2",
  };
  return (
    <svg className={`absolute ${p[position]} w-14 h-14 pointer-events-none`} viewBox="0 0 56 56" style={{ transform: t[position] }}>
      <path d="M3,3 L3,22" stroke="hsl(38 55% 52%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M3,3 L22,3" stroke="hsl(38 55% 52%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M6,6 L6,16" stroke="hsl(38 55% 52% / 0.35)" strokeWidth="0.6" fill="none" />
      <path d="M6,6 L16,6" stroke="hsl(38 55% 52% / 0.35)" strokeWidth="0.6" fill="none" />
      <path d="M3,22 C3,28 7,33 14,31 C9,31 5,28 5,22" stroke="hsl(38 55% 52% / 0.4)" strokeWidth="0.7" fill="hsl(38 55% 52% / 0.05)" />
      <path d="M22,3 C28,3 33,7 31,14 C31,9 28,5 22,5" stroke="hsl(38 55% 52% / 0.4)" strokeWidth="0.7" fill="hsl(38 55% 52% / 0.05)" />
      <ellipse cx="18" cy="9" rx="5" ry="2" fill="hsl(38 55% 52% / 0.06)" stroke="hsl(38 55% 52% / 0.15)" strokeWidth="0.3" transform="rotate(25 18 9)" />
      <ellipse cx="9" cy="18" rx="2" ry="5" fill="hsl(38 55% 52% / 0.06)" stroke="hsl(38 55% 52% / 0.15)" strokeWidth="0.3" transform="rotate(-25 9 18)" />
      <circle cx="3" cy="3" r="1.8" fill="hsl(38 55% 52% / 0.5)" />
      <circle cx="12" cy="12" r="1" fill="hsl(38 55% 52% / 0.18)" />
      <circle cx="22" cy="3" r="0.7" fill="hsl(38 55% 52% / 0.25)" />
      <circle cx="3" cy="22" r="0.7" fill="hsl(38 55% 52% / 0.25)" />
    </svg>
  );
};

/* ─── Flip digit box ─── */
const FlipDigit = ({ value, label, index }: { value: number; label: string; index: number }) => {
  const prevValue = useRef(value);
  const changed = prevValue.current !== value;
  prevValue.current = value;
  const display = String(value).padStart(2, "0");

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center w-[72px] sm:w-20 h-24 sm:h-28 md:w-28 md:h-36"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 0.3 }}
    >
      {/* Digit card with matching beige style */}
      <div
        className="rounded-2xl p-[3px] relative w-full h-full"
        style={{
          background: "linear-gradient(145deg, hsl(38 50% 80%), hsl(35 40% 74%))",
          boxShadow: "0 4px 16px hsl(30 30% 25% / 0.1), 0 1px 4px hsl(30 30% 25% / 0.06)",
        }}
      >
        <div
          className="rounded-[13px] w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{
            background: "linear-gradient(170deg, hsl(38 45% 90%) 0%, hsl(35 40% 86%) 50%, hsl(33 38% 83%) 100%)",
          }}
        >
          {/* Hex pattern */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: hexPattern, backgroundSize: "28px 50px" }} />

          {/* Inner border */}
          <div className="absolute inset-2 rounded-lg border border-[hsl(38_55%_52%_/_0.15)] pointer-events-none" />

          {/* Small corner ornaments */}
          <GoldCorner position="top-left" />
          <GoldCorner position="top-right" />
          <GoldCorner position="bottom-left" />
          <GoldCorner position="bottom-right" />

          {/* Pulse on change */}
          <AnimatePresence>
            {changed && (
              <motion.div
                className="absolute inset-0 rounded-[13px] pointer-events-none"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                style={{ boxShadow: "inset 0 0 25px hsl(38 55% 52% / 0.3)" }}
              />
            )}
          </AnimatePresence>

          {/* Number */}
          <div className="relative" style={{ perspective: "200px" }}>
            <AnimatePresence mode="popLayout">
              <motion.div
                key={value}
                className="font-script text-3xl md:text-5xl"
                style={{ color: "hsl(38 55% 45%)" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {display}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Label */}
          <div className="font-sans-elegant text-[9px] md:text-[10px] tracking-[0.2em] uppercase mt-1"
            style={{ color: "hsl(30 35% 35%)" }}>
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET_DATE - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden z-10">
      <div className="absolute inset-0 z-[-2]">
        <img src="/bg.jpeg" alt="Background" className="w-full h-full object-cover opacity-80" />
      </div>
      <div className="absolute inset-0 bg-background/60 z-[-1]" />
      <SectionVine side="left" />
      <SectionVine side="right" />
      <LocalGoldDust count={6} />

      {/* Floating ornaments */}
      {[
        { left: "8%", top: "15%", type: "heart" },
        { left: "90%", top: "20%", type: "sparkle" },
        { left: "12%", top: "80%", type: "sparkle" },
        { left: "85%", top: "75%", type: "heart" },
      ].map((item, i) => (
        <div key={i} className="absolute pointer-events-none animate-mini-float"
          style={{ left: item.left, top: item.top, animationDelay: `${i * 0.8}s` }}>
          {item.type === "heart"
            ? <Heart className="text-[hsl(38_55%_52%)] opacity-15 w-2 h-2" fill="currentColor" />
            : <Sparkles className="text-[hsl(38_55%_52%)] opacity-15 w-2 h-2" />}
        </div>
      ))}

      <div className="max-w-lg mx-auto">
        {/* Wrapped in matching ornate card */}
        <div
          className="rounded-3xl p-1 relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, hsl(38 50% 82%), hsl(35 40% 76%))",
            boxShadow: "0 8px 32px hsl(30 30% 25% / 0.12), 0 2px 8px hsl(30 30% 25% / 0.06)",
          }}
        >
          <div
            className="rounded-[20px] relative overflow-hidden py-12 px-6"
            style={{
              background: "linear-gradient(170deg, hsl(38 45% 90%) 0%, hsl(35 40% 86%) 50%, hsl(33 38% 83%) 100%)",
            }}
          >
            {/* Hex pattern */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: hexPattern, backgroundSize: "56px 100px" }} />

            {/* Radial glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 40%, hsl(40 60% 85% / 0.5), transparent 70%)" }} />

            {/* Double border */}
            <div className="absolute inset-4 rounded-2xl border border-[hsl(38_55%_52%_/_0.18)] pointer-events-none" />
            <div className="absolute inset-6 rounded-xl border border-dashed border-[hsl(38_55%_52%_/_0.08)] pointer-events-none" />

            {/* Ornate corners */}
            <OrnateCorner position="top-left" />
            <OrnateCorner position="top-right" />
            <OrnateCorner position="bottom-left" />
            <OrnateCorner position="bottom-right" />

            {/* Dotted arcs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <svg className="absolute w-full h-full" viewBox="0 0 300 250" preserveAspectRatio="none">
                <path d="M-20,40 Q150,10 320,40" fill="none" stroke="hsl(38 55% 52% / 0.07)" strokeWidth="1" strokeDasharray="3 6" />
                <path d="M-20,210 Q150,240 320,210" fill="none" stroke="hsl(38 55% 52% / 0.07)" strokeWidth="1" strokeDasharray="3 6" />
              </svg>
            </div>

            {/* Swag garland bottom */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
              <svg width="100%" height="24" viewBox="0 0 300 24" preserveAspectRatio="none">
                <path d="M0,4 Q37.5,18 75,4 Q112.5,18 150,4 Q187.5,18 225,4 Q262.5,18 300,4" fill="none" stroke="hsl(38 55% 52% / 0.12)" strokeWidth="0.7" />
                {[37.5, 112.5, 187.5, 262.5].map((x) => (
                  <g key={x}>
                    <line x1={x} y1="18" x2={x} y2="22" stroke="hsl(38 55% 52% / 0.1)" strokeWidth="0.4" />
                    <circle cx={x} cy="22" r="1.2" fill="hsl(38 55% 52% / 0.12)" />
                  </g>
                ))}
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Rosette */}
              <div className="flex justify-center mb-3 pointer-events-none">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="17" fill="none" stroke="hsl(38 55% 52% / 0.1)" strokeWidth="0.5" />
                  <circle cx="20" cy="20" r="13" fill="none" stroke="hsl(38 55% 52% / 0.08)" strokeWidth="0.4" strokeDasharray="2 3" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                    <line key={a} x1="20" y1="20"
                      x2={20 + 11 * Math.cos((a * Math.PI) / 180)}
                      y2={20 + 11 * Math.sin((a * Math.PI) / 180)}
                      stroke="hsl(38 55% 52% / 0.06)" strokeWidth="0.4" />
                  ))}
                  <circle cx="20" cy="20" r="4" fill="hsl(38 55% 52% / 0.05)" stroke="hsl(38 55% 52% / 0.12)" strokeWidth="0.4" />
                  <circle cx="20" cy="20" r="1.5" fill="hsl(38 55% 52% / 0.18)" />
                </svg>
              </div>

              {/* Badge */}
              <motion.div className="flex justify-center mb-4"
                initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}>
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full"
                  style={{ border: "1px solid hsl(38 55% 52% / 0.25)", background: "hsl(38 50% 85% / 0.5)" }}>
                  <span className="text-[hsl(38_55%_52%)] text-xs">✧</span>
                  <span className="font-sans-elegant text-[9px] tracking-[0.25em] uppercase text-[hsl(30_40%_30%)]">Counting Down To</span>
                  <span className="text-[hsl(38_55%_52%)] text-xs">✧</span>
                </div>
              </motion.div>

              {/* Filigree */}
              <div className="flex items-center justify-center gap-2 mb-2 pointer-events-none">
                <div className="h-px w-14 bg-gradient-to-r from-transparent to-[hsl(38_55%_52%_/_0.3)]" />
                <svg width="24" height="8" viewBox="0 0 24 8">
                  <path d="M0,4 Q6,0 12,4 Q18,8 24,4" stroke="hsl(38 55% 52% / 0.3)" strokeWidth="0.6" fill="none" />
                  <circle cx="12" cy="4" r="1" fill="hsl(38 55% 52% / 0.25)" />
                </svg>
                <div className="h-px w-14 bg-gradient-to-l from-transparent to-[hsl(38_55%_52%_/_0.3)]" />
              </div>

              {/* Title */}
              <motion.h2
                className="font-script text-4xl md:text-5xl mb-2"
                style={{ color: "hsl(30 40% 22%)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Hari Bahagia
              </motion.h2>

              {/* Filigree under title */}
              <div className="flex items-center justify-center gap-2 mb-8 pointer-events-none">
                <div className="h-px w-14 bg-gradient-to-r from-transparent to-[hsl(38_55%_52%_/_0.3)]" />
                <svg width="24" height="8" viewBox="0 0 24 8">
                  <path d="M0,4 Q6,0 12,4 Q18,8 24,4" stroke="hsl(38 55% 52% / 0.3)" strokeWidth="0.6" fill="none" />
                  <circle cx="12" cy="4" r="1" fill="hsl(38 55% 52% / 0.25)" />
                </svg>
                <div className="h-px w-14 bg-gradient-to-l from-transparent to-[hsl(38_55%_52%_/_0.3)]" />
              </div>

              {/* Countdown digits */}
              <div className="flex justify-center gap-2 sm:gap-3 md:gap-6">
                {units.map((unit, index) => (
                  <FlipDigit key={unit.label} value={unit.value} label={unit.label} index={index} />
                ))}
              </div>

              {/* Bottom ornament */}
              <div className="mt-8 flex justify-center pointer-events-none">
                <svg width="140" height="16" viewBox="0 0 140 16">
                  <path d="M0,8 Q17.5,1 35,8 Q52.5,15 70,8 Q87.5,1 105,8 Q122.5,15 140,8" stroke="hsl(38 55% 52% / 0.2)" strokeWidth="0.6" fill="none" />
                  <circle cx="70" cy="8" r="2" fill="hsl(38 55% 52% / 0.18)" stroke="hsl(38 55% 52% / 0.25)" strokeWidth="0.4" />
                  <circle cx="35" cy="8" r="0.8" fill="hsl(38 55% 52% / 0.12)" />
                  <circle cx="105" cy="8" r="0.8" fill="hsl(38 55% 52% / 0.12)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
