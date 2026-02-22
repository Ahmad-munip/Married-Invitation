import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionVine, LocalGoldDust } from "./SectionDecorations";

const TARGET_DATE = new Date("2026-06-15T08:00:00+07:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

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
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="ambient-glow-warm" style={{ width: 350, height: 350, top: "-10%", left: "50%", transform: "translateX(-50%)" }} />
      <div className="batik-pattern-local" />
      <SectionVine side="left" />
      <SectionVine side="right" />
      <LocalGoldDust count={6} />
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-primary/70 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Counting Down To
        </motion.p>
        <motion.h2
          className="font-script text-5xl gradient-gold-text mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Hari Bahagia
        </motion.h2>

        <div className="flex justify-center gap-4 md:gap-8">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              className="glass-strong rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[100px] glow-gold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="font-serif text-3xl md:text-5xl font-bold gradient-gold-text mb-1">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="font-sans-elegant text-[10px] md:text-xs tracking-widest uppercase text-muted-foreground">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
