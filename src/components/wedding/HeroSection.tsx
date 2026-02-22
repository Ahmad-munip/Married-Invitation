import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import FloralFrame from "./FloralFrame";
import { MandalaRing } from "./FloralFrame";
import { SectionVine, LocalGoldDust } from "./SectionDecorations";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloralFrame positions={["top-left", "top-right", "bottom-left", "bottom-right"]} size="lg" />
      
      {/* Mandala behind names */}
      <MandalaRing size={350} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
      
      {/* Ambient glow */}
      <div className="ambient-glow" style={{ width: 400, height: 400, top: "20%", left: "-10%" }} />
      <div className="ambient-glow" style={{ width: 300, height: 300, bottom: "10%", right: "-5%" }} />
      
      {/* Section vines */}
      <SectionVine side="left" />
      <SectionVine side="right" />
      <LocalGoldDust count={10} />

      {/* Floating orbs */}
      {[
        { left: "10%", top: "30%", size: 18, delay: 0 },
        { left: "85%", top: "25%", size: 12, delay: 1.5 },
        { left: "70%", top: "65%", size: 15, delay: 3 },
        { left: "20%", top: "70%", size: 10, delay: 2 },
        { left: "50%", top: "15%", size: 14, delay: 4 },
      ].map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            background: "radial-gradient(circle, hsl(40 80% 60% / 0.4), transparent)",
            boxShadow: "0 0 15px hsl(40 72% 52% / 0.3)",
          }}
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5 + i, delay: orb.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Parallax Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Hero background" className="h-full w-full object-cover scale-110" style={{ transform: "scale(1.1)" }} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          className="font-sans-elegant text-xs tracking-[0.4em] uppercase text-primary/80 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          We Are Getting Married
        </motion.p>

        <motion.h1
          className="font-script text-6xl md:text-8xl lg:text-9xl gradient-gold-text text-glow-gold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Ahmad Munip
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-6 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="divider-gold w-20" />
          <span className="font-script text-3xl text-primary">&</span>
          <div className="divider-gold w-20" />
        </motion.div>

        <motion.h1
          className="font-script text-6xl md:text-8xl lg:text-9xl gradient-gold-text text-glow-gold mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Risma Mawlina
        </motion.h1>

        <motion.p
          className="font-serif text-lg md:text-xl text-foreground/70 tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          15 . 06 . 2026
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;